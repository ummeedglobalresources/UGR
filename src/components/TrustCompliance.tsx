import React, { useState } from 'react';
import { FAQS } from '../data/mockData.ts';
import {
  ShieldCheck,
  Award,
  FileCheck,
  ChevronDown,
  Building,
  CheckCircle,
  HelpCircle,
  Users,
} from 'lucide-react';

export const TrustCompliance: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="compliance" className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0f2942] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Statutory Government Authorization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001428] font-display mb-3">
                Government of India Licensed Overseas Recruiting Agency
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Ummeed Global Resources operates strictly within the statutory mandate of the Ministry of External Affairs (MEA), Protector General of Emigrants (PGE), Government of India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#001428] mb-1 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#e85a4f]" />
                    <span>MEA Registration Number</span>
                  </div>
                  <div className="font-mono text-slate-700 font-semibold">
                    B-1044/TEL/COM/1000+/5/9822/2021
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Authorized to mobilize unlimited skilled & technical workforce globally
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="font-bold text-[#001428] mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#ffa41b]" />
                    <span>Quality Management Standards</span>
                  </div>
                  <div className="font-semibold text-slate-700">
                    ISO 9001:2015 Accredited
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Audited processes for credential screening, ethics & consular delivery
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#001428] text-white rounded-xl text-center">
              <img
                src="/assets/aistudio/Ummeed_Global_Logo_16c2f50d.png"
                alt="Ummeed Global Resources Official Seal"
                className="w-24 h-24 object-contain mb-3 drop-shadow"
              />
              <div className="text-sm font-bold font-display uppercase tracking-wide">
                Ummeed Ethical Seal
              </div>
              <div className="text-xs text-[#ffa41b] font-medium mt-1">
                Zero Tolerance for Fraudulent Offers
              </div>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                All vacancy offers are verified against direct client master employment agreements and eMigrate demand quotas.
              </p>
            </div>

          </div>
        </div>

        {/* Global Deployment Photo Proof Strip */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div className="h-64 sm:h-72 w-full relative">
                <img
                  src="/src/assets/images/global_workforce_deployment_1794081469392.jpg"
                  alt="Ummeed Mobilized Overseas Professionals at International Hub"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#001428]/85 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md font-medium">
                  Deployed Batch #418 · Gulf Infrastructure & Healthcare
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001428] font-display mb-2">
                  Mobilizing Multi-Discipline Indian Talent Worldwide
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4">
                  From specialized certified welders, civil supervisors, and electrical engineers to ICU staff nurses and hospital administrators, our pre-departure preparation ensures day-one productivity abroad.
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span>Pre-Departure Orientation Completed</span>
                  <span aria-hidden="true">·</span>
                  <span>Full Ticket & Visa Provided</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div className="h-64 sm:h-72 w-full relative">
                <img
                  src="/src/assets/images/overseas_recruitment_consulting_1794081469369.jpg"
                  alt="Ummeed International Corporate Recruitment Briefing in Hyderabad"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#001428]/85 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md font-medium">
                  Client Interview Campaign · Hyderabad Executive Suites
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001428] font-display mb-2">
                  Transparent Corporate Recruitment Campaigns
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4">
                  Foreign HR managers and technical evaluators regularly visit our Hyderabad testing center for live practical trade screening, face-to-face candidate interviews, and immediate offer letter signing.
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span>Trade Verification Record</span>
                  <span aria-hidden="true">·</span>
                  <span>Real-time Offer Generation</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0f2942] uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4 text-[#e85a4f]" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001428] font-display">
              Frequently Asked Questions on Overseas Placement
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#001428] font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#e85a4f]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
