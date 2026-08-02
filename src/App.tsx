import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FocusAreas } from './components/FocusAreas';
import { Objectives } from './components/Objectives';
import { TimelineSection } from './components/TimelineSection';
import { GovernanceSection } from './components/GovernanceSection';
import { ArchiveExplorer } from './components/ArchiveExplorer';
import { Footer } from './components/Footer';
import { MembershipModal } from './components/MembershipModal';
import { PublicVoiceModal } from './components/PublicVoiceModal';
import { AdminAuthModal } from './components/AdminAuthModal';
import { Lock, ShieldAlert, KeyRound } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [lang, setLang] = useState<'EN' | 'KN'>('EN');
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [prefilledArea, setPrefilledArea] = useState('');
  
  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('ktf_admin_auth') === 'true';
  });
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const handleAdminAuthenticate = (success: boolean) => {
    if (success) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('ktf_admin_auth', 'true');
      handleNavClick('archive');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('ktf_admin_auth');
    if (activeSection === 'archive') {
      setActiveSection('overview');
    }
  };

  const handleSelectAreaForRepresentation = (areaTitle: string) => {
    setPrefilledArea(areaTitle);
    setIsVoiceModalOpen(true);
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'archive' && !isAdminAuthenticated) {
      setIsAdminModalOpen(true);
      return;
    }
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* Sticky Header Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        lang={lang}
        setLang={setLang}
        onOpenMembership={() => setIsMembershipOpen(true)}
        onOpenVoiceModal={() => {
          setPrefilledArea('');
          setIsVoiceModalOpen(true);
        }}
        isAdminAuthenticated={isAdminAuthenticated}
        onOpenAdminLogin={() => setIsAdminModalOpen(true)}
        onAdminLogout={handleAdminLogout}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onExploreClick={() => handleNavClick('focus-areas')}
          onJoinClick={() => setIsMembershipOpen(true)}
          onArchiveClick={() => handleNavClick('archive')}
        />

        {/* 5 Focus Areas */}
        <FocusAreas
          lang={lang}
          onSelectAreaForRepresentation={handleSelectAreaForRepresentation}
        />

        {/* 13 Statutory Objectives */}
        <Objectives lang={lang} />

        {/* Chronological Timeline & Milestones */}
        <TimelineSection lang={lang} />

        {/* Governance & Leadership Committee */}
        <GovernanceSection
          lang={lang}
          onOpenMembership={() => setIsMembershipOpen(true)}
        />

        {/* Digital Archive Explorer (Admin Protected) */}
        {isAdminAuthenticated ? (
          <ArchiveExplorer lang={lang} />
        ) : (
          <section id="archive" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-5 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 flex items-center justify-center mx-auto shadow-sm">
                  <Lock className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                    Admin Portal Protected
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {lang === 'KN' ? 'ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳು (ಆಡಳಿತ ಮಂಡಳಿಗೆ ಮಾತ್ರ)' : 'Digital Archive Access Restricted'}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                  {lang === 'KN'
                    ? 'ಈ ವಿಭಾಗವು ಕರ್ನಾಟಕ ಥಿಂಕರ್ಸ್ ಫೋರಂನ ಆಡಳಿತ ಮಂಡಳಿ ಮತ್ತು ಅಧಿಕೃತ ಪದಾಧಿಕಾರಿಗಳಿಗೆ ಮಾತ್ರ ಮೀಸಲಾಗಿದೆ. ದಾಖಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಆಡಳಿತ ಲಾಗಿನ್ ಮಾಡಿ.'
                    : 'The Digital Archive contains statutory files, committee proceedings, and internal organization records reserved exclusively for authorized Forum Office Bearers.'}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setIsAdminModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all shadow-md active:scale-95"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>{lang === 'KN' ? 'ಆಡಳಿತ ಲಾಗಿನ್ ಮಾಡಿ' : 'Unlock Admin Portal Access'}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavClick={handleNavClick}
        onOpenMembership={() => setIsMembershipOpen(true)}
      />

      {/* Membership Application Modal */}
      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        lang={lang}
      />

      {/* Public Representation / Issue Modal */}
      <PublicVoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        lang={lang}
        prefilledArea={prefilledArea}
      />

      {/* Admin Authorization Modal */}
      <AdminAuthModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onAuthenticate={handleAdminAuthenticate}
        lang={lang}
      />

    </div>
  );
}
