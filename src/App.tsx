/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenType, JobOpening } from './types.ts';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { DestinationsGrid } from './components/DestinationsGrid.tsx';
import { TrustCompliance } from './components/TrustCompliance.tsx';
import { JobBoardScreen } from './components/JobBoardScreen.tsx';
import { EarningVsCostScreen } from './components/EarningVsCostScreen.tsx';
import { ApplyModal } from './components/ApplyModal.tsx';
import { EmployerInquiryModal } from './components/EmployerInquiryModal.tsx';
import { Footer } from './components/Footer.tsx';
import { Briefcase, ArrowUp, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('home');
  const [selectedJobForApplication, setSelectedJobForApplication] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState<boolean>(false);
  const [initialCountryFilter, setInitialCountryFilter] = useState<string>('All');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (screen: ScreenType) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToJobsWithCountry = (country: string) => {
    setInitialCountryFilter(country);
    setActiveScreen('jobs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyForJob = (job: JobOpening) => {
    setSelectedJobForApplication(job);
    setIsApplyModalOpen(true);
  };

  const handleOpenGeneralApplication = () => {
    setSelectedJobForApplication(null);
    setIsApplyModalOpen(true);
  };

  const handleOpenEmployerModal = () => {
    setIsEmployerModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fc] text-[#191c1e] selection:bg-[#fc695d] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Top Header */}
      <Header
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenEmployerModal={handleOpenEmployerModal}
        onOpenCandidateModal={handleOpenGeneralApplication}
      />

      {/* Screen 1: Vibrant Global Overseas Recruitment (Initial Screen) */}
      {activeScreen === 'home' && (
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {/* Hero Section with Animated Video Stage */}
          <HeroSection
            onNavigate={handleNavigate}
            onOpenEmployerModal={handleOpenEmployerModal}
            onOpenCandidateModal={handleOpenGeneralApplication}
          />

          {/* Overseas Sourcing & Consulting Services */}
          <ServicesSection
            onOpenEmployerModal={handleOpenEmployerModal}
            onOpenCandidateModal={handleOpenGeneralApplication}
          />

          {/* Key International Destinations */}
          <DestinationsGrid
            onNavigateToJobsWithCountry={handleNavigateToJobsWithCountry}
            onNavigateToCalculator={() => handleNavigate('calculator')}
          />

          {/* MEA Licensing, Trade Testing Verification & FAQs */}
          <TrustCompliance />
        </main>
      )}

      {/* Screen 2: International Job Openings */}
      {activeScreen === 'jobs' && (
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <JobBoardScreen
            initialCountryFilter={initialCountryFilter}
            onApplyForJob={handleApplyForJob}
            onOpenGeneralApplication={handleOpenGeneralApplication}
          />
        </main>
      )}

      {/* Screen 3: Real-World Earning Potential vs. True Cost of Living */}
      {activeScreen === 'calculator' && (
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <EarningVsCostScreen
            onNavigateToJobsWithCountry={handleNavigateToJobsWithCountry}
            onOpenConsultationModal={handleOpenGeneralApplication}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEmployerModal={handleOpenEmployerModal}
        onOpenCandidateModal={handleOpenGeneralApplication}
      />

      {/* Candidate Apply Modal */}
      <ApplyModal
        job={selectedJobForApplication}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      {/* Employer Inquiries Modal */}
      <EmployerInquiryModal
        isOpen={isEmployerModalOpen}
        onClose={() => setIsEmployerModalOpen(false)}
      />

      {/* Floating Quick Action / Scroll-to-top */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#001428] text-white shadow-lg border border-white/20 flex items-center justify-center hover:bg-[#0f2942] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={handleOpenGeneralApplication}
          className="bg-[#e85a4f] hover:bg-[#ae302a] text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold transition-all active:scale-95 cursor-pointer border border-white/20"
        >
          <Briefcase className="w-4 h-4" />
          <span className="hidden sm:inline">Apply for Gulf / EU</span>
          <span className="sm:hidden">Apply</span>
        </button>
      </div>
    </div>
  );
}
