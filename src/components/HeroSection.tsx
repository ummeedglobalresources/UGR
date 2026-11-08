import React, { useRef, useState, useEffect } from 'react';
import { ScreenType } from '../types.ts';
import {
  Briefcase,
  Building,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Globe2,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenEmployerModal: () => void;
  onOpenCandidateModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenEmployerModal,
  onOpenCandidateModal,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user gesture
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#001428] via-[#0f2942] to-[#001428] text-white pt-6 sm:pt-10 pb-16 sm:pb-20 border-b border-white/10 w-full max-w-full">
      {/* Decorative background radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#e85a4f]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#ffa41b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location & Authorization Header Tag */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300 mb-5 font-sans">
              <span className="flex items-center gap-1.5 text-[#ffa41b] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#e85a4f]" />
                <span>Hyderabad, India</span>
              </span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Govt. of India MEA Registered Agency</span>
              </span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300">ISO 9001:2015</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display" style={{ textWrap: 'balance' }}>
              Bridging Indian Talent to the{' '}
              <span className="bg-gradient-to-r from-[#ffa41b] via-[#fc695d] to-[#e85a4f] bg-clip-text text-transparent">
                Global Frontier
              </span>
            </h1>

            {/* Clear Value Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-sans">
              Headquartered in Hyderabad, <strong className="text-white font-semibold">Ummeed Global Resources</strong> is a premier overseas employment consultancy. We specialize in cross-border manpower recruitment, technical trade competency verification, GAMCA medical clearance, and end-to-end visa mobilization across the GCC, Europe, and Asia-Pacific.
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => onNavigate('jobs')}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#e85a4f] hover:bg-[#ae302a] active:scale-[0.98] rounded-lg transition-all shadow-[0_8px_20px_rgba(232,90,79,0.35)] flex items-center gap-2.5 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore International Openings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEmployerModal}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#0f2942] hover:bg-[#1b3b5f] border border-white/20 hover:border-white/40 rounded-lg transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Building className="w-4 h-4 text-[#ffa41b]" />
                <span>Hire Indian Manpower</span>
              </button>
            </div>

            {/* Proof Points Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
                  18,500<span className="text-[#e85a4f]">+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Mobilized Candidates</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
                  99.4<span className="text-[#ffa41b]">%</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Visa Approval Rate</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
                  14 <span className="text-emerald-400">Days</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Avg Gulf Dispatch</div>
              </div>
            </div>

          </div>

          {/* Right Column: Branded Animated Video & Logo Stage */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Outer Glow Halo with sunrise coral & amber */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#e85a4f] via-[#ffa41b] to-[#0f2942] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse" />

              {/* Card Container */}
              <div className="relative bg-[#001428] rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
                
                {/* Header tag */}
                <div className="px-4 py-3 bg-[#0f2942]/90 border-b border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e85a4f]" />
                    <span className="font-semibold text-white tracking-wide uppercase font-display text-[11px]">
                      Ummeed Motion Identity
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-1 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      title={isPlaying ? 'Pause Animation' : 'Play Animation'}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-1 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#ffa41b]" />}
                    </button>
                  </div>
                </div>

                {/* Video Stage with actual user provided video */}
                <div className="relative aspect-square w-full bg-[#001428] flex items-center justify-center p-2">
                  <video
                    ref={videoRef}
                    src="/assets/aistudio/Ummeed_Global_Logo_d1cc5535.mp4"
                    poster="/assets/aistudio/Ummeed_Global_Logo_16c2f50d.png"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-contain rounded-xl"
                  />
                  {/* Subtle watermarked badge */}
                  <div className="absolute bottom-3 right-3 bg-[#001428]/85 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] text-slate-300 font-mono">
                    Hyderabad Hub
                  </div>
                </div>

                {/* Quick Interactive Info Bar */}
                <div className="p-4 bg-gradient-to-r from-[#001428] to-[#0f2942] border-t border-white/10">
                  <div className="flex items-center justify-between gap-3 text-xs mb-2">
                    <span className="text-[#ffa41b] font-semibold flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5" />
                      Global Placement Corridors
                    </span>
                    <span className="text-slate-400 text-[11px]">MEA Licensed Agency</span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Saudi Arabia · UAE · Qatar · Oman · Germany · Poland · Singapore
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={onOpenCandidateModal}
                      className="text-xs font-semibold text-[#fc695d] hover:text-[#ffb4ab] transition-colors flex items-center gap-1"
                    >
                      <span>Direct CV Registration</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <span className="text-[11px] text-slate-400 font-mono">Reg: 9822/2021</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
