import React from 'react';
import { GOVERNANCE_DATA } from '../data/ktfData';
import { Users, ShieldAlert, CheckCircle2, ListChecks, UserPlus, AlertCircle, FileCheck2, ArrowRight } from 'lucide-react';

interface GovernanceSectionProps {
  lang: 'EN' | 'KN';
  onOpenMembership: () => void;
}

export const GovernanceSection: React.FC<GovernanceSectionProps> = ({ lang, onOpenMembership }) => {
  return (
    <section id="governance" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
            {lang === 'KN' ? 'ಆಡಳಿತ ಮತ್ತು ಪದಾಧಿಕಾರಿಗಳು' : 'Governance & Committee'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {lang === 'KN' ? 'ಕಾರ್ಯಕಾರಿಣಿ ಸಮಿತಿ ಮತ್ತು ಸದ್ಯದ ಸ್ಥಿತಿ (೨೦೧೨ – ೨೦೨೬)' : 'Executive Governance & Organizational Status'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Official record of Founding Office Bearers (2012), current executive committee reorganization, statutory filings, and administrative transition action items.
          </p>
        </div>

        {/* 2-Column Comparison: Founding (2012) vs Current (2026) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Founding Office Bearers (2012) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                  Established 06 June 2012
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                  Founding Office Bearers (2012)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 text-xs font-bold">
                7 Founding Trustees
              </span>
            </div>

            <div className="space-y-3">
              {GOVERNANCE_DATA.foundingOfficeBearers.map((bearer, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                      {bearer.role.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                        {bearer.role}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {bearer.name}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-200 dark:bg-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md">
                    2012 Charter
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Governance Status (2026) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-200 dark:border-amber-900/60 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Active Tenure Update
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                  Current Committee Status (2026)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold">
                Active Organization
              </span>
            </div>

            <div className="space-y-3">
              {GOVERNANCE_DATA.currentOfficeBearers.map((bearer, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition-colors ${
                    bearer.status === 'Active'
                      ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                      bearer.status === 'Active' ? 'bg-amber-600 text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {bearer.role.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                        {bearer.role}
                      </span>
                      <h4 className={`text-sm font-bold ${bearer.isVacancy ? 'text-amber-800 dark:text-amber-300 italic' : 'text-slate-900 dark:text-white'}`}>
                        {bearer.name}
                      </h4>
                    </div>
                  </div>

                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md ${
                    bearer.status === 'Active'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
                  }`}>
                    {bearer.status || 'Vacancy Proposed'}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenMembership}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold text-xs flex items-center justify-center gap-2 hover:from-amber-700 hover:to-amber-800 transition-all shadow-md"
              >
                <UserPlus className="w-4 h-4" />
                <span>Express Interest for Executive Committee / Membership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Action Items & Document Status Box */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Immediate Action Items (PDF page 8-9) */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <ListChecks className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">PDF Section 09</span>
                <h3 className="text-lg font-bold text-white">Immediate Administrative Action Plan</h3>
              </div>
            </div>

            <div className="space-y-3">
              {GOVERNANCE_DATA.immediateActionItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Document Status Checklists */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Available Docs */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-emerald-200 dark:border-emerald-950 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Documents Verified & Available</span>
              </h4>
              <ul className="space-y-2">
                {GOVERNANCE_DATA.documentsAvailable.map((doc, idx) => (
                  <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Docs to be Organized */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-amber-200 dark:border-amber-950 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <span>Documents Being Organized</span>
              </h4>
              <ul className="space-y-2">
                {GOVERNANCE_DATA.documentsToOrganize.slice(0, 5).map((doc, idx) => (
                  <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
