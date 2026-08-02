import React, { useState } from 'react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [lang, setLang] = useState<'EN' | 'KN'>('EN');
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [prefilledArea, setPrefilledArea] = useState('');

  const handleSelectAreaForRepresentation = (areaTitle: string) => {
    setPrefilledArea(areaTitle);
    setIsVoiceModalOpen(true);
  };

  const handleNavClick = (sectionId: string) => {
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

        {/* 8-Folder Digital Archive Explorer */}
        <ArchiveExplorer lang={lang} />
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

    </div>
  );
}
