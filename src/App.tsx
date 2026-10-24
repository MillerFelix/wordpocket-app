import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { IrregularVerbsView } from './components/IrregularVerbsView';
import { VocabularyView } from './components/VocabularyView';
import { QuickTranslatorView } from './components/QuickTranslatorView';
import { TabType } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('verbs');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header />

      {/* Main Container */}
      <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto pb-24 md:pb-12">
        {/* Navigation Tabs */}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Dynamic View Area */}
        <main className="flex-1 px-3.5 sm:px-4 pt-4 sm:pt-6">
          {activeTab === 'verbs' && <IrregularVerbsView />}
          {activeTab === 'vocab' && <VocabularyView />}
          {activeTab === 'translator' && <QuickTranslatorView />}
        </main>
      </div>
    </div>
  );
};

export default App;
