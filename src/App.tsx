import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { IrregularVerbsView } from './components/IrregularVerbsView';
import { VocabularyView } from './components/VocabularyView';
import { QuickTranslatorView } from './components/QuickTranslatorView';
import { TabType } from './types';
import { irregularVerbs } from './data/irregularVerbs';
import { vocabularyData } from './data/vocabulary';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('verbs');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Application Header */}
      <Header />

      {/* Main Container - Responsive across Mobile, Tablet, and Desktop */}
      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-24 md:pb-12 space-y-5">
        {/* Module Navigation Tabs */}
        <Navigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          verbCount={irregularVerbs.length}
          vocabCount={vocabularyData.length}
        />

        {/* Dynamic View Area */}
        <main className="flex-1">
          {activeTab === 'verbs' && <IrregularVerbsView />}
          {activeTab === 'vocab' && <VocabularyView />}
          {activeTab === 'translator' && <QuickTranslatorView />}
        </main>
      </div>

      {/* Subtle Desktop Footer */}
      <footer className="hidden md:block border-t border-slate-200/80 bg-white/50 text-center py-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p>
            <strong>WordPocket</strong> — Guia de consulta rápida e dicionário contextual para estudantes de inglês.
          </p>
          <p>
            Modo offline ativo via PWA • Sem backend
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
