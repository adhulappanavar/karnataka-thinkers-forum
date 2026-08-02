import React, { useState } from 'react';
import { PublicRepresentation } from '../types';
import { X, Send, ShieldCheck, CheckCircle2, MessageSquare, Scale } from 'lucide-react';

interface PublicVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'EN' | 'KN';
  prefilledArea?: string;
}

export const PublicVoiceModal: React.FC<PublicVoiceModalProps> = ({
  isOpen,
  onClose,
  lang,
  prefilledArea = ''
}) => {
  const [topic, setTopic] = useState(prefilledArea || 'General Public Policy Issue');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('Dharwad');
  const [details, setDetails] = useState('');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const repId = `KTF-REP-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedId(repId);
  };

  const resetAndClose = () => {
    setSubmittedId(null);
    setName('');
    setEmail('');
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 max-w-xl w-full rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative my-8">
        
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedId ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300">
                <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'KN' ? 'ಸಾರ್ವಜನಿಕ ಮನವಿ ಮತ್ತು ಕುಂದುಕೊರತೆ' : 'Submit Representation / Public Issue'}</span>
              </span>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {lang === 'KN' ? 'ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಕೆ.ಟಿ.ಎಫ್ ಗೆ ತಲುಪಿಸಿ' : 'Voice Your Issue to Karnataka Thinkers Forum'}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Submit civic concerns, sugarcane farmer issues, legal awareness requests, or urban planning representations for KTF executive committee action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Topic / Category *
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Justice & Human Rights">Justice & Human Rights</option>
                  <option value="Legal Awareness & Advice">Legal Awareness & Advice</option>
                  <option value="Urban Transit & BRTS Advocacy">Urban Transit & Infrastructure</option>
                  <option value="Farmer Dues & Agriculture">Farmer Dues & Agriculture</option>
                  <option value="Panchayat Raj & Civic Governance">Panchayat Raj & Civic Governance</option>
                  <option value="General Public Policy Issue">General Public Policy Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  District *
                </label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Details of Representation / Issue *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe the problem, government policy concern, or legal awareness request in detail..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Representation</span>
              </button>
            </div>

          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Representation Received
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              Your memorandum has been logged under ID <strong className="font-mono text-amber-600">{submittedId}</strong> and forwarded to the KTF Executive Committee in Dharwad.
            </p>

            <button
              onClick={resetAndClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
