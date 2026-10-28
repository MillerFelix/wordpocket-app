import React from 'react';
import { TabType } from '../types';
import { HomeGreetingBanner } from './home/HomeGreetingBanner';
import { HomeFeatureCards } from './home/HomeFeatureCards';
import { HomeRecentList } from './home/HomeRecentList';
import { HomeTipCard, HomeNotesShortcut } from './home/HomeMotivationSection';

interface HomeViewProps {
  onNavigate: (tab: TabType, searchQuery?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      <HomeGreetingBanner />
      <HomeFeatureCards onNavigate={onNavigate} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <HomeRecentList onNavigate={onNavigate} />
        <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
          <HomeTipCard onNavigate={onNavigate} />
          <HomeNotesShortcut onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
};
