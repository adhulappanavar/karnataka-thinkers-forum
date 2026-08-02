import React, { useState } from 'react';
import { OBJECTIVES } from '../data/ktfData';
import { ObjectiveItem } from '../types';
import { Search, HeartHandshake, ShieldCheck, GraduationCap, FileSearch, Sparkles, Vote, Users2, Handshake, Landmark, Network, BookOpenCheck, Flame, BadgeDollarSign, Filter } from 'lucide-react';

interface ObjectivesProps {
  lang: 'EN' | 'KN';
}

const getObjectiveIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 text-amber-600 dark:text-amber-400" };
  switch (iconName) {
    case 'HeartHandshake': return <HeartHandshake {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'GraduationCap': return <GraduationCap {...props} />;
    case 'FileSearch': return <FileSearch {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Vote': return <Vote {...props} />;
    case 'Users2': return <Users2 {...props} />;
    case 'Handshake': return <Handshake {...props} />;
    case 'Landmark': return <Landmark {...props} />;
    case 'Network': return <Network {...props} />;
    case 'BookOpenCheck': return <BookOpenCheck {...props} />;
    case 'Flame': return <Flame {...props} />;
    case 'BadgeDollarSign': return <BadgeDollarSign {...props} />;
    default: return <ShieldCheck {...props} />;
  }
};

export const Objectives: React.FC<ObjectivesProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Social Justice', 'Legal & Constitutional', 'Knowledge & Education', 'Research', 'Youth & Community', 'Rights & Governance'];

  const filteredObjectives = OBJECTIVES.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="objectives" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
            {lang === 'KN' ? '೧೩ ಶಾಸನಬದ್ಧ ಉದ್ದೇಶಗಳು' : 'Statutory Charter'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {lang === 'KN' ? 'ಸಂಸ್ಥೆಯ ೧೩ ಮೂಲಭೂತ ಉದ್ದೇಶಗಳು' : 'The 13 Foundational Objectives'}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Enshrined in the Memorandum of Association registered under the Karnataka Societies Registration Act 1960.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search objectives..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-700 text-white font-bold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Objectives Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredObjectives.map((obj) => (
            <div
              key={obj.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center">
                    {getObjectiveIcon(obj.icon)}
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Objective #{obj.id}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {obj.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {obj.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-md">
                  {obj.category}
                </span>
                <span className="text-slate-400 font-mono">Sec. 3(b)</span>
              </div>
            </div>
          ))}
        </div>

        {filteredObjectives.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-sm font-semibold text-slate-500">No objectives found matching "{searchTerm}"</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-amber-600 font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
