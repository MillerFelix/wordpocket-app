import React from 'react';
import { Wifi, WifiOff, LogIn } from 'lucide-react';
import { TabType } from '../types';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useAuth } from '../contexts/AuthContext';
import { getAvatarById } from '../data/avatars';

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
  learn: {
    title: 'Biblioteca Aprender',
    subtitle: 'Consultas, explicações claras, fundamentos e gramática essencial',
    badge: 'Aprender'
  },
  verbs: {
    title: 'Verbos Irregulares',
    subtitle: 'Base completa com 200 verbos e três formas gramaticais',
    badge: '200 Verbos'
  },
  practice: {
    title: 'Praticar',
    subtitle: 'Desenvolvimento das 4 habilidades: Escuta, Fala, Leitura e Escrita',
    badge: '4 Habilidades'
  },
  translator: {
    title: 'Tradutor Rápido',
    subtitle: 'Consulta e tradução imediata com inteligência contextual',
    badge: 'Tradutor'
  },
  history: {
    title: 'Histórico de Consultas',
    subtitle: 'Registro das suas últimas pesquisas no aplicativo',
    badge: 'Histórico'
  },
  profile: {
    title: 'Perfil Pessoal',
    subtitle: 'Gerencie sua conta, progresso sincronizado e histórico',
    badge: 'Conta'
  },
  notes: {
    title: 'Caderno de Anotações',
    subtitle: 'Seu espaço pessoal de anotações, vocabulário e estudos em inglês',
    badge: 'Anotações'
  }
};

const TAB_THEMES: Record<TabType, { dot: string; badge: string }> = {
  home: {
    dot: 'bg-[#176BFF] ring-[#176BFF]/20',
    badge: 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
  },
  profile: {
    dot: 'bg-[#176BFF] ring-[#176BFF]/20',
    badge: 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
  },
  notes: {
    dot: 'bg-[#176BFF] ring-[#176BFF]/20',
    badge: 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
  },
  learn: {
    dot: 'bg-[#00BFA5] ring-[#00BFA5]/20',
    badge: 'bg-[#E0F7F4] text-[#00BFA5] border-[#A7F3D0]'
  },
  verbs: {
    dot: 'bg-[#6545F5] ring-[#6545F5]/20',
    badge: 'bg-[#EDE8FD] text-[#6545F5] border-[#D9CEFC]'
  },
  practice: {
    dot: 'bg-[#176BFF] ring-[#176BFF]/20',
    badge: 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
  },
  translator: {
    dot: 'bg-[#FF6534] ring-[#FF6534]/20',
    badge: 'bg-[#FFEAE1] text-[#E04D1B] border-[#FFD2C2]'
  },
  history: {
    dot: 'bg-[#176BFF] ring-[#176BFF]/20',
    badge: 'bg-[#E1ECFC] text-[#176BFF] border-[#BED7FA]'
  }
};

export const TopHeader: React.FC<TopHeaderProps> = ({
  activeTab = 'home',
  onNavigate
}) => {
  const isOnline = useOnlineStatus();
  const { user, profile, openAuthModal, avatarId } = useAuth();
  const currentTabInfo = TAB_TITLES[activeTab] || TAB_TITLES.home;
  const currentTabTheme = TAB_THEMES[activeTab] || TAB_THEMES.home;
  const currentAvatar = getAvatarById(avatarId);

  return (
    <header className="hidden lg:flex items-center justify-between py-3.5 px-8 border-b border-white/80 bg-[#F0F6FF]/75 backdrop-blur-2xl sticky top-0 z-30 shadow-[0_4px_24px_rgba(23,107,255,0.06)]">
      {/* Cabeçalho contextual da seção com indicador e badge */}
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

      {/* Controles à direita: status de rede e avatar */}
      <div className="flex items-center gap-3">
        {/* Indicador de conectividade */}
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

        {/* Avatar de perfil ou botão de login */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-white/80">
          {user ? (
            <div 
              onClick={() => onNavigate('profile')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onNavigate('profile')}
              className="flex items-center gap-2.5 cursor-pointer group"
              title={`Acessar Perfil (${currentAvatar.name})`}
            >
              <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#176BFF] via-[#26D9FF] to-[#6545F5] p-0.5 shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-white ring-1 ring-white">
                  <img
                    src={currentAvatar.image}
                    alt={currentAvatar.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#19D9B4] ring-2 ring-white" />
              </div>
              <div className="hidden xl:block text-left">
                <p className="text-xs font-extrabold text-[#160F2E] leading-tight group-hover:text-[#176BFF] transition">
                  {profile?.displayName || user.displayName || 'Estudante'}
                </p>
                <p className="text-[10px] font-semibold text-[#52456F]">
                  {currentAvatar.name}
                </p>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => openAuthModal('login')}
              className="inline-flex items-center gap-2 py-2 px-3.5 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs shadow-colored-blue hover:opacity-95 transition active:scale-95 cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Entrar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
