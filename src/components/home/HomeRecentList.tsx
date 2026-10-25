import React from 'react';
import { Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { TabType } from '../../types';

interface RecentItem {
  term: string;
  type: string;
  sub: string;
  targetTab: TabType;
  color: string;
  itemBg: string;
}

const RECENT_ITEMS: RecentItem[] = [
  {
    term: 'go',
    type: 'Verbos Irregulares',
    sub: 'went • gone • ir',
    targetTab: 'verbs',
    color: 'bg-[#6545F5]',
    itemBg: 'bg-[#EDE8FD]/80 hover:bg-[#E2D7F8] border-white/80'
  },
  {
    term: 'Listening',
    type: 'Praticar Inglês',
    sub: 'Compreensão oral • Áudio',
    targetTab: 'practice',
    color: 'bg-[#176BFF]',
    itemBg: 'bg-[#E1ECFC]/80 hover:bg-[#D4E5FA] border-white/80'
  },
  {
    term: 'good morning',
    type: 'Tradutor',
    sub: 'Português ⇄ Inglês',
    targetTab: 'translator',
    color: 'bg-[#FF6534]',
    itemBg: 'bg-[#FFEAE1]/80 hover:bg-[#FEDBD0] border-white/80'
  }
];

interface HomeRecentListProps {
  onNavigate: (tab: TabType, term?: string) => void;
}

export const HomeRecentList: React.FC<HomeRecentListProps> = ({ onNavigate }) => {
  return (
    <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/90 shadow-soft-card space-y-4">
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#176BFF]" />
          <h2 className="text-sm font-extrabold text-[#160F2E]">
            Recentemente acessados
          </h2>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('verbs')}
          className="text-xs font-bold text-[#176BFF] hover:underline flex items-center gap-1"
        >
          <span>Ver histórico</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-2.5">
        {RECENT_ITEMS.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.targetTab, item.term)}
            className={`flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border ${item.itemBg} transition cursor-pointer group shadow-2xs`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.targetTab, item.term)}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl ${item.color} text-white flex items-center justify-center font-bold text-xs shadow-xs`}
              >
                {item.term.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#160F2E] group-hover:text-[#176BFF] transition">
                  {item.term}
                </p>
                <p className="text-xs text-[#52456F] font-medium">
                  {item.type} • {item.sub}
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-[#52456F] group-hover:text-[#176BFF] group-hover:translate-x-0.5 transition" />
          </div>
        ))}
      </div>
    </div>
  );
};
