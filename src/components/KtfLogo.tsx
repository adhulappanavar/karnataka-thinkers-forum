import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const KtfLogo: React.FC<LogoProps> = ({ className = '', size = 48, showText = true }) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="./ktf-logo.jpg"
        alt="Karnataka Thinkers Forum Logo"
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full object-cover shadow-sm transition-transform duration-300 hover:scale-105 border border-amber-200/50"
      />

      {showText && (
        <div className="flex flex-col justify-center min-w-0 leading-tight">
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-amber-700 dark:text-amber-400 uppercase leading-snug">
            ಕರ್ನಾಟಕ ಥಿಂಕರ್ಸ್ ಫೋರಂ (ರ)
          </span>
          <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 dark:text-white leading-tight truncate">
            Karnataka Thinkers Forum <span className="text-amber-600 font-semibold text-xs">(R)</span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
            Reg No: 66/2012-13 • Dharwad
          </span>
        </div>
      )}
    </div>
  );
};
