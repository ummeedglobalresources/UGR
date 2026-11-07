import React, { useState } from 'react';
import { EmployerInquiryData } from '../types.ts';
import { Building2, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

interface EmployerInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmployerInquiryModal: React.FC<EmployerInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<EmployerInquiryData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: 'Saudi Arabia',
    requiredTrades: '',
    estimatedHeadcount: '25 - 50 Personnel',
    targetMobilizationDate: 'Within 30 Days',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete company name, contact person, corporate email, and telephone.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `UGR-CORP-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmittedRef(null);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 bg-[#001428] text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffa41b] mb-1">
              <span>B2B Manpower Solutions</span>
              <span>·</span>
              <span>Hyderabad Delegation Center</span>
            </div>
            <h3 className="text-xl font-bold font-display">
              Request Indian Manpower Sourcing
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Partner with Ummeed Global Resources for bulk recruitment & client trade drives.
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 text-2xl font-bold cursor-pointer"
          >
            ×
          </button>
        </div>

        {submittedRef ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#001428] font-display mb-1">
              Hiring Requisition Received
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Assigned to Corporate Overseas Business Division, Hyderabad.
            </p>

            <div className="bg-[#f7f9fc] border border-slate-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left text-xs space-y-2">
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Requisition Dossier ID:</span>
                <span className="font-mono font-bold text-[#0f2942]">{submittedRef}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Enterprise Client:</span>
                <span className="font-semibold text-slate-800">{formData.companyName}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Destination:</span>
                <span className="font-semibold text-slate-800">{formData.country}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-500 font-medium">Estimated Headcount:</span>
                <span className="font-semibold text-slate-800">{formData.estimatedHeadcount}</span>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3.5 max-w-md mx-auto text-left text-xs text-emerald-900 mb-6">
              Our Overseas Corporate Account Director will review your manpower requisition and share pre-screened talent rosters and trade testing bay availability within 4 business hours.
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#0f2942] hover:bg-[#1b3b5f] rounded-lg transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Al Khobar General Contracting"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Contact Person & Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="e.g. Tariq Mansoor, HR Director"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hr@company.com"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp with Country Code *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+966 50 XXX XXXX"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Destination Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                >
                  <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                  <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Oman">Oman</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Germany">Germany</option>
                  <option value="Poland">Poland</option>
                  <option value="Singapore">Singapore</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Headcount Needed
                </label>
                <select
                  value={formData.estimatedHeadcount}
                  onChange={(e) => setFormData({ ...formData, estimatedHeadcount: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
                >
                  <option value="1 - 10 Positions">1 - 10 Specialized Roles</option>
                  <option value="11 - 25 Personnel">11 - 25 Personnel</option>
                  <option value="25 - 50 Personnel">25 - 50 Personnel</option>
                  <option value="50 - 150+ Bulk Mobilization">50 - 150+ Bulk Mobilization</option>
                  <option value="Annual Ongoing Framework">Annual Ongoing Framework</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Required Trades & Skill Specializations
              </label>
              <input
                type="text"
                value={formData.requiredTrades}
                onChange={(e) => setFormData({ ...formData, requiredTrades: e.target.value })}
                placeholder="e.g. 6G Welders, Riggers, Electrical QA/QC, ICU Nurses, Forklift Drivers"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Scope & Client Interview Preferences in Hyderabad
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify if you wish to conduct in-person trade testing at our Hyderabad center or online video evaluations, project location, etc."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f2942]"
              />
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
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#0f2942] hover:bg-[#1b3b5f] disabled:opacity-50 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Manpower Inquiry'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
