import React from 'react';
import { KtfLogo } from './KtfLogo';
import { NGO_PROFILE } from '../data/ktfData';
import { Mail, MapPin, ShieldCheck, Heart, ExternalLink, Globe, FileText } from 'lucide-react';

interface FooterProps {
  lang: 'EN' | 'KN';
  onNavClick: (section: string) => void;
  onOpenMembership: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavClick, onOpenMembership }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* NGO Brand & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <KtfLogo size={56} showText={true} className="text-white" />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Registered Non-Governmental Organization (NGO) committed to building an informed, responsible, equitable, and progressive society through research, legal awareness, and civic advocacy in Karnataka.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-1">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                NGO Motto / ಧ್ಯೇಯವಾಕ್ಯ
              </span>
              <p className="font-serif italic text-amber-100 font-medium">
                "{NGO_PROFILE.motto}"
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => onNavClick('overview')} className="hover:text-amber-400 transition-colors">
                  Overview & Vision
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('focus-areas')} className="hover:text-amber-400 transition-colors">
                  5 Focus Areas
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('objectives')} className="hover:text-amber-400 transition-colors">
                  13 Objectives
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('timeline')} className="hover:text-amber-400 transition-colors">
                  Historical Timeline
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('governance')} className="hover:text-amber-400 transition-colors">
                  Governance (2012-2026)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('archive')} className="hover:text-amber-400 transition-colors">
                  Digital Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Focus Areas Summary */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>⚖️ Justice & Human Rights</li>
              <li>📖 Knowledge & Research</li>
              <li>🏛️ Governance & Civic Action</li>
              <li>🤝 Community Development</li>
              <li>🌱 Sustainable Development</li>
            </ul>
          </div>

          {/* Registration & Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Official Desk & Registry
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Reg No. 66/2012-13</span>
                  <span className="text-slate-400 text-[11px]">Karnataka Societies Registration Act, 1960</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Registered Office</span>
                  <span className="text-slate-400 text-[11px]">Dharwad, Karnataka, India</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Official Contact Email</span>
                  <a
                    href="mailto:karnatakathinkersforum.india@gmail.com"
                    className="text-amber-300 hover:underline text-[11px]"
                  >
                    karnatakathinkersforum.india@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenMembership}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Join as Volunteer / Member
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2012–2026 <strong className="text-slate-300">Karnataka Thinkers Forum (R)</strong>. Registered Society No. 66/2012-13. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Dharwad, Karnataka</span>
            <span>•</span>
            <button onClick={() => onNavClick('archive')} className="hover:underline">Statutory Archive</button>
            <span>•</span>
            <button onClick={() => onNavClick('governance')} className="hover:underline">Committee Status</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
