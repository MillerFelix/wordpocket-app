import React, { useEffect } from 'react';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  Languages, 
  Star, 
  Settings, 
  User, 
  Compass, 
  BookMarked,
  X
} from 'lucide-react';
import { TabType } from '../types';
import { WordPocketLogo } from './brand/WordPocketLogo';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  verbCount: number;
  practiceCount?: number;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

interface SecondaryNavItem {
  id: TabType;
  label: string;
  icon: React.ElementType;
  iconColor: string;
}

const SECONDARY_NAV_ITEMS: SecondaryNavItem[] = [
  {
    id: 'notes',
    label: 'Anotações',
    icon: BookMarked,
    iconColor: 'text-[#176BFF]'
  },
  {
    id: 'favorites',
    label: 'Favoritos',
    icon: Star,
    iconColor: 'text-[#F52E91]'
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: Settings,
    iconColor: 'text-[#2446C8]'
  },
  {
    id: 'profile',
    label: 'Perfil',
    icon: User,
    iconColor: 'text-[#176BFF]'
  }
];

function getMainNavItems(verbCount: number, practiceCount?: number) {
  return [
    {
      id: 'home' as TabType,
      label: 'Início',
      subtitle: 'Painel e visão geral',
      icon: Home,
      color: 'text-[#176BFF]',
      activeBg: 'bg-[#E1ECFC] border border-white/90',
      activeText: 'text-[#176BFF]',
      activeBar: 'bg-[#176BFF]'
    },
    {
      id: 'learn' as TabType,
      label: 'Aprender',
      subtitle: 'Biblioteca & Fundamentos',
      icon: Compass,
      count: '37 Artigos',
      color: 'text-[#00BFA5]',
      activeBg: 'bg-[#E0F7F4] border border-white/90',
      activeText: 'text-[#00BFA5]',
      activeBar: 'bg-[#00BFA5]'
    },
    {
      id: 'verbs' as TabType,
      label: 'Verbos Irregulares',
      subtitle: 'Tabela das 3 formas',
      icon: BookOpen,
      count: verbCount,
      color: 'text-[#6545F5]',
      activeBg: 'bg-[#EDE8FD] border border-white/90',
      activeText: 'text-[#6545F5]',
      activeBar: 'bg-[#6545F5]'
    },
    {
      id: 'practice' as TabType,
      label: 'Praticar',
      subtitle: '4 Habilidades do idioma',
      icon: GraduationCap,
      count: practiceCount ? `${practiceCount} Lições` : '4 Áreas',
      color: 'text-[#176BFF]',
      activeBg: 'bg-[#E1ECFC] border border-white/90',
      activeText: 'text-[#176BFF]',
      activeBar: 'bg-[#176BFF]'
    },
    {
      id: 'translator' as TabType,
      label: 'Tradutor',
      subtitle: 'Google Tradutor oficial',
      icon: Languages,
      count: 'Google',
      color: 'text-[#E04D1B]',
      activeBg: 'bg-[#FFEAE1] border border-white/90',
      activeText: 'text-[#E04D1B]',
      activeBar: 'bg-[#FF6534]'
    }
  ];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  verbCount,
  practiceCount,
  isMobileOpen = false,
  onCloseMobile
}) => {
  // Bloqueia a rolagem do corpo e gerencia tecla Escape quando a gaveta móvel está aberta
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onCloseMobile?.();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileOpen, onCloseMobile]);

  const handleTabClick = (tab: TabType) => {
    onTabChange(tab);
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  const mainNavItems = React.useMemo(
    () => getMainNavItems(verbCount, practiceCount),
    [verbCount, practiceCount]
  );

  const renderNavContent = () => (
    <div className="space-y-6">
      {/* Navegação principal */}
      <nav className="space-y-1.5" aria-label="Navegação Principal">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all duration-200 group relative cursor-pointer ${
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

      {/* Navegação secundária (Anotações, Favoritos, Configurações e Perfil) */}
      <div className="pt-2 border-t border-white/80 space-y-1">
        {SECONDARY_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item.id)}
              className={`w-full flex items-center gap-3 p-2.5 rounded-2xl text-left transition-colors text-xs font-semibold cursor-pointer ${
                isActive
                  ? 'bg-[#E1ECFC] text-[#176BFF] font-bold border border-white/90 shadow-2xs'
                  : 'text-[#52456F] hover:bg-white/80 hover:text-[#160F2E]'
              }`}
            >
              <Icon className={`w-4 h-4 stroke-[2] ${item.iconColor}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-72 shrink-0 bg-[#F0F6FF]/75 backdrop-blur-2xl border-r border-white/80 p-5 h-screen sticky top-0 shadow-[4px_0_32px_rgba(23,107,255,0.08)] select-none overflow-y-auto scrollbar-none">
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange('home')}
          className="px-2 pt-1 pb-5 cursor-pointer group hover:opacity-95 transition"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onTabChange('home')}
        >
          <WordPocketLogo
            variant="horizontal"
            size="md"
            showSubtitle
            subtitleText="Estudo Inteligente de Inglês"
            className="group-hover:scale-[1.02] transition-transform"
          />
        </div>

        {renderNavContent()}
      </aside>

      {/* Mobile Drawer (Visible on smaller viewports when opened) */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-[#160F2E]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={onCloseMobile}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu de Navegação Lateral"
            className="relative z-50 w-72 max-w-[85vw] bg-[#F0F6FF] border-r border-white/80 p-5 h-full flex flex-col shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-200 select-none"
          >
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between pb-5 border-b border-white/80">
              <div 
                onClick={() => handleTabClick('home')}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <WordPocketLogo
                  variant="horizontal"
                  size="sm"
                  showSubtitle
                  subtitleText="Estudo Inteligente"
                />
              </div>

              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1.5 rounded-xl text-[#52456F] hover:text-[#160F2E] hover:bg-white/80 transition cursor-pointer"
                aria-label="Fechar menu lateral"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-4 flex-1">
              {renderNavContent()}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
