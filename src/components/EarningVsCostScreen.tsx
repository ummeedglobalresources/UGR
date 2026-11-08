import React, { useState, useMemo } from 'react';
import { CORRIDORS_DATA, ROLE_BENCHMARKS, EXPERIENCE_MULTIPLIERS } from '../data/corridorData.ts';
import { CorridorLivingData, CorridorComparisonResult, ScreenType } from '../types.ts';
import {
  Calculator,
  ArrowRight,
  HelpCircle,
  PiggyBank,
  Receipt,
  Home,
  CheckCircle2,
  AlertCircle,
  Building,
  GraduationCap,
  Globe2,
  Sliders,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

interface EarningVsCostScreenProps {
  onNavigateToJobsWithCountry: (countryName: string) => void;
  onOpenConsultationModal: () => void;
}

type HousingMode = 'free_company' | 'shared_room' | 'family_flat';

export const EarningVsCostScreen: React.FC<EarningVsCostScreenProps> = ({
  onNavigateToJobsWithCountry,
  onOpenConsultationModal,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('pipe_welder');
  const [selectedExpId, setSelectedExpId] = useState<string>('mid');
  const [housingMode, setHousingMode] = useState<HousingMode>('free_company');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('All');
  const [salaryMultiplierPercent, setSalaryMultiplierPercent] = useState<number>(100); // 100% of benchmark
  const [focusedCorridorId, setFocusedCorridorId] = useState<string | null>(null);

  // Active Role and Experience Multiplier
  const activeRole = useMemo(() => {
    return ROLE_BENCHMARKS.find((r) => r.id === selectedRoleId) || ROLE_BENCHMARKS[0];
  }, [selectedRoleId]);

  const activeExp = useMemo(() => {
    return EXPERIENCE_MULTIPLIERS.find((e) => e.id === selectedExpId) || EXPERIENCE_MULTIPLIERS[1];
  }, [selectedExpId]);

  // Compute calculated metrics for all corridors
  const corridorResults: CorridorComparisonResult[] = useMemo(() => {
    return CORRIDORS_DATA.map((corridor) => {
      const baseMonthlyGross = activeRole.baseSalariesByCorridor[corridor.corridorId] || 3000;
      // Adjust by experience multiplier and user slider
      const adjustedMonthlyGross = Math.round(
        baseMonthlyGross * activeExp.multiplier * (salaryMultiplierPercent / 100)
      );

      // Taxes & Deductions
      const incomeTax = Math.round(adjustedMonthlyGross * (corridor.incomeTaxRate / 100));
      const socialSecurity = Math.round(adjustedMonthlyGross * (corridor.socialSecurityRate / 100));
      const netTakeHome = adjustedMonthlyGross - incomeTax - socialSecurity;

      // Housing Expense based on selection
      let rentCost = 0;
      let utilitiesCost = 0;

      if (housingMode === 'free_company') {
        if (corridor.gulfFreeAccommodationCommon) {
          rentCost = 0;
          utilitiesCost = 0; // Employer covers bed + AC + water/electric
        } else {
          // In EU/Singapore, employer typically doesn't provide free housing, fall back to shared room
          rentCost = corridor.baseMonthlyLivingCosts.singleSharedRoom;
          utilitiesCost = corridor.baseMonthlyLivingCosts.utilitiesAndInternet;
        }
      } else if (housingMode === 'shared_room') {
        rentCost = corridor.baseMonthlyLivingCosts.singleSharedRoom;
        utilitiesCost = corridor.baseMonthlyLivingCosts.utilitiesAndInternet;
      } else if (housingMode === 'family_flat') {
        rentCost = corridor.baseMonthlyLivingCosts.oneBedApartment;
        utilitiesCost = Math.round(corridor.baseMonthlyLivingCosts.utilitiesAndInternet * 1.5);
      }

      // Other living costs (food, transit, personal)
      const foodCost = corridor.baseMonthlyLivingCosts.groceriesAndFood;
      const transitCost = corridor.baseMonthlyLivingCosts.localTransit;
      const miscCost = corridor.baseMonthlyLivingCosts.miscHealthcarePersonal;

      const livingExpenses = foodCost + transitCost + miscCost;
      const totalMonthlyCost = rentCost + utilitiesCost + livingExpenses;

      const estimatedNetSavingsLocal = Math.max(0, netTakeHome - totalMonthlyCost);

      // Convert to INR
      const grossSalaryINR = Math.round(adjustedMonthlyGross * corridor.fxRateToINR);
      const netTakeHomeINR = Math.round(netTakeHome * corridor.fxRateToINR);
      const totalMonthlyCostINR = Math.round(totalMonthlyCost * corridor.fxRateToINR);
      const estimatedNetSavingsMonthlyINR = Math.round(estimatedNetSavingsLocal * corridor.fxRateToINR);
      const estimatedNetSavingsAnnualINR = estimatedNetSavingsMonthlyINR * 12;

      const savingsRatePercentage = adjustedMonthlyGross > 0
        ? Math.round((estimatedNetSavingsLocal / adjustedMonthlyGross) * 100)
        : 0;

      return {
        corridor,
        grossSalaryLocal: adjustedMonthlyGross,
        grossSalaryINR,
        incomeTaxLocal: incomeTax,
        socialSecurityLocal: socialSecurity,
        netTakeHomeLocal: netTakeHome,
        netTakeHomeINR,
        housingCostLocal: rentCost + utilitiesCost,
        livingExpensesLocal: livingExpenses,
        totalMonthlyCostLocal: totalMonthlyCost,
        totalMonthlyCostINR,
        estimatedNetSavingsMonthlyLocal: estimatedNetSavingsLocal,
        estimatedNetSavingsMonthlyINR,
        estimatedNetSavingsAnnualINR,
        savingsRatePercentage,
        repatriationValueINR: estimatedNetSavingsMonthlyINR,
      };
    });
  }, [activeRole, activeExp, housingMode, salaryMultiplierPercent]);

  // Filter corridors by region if selected
  const filteredCorridors = useMemo(() => {
    if (selectedRegionFilter === 'All') return corridorResults;
    return corridorResults.filter((r) => r.corridor.region === selectedRegionFilter);
  }, [corridorResults, selectedRegionFilter]);

  // Find top saving corridor
  const topSavingCorridor = useMemo(() => {
    return [...corridorResults].sort(
      (a, b) => b.estimatedNetSavingsMonthlyINR - a.estimatedNetSavingsMonthlyINR
    )[0];
  }, [corridorResults]);

  // Currency Formatter Helpers
  const formatINR = (val: number) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-[#f7f9fc] min-h-screen py-6 sm:py-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-r from-[#001428] via-[#0f2942] to-[#001428] rounded-2xl p-6 sm:p-10 text-white mb-8 border border-white/10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ffa41b] uppercase tracking-wider mb-2 font-mono">
                <Calculator className="w-3.5 h-3.5 text-[#e85a4f]" />
                <span>Empirical Mobility Intelligence</span>
                <span aria-hidden="true">·</span>
                <span>Hyderabad Analytics Desk</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2">
                Real-World Earning Potential vs. True Cost of Living
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Make fully informed overseas career decisions. Compare gross international salaries, direct income taxes, compulsory social contributions, realistic living expenses, and <strong className="text-white">actual monthly savings remitted home to India</strong> across GCC, European, and Asian migration corridors.
              </p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 shrink-0 flex flex-col gap-2 text-xs max-w-xs">
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-400">Peak Savings Corridor:</span>
                <span className="font-bold text-[#ffa41b] font-display">
                  {topSavingCorridor.corridor.country}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-slate-400">Est. Monthly Savings:</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  {formatINR(topSavingCorridor.estimatedNetSavingsMonthlyINR)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 pt-1.5 border-t border-white/10">
                <span className="text-slate-400">GCC Tax Benefit:</span>
                <span className="text-emerald-400 font-semibold font-mono">0% Income Tax</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Control Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#0f2942]" />
              <h2 className="text-sm font-bold text-[#001428] uppercase tracking-wider font-display">
                Parameter Filters & Scenario Modeling
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Live updates applied across all 7 international destinations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Job Role / Trade */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Job Trade / Specialization
              </label>
              <select
                value={selectedRoleId}
                onChange={(e) => setSelectedRoleId(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f2942]"
              >
                {ROLE_BENCHMARKS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title} ({r.category})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Experience Level */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Relevant Experience
              </label>
              <select
                value={selectedExpId}
                onChange={(e) => setSelectedExpId(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f2942]"
              >
                {EXPERIENCE_MULTIPLIERS.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Housing Arrangement */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Accommodation Setup
              </label>
              <select
                value={housingMode}
                onChange={(e) => setHousingMode(e.target.value as HousingMode)}
                className="w-full py-2.5 px-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f2942]"
              >
                <option value="free_company">Company Provided (Free Camp / Bed)</option>
                <option value="shared_room">Self-Rented Shared Room / Bachelor</option>
                <option value="family_flat">Family 1-Bedroom Independent Flat</option>
              </select>
            </div>

            {/* 4. Geographical Region Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Geographical Corridor Region
              </label>
              <select
                value={selectedRegionFilter}
                onChange={(e) => setSelectedRegionFilter(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f2942]"
              >
                <option value="All">All Regions (GCC, Europe & Asia-Pac)</option>
                <option value="Gulf Cooperation Council (GCC)">Gulf Cooperation Council (GCC)</option>
                <option value="European Union (EU)">European Union (EU - Schengen)</option>
                <option value="Asia-Pacific">Asia-Pacific</option>
              </select>
            </div>
          </div>

          {/* Salary Sensitivity Slider */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700">Estimated Wage Calibration:</span>
              <span className="font-mono font-bold text-[#e85a4f] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                {salaryMultiplierPercent}% of Market Baseline
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-72">
              <span className="text-slate-400 text-[11px]">-30%</span>
              <input
                type="range"
                min="70"
                max="140"
                step="5"
                value={salaryMultiplierPercent}
                onChange={(e) => setSalaryMultiplierPercent(Number(e.target.value))}
                className="w-full accent-[#0f2942] cursor-pointer"
              />
              <span className="text-slate-400 text-[11px]">+40%</span>
            </div>
          </div>
        </div>

        {/* Head-to-Head Comparative Overview Cards */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#001428] font-display flex items-center gap-2">
              <span>Corridor Financial Breakdown: {activeRole.title}</span>
              <span className="text-xs font-normal text-slate-500">
                ({activeExp.label.split(' ')[0]} {activeExp.label.split(' ')[1]} {activeExp.label.split(' ')[2]})
              </span>
            </h3>
            <span className="text-xs text-slate-500">
              FX: Real-time bilateral conversion to INR
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCorridors.map((result) => {
              const { corridor } = result;
              const isTop = corridor.corridorId === topSavingCorridor.corridor.corridorId;

              return (
                <div
                  key={corridor.corridorId}
                  className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all hover:shadow-lg ${
                    isTop
                      ? 'border-[#ffa41b] ring-1 ring-[#ffa41b]/30 shadow-md'
                      : 'border-slate-200 hover:border-[#0f2942]'
                  }`}
                >
                  <div>
                    {/* Top Row Flag & Tags */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl" role="img" aria-label={corridor.country}>
                          {corridor.flag}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-[#001428] font-display">
                            {corridor.country}
                          </h4>
                          <div className="text-xs text-slate-500">
                            {corridor.city}
                          </div>
                        </div>
                      </div>

                      {isTop && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">
                          Highest Savings
                        </span>
                      )}
                    </div>

                    {/* Regional & Tax Pill */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                      <span>{corridor.region}</span>
                      <span aria-hidden="true">·</span>
                      <span className={corridor.incomeTaxRate === 0 ? 'text-emerald-700 font-semibold' : 'text-slate-700'}>
                        {corridor.incomeTaxRate === 0 ? 'Tax-Free (0%)' : `${corridor.incomeTaxRate}% Tax`}
                      </span>
                    </div>

                    {/* Gross Remuneration */}
                    <div className="mb-4">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Monthly Gross Package
                      </div>
                      <div className="flex items-baseline justify-between mt-0.5">
                        <div className="text-lg font-bold text-[#001428] font-display font-mono">
                          {corridor.currencySymbol} {result.grossSalaryLocal.toLocaleString()}{' '}
                          <span className="text-xs font-normal text-slate-500">{corridor.currencyCode}</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-600 font-mono tabular-nums">
                          ≈ {formatINR(result.grossSalaryINR)} / mo
                        </div>
                      </div>
                    </div>

                    {/* Cost Deductions Strip */}
                    <div className="space-y-2 bg-[#f7f9fc] rounded-lg p-3 text-xs mb-5 border border-slate-100">
                      {/* Taxes */}
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Income Tax & Social Security:</span>
                        <span className="font-mono font-medium text-slate-900 tabular-nums">
                          {result.incomeTaxLocal + result.socialSecurityLocal === 0 ? (
                            <span className="text-emerald-700 font-semibold">₹0 (Tax Exempt)</span>
                          ) : (
                            `- ${corridor.currencySymbol} ${(result.incomeTaxLocal + result.socialSecurityLocal).toLocaleString()}`
                          )}
                        </span>
                      </div>

                      {/* Living & Housing Cost */}
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Housing & Utilities:</span>
                        <span className="font-mono font-medium text-slate-900 tabular-nums">
                          {result.housingCostLocal === 0 ? (
                            <span className="text-emerald-700 font-semibold">Free (Company Covered)</span>
                          ) : (
                            `- ${corridor.currencySymbol} ${result.housingCostLocal.toLocaleString()}`
                          )}
                        </span>
                      </div>

                      {/* Living Expenses */}
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Food, Transit & Daily Living:</span>
                        <span className="font-mono font-medium text-slate-900 tabular-nums">
                          - {corridor.currencySymbol} {result.livingExpensesLocal.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Net Monthly Savings Highlight */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#0f2942] to-[#001428] text-white mb-5 shadow-sm">
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                        <span className="flex items-center gap-1 font-medium">
                          <PiggyBank className="w-3.5 h-3.5 text-[#ffa41b]" />
                          Net Monthly Remittance to India
                        </span>
                        <span className="font-mono text-[#ffa41b] font-bold">
                          {result.savingsRatePercentage}% Savings
                        </span>
                      </div>

                      <div className="text-xl sm:text-2xl font-black font-mono text-white tabular-nums tracking-tight">
                        {formatINR(result.estimatedNetSavingsMonthlyINR)}
                        <span className="text-xs font-normal text-slate-400 ml-1.5 font-sans">
                          / month
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-300 mt-1 flex justify-between">
                        <span>Annual Savings:</span>
                        <strong className="text-emerald-400 font-mono">
                          {formatINR(result.estimatedNetSavingsAnnualINR)} / yr
                        </strong>
                      </div>
                    </div>

                    {/* Non-Monetary Trade-offs */}
                    <div className="text-[11px] text-slate-600 space-y-1 mb-5">
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#0f2942] font-bold">•</span>
                        <span>
                          <strong>Immigration Status:</strong> {corridor.visaType}
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="text-[#0f2942] font-bold">•</span>
                        <span>
                          <strong>PR Pathway:</strong>{' '}
                          {corridor.permanentResidencyPath ? (
                            <span className="text-blue-700 font-semibold">Yes (EU / Schengen Permanent Residence eligibility)</span>
                          ) : (
                            <span className="text-slate-500">Contractual Work Visa (Renewable Iqama / Resident Permit)</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onNavigateToJobsWithCountry(corridor.country)}
                      className="text-xs font-bold text-[#001428] hover:text-[#e85a4f] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Browse {corridor.country} Openings</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenConsultationModal}
                      className="text-xs font-medium text-slate-500 hover:text-slate-800"
                    >
                      Eligibility Check
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Comprehensive Comparison Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-12">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-[#001428] font-display">
              Comprehensive Corridor Matrix: Taxes, Cost of Living & Savings Ratio
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Comparative benchmark for {activeRole.title} ({activeExp.label}) under{' '}
              {housingMode === 'free_company'
                ? 'Employer-Provided Camp / Accommodation'
                : housingMode === 'shared_room'
                ? 'Private Shared Room'
                : 'Independent Family Apartment'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                  <th className="py-3.5 px-4">Corridor & City</th>
                  <th className="py-3.5 px-4 font-mono">Gross Salary (Local)</th>
                  <th className="py-3.5 px-4 font-mono">Gross (INR)</th>
                  <th className="py-3.5 px-4">Tax & Social Sec.</th>
                  <th className="py-3.5 px-4 font-mono">Net In-Hand (Local)</th>
                  <th className="py-3.5 px-4 font-mono">Total Living Cost (INR)</th>
                  <th className="py-3.5 px-4 font-mono font-bold text-[#001428]">
                    Monthly Net Savings (INR)
                  </th>
                  <th className="py-3.5 px-4">Savings Rate</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {corridorResults.map((row) => (
                  <tr key={row.corridor.corridorId} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{row.corridor.flag}</span>
                        <div>
                          <div className="font-bold text-[#001428]">{row.corridor.country}</div>
                          <div className="text-[11px] text-slate-500">{row.corridor.city}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-mono tabular-nums text-slate-700">
                      {row.corridor.currencySymbol} {row.grossSalaryLocal.toLocaleString()}
                    </td>

                    <td className="py-4 px-4 font-mono tabular-nums font-semibold text-slate-800">
                      {formatINR(row.grossSalaryINR)}
                    </td>

                    <td className="py-4 px-4">
                      {row.corridor.incomeTaxRate === 0 ? (
                        <span className="text-emerald-700 font-bold font-mono">0% (Exempt)</span>
                      ) : (
                        <span className="font-mono text-slate-600">
                          {row.corridor.incomeTaxRate}% Tax + {row.corridor.socialSecurityRate}% Soc.
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 font-mono tabular-nums text-slate-700">
                      {row.corridor.currencySymbol} {row.netTakeHomeLocal.toLocaleString()}
                    </td>

                    <td className="py-4 px-4 font-mono tabular-nums text-slate-600">
                      {formatINR(row.totalMonthlyCostINR)}
                    </td>

                    <td className="py-4 px-4 font-mono tabular-nums font-bold text-base text-[#001428]">
                      {formatINR(row.estimatedNetSavingsMonthlyINR)}
                    </td>

                    <td className="py-4 px-4 font-mono tabular-nums">
                      <span className="inline-block px-2 py-0.5 rounded bg-slate-100 font-bold text-[#0f2942]">
                        {row.savingsRatePercentage}%
                      </span>
                    </td>

                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => onNavigateToJobsWithCountry(row.corridor.country)}
                        className="px-3 py-1.5 text-xs font-bold text-white bg-[#0f2942] hover:bg-[#1b3b5f] rounded-md transition-colors whitespace-nowrap cursor-pointer"
                      >
                        View Jobs
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Decision Matrix: GCC vs Europe Trade-Off Guide */}
        <div className="bg-gradient-to-br from-[#001428] to-[#0f2942] text-white rounded-2xl p-6 sm:p-10 border border-white/10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#ffa41b] uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5 text-[#e85a4f]" />
              <span>Hyderabad Career Counseling Advisory</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Strategic Decision: Gulf Wealth Accumulation vs. European Residency
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans mt-2">
              Our overseas recruitment counselors at Ummeed Global Resources, Hyderabad help candidates match their personal 5-year life goals to the right corridor:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gulf Strategy */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 text-base font-bold text-[#ffa41b] font-display mb-2">
                <span>The GCC Model: Rapid Capital Creation (Saudi, UAE, Qatar)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Best for candidates seeking maximum liquid savings, paying off family debts, building a house in India, or funding children's higher education quickly.
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Personal Income Tax:</strong> 100% of your earned salary remains in hand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Free Food & Accommodation:</strong> Standard for 80% of technical and skilled trades.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Rapid Turnaround:</strong> Visa dispatch from Hyderabad in 14 to 25 days.</span>
                </li>
              </ul>
            </div>

            {/* European Strategy */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 text-base font-bold text-[#fc695d] font-display mb-2">
                <span>The European Model: Long-Term Settlement & Welfare (Germany, Poland)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Best for qualified professionals willing to accept moderate take-home cash in exchange for lifelong social security, EU citizenship pathways, and top-tier family quality of life.
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-[#ffa41b] shrink-0 mt-0.5" />
                  <span><strong>Free Dependents Education:</strong> World-class schooling and university tuition at zero cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-[#ffa41b] shrink-0 mt-0.5" />
                  <span><strong>EU Permanent Residency:</strong> Permanent settlement eligibility after 21-36 months on EU Blue Card.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Healthcare:</strong> Mandatory insurance covers 100% hospitalization for family.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              Need personalized advice on your specific qualifications and passport category?
            </div>
            <button
              onClick={onOpenConsultationModal}
              className="px-5 py-2.5 text-xs font-bold text-[#001428] bg-[#ffa41b] hover:bg-[#ffb963] rounded-lg transition-colors cursor-pointer"
            >
              Book 1-on-1 Counseling at Hyderabad Office
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
