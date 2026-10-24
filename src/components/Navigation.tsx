import React from 'react';
import { BookOpen, Languages, Layers } from 'lucide-react';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'verbs' as TabType,
      label: 'Verbos Irregulares',
      shortLabel: 'Verbos',
      icon: BookOpen,
      count: '42'
    },
    {
      id: 'vocab' as TabType,
      label: 'Vocabulário',
      shortLabel: 'Vocabulário',
      icon: Layers,
      count: '15'
    },
    {
      id: 'translator' as TabType,
      label: 'Tradutor Rápido',
      shortLabel: 'Tradutor',
      icon: Languages,
      count: 'Google'
    }
  ];

  return (
    <>
      {/* Desktop Tabs */}
      <nav className="hidden md:flex items-center gap-2 max-w-4xl mx-auto px-4 pt-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/70'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Navegação principal móvel"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]"
      >
        <div className="grid grid-cols-3 gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all ${
                  isActive
                    ? 'text-indigo-600 font-semibold bg-indigo-50/80'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full" />
                  )}
                </div>
                <span className="text-[11px] mt-1 tracking-tight leading-tight">
                  {tab.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
