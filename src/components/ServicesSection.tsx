import React, { useState } from 'react';
import { CONSULTING_SERVICES } from '../data/mockData.ts';
import {
  FileCheck2,
  Wrench,
  Stethoscope,
  PlaneTakeoff,
  Globe,
  CheckCircle2,
  ChevronRight,
  Shield,
  Building2,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenEmployerModal: () => void;
  onOpenCandidateModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenEmployerModal,
  onOpenCandidateModal,
}) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);

  const icons = [
    <Globe className="w-5 h-5 text-[#e85a4f]" key="globe" />,
    <FileCheck2 className="w-5 h-5 text-[#ffa41b]" key="file" />,
    <Wrench className="w-5 h-5 text-[#3b82f6]" key="wrench" />,
    <Stethoscope className="w-5 h-5 text-emerald-500" key="stethoscope" />,
    <PlaneTakeoff className="w-5 h-5 text-[#e85a4f]" key="plane" />,
  ];

  const activeService = CONSULTING_SERVICES[selectedServiceIndex];

  return (
    <section id="services" className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0f2942] uppercase tracking-wider mb-2">
            <span>Corporate Overseas Solutions</span>
            <span aria-hidden="true">·</span>
            <span>End-to-End Manpower Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001428] tracking-tight font-display mb-4">
            Overseas Recruitment & Hiring Consulting Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Headquartered in Hyderabad with on-ground liaison in Riyadh, Dubai, and Doha, Ummeed Global Resources delivers turnkey manpower sourcing, statutory government emigrations, and rapid candidate mobilization with 100% legal compliance.
          </p>
        </div>

        {/* 2-Column Interactive Capabilities Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Numbered Service Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {CONSULTING_SERVICES.map((service, idx) => {
              const isSelected = selectedServiceIndex === idx;
              return (
                <button
                  key={service.number}
                  onClick={() => setSelectedServiceIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all border flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#0f2942] shadow-[0_8px_20px_-6px_rgba(15,41,66,0.15)] ring-1 ring-[#0f2942]/10'
                      : 'bg-white/70 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      isSelected ? 'bg-[#0f2942] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {icons[idx]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-[#e85a4f]">
                        {service.number}
                      </span>
                      {isSelected && (
                        <span className="text-[11px] font-semibold text-[#0f2942] bg-slate-100 px-2 py-0.5 rounded">
                          Active Specification
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-[#001428] font-display truncate">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">
                      {service.subtitle}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? 'text-[#e85a4f] translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Operational Detail Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-[#e85a4f] tracking-wide">
                  STAGE {activeService.number} / 05
                </span>
                <h3 className="text-2xl font-extrabold text-[#001428] font-display mt-1">
                  {activeService.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {activeService.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  <Shield className="w-3.5 h-3.5" />
                  100% MEA Compliant
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed my-6 font-sans">
              {activeService.description}
            </p>

            <div className="bg-[#f7f9fc] rounded-xl p-5 border border-slate-100 mb-6">
              <h4 className="text-xs font-bold text-[#0f2942] uppercase tracking-wider mb-3">
                Key Execution Highlights & Capabilities
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {activeService.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-500">
                Managed from Hyderabad Operations Centre with 24/7 client portal.
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenEmployerModal}
                  className="px-4 py-2 text-xs font-bold text-[#0f2942] hover:bg-slate-100 border border-[#0f2942]/30 rounded-lg transition-colors cursor-pointer"
                >
                  Request Service Deck
                </button>
                <button
                  onClick={onOpenCandidateModal}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#e85a4f] hover:bg-[#ae302a] rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Consult an Officer
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Hyderabad Trade Testing & Competency Center Feature Strip */}
        <div id="trade-testing" className="rounded-2xl bg-gradient-to-br from-[#001428] to-[#0f2942] text-white p-6 sm:p-10 border border-white/10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs text-[#ffa41b] font-medium tracking-wide uppercase mb-2">
                <Building2 className="w-4 h-4 text-[#e85a4f]" />
                <span>Hyderabad Trade Testing & Delegation Infrastructure</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-4">
                State-of-the-Art Technical Assessment Bays
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Host your technical interview delegates in Hyderabad with complete turnkey support. Our modern testing center is equipped for 6G welding, radiographic testing, HVAC chiller diagnostic rigs, industrial electrical wiring, civil shuttering, and heavy machinery operations.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-200">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="font-bold text-white mb-1">Welding & NDT</div>
                  <div className="text-slate-400">6G TIG, MIG, SMAW with in-house X-Ray darkroom</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="font-bold text-white mb-1">MEP & HVAC Lab</div>
                  <div className="text-slate-400">Centrifugal chillers, BMS simulation & ducting rigs</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="font-bold text-white mb-1">Client Delegation Suites</div>
                  <div className="text-slate-400">Executive meeting suites with 4K video conferencing</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenEmployerModal}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#e85a4f] hover:bg-[#ae302a] rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Schedule Hyderabad Recruitment Drive
                </button>
                <span className="text-xs text-slate-400">
                  Direct transport from Hyderabad RGI Airport (RGIA) arranged for international clients.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-xl aspect-4/3">
                <img
                  src="/src/assets/images/hyderabad_headquarters_center_1794081469046.jpg"
                  alt="Ummeed Global Resources Hyderabad Headquarters and Executive Testing Briefing Room"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="text-xs font-bold text-white">Hyderabad Executive Facility</div>
                  <div className="text-[11px] text-slate-300">Raj Bhavan Road, Somajiguda, Hyderabad, India</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
