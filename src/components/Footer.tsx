import React from 'react';
import { ScreenType } from '../types.ts';
import { COMPANY_INFO } from '../data/mockData.ts';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenEmployerModal: () => void;
  onOpenCandidateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenEmployerModal,
  onOpenCandidateModal,
}) => {
  return (
    <footer className="bg-[#001428] text-white border-t border-[#0f2942]">
      {/* Upper Footer: Contact and Credentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info & Logos */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#e85a4f] bg-[#001428] shrink-0">
                <img
                  src="/assets/aistudio/ummeed_logo_animated.gif"
                  alt="Ummeed Global Resources Animated Logo"
                  className="w-full h-full object-cover scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/Ummeed_Global_Logo_16c2f50d.png';
                  }}
                />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight font-display uppercase block">
                  Ummeed Global Resources
                </span>
                <span className="text-xs text-[#e85a4f] font-semibold tracking-wider block">
                  Overseas Employment Consultants
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
              Hyderabad-based international recruitment consultancy facilitating ethical manpower mobilization, consular visa endorsements, GAMCA clearance, and trade competency testing for Middle East, Europe, and Asia.
            </p>

            <div className="p-3 bg-[#0f2942] rounded-lg border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="text-[#ffa41b] font-semibold">
                Ministry of External Affairs (MEA), India
              </div>
              <div className="font-mono text-[11px] text-slate-200">
                {COMPANY_INFO.registrationNo}
              </div>
              <div className="text-[11px] text-slate-400">
                {COMPANY_INFO.isoCertification}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#ffa41b] transition-colors cursor-pointer"
                >
                  Consulting Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="hover:text-[#ffa41b] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>International Openings</span>
                  <span className="text-[10px] bg-[#e85a4f] text-white px-1.5 py-0.2 rounded font-mono">
                    Hot
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-[#ffa41b] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Earning vs Cost Index</span>
                  <span className="text-[10px] bg-[#ffa41b] text-[#001428] font-bold px-1 py-0.2 rounded font-mono">
                    Calc
                  </span>
                </button>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#ffa41b] transition-colors">
                  Gulf & Europe Sectors
                </a>
              </li>
              <li>
                <a href="#trade-testing" className="hover:text-[#ffa41b] transition-colors">
                  Hyderabad Trade Bays
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-[#ffa41b] transition-colors">
                  Government Licensing
                </a>
              </li>
            </ul>
          </div>

          {/* Sourcing Verticals */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Key Verticals
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Oil & Gas Piping QA/QC</li>
              <li>Civil & Heavy Construction</li>
              <li>Hospital Staff Nursing</li>
              <li>HVAC & MEP Engineering</li>
              <li>Industrial CNC Machinists</li>
              <li>Logistics & Heavy Transport</li>
            </ul>
          </div>

          {/* Hyderabad Headquarters Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Hyderabad Headquarters
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e85a4f] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ffa41b] shrink-0" />
                <div className="flex flex-col font-mono text-[11px]">
                  <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="hover:text-white">
                    {COMPANY_INFO.phonePrimary} (Board)
                  </a>
                  <a href={`tel:${COMPANY_INFO.phoneHelpline}`} className="hover:text-white">
                    {COMPANY_INFO.phoneHelpline} (Overseas Despatch Helpline)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e85a4f] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#ffa41b] transition-colors font-mono"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={onOpenEmployerModal}
                className="px-3.5 py-1.5 text-xs font-bold bg-[#ffa41b] text-[#001428] rounded hover:bg-[#ffb963] transition-colors cursor-pointer"
              >
                Employer Portal
              </button>
              <button
                onClick={onOpenCandidateModal}
                className="px-3.5 py-1.5 text-xs font-bold bg-[#e85a4f] text-white rounded hover:bg-[#ae302a] transition-colors cursor-pointer"
              >
                Apply for Gulf
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Advisory & Anti-Fraud Legal Strip */}
      <div className="bg-[#000d1a] py-6 px-4 sm:px-6 lg:px-8 border-t border-white/5 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Public Anti-Fraud Advisory:</strong> Ummeed Global Resources cautions all overseas job aspirants against unauthorized sub-agents. Official transactions are conducted solely at our registered Somajiguda, Hyderabad office.
            </span>
          </div>
          <div className="text-[11px] text-slate-500 whitespace-nowrap">
            © {new Date().getFullYear()} Ummeed Global Resources. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
