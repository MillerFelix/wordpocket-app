import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { TopHeader } from './components/TopHeader';
import { HomeView } from './components/HomeView';
import { IrregularVerbsView } from './components/IrregularVerbsView';
import { PracticeView } from './components/practice/PracticeView';
import { QuickTranslatorView } from './components/QuickTranslatorView';
import { LearningLibraryView } from './components/learning/LearningLibraryView';
import { UserProfileView } from './components/profile/UserProfileView';
import { NotesView } from './components/notes/NotesView';
import { AuthModal } from './components/auth/AuthModal';
import { VisitorPromptModal } from './components/auth/VisitorPromptModal';
import { OnboardingModal } from './components/onboarding/OnboardingModal';
import { AuthProvider } from './contexts/AuthContext';
import { TabType, PracticeSkillId } from './types';
import { verbsService } from './services/verbsService';
import { practiceService } from './services/practiceService';
import { learningService } from './data/learning';

interface AppProps {
  initialTab?: TabType;
}

const AppContent: React.FC<AppProps> = ({ initialTab = 'home' }) => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [pendingSearch, setPendingSearch] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (tab: TabType, term?: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    if (term) {
      setPendingSearch(term);
    } else {
      setPendingSearch('');
    }
  };

  const verbCount = verbsService.getCount();
  const practiceCount = practiceService.getSkillsCount();

  return (
    <div className="min-h-screen text-[#160F2E] flex flex-col lg:flex-row font-sans selection:bg-[#BED7FA] selection:text-[#176BFF] relative">
      {/* Decorative Atmospheric Floating Blue Pulse, Cyan & Deep Blue Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        {/* Electric Blue top-left glow */}
        <div className="absolute -top-32 left-[15%] w-[780px] h-[480px] rounded-full bg-gradient-to-b from-[#176BFF]/32 via-[#26D9FF]/22 to-transparent blur-3xl" />
        {/* Luminous Cyan & Electric Blue top-right glow */}
        <div className="absolute top-10 -right-24 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-[#26D9FF]/30 to-[#176BFF]/24 blur-3xl" />
        {/* Deep Blue mid-left glow */}
        <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#2446C8]/28 to-[#176BFF]/20 blur-3xl" />
        {/* Violet complement & Deep Blue bottom-right glow */}
        <div className="absolute bottom-10 right-10 w-[620px] h-[620px] rounded-full bg-gradient-to-tl from-[#6545F5]/22 via-[#2446C8]/22 to-[#176BFF]/22 blur-3xl" />
      </div>

      {/* Desktop Persistent Sidebar Navigation & Mobile Drawer */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={handleNavigate}
        verbCount={verbCount}
        practiceCount={practiceCount}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Top Header & Bottom Navigation Bar */}
      <MobileNav
        activeTab={activeTab}
        onTabChange={handleNavigate}
        verbCount={verbCount}
        practiceCount={practiceCount}
        onOpenMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 max-w-full overflow-x-hidden">
        {/* Desktop Top Header Bar with Context & User Profile */}
        <TopHeader
          activeTab={activeTab}
          onNavigate={handleNavigate}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-28 lg:pb-12">
          {activeTab === 'home' && (
            <HomeView onNavigate={handleNavigate} />
          )}

          {activeTab === 'learn' && (
            <LearningLibraryView
              initialArticleId={learningService.getById(pendingSearch) ? pendingSearch : undefined}
              initialSearch={!learningService.getById(pendingSearch) ? pendingSearch : ''}
            />
          )}

          {activeTab === 'verbs' && (
            <IrregularVerbsView initialSearch={pendingSearch} />
          )}

          {activeTab === 'practice' && (
            <PracticeView
              initialSkill={
                ['listening', 'speaking', 'reading', 'writing'].includes(pendingSearch)
                  ? (pendingSearch as PracticeSkillId)
                  : null
              }
            />
          )}

          {activeTab === 'translator' && (
            <QuickTranslatorView initialText={pendingSearch} />
          )}

          {activeTab === 'history' && (
            <HomeView onNavigate={handleNavigate} />
          )}

          {activeTab === 'notes' && (
            <NotesView onNavigate={handleNavigate} />
          )}

          {activeTab === 'profile' && (
            <UserProfileView onNavigate={handleNavigate} />
          )}
        </main>

        {/* Global Modals for Auth, Visitor Prompt & Onboarding */}
        <AuthModal />
        <VisitorPromptModal />
        <OnboardingModal />

        {/* Footer */}
        <footer className="border-t border-white/80 bg-white/60 backdrop-blur-xl py-4 px-4 sm:px-8 text-xs text-[#52456F] pb-24 sm:pb-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} <strong className="text-[#160F2E]">Word Pocket</strong>. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export const App: React.FC<AppProps> = (props) => (
  <AuthProvider>
    <AppContent {...props} />
  </AuthProvider>
);

export default App;
