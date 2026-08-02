import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const KtfLogo: React.FC<LogoProps> = ({ className = '', size = 56, showText = true }) => {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md transition-transform duration-300 hover:scale-105"
        aria-label="Karnataka Thinkers Forum Logo"
      >
        <defs>
          {/* Circular Text Paths */}
          <path id="topTextArc" d="M 45, 150 A 105,105 0 0,1 255,150" />
          <path id="bottomTextArc" d="M 255, 150 A 105,105 0 0,1 45,150" />
          
          <radialGradient id="goldRing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="70%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </radialGradient>

          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer People Chain Ring (Navy Blue background & figures) */}
        <circle cx="150" cy="150" r="142" fill="#0F2147" />

        {/* Outer Stylized Cutouts / Teeth representing united citizens holding hands */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={i} transform={`rotate(${angle} 150 150)`}>
              <circle cx="150" cy="10" r="5" fill="#0F2147" />
              <circle cx="150" cy="16" r="3.5" fill="#FFFDF0" />
            </g>
          );
        })}

        {/* Golden / Cream Ring */}
        <circle cx="150" cy="150" r="128" fill="url(#goldRing)" stroke="#D97706" strokeWidth="2.5" />
        <circle cx="150" cy="150" r="92" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" />

        {/* Text on Top Arc (Kannada) */}
        <text fill="#0F2147" fontSize="15" fontWeight="900" fontFamily="sans-serif">
          <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
            ಕರ್ನಾಟಕ ಥಿಂಕರ್ಸ್ ಫೋರಂ (ರ)
          </textPath>
        </text>

        {/* Text on Bottom Arc (English) */}
        <text fill="#0F2147" fontSize="13.5" fontWeight="900" letterSpacing="0.6" fontFamily="sans-serif">
          <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
            KARNATAKA THINKERS FORUM (R)
          </textPath>
        </text>

        {/* Decorative Red Side Dots */}
        <circle cx="48" cy="150" r="5.5" fill="#991B1B" />
        <circle cx="252" cy="150" r="5.5" fill="#991B1B" />

        {/* Inner Emblem - Tricolor Background Circle */}
        <g clipPath="url(#innerClip)">
          <clipPath id="innerClip">
            <circle cx="150" cy="150" r="90" />
          </clipPath>

          {/* Saffron Top */}
          <rect x="50" y="60" width="200" height="55" fill="#EA580C" />
          {/* White Middle */}
          <rect x="50" y="115" width="200" height="40" fill="#FFFFFF" />
          {/* Green Bottom */}
          <rect x="50" y="155" width="200" height="80" fill="#15803D" />

          {/* Scales of Justice ⚖️ in Saffron Band */}
          <g transform="translate(150, 92)" stroke="#FFFFFF" strokeWidth="2.5" fill="none">
            {/* Center Pillar & Beam */}
            <line x1="0" y1="-22" x2="0" y2="12" strokeWidth="3" />
            <line x1="-32" y1="-14" x2="32" y2="-14" strokeWidth="3" />
            <path d="M -12, 12 L 12, 12" strokeWidth="3" />
            {/* Left Pan */}
            <line x1="-32" y1="-14" x2="-44" y2="0" strokeWidth="1.5" />
            <line x1="-32" y1="-14" x2="-20" y2="0" strokeWidth="1.5" />
            <path d="M -46, 0 C -46, 10 -18, 10 -18, 0 Z" fill="#FFFFFF" fillOpacity="0.9" stroke="none" />
            {/* Right Pan */}
            <line x1="32" y1="-14" x2="20" y2="0" strokeWidth="1.5" />
            <line x1="32" y1="-14" x2="44" y2="0" strokeWidth="1.5" />
            <path d="M 18, 0 C 18, 10 46, 10 46, 0 Z" fill="#FFFFFF" fillOpacity="0.9" stroke="none" />
            {/* Top Knob */}
            <circle cx="0" cy="-22" r="3" fill="#FFFFFF" />
          </g>

          {/* Central Main Raised Fist (Navy Blue) */}
          <g transform="translate(150, 165)" filter="url(#shadow)">
            {/* Main Arm & Fist */}
            <path
              d="M -20,60 L -18,0 C -18,-15 -10,-24 0,-24 C 10,-24 18,-15 18,0 L 20,60 Z"
              fill="#0F2147"
            />
            {/* Knuckles & Thumb */}
            <path d="M -14,-10 C -14,-18 -6,-22 0,-22 C 6,-22 14,-18 14,-10 C 14,-4 10,0 0,0 C -10,0 -14,-4 -14,-10 Z" fill="#0F2147" stroke="#1E3A8A" strokeWidth="1" />
            <path d="M -12,-8 Q 0,-14 12,-8" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M -10,2 Q 0,-4 10,2" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.6" />
          </g>

          {/* Surrounding Multi-Colored Raised Fists representing diversity & collective solidarity */}
          {/* 1. Yellow/Orange (Far Left) */}
          <g transform="translate(102, 185) scale(0.65)">
            <path d="M -15,40 L -12,0 C -12,-12 -6,-18 0,-18 C 6,-18 12,-12 12,0 L 15,40 Z" fill="#D97706" />
            <path d="M -10,-6 C -10,-14 -4,-16 0,-16 C 4,-16 10,-14 10,-6 C 10,-2 6,2 0,2 C -6,2 -10,-2 -10,-6 Z" fill="#F59E0B" />
          </g>
          {/* 2. Purple (Left Inner) */}
          <g transform="translate(122, 175) scale(0.72)">
            <path d="M -15,40 L -12,0 C -12,-12 -6,-18 0,-18 C 6,-18 12,-12 12,0 L 15,40 Z" fill="#6B21A8" />
            <path d="M -10,-6 C -10,-14 -4,-16 0,-16 C 4,-16 10,-14 10,-6 C 10,-2 6,2 0,2 C -6,2 -10,-2 -10,-6 Z" fill="#A855F7" />
          </g>
          {/* 3. Cyan (Middle Left) */}
          <g transform="translate(140, 180) scale(0.68)">
            <path d="M -15,40 L -12,0 C -12,-12 -6,-18 0,-18 C 6,-18 12,-12 12,0 L 15,40 Z" fill="#0E7490" />
            <path d="M -10,-6 C -10,-14 -4,-16 0,-16 C 4,-16 10,-14 10,-6 C 10,-2 6,2 0,2 C -6,2 -10,-2 -10,-6 Z" fill="#06B6D4" />
          </g>
          {/* 4. Red (Right Inner) */}
          <g transform="translate(176, 175) scale(0.72)">
            <path d="M -15,40 L -12,0 C -12,-12 -6,-18 0,-18 C 6,-18 12,-12 12,0 L 15,40 Z" fill="#991B1B" />
            <path d="M -10,-6 C -10,-14 -4,-16 0,-16 C 4,-16 10,-14 10,-6 C 10,-2 6,2 0,2 C -6,2 -10,-2 -10,-6 Z" fill="#EF4444" />
          </g>
          {/* 5. Green (Far Right) */}
          <g transform="translate(198, 185) scale(0.65)">
            <path d="M -15,40 L -12,0 C -12,-12 -6,-18 0,-18 C 6,-18 12,-12 12,0 L 15,40 Z" fill="#3F6212" />
            <path d="M -10,-6 C -10,-14 -4,-16 0,-16 C 4,-16 10,-14 10,-6 C 10,-2 6,2 0,2 C -6,2 -10,-2 -10,-6 Z" fill="#84CC16" />
          </g>
        </g>
      </svg>

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
