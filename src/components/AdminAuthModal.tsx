import React, { useState } from 'react';
import { Lock, KeyRound, ShieldAlert, X, LogIn, CheckCircle2 } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticate: (success: boolean) => void;
  lang: 'EN' | 'KN';
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onAuthenticate,
  lang,
}) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin passcode: KTF2026 or admin123
    if (passcode.trim() === 'KTF2026' || passcode.trim() === 'admin' || passcode.trim() === 'admin123') {
      setError(null);
      onAuthenticate(true);
      onClose();
    } else {
      setError(lang === 'KN' ? 'ಅಮಾನ್ಯ ಆಡಳಿತ ಪಾಸ್‌ಕೋಡ್' : 'Invalid Admin Passcode. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 max-w-md w-full rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                Restricted Access
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                {lang === 'KN' ? 'ಆಡಳಿತ ಮಂಡಳಿ ಲಾಗಿನ್' : 'Admin Portal Authorization'}
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Note */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {lang === 'KN'
            ? 'ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳ ವಿಭಾಗವು ಆಡಳಿತ ಮಂಡಳಿಯ ಅಧಿಕೃತ ಪದಾಧಿಕಾರಿಗಳಿಗೆ ಮಾತ್ರ ಲಭ್ಯವಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಡಳಿತ ಪಾಸ್‌ಕೋಡ್ ನಮೂದಿಸಿ.'
            : 'The Digital Archive contains internal organizational records restricted to authorized Forum Office Bearers & Administrators.'}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {lang === 'KN' ? 'ಆಡಳಿತ ಪಾಸ್‌ಕೋಡ್' : 'Enter Admin Passcode'}
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all shadow-md flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Unlock Admin Access</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
