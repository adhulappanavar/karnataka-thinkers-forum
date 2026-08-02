import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/ktfData';
import { TimelineEvent } from '../types';
import { Calendar, Award, Building, LandPlot, Gavel, CheckCircle2, ChevronRight, FileText, Sparkles } from 'lucide-react';

interface TimelineSectionProps {
  lang: 'EN' | 'KN';
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ lang }) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(TIMELINE_EVENTS[0]);

  return (
    <section id="timeline" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
            {lang === 'KN' ? 'ಇತಿಹಾಸ ಮತ್ತು ಸಾಧನೆಗಳು' : 'Key Milestones & Public Advocacy'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {lang === 'KN' ? 'ಸಂಸ್ಥೆಯ ಹಾದಿ ಮತ್ತು ಸಾಮಾಜಿಕ ಹೋರಾಟಗಳು (೨೦೧೨ – ೨೦೨೬)' : 'Chronological Journey of Action (2012 – 2026)'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Documented timeline of KTF representations to Chief Ministers, public policy intervention on urban planning (BRTS & flyovers), support for legal education, and statutory compliance.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Event Items Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative border-l-2 border-amber-200 dark:border-amber-900/60 ml-4 space-y-6 pl-6">
              {TIMELINE_EVENTS.map((item, idx) => {
                const isSelected = selectedEvent.formattedDate === item.formattedDate;
                return (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div className={`absolute -left-[31px] top-1.5 w-5 h-5 rounded-full border-2 transition-all ${
                      isSelected
                        ? 'bg-amber-600 border-white dark:border-slate-900 ring-4 ring-amber-500/30 scale-125'
                        : 'bg-white dark:bg-slate-900 border-amber-500 hover:border-amber-700'
                    }`} />

                    <button
                      onClick={() => setSelectedEvent(item)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all border ${
                        isSelected
                          ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 dark:border-amber-800 shadow-md'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-extrabold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.formattedDate}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          item.highlight ? 'bg-amber-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                        {item.event}
                      </h3>

                      {item.kannadaEvent && (
                        <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mt-0.5">
                          {item.kannadaEvent}
                        </p>
                      )}

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center justify-end text-xs font-bold text-amber-600 dark:text-amber-400">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Selected Event Deep Detail Panel */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                    Documented Event Detail
                  </span>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                  {selectedEvent.formattedDate}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {selectedEvent.event}
                </h3>
                {selectedEvent.kannadaEvent && (
                  <p className="text-sm font-bold text-amber-400 mt-1">
                    {selectedEvent.kannadaEvent}
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Historical Record & Impact
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Special Context Badges for Famous Interventions */}
              {selectedEvent.event.includes("Chief Minister") && (
                <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-600/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Representation to CM Siddaramaiah (18 Dec 2014)</span>
                  </div>
                  <ul className="text-xs text-amber-100/90 space-y-1 pl-5 list-disc">
                    <li>Advocated sugarcane farmers' pending financial dues.</li>
                    <li>Demanded expedited Kalasa-Banduri Nala Link drinking water project.</li>
                    <li>Urged state intervention on Belagavi border resolution.</li>
                  </ul>
                </div>
              )}

              {selectedEvent.event.includes("Flyover") && (
                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-600/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span>HDBRTS Toll Naka - Jubilee Circle Flyover Opposition</span>
                  </div>
                  <p className="text-xs text-blue-100/90 leading-relaxed">
                    KTF championed sustainable urban planning, arguing for wider roads and green space protection rather than high-cost elevated flyovers that disrupt city heritage.
                  </p>
                </div>
              )}

              {selectedEvent.event.includes("Moot Court") && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-600/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                    <Gavel className="w-4 h-4 text-emerald-400" />
                    <span>Karnataka State Law University (KSLU) Support</span>
                  </div>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    Financial sponsorship of ₹25,000 towards prize money for the International Moot Court Competition to foster constitutional research among law students.
                  </p>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Category: <strong className="text-slate-200">{selectedEvent.category}</strong></span>
                <span>KTF Official Archives</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
