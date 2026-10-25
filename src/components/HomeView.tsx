import React, { useState, useMemo } from 'react';
import { TabType } from '../types';
import { irregularVerbs } from '../data/irregularVerbs';
import { vocabularyData } from '../data/vocabulary';
import { HomeGreetingBanner } from './home/HomeGreetingBanner';
import { HomeGlobalSearch } from './home/HomeGlobalSearch';
import { HomeFeatureCards } from './home/HomeFeatureCards';
import { HomeQuickAccess } from './home/HomeQuickAccess';
import { HomeRecentList } from './home/HomeRecentList';
import { HomeTipCard, HomeBottomBanner } from './home/HomeMotivationSection';

interface HomeViewProps {
  onNavigate: (tab: TabType, searchQuery?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [globalSearch, setGlobalSearch] = useState('');

  // Global search filtering across both verbs and vocabulary
  const searchResults = useMemo(() => {
    const q = globalSearch.trim().toLowerCase();
    if (!q) return null;

    const matchedVerbs = irregularVerbs
      .filter((v) =>
        v.infinitive.toLowerCase().includes(q) ||
        v.pastSimple.toLowerCase().includes(q) ||
        v.pastParticiple.toLowerCase().includes(q) ||
        v.translation.toLowerCase().includes(q)
      )
      .slice(0, 4);

    const matchedVocab = vocabularyData
      .filter((w) =>
        w.word.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q)
      )
      .slice(0, 4);

    return {
      verbs: matchedVerbs,
      vocab: matchedVocab,
      totalCount: matchedVerbs.length + matchedVocab.length
    };
  }, [globalSearch]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Responsive Greeting Banners */}
      <HomeGreetingBanner />

      {/* Global Search Bar */}
      <HomeGlobalSearch
        globalSearch={globalSearch}
        onSearchChange={setGlobalSearch}
        searchResults={searchResults}
        onNavigate={onNavigate}
      />

      {/* 3 Main Hero Feature Cards */}
      <HomeFeatureCards onNavigate={onNavigate} />

      {/* Quick Access Pills */}
      <HomeQuickAccess onNavigate={onNavigate} />

      {/* Recently Accessed + Study Tip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <HomeRecentList onNavigate={onNavigate} />
        <HomeTipCard onNavigate={onNavigate} />
      </div>

      {/* Motivational Bottom Banner */}
      <HomeBottomBanner onNavigate={onNavigate} />
    </div>
  );
};
