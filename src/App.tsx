import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FocusAreas } from './components/FocusAreas';
import { Objectives } from './components/Objectives';
import { DistrictLeadershipSection } from './components/DistrictLeadershipSection';
import { DistrictPresidentModal } from './components/DistrictPresidentModal';
import { TimelineSection } from './components/TimelineSection';
import { GovernanceSection } from './components/GovernanceSection';
import { ArchiveExplorer } from './components/ArchiveExplorer';
import { Footer } from './components/Footer';
import { MembershipModal } from './components/MembershipModal';
import { PublicVoiceModal } from './components/PublicVoiceModal';
import { AdminAuthModal } from './components/AdminAuthModal';
import { ThemeSelectorModal } from './components/ThemeSelectorModal';
import { ThemeProvider } from './context/ThemeContext';
import { KARNATAKA_DISTRICTS_INITIAL, INITIAL_DISTRICT_APPLICATIONS } from './data/ktfData';
import { DistrictPresident, DistrictApplication } from './types';
import { Lock, ShieldAlert, KeyRound } from 'lucide-react';

export function AppContent() {
  const [activeSection, setActiveSection] = useState('overview');
  const [lang, setLang] = useState<'EN' | 'KN'>('EN');
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [prefilledArea, setPrefilledArea] = useState('');
  
  // District Leadership & Applications State (with LocalStorage persistence)
  const [districts, setDistricts] = useState<DistrictPresident[]>(() => {
    const saved = localStorage.getItem('ktf_districts');
    return saved ? JSON.parse(saved) : KARNATAKA_DISTRICTS_INITIAL;
  });

  const [districtApps, setDistrictApps] = useState<DistrictApplication[]>(() => {
    const saved = localStorage.getItem('ktf_district_apps');
    return saved ? JSON.parse(saved) : INITIAL_DISTRICT_APPLICATIONS;
  });

  const [isDistrictModalOpen, setIsDistrictModalOpen] = useState(false);
  const [selectedDistrictForApply, setSelectedDistrictForApply] = useState('Bagalkote');

  useEffect(() => {
    localStorage.setItem('ktf_districts', JSON.stringify(districts));
  }, [districts]);

  useEffect(() => {
    localStorage.setItem('ktf_district_apps', JSON.stringify(districtApps));
  }, [districtApps]);

  const handleOpenApplyDistrictModal = (districtName: string) => {
    setSelectedDistrictForApply(districtName);
    setIsDistrictModalOpen(true);
  };

  const handleSubmitDistrictApplication = (appData: Omit<DistrictApplication, 'id' | 'submittedDate' | 'status'>) => {
    const newApp: DistrictApplication = {
      ...appData,
      id: `app-${Date.now()}`,
      submittedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Pending',
    };
    setDistrictApps((prev) => [newApp, ...prev]);
  };

  const handleApproveDistrictApplication = (applicationId: string, districtId: string, candidateName: string, candidateEmail: string) => {
    // 1. Update Application Status
    setDistrictApps((prev) =>
      prev.map((app) => (app.id === applicationId ? { ...app, status: 'Approved' } : app))
    );

    // 2. Update District President in Table
    setDistricts((prev) =>
      prev.map((d) => {
        if (d.districtId === districtId || d.districtName.toLowerCase() === candidateName.toLowerCase() || d.districtName.toLowerCase().includes(districtId.replace('-', ' '))) {
          return {
            ...d,
            presidentName: candidateName,
            status: 'Appointed',
            appointedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            contactEmail: candidateEmail,
          };
        }
        return d;
      })
    );
  };
  
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
    if ((sectionId === 'archive' || sectionId === 'timeline') && !isAdminAuthenticated) {
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

        {/* Karnataka District Leadership Directory (31 Districts) */}
        <DistrictLeadershipSection
          districts={districts}
          applications={districtApps}
          onOpenApplyModal={handleOpenApplyDistrictModal}
          onApproveApplication={handleApproveDistrictApplication}
          isAdminAuthenticated={isAdminAuthenticated}
          lang={lang}
        />

        {/* Chronological Timeline & Milestones (Admin Protected) */}
        {isAdminAuthenticated ? (
          <TimelineSection lang={lang} />
        ) : (
          <section id="timeline" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
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
                    {lang === 'KN' ? 'ಇತಿಹಾಸ & ಸಾಧನೆಗಳು (ಆಡಳಿತ ಮಂಡಳಿಗೆ ಮಾತ್ರ)' : 'Chronological Journey of Action (Admin Restricted)'}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                  {lang === 'KN'
                    ? 'ಈ ಸಾಲಿನ ಇತಿಹಾಸ ಮತ್ತು ಸಾಧನೆಗಳ ವಿವರವು ಆಡಳಿತ ಮಂಡಳಿಯ ಪದಾಧಿಕಾರಿಗಳಿಗೆ ಮಾತ್ರ ಲಭ್ಯವಿದೆ. ವೀಕ್ಷಿಸಲು ಆಡಳಿತ ಲಾಗಿನ್ ಮಾಡಿ.'
                    : 'The detailed chronological record of interventions, representations, and statutory milestones is reserved exclusively for authorized Forum Office Bearers.'}
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

        {/* Governance & Leadership Committee */}
        <GovernanceSection
          lang={lang}
          onOpenMembership={() => setIsMembershipOpen(true)}
        />

        {/* Digital Archive Explorer (Admin Protected) */}
        {isAdminAuthenticated ? (
          <ArchiveExplorer lang={lang} />
        ) : (
          <section id="archive" className="py-16 bg-slate-900 text-white border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
              <div className="inline-flex p-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                {lang === 'KN' ? 'ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳು - ಅಧಿಕೃತ ಲಾಗಿನ್ ಕಡ್ಡಾಯ' : 'Digital Archive & Record Vault'}
              </h2>
              <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
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
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavClick={handleNavClick}
        onOpenMembership={() => setIsMembershipOpen(true)}
        onOpenThemeModal={() => setIsThemeModalOpen(true)}
      />

      {/* Theme Selector Modal */}
      <ThemeSelectorModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        lang={lang}
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

      {/* District President Application Modal */}
      <DistrictPresidentModal
        isOpen={isDistrictModalOpen}
        onClose={() => setIsDistrictModalOpen(false)}
        selectedDistrict={selectedDistrictForApply}
        districtsList={districts.map((d) => d.districtName)}
        onSubmitApplication={handleSubmitDistrictApplication}
        lang={lang}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
