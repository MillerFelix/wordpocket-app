import React from 'react';
import { 
  Home, 
  BookOpen, 
  BookA, 
  Languages, 
  Star, 
  Clock, 
  Settings, 
  Download, 
  Wifi, 
  WifiOff, 
  Sparkles, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { TabType } from '../types';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { usePwaInstall } from '../hooks/usePwaInstall';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  verbCount: number;
  vocabCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  verbCount,
  vocabCount
}) => {
  const isOnline = useOnlineStatus();
  const { canInstall, promptInstall } = usePwaInstall();

  const mainNavItems = [
    {
      id: 'home' as TabType,
      label: 'Início',
      subtitle: 'Painel e visão geral',
      icon: Home,
      color: 'text-[#6938F5]',
      activeBg: 'bg-[#EAE1FD] border border-white/90',
      activeText: 'text-[#6938F5]',
      activeBar: 'bg-[#6938F5]'
    },
    {
      id: 'verbs' as TabType,
      label: 'Verbos Irregulares',
      subtitle: 'Tabela das 3 formas',
      icon: BookOpen,
      count: verbCount,
      color: 'text-[#6938F5]',
      activeBg: 'bg-[#EAE1FD] border border-white/90',
      activeText: 'text-[#6938F5]',
      activeBar: 'bg-[#6938F5]'
    },
    {
      id: 'vocab' as TabType,
      label: 'Vocabulário',
      subtitle: 'Dicionário e sentidos',
      icon: BookA,
      count: vocabCount,
      color: 'text-[#19D9B4]',
      activeBg: 'bg-[#DCF8F1] border border-white/90',
      activeText: 'text-[#0A9B80]',
      activeBar: 'bg-[#19D9B4]'
    },
    {
      id: 'translator' as TabType,
      label: 'Tradutor',
      subtitle: 'Google Tradutor oficial',
      icon: Languages,
      count: 'Google',
      color: 'text-[#FF6534]',
      activeBg: 'bg-[#FFEAE1] border border-white/90',
      activeText: 'text-[#E04D1B]',
      activeBar: 'bg-[#FF6534]'
    }
  ];

  const secondaryNavItems = [
    {
      id: 'favorites' as TabType,
      label: 'Favoritos',
      icon: Star,
      iconColor: 'text-[#F52E91]'
    },
    {
      id: 'history' as TabType,
      label: 'Histórico',
      icon: Clock,
      iconColor: 'text-[#2878FF]'
    },
    {
      id: 'settings' as TabType,
      label: 'Configurações',
      icon: Settings,
      iconColor: 'text-[#52456F]'
    }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 bg-white/70 backdrop-blur-2xl border-r border-white/80 p-5 justify-between h-screen sticky top-0 shadow-[4px_0_32px_rgba(105,56,245,0.08)] select-none">
      {/* Top Brand & Navigation */}
      <div className="space-y-6">
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange('home')}
          className="flex items-center gap-3 px-2 pt-1 cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onTabChange('home')}
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-colored-violet ring-4 ring-white/80 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-[#160F2E]">
                Word
              </span>
              <span className="text-xl font-black text-[#6938F5]">
                Pocket
              </span>
            </div>
            <p className="text-[11px] font-bold text-[#52456F] tracking-wide">
              Estudo Inteligente de Inglês
            </p>
          </div>
        </div>

        {/* Main Navigation Items */}
        <nav className="space-y-1.5" aria-label="Navegação Principal Desktop">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all duration-200 group relative ${
                  isActive
                    ? `${item.activeBg} ${item.activeText} font-bold shadow-2xs`
                    : 'text-[#3D325A] hover:bg-white/80 hover:text-[#160F2E] hover:shadow-2xs'
                }`}
              >
                {/* Active Left Pill Indicator */}
                {isActive && (
                  <span className={`absolute left-0 top-2.5 bottom-2.5 w-1.5 rounded-r-full ${item.activeBar}`} />
                )}

                <div className="flex items-center gap-3 pl-1 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                      isActive
                        ? `${item.activeBar} text-white shadow-xs`
                        : `bg-white/80 ${item.color} group-hover:bg-white border border-white/70`
                    }`}
                  >
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="truncate">
                    <p className={`text-sm truncate leading-snug ${isActive ? 'font-bold text-[#160F2E]' : 'font-semibold'}`}>
                      {item.label}
                    </p>
                    <p className="text-[11px] text-[#52456F] font-normal truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {item.count !== undefined && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      isActive
                        ? `${item.activeBar} text-white`
                        : 'bg-white/70 text-[#52456F] border border-white/80'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Secondary Navigation (Favorites, History, Settings) */}
        <div className="pt-2 border-t border-white/80 space-y-1">
          {secondaryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left transition-colors text-xs font-semibold ${
                  isActive
                    ? 'bg-[#EAE1FD] text-[#6938F5] font-bold border border-white/90 shadow-2xs'
                    : 'text-[#52456F] hover:bg-white/80 hover:text-[#160F2E]'
                }`}
              >
                <Icon className={`w-4 h-4 stroke-[2] ${item.iconColor}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Side Promo Card (Acolhedor com gradiente Neon Candy Vibrant) */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#E6D9FB] via-[#FCE4F0] to-[#DCF7EF] border border-white/90 space-y-2 relative overflow-hidden shadow-soft-card">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#6938F5]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD447]" />
            <span>Grandes Conquistas</span>
          </div>
          <p className="text-xs font-bold text-[#160F2E] leading-tight">
            O inglês abre portas para o mundo.
          </p>
          <p className="text-[11px] text-[#52456F] leading-relaxed">
            E você tem tudo o que precisa para chegar lá no seu bolso.
          </p>
          <button
            type="button"
            onClick={() => onTabChange('verbs')}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-white/90 hover:bg-white text-[#6938F5] text-xs font-bold hover:shadow-2xs transition mt-1 border border-white/90"
          >
            <span>Praticar agora</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Bottom Status & Install Prompt */}
      <div className="pt-4 border-t border-white/80 space-y-2.5">
        <div className="flex items-center justify-between px-1 text-xs">
          <span className="text-[#52456F] font-medium">Estado da Conexão</span>
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-[11px] ${
              isOnline
                ? 'bg-[#DCF8F1] text-[#0A9B80] border border-[#B6F5E8]'
                : 'bg-[#FDE8F1] text-[#F52E91] border border-[#FFD2E5]'
            }`}
          >
            {isOnline ? (
              <>
                <Wifi className="w-3 h-3 text-[#19D9B4]" />
                <span>Online</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3 h-3 text-[#F52E91]" />
                <span>Offline</span>
              </>
            )}
          </div>
        </div>

        {canInstall && (
          <button
            type="button"
            onClick={promptInstall}
            className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-colored-violet hover:opacity-95 active:scale-[0.98] transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Instalar Aplicativo (PWA)</span>
          </button>
        )}
      </div>
    </aside>
  );
};
