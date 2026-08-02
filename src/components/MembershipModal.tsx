import React, { useState } from 'react';
import { MembershipForm } from '../types';
import { FOCUS_AREAS } from '../data/ktfData';
import { X, CheckCircle2, HeartHandshake, ShieldCheck, ArrowRight, UserCheck, Sparkles } from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'EN' | 'KN';
}

export const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState<MembershipForm>({
    fullName: '',
    email: '',
    phone: '',
    occupation: '',
    address: '',
    district: 'Dharwad',
    focusAreaInterests: [],
    statementOfPurpose: ''
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheckboxToggle = (areaTitle: string) => {
    setFormData(prev => {
      const exists = prev.focusAreaInterests.includes(areaTitle);
      return {
        ...prev,
        focusAreaInterests: exists
          ? prev.focusAreaInterests.filter(t => t !== areaTitle)
          : [...prev.focusAreaInterests, areaTitle]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `KTF-MEM-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  const resetAndClose = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      occupation: '',
      address: '',
      district: 'Dharwad',
      focusAreaInterests: [],
      statementOfPurpose: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedRef ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Form Header */}
            <div className="space-y-1 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'KN' ? 'ಸದಸ್ಯತ್ವ ಅರ್ಜಿ ನಮೂನೆ' : 'Official NGO Membership Application'}</span>
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {lang === 'KN' ? 'ಕರ್ನಾಟಕ ಥಿಂಕರ್ಸ್ ಫೋರಂ ಸದಸ್ಯರಾಗಿ' : 'Join Karnataka Thinkers Forum (R)'}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Participate in legal awareness drives, civic advocacy, seminars, and social justice programs across Karnataka.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Shri / Smt / Dr. Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  District / Location *
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Dharwad">Dharwad</option>
                  <option value="Hubballi">Hubballi</option>
                  <option value="Belagavi">Belagavi</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Kalaburagi">Kalaburagi</option>
                  <option value="Mysuru">Mysuru</option>
                  <option value="Other Karnataka District">Other District (Karnataka)</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Profession / Background
              </label>
              <input
                type="text"
                placeholder="e.g. Advocate, Teacher, Researcher, Student, Social Worker"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Focus Area Interests Checkboxes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Select Areas of Interest (5 Focus Areas)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FOCUS_AREAS.map((area) => {
                  const checked = formData.focusAreaInterests.includes(area.title);
                  return (
                    <button
                      type="button"
                      key={area.id}
                      onClick={() => handleCheckboxToggle(area.title)}
                      className={`text-left p-2.5 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                        checked
                          ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-400 font-bold'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                        checked ? 'bg-amber-600 text-white border-amber-600' : 'border-slate-400'
                      }`}>
                        {checked && '✓'}
                      </span>
                      <span className="truncate">{area.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Statement of Purpose */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Brief Statement of Purpose / Contribution
              </label>
              <textarea
                rows={3}
                placeholder="Share why you wish to join Karnataka Thinkers Forum and how you can contribute to legal awareness, research, or public cause..."
                value={formData.statementOfPurpose}
                onChange={(e) => setFormData({ ...formData, statementOfPurpose: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md flex items-center gap-2"
              >
                <span>Submit Membership Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Receipt Screen */
          <div className="text-center py-6 space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Application Submitted Successfully
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Welcome to Karnataka Thinkers Forum (R)
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Thank you for applying. Your application has been logged into the Membership Register for Executive Committee review.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-left max-w-md mx-auto text-xs space-y-2">
              <div className="flex justify-between border-b border-amber-200/60 dark:border-amber-800 pb-2">
                <span className="text-amber-800 dark:text-amber-400 font-bold">Reference Code:</span>
                <span className="font-mono font-extrabold text-amber-950 dark:text-amber-200">{submittedRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Applicant:</span>
                <span className="font-bold text-slate-900 dark:text-white">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">District:</span>
                <span className="font-bold text-slate-900 dark:text-white">{formData.district}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Official Desk:</span>
                <span className="font-bold text-slate-900 dark:text-white">karnatakathinkersforum.india@gmail.com</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md"
            >
              Done & Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
