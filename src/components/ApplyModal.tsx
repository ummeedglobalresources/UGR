import React, { useState } from 'react';
import { JobOpening, ApplicationFormData } from '../types.ts';
import { ShieldCheck, CheckCircle2, Upload, FileText, X, AlertCircle } from 'lucide-react';

interface ApplyModalProps {
  job: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    jobId: job?.id || '',
    jobTitle: job?.title || '',
    fullName: '',
    email: '',
    phone: '',
    passportNumber: '',
    passportExpiry: '',
    currentLocation: 'Hyderabad, Telangana',
    currentProfession: '',
    yearsOfExperience: '3 - 5 Years',
    highestQualification: 'Diploma / Technical ITI',
    preferredDestination: job?.country || 'Saudi Arabia',
    additionalNotes: '',
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your full name, active contact phone, and email address.');
      return;
    }

    if (!formData.passportNumber.trim()) {
      setErrorMessage('Passport number is required for international overseas emigration processing.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real application registration
    setTimeout(() => {
      const generatedRef = `UGR-HYD-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmittedRef(null);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 bg-[#001428] text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffa41b] mb-1">
              <span>MEA eMigrate Portal Clearance</span>
              <span>·</span>
              <span>Hyderabad Despatch Desk</span>
            </div>
            <h3 className="text-xl font-bold font-display">
              {job ? `Apply for: ${job.title}` : 'Overseas Talent Registration & CV Submission'}
            </h3>
            {job && (
              <p className="text-xs text-slate-300 mt-0.5">
                {job.clientCompany} · {job.country} ({job.city}) · Ref: {job.id}
              </p>
            )}
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 text-2xl font-bold cursor-pointer"
          >
            ×
          </button>
        </div>

        {submittedRef ? (
          /* Success Screen */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#001428] font-display mb-1">
              Application Successfully Registered
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Your profile has been logged with Ummeed Global Resources, Hyderabad.
            </p>

            <div className="bg-[#f7f9fc] border border-slate-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left text-xs space-y-2">
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Tracking Reference:</span>
                <span className="font-mono font-bold text-[#0f2942]">{submittedRef}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Candidate Name:</span>
                <span className="font-semibold text-slate-800">{formData.fullName}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Target Country:</span>
                <span className="font-semibold text-slate-800">{job ? job.country : formData.preferredDestination}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-500 font-medium">Review Center:</span>
                <span className="font-semibold text-slate-800">Somajiguda, Hyderabad</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 max-w-md mx-auto text-left text-xs text-amber-900 mb-6">
              <strong>Next Action:</strong> Our Hyderabad recruitment officer will contact your registered phone number (<span className="font-mono font-bold">{formData.phone}</span>) within 24–48 hours to verify original passport copies and schedule trade testing / client interview dates.
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#0f2942] hover:bg-[#1b3b5f] rounded-lg transition-colors cursor-pointer"
            >
              Done & Return to Jobs
            </button>
          </div>
        ) : (
          /* Application Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name (as per Passport) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Mohammed Farooq Ali"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Active WhatsApp / Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98490 XXXXX"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Passport Number *
                </label>
                <input
                  type="text"
                  required
                  value={formData.passportNumber}
                  onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value.toUpperCase() })}
                  placeholder="e.g. V7629104"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg uppercase font-mono focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Trade / Profession
                </label>
                <input
                  type="text"
                  value={formData.currentProfession}
                  onChange={(e) => setFormData({ ...formData, currentProfession: e.target.value })}
                  placeholder="e.g. 6G Welder, Staff Nurse, HVAC Tech"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Experience
                </label>
                <select
                  value={formData.yearsOfExperience}
                  onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                >
                  <option value="1 - 2 Years">1 - 2 Years (Fresh Gulf)</option>
                  <option value="3 - 5 Years">3 - 5 Years</option>
                  <option value="6 - 10 Years">6 - 10 Years (Senior / Gulf Return)</option>
                  <option value="10+ Years">10+ Years (Lead / Inspector)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Location / City
                </label>
                <input
                  type="text"
                  value={formData.currentLocation}
                  onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                  placeholder="Hyderabad, Warangal, Karimnagar, etc."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Highest Qualification
                </label>
                <select
                  value={formData.highestQualification}
                  onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                >
                  <option value="Diploma / Technical ITI">Diploma / Technical ITI</option>
                  <option value="B.Tech / B.E. Engineering">B.Tech / B.E. Engineering</option>
                  <option value="B.Sc / Post-Basic Nursing">B.Sc / Post-Basic Nursing</option>
                  <option value="Degree / Hotel Management">Degree / Hotel Management</option>
                  <option value="High School / 10th Standard">High School / 10th Standard</option>
                </select>
              </div>
            </div>

            {/* Resume Upload Simulation */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Upload Resume / CV (PDF or DOC)
              </label>
              <div className="border border-dashed border-slate-300 rounded-lg p-3.5 bg-slate-50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600 truncate max-w-xs">
                    {fileName ? fileName : 'No file selected (Optional at this stage)'}
                  </span>
                </div>
                <label className="px-3 py-1 bg-white border border-slate-300 rounded text-[11px] font-bold text-slate-700 hover:bg-slate-100 cursor-pointer">
                  Browse
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Additional Remarks / Trade Certificates (e.g. AWS CWI, CSWIP, DHA license)
              </label>
              <textarea
                rows={2}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Mention valid Gulf licenses, GCC experience, or special trade certifications..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
              />
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Privacy & Compliance:</strong> Ummeed Global Resources never shares your personal data with unauthorized third parties. All submissions are processed directly through Indian MEA eMigrate approved standards.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#e85a4f] hover:bg-[#ae302a] disabled:opacity-50 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                {isSubmitting ? 'Registering...' : 'Submit Official Application'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
