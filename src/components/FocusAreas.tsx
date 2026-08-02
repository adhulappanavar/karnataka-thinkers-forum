import React, { useState } from 'react';
import { FOCUS_AREAS } from '../data/ktfData';
import { FocusArea } from '../types';
import { Scale, BookOpen, Building2, Users, Leaf, CheckCircle2, ArrowUpRight, ChevronRight } from 'lucide-react';

interface FocusAreasProps {
  lang: 'EN' | 'KN';
  onSelectAreaForRepresentation?: (areaTitle: string) => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Scale': return <Scale className="w-7 h-7" />;
    case 'BookOpen': return <BookOpen className="w-7 h-7" />;
    case 'Building2': return <Building2 className="w-7 h-7" />;
    case 'Users': return <Users className="w-7 h-7" />;
    case 'Leaf': return <Leaf className="w-7 h-7" />;
    default: return <Scale className="w-7 h-7" />;
  }
};

export const FocusAreas: React.FC<FocusAreasProps> = ({ lang, onSelectAreaForRepresentation }) => {
  const [selectedArea, setSelectedArea] = useState<FocusArea>(FOCUS_AREAS[0]);

  return (
    <section id="focus-areas" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
            {lang === 'KN' ? '೫ ಮುಖ್ಯ ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು' : 'Strategic Architecture'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {lang === 'KN' ? 'ಕಾರ್ಯನಿರ್ವಹಣೆಯ ೫ ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳು' : 'Five Core Areas of Focus'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Consolidating Karnataka Thinkers Forum's social objectives into five strategic operational pillars for research, advocacy, and grassroots empowerment.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {FOCUS_AREAS.map((area) => {
            const isSelected = selectedArea.id === area.id;
            return (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 relative flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-amber-700 text-white shadow-xl scale-102 border-amber-800 ring-2 ring-amber-500'
                    : 'bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xs'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-bold shadow-sm ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}>
                    {getIcon(area.iconName)}
                  </div>
                  
                  <span className={`text-[11px] font-extrabold uppercase tracking-widest ${
                    isSelected ? 'text-amber-200' : 'text-amber-700 dark:text-amber-400'
                  }`}>
                    Area 0{area.number}
                  </span>
                  
                  <h3 className="text-base font-bold leading-snug mt-1">
                    {area.title}
                  </h3>
                  
                  <p className={`text-xs mt-1 font-medium ${
                    isSelected ? 'text-amber-100' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {area.kannadaTitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
                  <span>{area.includes.length} Key Sub-domains</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Focus Area Deep-Dive Panel */}
        <div className="mt-8 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-500/30">
                  Detailed Breakdown • Area 0{selectedArea.number}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedArea.kannadaTitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {selectedArea.title}
              </h3>

              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                <span className="text-[11px] uppercase font-bold text-amber-400 tracking-wider">
                  Strategic Rationale (Why it belongs)
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-serif italic">
                  "{selectedArea.whyItBelongs}"
                </p>
              </div>

              {onSelectAreaForRepresentation && (
                <div className="pt-2">
                  <button
                    onClick={() => onSelectAreaForRepresentation(selectedArea.title)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-colors shadow-md"
                  >
                    <span>Submit Public Query / Representation in this Area</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Sub-items List */}
            <div className="lg:col-span-5 bg-slate-800/90 p-5 rounded-2xl border border-slate-700/80 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center justify-between border-b border-slate-700 pb-2">
                <span>Included Action Programs</span>
                <span className="text-xs text-amber-400 font-semibold">{selectedArea.includes.length} Domains</span>
              </h4>

              <div className="space-y-2.5">
                {selectedArea.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/50">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
