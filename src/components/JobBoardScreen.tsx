import React, { useState, useMemo } from 'react';
import { JOB_OPENINGS } from '../data/mockData.ts';
import { JobOpening, JobStream } from '../types.ts';
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Briefcase,
  DollarSign,
  Users,
  CheckCircle,
  FileText,
  Clock,
  ExternalLink,
  Flame,
  ArrowRight,
  Shield,
  Building,
} from 'lucide-react';

interface JobBoardScreenProps {
  initialCountryFilter?: string;
  onApplyForJob: (job: JobOpening) => void;
  onOpenGeneralApplication: () => void;
}

export const JobBoardScreen: React.FC<JobBoardScreenProps> = ({
  initialCountryFilter,
  onApplyForJob,
  onOpenGeneralApplication,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountryFilter || 'All');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedStream, setSelectedStream] = useState<string>('All');
  const [selectedJobForDetails, setSelectedJobForDetails] = useState<JobOpening | null>(null);

  // Extract unique countries and sectors
  const countries = useMemo(() => {
    const list = ['All', ...Array.from(new Set(JOB_OPENINGS.map((j) => j.country)))];
    return list;
  }, []);

  const sectors = useMemo(() => {
    const list = ['All', ...Array.from(new Set(JOB_OPENINGS.map((j) => j.sector)))];
    return list;
  }, []);

  // Filter logic
  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.clientCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.requirements.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCountry = selectedCountry === 'All' || job.country === selectedCountry;
      const matchesSector = selectedSector === 'All' || job.sector === selectedSector;
      const matchesStream = selectedStream === 'All' || job.stream === selectedStream;

      return matchesSearch && matchesCountry && matchesSector && matchesStream;
    });
  }, [searchQuery, selectedCountry, selectedSector, selectedStream]);

  return (
    <div className="bg-[#f7f9fc] min-h-screen py-6 sm:py-10 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* Screen Header */}
        <div className="bg-gradient-to-r from-[#001428] via-[#0f2942] to-[#001428] rounded-2xl p-6 sm:p-10 text-white mb-8 border border-white/10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ffa41b] uppercase tracking-wider mb-2 font-mono">
                <span>Verified Overseas Openings</span>
                <span aria-hidden="true">·</span>
                <span>Hyderabad Client Drives</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2">
                International Job Openings & Gulf Drives
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Browse legitimate overseas job requirements verified with Indian MEA eMigrate demand quotas. Direct employer sponsorship, work visas, and guaranteed contracts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <button
                onClick={onOpenGeneralApplication}
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#e85a4f] hover:bg-[#ae302a] rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Submit CV to Talent Pool</span>
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Strictly No Sub-Agent Fees · Direct Emigration Clearance</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Hyderabad Assessment Bays Open Mon–Sat</span>
              <span aria-hidden="true" className="text-slate-600">|</span>
              <span className="font-mono text-[#ffa41b]">Govt Reg: B-1044/TEL/COM/1000+</span>
            </div>
          </div>
        </div>

        {/* Search & Filters Controls */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm mb-8 space-y-4">
          {/* Search Row */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role title (e.g. Welder, Piping Inspector, Nurse, CNC), skill, or vacancy ref ID..."
              className="w-full pl-11 pr-4 py-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-sm text-[#001428] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f2942] focus:bg-white transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills / Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
            {/* Country Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Destination Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full py-2 px-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Overseas Destinations' : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Sector Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Industry Sector
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full py-2 px-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
              >
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s === 'All' ? 'All Industry Verticals' : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Stream Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Hiring Category
              </label>
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full py-2 px-3 bg-[#f7f9fc] border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
              >
                <option value="All">All Categories (Technical, White-Collar, Medical)</option>
                <option value="technical">Technical & Skilled Crafts</option>
                <option value="white-collar">Executive & Engineering (White-Collar)</option>
                <option value="healthcare">Healthcare & Nursing</option>
                <option value="hospitality">Hospitality & Services</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Reset */}
        <div className="flex items-center justify-between text-xs text-slate-600 mb-6">
          <div>
            Showing <strong className="text-slate-900 font-bold">{filteredJobs.length}</strong> matching vacancies
          </div>
          {(selectedCountry !== 'All' || selectedSector !== 'All' || selectedStream !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCountry('All');
                setSelectedSector('All');
                setSelectedStream('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#e85a4f] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Jobs List Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 flex flex-col justify-between hover:border-[#0f2942] hover:shadow-lg transition-all relative group"
              >
                {/* Urgent indicator if applicable */}
                {job.urgentHiring && (
                  <div className="sm:absolute sm:top-4 sm:right-4 inline-flex items-center gap-1 text-[11px] font-bold text-[#ae302a] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mb-2 sm:mb-0 w-fit self-start sm:self-auto">
                    <Flame className="w-3.5 h-3.5 text-[#e85a4f]" />
                    <span>Urgent Deployment</span>
                  </div>
                )}

                <div>
                  {/* Country Flag & Reference */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                    <span className="text-lg">{job.flag}</span>
                    <span className="font-bold text-[#001428] font-sans">{job.country}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.city}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{job.id}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-base sm:text-xl font-bold text-[#001428] font-display group-hover:text-[#e85a4f] transition-colors mb-1 pr-0 sm:pr-24 break-words">
                    {job.title}
                  </h2>

                  {/* Client / Sector */}
                  <div className="text-xs text-slate-500 mb-4 flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.clientCompany}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#0f2942] font-medium">{job.sector}</span>
                  </div>

                  {/* Salary Highlight Box */}
                  <div className="bg-[#f7f9fc] border border-slate-100 rounded-lg p-3.5 mb-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                          Offered Remuneration
                        </div>
                        <div className="text-base sm:text-lg font-bold text-[#001428] font-display">
                          {job.salary.amount}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-emerald-700 font-semibold">
                          Approx Indian Value
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-800 font-mono">
                          {job.salary.inrEquivalent}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vacancy and Contract Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0f2942]" />
                      <span>Vacancies: <strong>{job.vacancies} Positions</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#ffa41b]" />
                      <span>Contract: <strong>{job.contractPeriod}</strong></span>
                    </div>
                  </div>

                  {/* Interview Mode */}
                  <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200/80 mb-4">
                    <span className="font-semibold text-[#001428]">Selection Mode: </span>
                    <span>{job.interviewType}</span>
                    {job.interviewDates && (
                      <div className="text-[11px] text-[#e85a4f] font-medium mt-0.5">
                        📅 {job.interviewDates}
                      </div>
                    )}
                  </div>

                  {/* Benefits Unboxed Preview */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Included Package Perks
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                      {job.benefits.slice(0, 3).map((b, i) => (
                        <span key={i} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                          <span>{b}</span>
                        </span>
                      ))}
                      {job.benefits.length > 3 && (
                        <span className="text-slate-400 font-medium">
                          +{job.benefits.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedJobForDetails(job)}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-[#0f2942] hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    View Job Details
                  </button>
                  <button
                    onClick={() => onApplyForJob(job)}
                    className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#e85a4f] hover:bg-[#ae302a] rounded-lg transition-colors shadow-sm text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#001428] font-display mb-2">
              No matching vacancies found
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              We update overseas openings frequently. You can submit your CV to our general talent pool and our Hyderabad recruitment counselors will contact you when a matching Gulf or European demand opens.
            </p>
            <button
              onClick={onOpenGeneralApplication}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0f2942] hover:bg-[#1b3b5f] rounded-lg transition-colors cursor-pointer"
            >
              Submit CV for Future Openings
            </button>
          </div>
        )}

      </div>

      {/* Role Details Modal */}
      {selectedJobForDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 relative">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-1">
                  <span className="text-xl">{selectedJobForDetails.flag}</span>
                  <span className="font-bold text-[#001428] font-sans">
                    {selectedJobForDetails.country} · {selectedJobForDetails.city}
                  </span>
                  <span>·</span>
                  <span>Ref: {selectedJobForDetails.id}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#001428] font-display">
                  {selectedJobForDetails.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedJobForDetails.clientCompany} · {selectedJobForDetails.sector}
                </p>
              </div>

              <button
                onClick={() => setSelectedJobForDetails(null)}
                className="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1 leading-none cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Compensation & Contract Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 p-4 bg-[#f7f9fc] rounded-xl border border-slate-200 text-xs">
              <div>
                <div className="text-slate-400 font-bold uppercase text-[10px]">Salary</div>
                <div className="text-sm font-bold text-[#001428] font-display mt-0.5">
                  {selectedJobForDetails.salary.amount}
                </div>
                <div className="text-[11px] text-emerald-700 font-mono">
                  {selectedJobForDetails.salary.inrEquivalent}
                </div>
              </div>
              <div>
                <div className="text-slate-400 font-bold uppercase text-[10px]">Contract Duration</div>
                <div className="text-sm font-bold text-[#001428] mt-0.5">
                  {selectedJobForDetails.contractPeriod}
                </div>
                <div className="text-[11px] text-slate-500">
                  {selectedJobForDetails.vacancies} Vacancies Open
                </div>
              </div>
              <div>
                <div className="text-slate-400 font-bold uppercase text-[10px]">Interview Drive</div>
                <div className="text-xs font-semibold text-[#0f2942] mt-0.5">
                  {selectedJobForDetails.interviewType}
                </div>
                <div className="text-[11px] text-[#e85a4f]">
                  Apply before: {selectedJobForDetails.deadline}
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#001428] uppercase tracking-wider mb-2">
                Scope of Work & Responsibilities
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {selectedJobForDetails.description}
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#001428] uppercase tracking-wider mb-2">
                Mandatory Candidate Qualifications
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {selectedJobForDetails.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#e85a4f] font-bold">✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Included */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#001428] uppercase tracking-wider mb-2">
                Employer Provided Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                {selectedJobForDetails.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedJobForDetails(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const jobToApply = selectedJobForDetails;
                  setSelectedJobForDetails(null);
                  onApplyForJob(jobToApply);
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#e85a4f] hover:bg-[#ae302a] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                Apply for this Position Now
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
