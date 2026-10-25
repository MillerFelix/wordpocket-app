import React from 'react';
import { Bell, Wifi, WifiOff } from 'lucide-react';
import { TabType } from '../types';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface TopHeaderProps {
  activeTab?: TabType;
  onNavigate: (tab: TabType) => void;
}

const TAB_TITLES: Record<TabType, { title: string; subtitle: string; badge: string }> = {
  home: {
    title: 'Painel Geral',
    subtitle: 'Word Pocket — Guia e Estudo Inteligente de Inglês',
    badge: 'Início'
  },
  verbs: {
    title: 'Verbos Irregulares',
    subtitle: 'Base completa com 200 verbos e três formas gramaticais',
    badge: '200 Verbos'
  },
  vocab: {
    title: 'Dicionário de Vocabulário',
    subtitle: 'Termos contextualizados, pronúncias fonéticas e exemplos',
    badge: 'Vocabulário'
  },
  translator: {
    title: 'Tradutor Rápido',
    subtitle: 'Consulta e tradução imediata com inteligência contextual',
    badge: 'Tradutor'
  },
  favorites: {
    title: 'Palavras Salvas',
    subtitle: 'Sua lista personalizada de estudo e revisão',
    badge: 'Favoritos'
  },
  history: {
    title: 'Histórico de Consultas',
    subtitle: 'Registro das suas últimas pesquisas no aplicativo',
    badge: 'Histórico'
  },
  settings: {
    title: 'Configurações & Guia',
    subtitle: 'Preferências do aplicativo, voz de áudio e informações do sistema',
    badge: 'Ajustes'
  }
};

const TAB_THEMES: Record<TabType, { dot: string; badge: string }> = {
  home: {
    dot: 'bg-[#176BFF] ring-[#176BFF]/20',
    badge: 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
  },
  verbs: {
    dot: 'bg-[#6545F5] ring-[#6545F5]/20',
    badge: 'bg-[#EDE8FD] text-[#6545F5] border-[#D9CEFC]'
  },
  vocab: {
    dot: 'bg-[#0A9B80] ring-[#0A9B80]/20',
    badge: 'bg-[#DCF8F1] text-[#0A9B80] border-[#B6F5E8]'
  },
  translator: {
    dot: 'bg-[#FF6534] ring-[#FF6534]/20',
    badge: 'bg-[#FFEAE1] text-[#E04D1B] border-[#FFD2C2]'
  },
  favorites: {
    dot: 'bg-[#F52E91] ring-[#F52E91]/20',
    badge: 'bg-[#FDE8F1] text-[#F52E91] border-[#FFD0E5]'
  },
  history: {
    dot: 'bg-[#176BFF] ring-[#176BFF]/20',
    badge: 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
  },
  settings: {
    dot: 'bg-[#52456F] ring-[#52456F]/20',
    badge: 'bg-white/90 text-[#52456F] border-white/90'
  }
};

export const TopHeader: React.FC<TopHeaderProps> = ({
  activeTab = 'home',
  onNavigate: _onNavigate
}) => {
  const isOnline = useOnlineStatus();
  const currentTabInfo = TAB_TITLES[activeTab] || TAB_TITLES.home;
  const currentTabTheme = TAB_THEMES[activeTab] || TAB_THEMES.home;

  return (
    <header className="hidden lg:flex items-center justify-between py-3.5 px-8 border-b border-white/80 bg-[#F0F6FF]/75 backdrop-blur-2xl sticky top-0 z-30 shadow-[0_4px_24px_rgba(23,107,255,0.06)]">
      {/* Contextual Section Header with pillar identity dot & badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <span className={`w-2.5 h-2.5 rounded-full ring-4 ${currentTabTheme.dot}`} />
          <h2 className="text-base font-extrabold text-[#160F2E] tracking-tight">
            {currentTabInfo.title}
          </h2>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${currentTabTheme.badge}`}>
          {currentTabInfo.badge}
        </span>
        <span className="text-xs text-[#52456F] font-medium hidden xl:inline">
          • {currentTabInfo.subtitle}
        </span>
      </div>

      {/* Right Controls: Online Status, Notifications, Avatar */}
      <div className="flex items-center gap-3">
        {/* Network status indicator */}
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold border transition ${
            isOnline
              ? 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
              : 'bg-[#FDE8F1] text-[#F52E91] border-[#FFD0E5]'
          }`}
        >
          {isOnline ? (
            <>
              <Wifi className="w-3.5 h-3.5 text-[#176BFF]" />
              <span>Conectado</span>
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-[#F52E91]" />
              <span>Modo Offline</span>
            </>
          )}
        </div>

        {/* Notification bell */}
        <button
          type="button"
          className="relative p-2.5 rounded-2xl bg-white/80 hover:bg-white text-[#52456F] hover:text-[#176BFF] border border-white/90 shadow-2xs transition"
          title="Notificações"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#176BFF]" />
        </button>

        {/* Profile Avatar with Blue Pulse colors */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-white/80">
          <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#176BFF] via-[#26D9FF] to-[#6545F5] p-0.5 cursor-pointer shadow-xs">
            <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-sm text-[#176BFF]">
              L
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#26D9FF] ring-2 ring-white" />
          </div>
          <div className="hidden xl:block text-left">
            <p className="text-xs font-extrabold text-[#160F2E] leading-tight">
              Lucas Silva
            </p>
            <p className="text-[10px] font-semibold text-[#52456F]">
              Nível Intermediário
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
