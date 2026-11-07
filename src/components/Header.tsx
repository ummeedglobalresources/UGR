import React from 'react';
import { ScreenType } from '../types.ts';
import { Briefcase, Building2, PhoneCall } from 'lucide-react';

interface HeaderProps {
  activeScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenEmployerModal: () => void;
  onOpenCandidateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  onOpenEmployerModal,
  onOpenCandidateModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#001428]/95 backdrop-blur-md border-b border-[#0f2942] text-white">
      {/* Top micro-announcement bar */}
      <div className="bg-[#0f2942] border-b border-white/5 py-1.5 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-sans">
          <div className="flex items-center gap-3">
            <span className="text-[#ffa41b] font-medium tracking-wide">
              Govt. of India MEA Reg. No: B-1044/TEL/COM/1000+/5/9822/2021
            </span>
            <span className="hidden md:inline text-slate-500" aria-hidden="true">·</span>
            <span className="hidden md:inline text-slate-300">
              Hyderabad Headquartered Overseas Recruitment Agency
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+914068294400"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#e85a4f]" />
              <span className="font-mono tabular-nums">+91 40 6829 4400</span>
            </a>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <button
              onClick={onOpenEmployerModal}
              className="text-[#ffa41b] hover:text-[#ffb963] font-medium transition-colors"
            >
              Employer Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation conforming to strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand mark with Animated GIF converted from video */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer shrink-0 focus:outline-none"
            aria-label="Ummeed Global Resources Home"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#e85a4f]/80 shadow-[0_0_15px_rgba(232,90,79,0.35)] bg-[#001428] flex items-center justify-center shrink-0">
              {/* Converted Animated GIF from Video */}
              <img
                src="/assets/aistudio/ummeed_logo_animated.gif"
                alt="Ummeed Global Resources Animated Logo"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to static PNG logo if GIF load fails
                  (e.target as HTMLImageElement).src = '/assets/aistudio/Ummeed_Global_Logo_16c2f50d.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase font-display group-hover:text-[#ffa41b] transition-colors whitespace-nowrap">
                Ummeed Global
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#e85a4f] uppercase whitespace-nowrap">
                Resources · Overseas Placement
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => onNavigate('home')}
              className={`whitespace-nowrap transition-colors hover:text-[#ffa41b] pb-1 border-b-2 cursor-pointer ${
                activeScreen === 'home'
                  ? 'border-[#e85a4f] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              Consulting & Services
            </button>

            <button
              onClick={() => onNavigate('jobs')}
              className={`whitespace-nowrap transition-colors hover:text-[#ffa41b] pb-1 border-b-2 flex items-center gap-1.5 cursor-pointer ${
                activeScreen === 'jobs'
                  ? 'border-[#e85a4f] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              <span>International Openings</span>
              <span className="bg-[#e85a4f] text-white text-[10px] px-1.5 py-0.2 rounded font-bold font-mono">
                140+
              </span>
            </button>

            <button
              onClick={() => onNavigate('calculator')}
              className={`whitespace-nowrap transition-colors hover:text-[#ffa41b] pb-1 border-b-2 flex items-center gap-1.5 cursor-pointer ${
                activeScreen === 'calculator'
                  ? 'border-[#e85a4f] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              <span>Earning vs Cost Index</span>
              <span className="bg-[#ffa41b] text-[#001428] text-[10px] px-1.5 py-0.2 rounded font-bold font-mono">
                New
              </span>
            </button>

            <a
              href="#trade-testing"
              onClick={(e) => {
                if (activeScreen !== 'home') {
                  e.preventDefault();
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('trade-testing')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="whitespace-nowrap text-slate-300 hover:text-[#ffa41b] transition-colors"
            >
              Hyderabad Skill Lab
            </a>

            <a
              href="#compliance"
              onClick={(e) => {
                if (activeScreen !== 'home') {
                  e.preventDefault();
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="whitespace-nowrap text-slate-300 hover:text-[#ffa41b] transition-colors"
            >
              MEA Compliance
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {activeScreen === 'jobs' ? (
              <button
                onClick={onOpenCandidateModal}
                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#e85a4f] rounded-lg hover:bg-[#ae302a] active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(232,90,79,0.3)] flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Submit CV for Gulf/EU</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigate('jobs')}
                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#e85a4f] rounded-lg hover:bg-[#ae302a] active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(232,90,79,0.3)] flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Browse Overseas Jobs</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
