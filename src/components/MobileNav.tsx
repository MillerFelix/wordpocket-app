import React from 'react';
import { 
  Home, 
  BookOpen, 
  BookA, 
  Languages, 
  Wifi, 
  WifiOff, 
  Download 
} from 'lucide-react';
import { TabType } from '../types';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { usePwaInstall } from '../hooks/usePwaInstall';
import { WordPocketLogo } from './brand/WordPocketLogo';

interface MobileNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  verbCount: number;
  vocabCount: number;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeTab,
  onTabChange,
  verbCount: _verbCount,
  vocabCount: _vocabCount
}) => {
  const isOnline = useOnlineStatus();
  const { canInstall, promptInstall } = usePwaInstall();

  const handleInstallClick = async () => {
    await promptInstall();
  };

  const tabs = [
    {
      id: 'home' as TabType,
      label: 'Início',
      icon: Home,
      color: 'text-[#6938F5]',
      activeBg: 'bg-[#EAE1FD] text-[#6938F5] border border-white/90 shadow-2xs',
      activeDot: 'bg-[#6938F5]'
    },
    {
      id: 'verbs' as TabType,
      label: 'Verbos',
      icon: BookOpen,
      color: 'text-[#6938F5]',
      activeBg: 'bg-[#EAE1FD] text-[#6938F5] border border-white/90 shadow-2xs',
      activeDot: 'bg-[#6938F5]'
    },
    {
      id: 'vocab' as TabType,
      label: 'Vocabulário',
      icon: BookA,
      color: 'text-[#0A9B80]',
      activeBg: 'bg-[#DCF8F1] text-[#0A9B80] border border-white/90 shadow-2xs',
      activeDot: 'bg-[#19D9B4]'
    },
    {
      id: 'translator' as TabType,
      label: 'Tradutor',
      icon: Languages,
      color: 'text-[#E04D1B]',
      activeBg: 'bg-[#FFEAE1] text-[#E04D1B] border border-white/90 shadow-2xs',
      activeDot: 'bg-[#FF6534]'
    }
  ];

  return (
    <>
      {/* Mobile & Tablet Compact Top Header */}
      <header className="lg:hidden sticky top-0 z-30 bg-white/75 backdrop-blur-2xl border-b border-white/80 px-4 py-2.5 shadow-2xs">
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          {/* Brand */}
          <button 
            type="button"
            onClick={() => onTabChange('home')}
            className="text-left active:scale-95 transition"
            aria-label="Ir para a página inicial"
          >
            <WordPocketLogo
              variant="horizontal"
              size="sm"
              badge="PWA"
              showSubtitle
              subtitleText="Consulta Rápida de Inglês"
            />
          </button>

          {/* Right Status & Avatar Profile */}
          <div className="flex items-center gap-2">
            <div
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                isOnline
                  ? 'bg-[#DCF8F1] text-[#0A9B80] border-[#B6F5E8]'
                  : 'bg-[#FDE8F1] text-[#F52E91] border-[#FFD0E5]'
              }`}
            >
              {isOnline ? (
                <>
                  <Wifi className="w-2.5 h-2.5 text-[#19D9B4]" />
                  <span>Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-2.5 h-2.5 text-[#F52E91]" />
                  <span>Offline</span>
                </>
              )}
            </div>

            {canInstall && (
              <button
                type="button"
                onClick={handleInstallClick}
                className="inline-flex items-center gap-1 bg-gradient-brand text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-xs"
              >
                <Download className="w-2.5 h-2.5" />
                <span>Instalar</span>
              </button>
            )}

            {/* Profile Avatar with Neon Candy gradient */}
            <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-[#6938F5] via-[#F52E91] to-[#FF6534] p-0.5 cursor-pointer shadow-xs">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-extrabold text-[11px] text-[#6938F5]">
                L
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#19D9B4] ring-1 ring-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Hidden on desktop) */}
      <nav
        aria-label="Navegação Móvel"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-2xl border-t border-white/80 px-3 py-1.5 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_32px_rgba(105,56,245,0.08)]"
      >
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-2xl transition-all duration-150 active:scale-95 select-none min-h-[48px] ${
                  isActive
                    ? `${tab.color} font-bold ${tab.activeBg}`
                    : 'text-[#52456F] hover:text-[#160F2E]'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform stroke-[2.2] ${isActive ? 'scale-110' : ''}`} />
                  {isActive && (
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 ${tab.activeDot} rounded-full`} />
                  )}
                </div>
                <span className="text-[10px] mt-1 tracking-tight font-bold">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
