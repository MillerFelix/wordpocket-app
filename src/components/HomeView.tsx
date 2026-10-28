import React from 'react';
import { TabType } from '../types';
import { HomeGreetingBanner } from './home/HomeGreetingBanner';
import { HomeFeatureCards } from './home/HomeFeatureCards';
import { HomeRecentList } from './home/HomeRecentList';
import { HomeTipCard } from './home/HomeMotivationSection';

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
        <HomeTipCard onNavigate={onNavigate} />
      </div>
    </div>
  );
};
