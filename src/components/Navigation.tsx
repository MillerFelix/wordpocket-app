import React from 'react';
import { BookOpen, Languages, BookA } from 'lucide-react';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  verbCount: number;
  vocabCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  verbCount,
  vocabCount
}) => {
  const tabs = [
    {
      id: 'verbs' as TabType,
      label: 'Verbos Irregulares',
      shortLabel: 'Verbos',
      description: 'Tabela comparativa das 3 formas',
      icon: BookOpen,
      count: verbCount
    },
    {
      id: 'vocab' as TabType,
      label: 'Vocabulário & Dicionário',
      shortLabel: 'Dicionário',
      description: 'Termos, sentidos e exemplos',
      icon: BookA,
      count: vocabCount
    },
    {
      id: 'translator' as TabType,
      label: 'Tradutor Rápido',
      shortLabel: 'Tradutor',
      description: 'Abertura direta sem backend',
      icon: Languages,
      count: 'Google'
    }
  ];

  return (
    <>
      {/* Desktop & Tablet Top Navigation */}
      <nav aria-label="Navegação dos Módulos" className="hidden md:block">
        <div className="grid grid-cols-3 gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-3.5 p-3.5 rounded-2xl text-left border transition-all duration-200 select-none group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${
                  isActive
                    ? 'bg-white border-indigo-200/90 shadow-md shadow-indigo-100/60 ring-2 ring-indigo-500/10'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Active Indicator Top Accent Bar */}
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500" />
                )}

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-200'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span
                      className={`text-sm font-bold truncate ${
                        isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {tab.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav
        aria-label="Navegação móvel"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-lg shadow-slate-900/5"
      >
        <div className="grid grid-cols-3 gap-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-150 active:scale-95 select-none ${
                  isActive
                    ? 'text-indigo-600 font-bold bg-indigo-50/90 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                  )}
                </div>
                <span className="text-[11px] mt-1.5 tracking-tight leading-none font-semibold">
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
