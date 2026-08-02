import React, { useState } from 'react';
import { KtfLogo } from './KtfLogo';
import { Menu, X, Globe, HeartHandshake, FileText, Users, Building, Scale, Lock, LogOut, ShieldCheck, Award, Palette, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  lang: 'EN' | 'KN';
  setLang: (lang: 'EN' | 'KN') => void;
  onOpenMembership: () => void;
  onOpenVoiceModal: () => void;
  isAdminAuthenticated: boolean;
  onOpenAdminLogin: () => void;
  onAdminLogout: () => void;
  onOpenThemeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  lang,
  setLang,
  onOpenMembership,
  onOpenVoiceModal,
  isAdminAuthenticated,
  onOpenAdminLogin,
  onAdminLogout,
  onOpenThemeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme, toggleLightDark } = useTheme();

  const navItems = [
    { id: 'overview', label: lang === 'KN' ? 'ಮುಖಪುಟ' : 'Overview', icon: Building },
    { id: 'focus-areas', label: lang === 'KN' ? '5 ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳು' : '5 Focus Areas', icon: Scale },
    { id: 'objectives', label: lang === 'KN' ? 'ಉದ್ದೇಶಗಳು' : '13 Objectives', icon: FileText },
    { id: 'districts', label: lang === 'KN' ? 'ಜಿಲ್ಲಾಧ್ಯಕ್ಷರು' : 'District Presidents', icon: Award },
    { id: 'timeline', label: lang === 'KN' ? 'ಇತಿಹಾಸ & ಸಾಧನೆಗಳು' : 'History & Timeline', icon: FileText, isProtected: true },
    { id: 'governance', label: lang === 'KN' ? 'ಆಡಳಿತ ಮಂಡಳಿ' : 'Governance', icon: Users },
    { id: 'archive', label: lang === 'KN' ? 'ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳು' : 'Digital Archive', icon: FileText, isProtected: true },
  ];

  const handleNavClick = (id: string, isProtected?: boolean) => {
    if (isProtected && !isAdminAuthenticated) {
      onOpenAdminLogin();
      return;
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      {/* Top NGO Banner Strip */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-semibold bg-amber-950/40 px-2 py-0.5 rounded text-[11px] border border-amber-600/30">
              REGD. NGO #66/2012-13
            </span>
            <span className="hidden sm:inline text-amber-100/90 font-medium">
              Registered under Karnataka Societies Registration Act, 1960 • Dharwad
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-[11px]">
            <a
              href="mailto:karnatakathinkersforum.india@gmail.com"
              className="hidden md:flex hover:underline text-amber-200 transition-colors items-center gap-1"
            >
              ✉️ karnatakathinkersforum.india@gmail.com
            </a>

            {/* Admin Login / Logout Badge in Top Strip */}
            {isAdminAuthenticated ? (
              <div className="flex items-center gap-2 bg-emerald-950/80 text-emerald-200 px-2.5 py-0.5 rounded border border-emerald-500/40 font-bold">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Admin Active</span>
                <button
                  onClick={onAdminLogout}
                  className="ml-1 text-[10px] text-amber-200 hover:underline flex items-center gap-0.5"
                  title="Log out from Admin mode"
                >
                  <LogOut className="w-3 h-3" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAdminLogin}
                className="inline-flex items-center gap-1 bg-amber-950/60 hover:bg-amber-950 px-2 py-0.5 rounded font-medium text-amber-200 transition-colors border border-amber-500/30"
                title="Admin Portal Login"
              >
                <Lock className="w-3 h-3" />
                <span>Admin Login</span>
              </button>
            )}

            {/* Theme Selector Trigger in Top Bar */}
            <button
              onClick={onOpenThemeModal}
              className="inline-flex items-center gap-1.5 bg-amber-950/60 hover:bg-amber-950 px-2.5 py-0.5 rounded font-medium text-amber-200 hover:text-white transition-colors border border-amber-500/40 shadow-xs cursor-pointer"
              title="Change Theme / ಥೀಮ್ ಬದಲಾಯಿಸಿ"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline font-bold">Theme: {currentTheme.name}</span>
              <span className="sm:hidden font-bold">Theme</span>
              <span
                className="w-2 h-2 rounded-full border border-amber-400/50 shrink-0"
                style={{ backgroundColor: currentTheme.colors.primary }}
              />
            </button>

            <button
              onClick={() => setLang(lang === 'EN' ? 'KN' : 'EN')}
              className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded font-medium text-amber-100 transition-colors border border-white/20"
              title="Toggle Language / ಭಾಷೆ ಬದಲಾಯಿಸಿ"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'EN' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('overview')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1 shrink-0 my-auto"
          >
            <KtfLogo size={44} showText={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isLocked = item.isProtected && !isAdminAuthenticated;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.isProtected)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 font-bold shadow-xs'
                      : 'text-slate-700 hover:text-amber-800 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-amber-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {isLocked && (
                    <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Selector Button */}
            <button
              onClick={onOpenThemeModal}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all border border-slate-300/80 dark:border-slate-700"
              title="Select Theme / ಥೀಮ್‌ಗಳು"
            >
              <Palette className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Theme: {currentTheme.badge}</span>
            </button>

            <button
              onClick={onOpenVoiceModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all border border-slate-300/80 dark:border-slate-700"
            >
              💬 Submit Issue / Request
            </button>

            <button
              onClick={onOpenMembership}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{lang === 'KN' ? 'ಸದಸ್ಯರಾಗಿ ಸೇರಿ' : 'Join as Member'}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button & Quick Theme Switch */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenThemeModal}
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-xs font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-1"
              title="Theme Switcher"
            >
              <Palette className="w-4 h-4 text-amber-500" />
            </button>
            <button
              onClick={() => setLang(lang === 'EN' ? 'KN' : 'EN')}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-xs font-bold border border-slate-200 dark:border-slate-700"
            >
              {lang === 'EN' ? 'ಕನ್ನಡ' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-3 ${
                activeSection === item.id
                  ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-bold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <item.icon className="w-4 h-4 text-amber-600" />
              <span>{item.label}</span>
            </button>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenThemeModal();
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg text-xs font-bold text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center gap-2"
            >
              <Palette className="w-4 h-4 text-amber-600" />
              <span>
                {lang === 'KN' ? 'ಥೀಮ್‌ ಆಯ್ಕೆ (6 Themes)' : `Theme: ${currentTheme.name}`}
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVoiceModal();
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
            >
              💬 Submit Issue / Representation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMembership();
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-sm"
            >
              🤝 Join as Member / Volunteer
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
