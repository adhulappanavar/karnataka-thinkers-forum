import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const KtfLogo: React.FC<LogoProps> = ({ className = '', size = 56, showText = true }) => {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <img
        src="./ktf-logo.jpg"
        alt="Karnataka Thinkers Forum Logo"
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105 border border-amber-200/50"
      />

      {showText && (
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-wider text-amber-700 dark:text-amber-400 uppercase">
            ಕರ್ನಾಟಕ ಥಿಂಕರ್ಸ್ ಫೋರಂ (ರ)
          </span>
          <span className="text-base font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Karnataka Thinkers Forum <span className="text-amber-600 font-semibold text-xs">(R)</span>
          </span>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Reg No: 66/2012-13 • Dharwad
          </span>
        </div>
      )}
    </div>
  );
};
