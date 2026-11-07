import React from 'react';
import { KEY_DESTINATIONS } from '../data/mockData.ts';
import { ScreenType } from '../types.ts';
import { Clock, ArrowUpRight, CheckCircle, Globe } from 'lucide-react';

interface DestinationsGridProps {
  onNavigateToJobsWithCountry: (countryName: string) => void;
  onNavigateToCalculator?: () => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  onNavigateToJobsWithCountry,
  onNavigateToCalculator,
}) => {
  return (
    <section id="destinations" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0f2942] uppercase tracking-wider mb-2">
              <Globe className="w-3.5 h-3.5 text-[#e85a4f]" />
              <span>International Deployment Corridors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001428] tracking-tight font-display">
              Primary Overseas Destinations
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl font-sans">
              Ummeed Global Resources operates direct licensing relationships, embassy attestation channels, and bilateral employer associations across 6 strategic international markets.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Updated weekly in accordance with bilateral labor agreements & visa quota releases.
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_DESTINATIONS.map((dest) => (
            <div
              key={dest.country}
              className="bg-[#f7f9fc] rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0f2942] hover:shadow-md transition-all group"
            >
              <div>
                {/* Header Flag & Title */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={dest.country}>
                      {dest.flag}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#001428] font-display group-hover:text-[#e85a4f] transition-colors">
                        {dest.country}
                      </h3>
                      <span className="text-xs text-slate-500">
                        {dest.regions}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold font-mono text-[#0f2942] bg-white px-2.5 py-1 rounded border border-slate-200">
                    {dest.activePositions} Vacancies
                  </span>
                </div>

                <div className="text-xs text-[#0f2942] font-semibold bg-slate-200/60 px-2 py-1 rounded inline-block mb-3">
                  {dest.tag}
                </div>

                {/* Primary Sectors */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Key Hiring Verticals
                  </div>
                  <div className="text-xs text-slate-700 font-medium">
                    {dest.sectors}
                  </div>
                </div>

                {/* Processing Time */}
                <div className="flex items-center gap-2 text-xs text-slate-600 mb-6 bg-white p-2.5 rounded-lg border border-slate-200/80">
                  <Clock className="w-4 h-4 text-[#ffa41b] shrink-0" />
                  <span>
                    Avg. Mobilization: <strong className="text-slate-900 font-semibold">{dest.processingTime}</strong>
                  </span>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onNavigateToJobsWithCountry(dest.country)}
                className="w-full py-2.5 px-4 text-xs font-bold text-[#001428] bg-white hover:bg-[#001428] hover:text-white border border-slate-300 hover:border-[#001428] rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>View {dest.country} Openings</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Calculator Callout Banner */}
        {onNavigateToCalculator && (
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#001428] to-[#0f2942] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffa41b] block mb-1">
                Comparative Analytics Engine
              </span>
              <h4 className="text-xl font-bold font-display text-white">
                Unsure which corridor maximizes your savings?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Model your real-world in-hand income, housing deductions, food expenses, and net remittance home to India with our dedicated tool.
              </p>
            </div>
            <button
              onClick={onNavigateToCalculator}
              className="px-5 py-3 text-xs sm:text-sm font-bold text-[#001428] bg-[#ffa41b] hover:bg-[#ffb963] rounded-lg transition-all shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>Launch Earning vs. Cost Calculator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
