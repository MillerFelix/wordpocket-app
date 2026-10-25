import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { TopHeader } from './components/TopHeader';
import { HomeView } from './components/HomeView';
import { IrregularVerbsView } from './components/IrregularVerbsView';
import { VocabularyView } from './components/VocabularyView';
import { QuickTranslatorView } from './components/QuickTranslatorView';
import { FavoritesView } from './components/FavoritesView';
import { SettingsView } from './components/SettingsView';
import { TabType } from './types';
import { irregularVerbs } from './data/irregularVerbs';
import { vocabularyData } from './data/vocabulary';

interface AppProps {
  initialTab?: TabType;
}

export const App: React.FC<AppProps> = ({ initialTab = 'home' }) => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [pendingSearch, setPendingSearch] = useState<string>('');
  const [topHeaderQuery, setTopHeaderQuery] = useState<string>('');

  const handleNavigate = (tab: TabType, term?: string) => {
    setActiveTab(tab);
    if (term) {
      setPendingSearch(term);
    } else {
      setPendingSearch('');
    }
  };

  const handleTopHeaderSearchChange = (query: string) => {
    setTopHeaderQuery(query);
    if (query) {
      setPendingSearch(query);
      if (activeTab === 'home') {
        setActiveTab('verbs');
      }
    }
  };

  return (
    <div className="min-h-screen text-[#160F2E] flex flex-col lg:flex-row font-sans selection:bg-[#FFE5F0] selection:text-[#6938F5] relative">
      {/* Decorative Atmospheric Floating Lavender, Violet, Blue & Neon Candy Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        {/* Electric Violet top-left glow */}
        <div className="absolute -top-32 left-[15%] w-[780px] h-[480px] rounded-full bg-gradient-to-b from-[#6938F5]/26 via-[#A78BFA]/22 to-transparent blur-3xl" />
        {/* Electric Blue & Mint top-right glow */}
        <div className="absolute top-10 -right-24 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-[#2878FF]/26 to-[#19D9B4]/22 blur-3xl" />
        {/* Bright Lavender & Tangerine mid-left glow */}
        <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#A78BFA]/26 to-[#FF6534]/18 blur-3xl" />
        {/* Neon Pink & Electric Blue bottom-right glow */}
        <div className="absolute bottom-10 right-10 w-[620px] h-[620px] rounded-full bg-gradient-to-tl from-[#F52E91]/22 via-[#A78BFA]/20 to-[#2878FF]/20 blur-3xl" />
      </div>

      {/* Desktop Vertical Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={handleNavigate}
        verbCount={irregularVerbs.length}
        vocabCount={vocabularyData.length}
      />

      {/* Mobile Top Header & Bottom Navigation Bar */}
      <MobileNav
        activeTab={activeTab}
        onTabChange={handleNavigate}
        verbCount={irregularVerbs.length}
        vocabCount={vocabularyData.length}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 max-w-full overflow-x-hidden">
        {/* Desktop Top Header Bar with Global Search & User Profile */}
        <TopHeader
          searchQuery={topHeaderQuery}
          onSearchChange={handleTopHeaderSearchChange}
          onNavigate={handleNavigate}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-28 lg:pb-12">
          {activeTab === 'home' && (
            <HomeView onNavigate={handleNavigate} />
          )}

          {activeTab === 'verbs' && (
            <IrregularVerbsView initialSearch={pendingSearch} />
          )}

          {activeTab === 'vocab' && (
            <VocabularyView initialSearch={pendingSearch} />
          )}

          {activeTab === 'translator' && (
            <QuickTranslatorView initialText={pendingSearch} />
          )}

          {activeTab === 'favorites' && (
            <FavoritesView onNavigate={handleNavigate} />
          )}

          {activeTab === 'history' && (
            <HomeView onNavigate={handleNavigate} />
          )}

          {activeTab === 'settings' && (
            <SettingsView />
          )}
        </main>

        {/* Desktop Footer */}
        <footer className="hidden lg:block border-t border-white/80 bg-white/60 backdrop-blur-xl py-4 px-8 text-xs text-[#52456F]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p>
              <strong className="text-[#160F2E]">Word Pocket</strong> — Identidade Visual Neon Candy Vibrant & Guia Inteligente de Inglês.
            </p>
            <p className="font-bold text-[#6938F5]">
              100% Offline • Sem Backend • PWA Nativo
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
