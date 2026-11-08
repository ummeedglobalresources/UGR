import React, { useState } from 'react';
import { ScreenType } from '../types.ts';
import {
  Briefcase,
  Building2,
  PhoneCall,
  Menu,
  X,
  ChevronRight,
  Calculator,
  ShieldCheck,
  Building,
} from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#001428]/95 backdrop-blur-md border-b border-[#0f2942] text-white w-full max-w-full">
      {/* Top micro-announcement bar - strictly responsive */}
      <div className="bg-[#0f2942] border-b border-white/5 py-1 px-3 sm:px-4 text-[11px] sm:text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 font-sans">
          <div className="flex items-center gap-2 truncate min-w-0">
            <span className="text-[#ffa41b] font-medium tracking-wide truncate">
              <span className="hidden sm:inline">Govt. of India MEA Reg. No: </span>
              <span className="sm:hidden">MEA Reg: </span>
              B-1044/TEL/COM/1000+
            </span>
            <span className="hidden md:inline text-slate-500" aria-hidden="true">·</span>
            <span className="hidden md:inline text-slate-300">
              Hyderabad Headquartered Overseas Recruitment Agency
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-[11px] sm:text-xs">
            <a
              href="tel:+914068294400"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              title="Call Hyderabad Board"
            >
              <PhoneCall className="w-3 h-3 text-[#e85a4f]" />
              <span className="font-mono tabular-nums hidden xs:inline">+91 40 6829 4400</span>
              <span className="xs:hidden">Call</span>
            </a>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <button
              onClick={onOpenEmployerModal}
              className="text-[#ffa41b] hover:text-[#ffb963] font-medium transition-colors cursor-pointer"
            >
              <span className="hidden xs:inline">Employer Inquiry</span>
              <span className="xs:hidden">Hire</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 h-16 sm:h-20">
          
          {/* Zone 1: Brand mark - gracefully responsive */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer min-w-0 shrink focus:outline-none"
            aria-label="Ummeed Global Resources Home"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#e85a4f]/80 shadow-[0_0_12px_rgba(232,90,79,0.35)] bg-[#001428] flex items-center justify-center shrink-0">
              <img
                src="/assets/aistudio/ummeed_logo_animated.gif"
                alt="Ummeed Global Resources Animated Logo"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/Ummeed_Global_Logo_16c2f50d.png';
                }}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg lg:text-xl font-extrabold tracking-tight text-white uppercase font-display group-hover:text-[#ffa41b] transition-colors truncate">
                Ummeed Global
              </span>
              <span className="hidden xs:block text-[9px] sm:text-[11px] font-semibold tracking-wider text-[#e85a4f] uppercase truncate">
                Resources · Placement
              </span>
            </div>
          </button>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`whitespace-nowrap transition-colors hover:text-[#ffa41b] pb-1 border-b-2 cursor-pointer ${
                activeScreen === 'home'
                  ? 'border-[#e85a4f] text-white font-semibold'
                  : 'border-transparent text-slate-300'
              }`}
            >
              Consulting & Services
            </button>

            <button
              onClick={() => handleNavClick('jobs')}
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
              onClick={() => handleNavClick('calculator')}
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
                  handleNavClick('home');
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
                  handleNavClick('home');
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

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {activeScreen === 'jobs' ? (
              <button
                onClick={onOpenCandidateModal}
                className="px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#e85a4f] rounded-lg hover:bg-[#ae302a] active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(232,90,79,0.3)] flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden sm:inline">Submit CV for Gulf/EU</span>
                <span className="sm:hidden">Submit CV</span>
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('jobs')}
                className="px-2.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#e85a4f] rounded-lg hover:bg-[#ae302a] active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(232,90,79,0.3)] flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="hidden sm:inline">Browse Overseas Jobs</span>
                <span className="sm:hidden">Jobs</span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001428] border-t border-white/10 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-2xl">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between cursor-pointer ${
              activeScreen === 'home'
                ? 'bg-[#0f2942] text-[#ffa41b] font-bold border-l-4 border-[#e85a4f]'
                : 'text-slate-200 hover:bg-white/5'
            }`}
          >
            <span>Consulting & Services</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => handleNavClick('jobs')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between cursor-pointer ${
              activeScreen === 'jobs'
                ? 'bg-[#0f2942] text-[#ffa41b] font-bold border-l-4 border-[#e85a4f]'
                : 'text-slate-200 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2">
              <span>International Openings</span>
              <span className="bg-[#e85a4f] text-white text-[10px] px-1.5 py-0.2 rounded font-bold font-mono">
                140+
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <button
            onClick={() => handleNavClick('calculator')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between cursor-pointer ${
              activeScreen === 'calculator'
                ? 'bg-[#0f2942] text-[#ffa41b] font-bold border-l-4 border-[#e85a4f]'
                : 'text-slate-200 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#ffa41b]" />
              <span>Earning vs Cost Index</span>
              <span className="bg-[#ffa41b] text-[#001428] text-[10px] px-1.5 py-0.2 rounded font-bold font-mono">
                New
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <a
            href="#trade-testing"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (activeScreen !== 'home') {
                e.preventDefault();
                handleNavClick('home');
                setTimeout(() => {
                  document.getElementById('trade-testing')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="w-full block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[#ffa41b]" />
              <span>Hyderabad Skill Lab</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>

          <a
            href="#compliance"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (activeScreen !== 'home') {
                e.preventDefault();
                handleNavClick('home');
                setTimeout(() => {
                  document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="w-full block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MEA Govt. Compliance</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmployerModal();
              }}
              className="py-2.5 px-3 rounded-lg bg-[#0f2942] hover:bg-[#1b3b5f] text-white font-semibold text-center border border-white/10"
            >
              Hire Indian Manpower
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCandidateModal();
              }}
              className="py-2.5 px-3 rounded-lg bg-[#e85a4f] hover:bg-[#ae302a] text-white font-semibold text-center"
            >
              Submit CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
