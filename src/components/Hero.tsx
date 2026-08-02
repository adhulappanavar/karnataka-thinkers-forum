import React from 'react';
import { NGO_PROFILE } from '../data/ktfData';
import { Scale, HeartHandshake, ShieldCheck, ArrowRight, BookOpen, CheckCircle2, Award, Building2 } from 'lucide-react';

interface HeroProps {
  lang: 'EN' | 'KN';
  onExploreClick: () => void;
  onJoinClick: () => void;
  onArchiveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreClick, onJoinClick, onArchiveClick }) => {
  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-12 lg:py-20 border-b border-slate-200/80 dark:border-slate-800">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Registered Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-xs font-bold border border-amber-300 dark:border-amber-800 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>KARNATAKA SOCIETIES REGISTRATION ACT, 1960 • REG NO. 66/2012-13</span>
            </div>

            {/* Main NGO Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {NGO_PROFILE.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-400">
                {NGO_PROFILE.kannadaName}
              </p>
            </div>

            {/* Motto Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-l-4 border-amber-600 shadow-md dark:shadow-slate-950/50">
              <p className="text-xs uppercase font-extrabold tracking-widest text-amber-700 dark:text-amber-400 mb-1">
                {lang === 'KN' ? 'ಧ್ಯೇಯವಾಕ್ಯ (MOTTO)' : 'NGO MOTTO'}
              </p>
              <blockquote className="text-base sm:text-lg font-serif italic font-semibold text-slate-800 dark:text-slate-100">
                "{NGO_PROFILE.motto}"
              </blockquote>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                "{NGO_PROFILE.kannadaMotto}"
              </p>
            </div>

            {/* Vision Brief */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {NGO_PROFILE.vision}
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onJoinClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>{lang === 'KN' ? 'ಸದಸ್ಯತ್ವಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' : 'Apply for Membership'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-amber-600" />
                <span>{lang === 'KN' ? '5 ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳು' : 'Explore 5 Focus Areas'}</span>
              </button>

              <button
                onClick={onArchiveClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 border border-amber-200 dark:border-amber-900 transition-all"
              >
                <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>{lang === 'KN' ? 'ದಾಖಲೆಗಳ ಭಂಡಾರ' : 'Document Center'}</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Established 06 June 2012</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>Office: Dharwad, KA</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Non-Profit Society</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>100% Tax Compliant</span>
              </div>
            </div>

          </div>

          {/* Right Cards Column - Core Values & NGO Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-800/95 rounded-3xl p-6 shadow-xl border border-amber-100 dark:border-slate-700 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-6 bg-amber-600 rounded-full inline-block" />
                  {lang === 'KN' ? 'ಮೂಲ ಮೌಲ್ಯಗಳು' : 'Core NGO Values'}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
                  How We Work
                </span>
              </div>

              <div className="space-y-3.5">
                {NGO_PROFILE.coreValues.map((val, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 font-extrabold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Callout Footer */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-white text-xs space-y-1">
                <div className="font-bold flex items-center justify-between">
                  <span>Registered Contact Desk</span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Dharwad, KA</span>
                </div>
                <p className="text-amber-100 text-[11px] truncate">
                  Official Email: karnatakathinkersforum.india@gmail.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
