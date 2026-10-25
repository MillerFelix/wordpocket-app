import React from 'react';
import { TabType } from '../types';
import { HomeGreetingBanner } from './home/HomeGreetingBanner';
import { HomeFeatureCards } from './home/HomeFeatureCards';
import { HomeQuickAccess } from './home/HomeQuickAccess';
import { HomeRecentList } from './home/HomeRecentList';
import { HomeTipCard, HomeBottomBanner } from './home/HomeMotivationSection';

interface HomeViewProps {
  onNavigate: (tab: TabType, searchQuery?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Responsive Greeting Banners */}
      <HomeGreetingBanner />

      {/* 3 Main Core Feature Cards: Verbos Irregulares, Praticar Inglês, Tradutor */}
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
