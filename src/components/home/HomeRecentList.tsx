import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  ChevronRight, 
  Compass, 
  BookOpen, 
  GraduationCap, 
  Languages, 
  BookMarked 
} from 'lucide-react';
import { TabType } from '../../types';
import { getRecentAccesses, RecentAccessItem } from '../../services/recentAccessService';

interface HomeRecentListProps {
  onNavigate: (tab: TabType, param?: string) => void;
}

function getItemTheme(targetTab: TabType) {
  switch (targetTab) {
    case 'learn':
      return {
        icon: Compass,
        badgeBg: 'bg-[#E0F7F4]',
        badgeText: 'text-[#00BFA5]',
        itemBg: 'bg-[#E0F7F4]/60 hover:bg-[#D0F2EC] border-white/80'
      };
    case 'verbs':
      return {
        icon: BookOpen,
        badgeBg: 'bg-[#EDE8FD]',
        badgeText: 'text-[#6545F5]',
        itemBg: 'bg-[#EDE8FD]/60 hover:bg-[#E2D7F8] border-white/80'
      };
    case 'practice':
      return {
        icon: GraduationCap,
        badgeBg: 'bg-[#E1ECFC]',
        badgeText: 'text-[#176BFF]',
        itemBg: 'bg-[#E1ECFC]/60 hover:bg-[#D4E5FA] border-white/80'
      };
    case 'translator':
      return {
        icon: Languages,
        badgeBg: 'bg-[#FFEAE1]',
        badgeText: 'text-[#E04D1B]',
        itemBg: 'bg-[#FFEAE1]/60 hover:bg-[#FEDBD0] border-white/80'
      };
    case 'notes':
      return {
        icon: BookMarked,
        badgeBg: 'bg-[#E1ECFC]',
        badgeText: 'text-[#176BFF]',
        itemBg: 'bg-[#E1ECFC]/60 hover:bg-[#D4E5FA] border-white/80'
      };
    default:
      return {
        icon: Clock,
        badgeBg: 'bg-white/90',
        badgeText: 'text-[#176BFF]',
        itemBg: 'bg-white/70 hover:bg-white border-white/80'
      };
  }
}

export const HomeRecentList: React.FC<HomeRecentListProps> = ({ onNavigate }) => {
  const [recentItems, setRecentItems] = useState<RecentAccessItem[]>(() => getRecentAccesses());
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      setRecentItems(getRecentAccesses());
    };

    window.addEventListener('wordpocket-recent-access-updated', handleUpdate);
    return () => {
      window.removeEventListener('wordpocket-recent-access-updated', handleUpdate);
    };
  }, []);

  const displayedItems = recentItems.slice(0, 5);

  return (
    <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/90 shadow-soft-card space-y-3 sm:space-y-4 flex flex-col justify-between">
      <div className="space-y-2.5 sm:space-y-3">
        <div className="flex items-center justify-between pb-0.5 sm:pb-1">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#176BFF]" />
            <h2 className="text-xs sm:text-sm font-extrabold text-[#160F2E]">
              Recentemente acessados
            </h2>
          </div>
          {displayedItems.length > 0 && (
            <span className="text-[10px] sm:text-[11px] font-bold text-[#52456F] bg-white/80 px-2 py-0.5 rounded-full border border-white/90 shadow-2xs">
              {displayedItems.length} {displayedItems.length === 1 ? 'item' : 'itens'}
            </span>
          )}
        </div>

        {displayedItems.length === 0 ? (
          <div className="py-4 sm:py-8 text-center space-y-1.5 sm:space-y-2 select-none">
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl sm:rounded-2xl bg-[#E1ECFC] text-[#176BFF] flex items-center justify-center mx-auto shadow-2xs">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-xs sm:text-sm font-extrabold text-[#160F2E]">
              Nenhum conteúdo recente
            </h3>
            <p className="text-[11px] sm:text-xs text-[#52456F] max-w-xs mx-auto leading-relaxed">
              Conforme você consulta artigos, verbos e práticas, seus acessos mais recentes aparecerão aqui para você retomar facilmente.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {displayedItems.map((item, idx) => {
              const theme = getItemTheme(item.targetTab);
              const Icon = theme.icon;
              const isHiddenOnMobile = idx >= 3 && !showAllMobile;

              return (
                <div
                  key={item.id}
                  onClick={() => onNavigate(item.targetTab, item.targetParam)}
                  className={`${
                    isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                  } items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border ${theme.itemBg} transition cursor-pointer group shadow-2xs active:scale-[0.99]`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.targetTab, item.targetParam)}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                    <div
                      className={`w-7 sm:w-9 h-7 sm:h-9 rounded-lg sm:rounded-xl ${theme.badgeBg} ${theme.badgeText} flex items-center justify-center shrink-0 shadow-xs border border-white/80`}
                    >
                      <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0 truncate">
                      <p className="text-xs sm:text-sm font-extrabold text-[#160F2E] group-hover:text-[#176BFF] transition truncate">
                        {item.title}
                      </p>
                      <p className="text-[10px] sm:text-xs text-[#52456F] font-medium truncate">
                        <span className="font-semibold text-[#160F2E]/80">{item.typeLabel}</span>
                        {item.subtitle ? ` • ${item.subtitle}` : ''}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#52456F] group-hover:text-[#176BFF] group-hover:translate-x-0.5 transition shrink-0" />
                </div>
              );
            })}

            {displayedItems.length > 3 && (
              <button
                type="button"
                onClick={() => setShowAllMobile((prev) => !prev)}
                className="sm:hidden w-full text-center py-1.5 text-[11px] font-bold text-[#176BFF] hover:text-[#0E4FCC] active:scale-95 transition"
              >
                {showAllMobile ? 'Mostrar menos' : `Ver mais (${displayedItems.length - 3})`}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
