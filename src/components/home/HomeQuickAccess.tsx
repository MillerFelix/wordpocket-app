import React from 'react';
import { BookOpen, GraduationCap, Languages, ArrowRight, Compass } from 'lucide-react';
import { TabType } from '../../types';

interface QuickAccessItem {
  id: TabType;
  label: string;
  icon: React.ElementType;
  containerClass: string;
  iconColorClass: string;
  iconHoverClass: string;
}

const QUICK_ACCESS_ITEMS: QuickAccessItem[] = [
  {
    id: 'learn',
    label: 'Aprender',
    icon: Compass,
    containerClass: 'bg-[#E0F7F4] hover:bg-[#CCF2EB] text-[#009688]',
    iconColorClass: 'text-[#00BFA5]',
    iconHoverClass: 'group-hover:bg-[#00BFA5]'
  },
  {
    id: 'practice',
    label: 'Praticar',
    icon: GraduationCap,
    containerClass: 'bg-[#E1ECFC] hover:bg-[#D0E2FA] text-[#176BFF]',
    iconColorClass: 'text-[#176BFF]',
    iconHoverClass: 'group-hover:bg-[#176BFF]'
  },
  {
    id: 'verbs',
    label: 'Verbos',
    icon: BookOpen,
    containerClass: 'bg-[#EDE8FD] hover:bg-[#E2D7F8] text-[#6545F5]',
    iconColorClass: 'text-[#6545F5]',
    iconHoverClass: 'group-hover:bg-[#6545F5]'
  },
  {
    id: 'translator',
    label: 'Tradutor',
    icon: Languages,
    containerClass: 'bg-[#FFEAE1] hover:bg-[#FEDBD0] text-[#E04D1B]',
    iconColorClass: 'text-[#E04D1B]',
    iconHoverClass: 'group-hover:bg-[#FF6534]'
  }
];

interface HomeQuickAccessProps {
  onNavigate: (tab: TabType) => void;
}

export const HomeQuickAccess: React.FC<HomeQuickAccessProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#52456F]">
          Acesso rápido
        </h2>
        <button
          type="button"
          onClick={() => onNavigate('learn')}
          className="text-xs font-bold text-[#176BFF] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Ver biblioteca</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {QUICK_ACCESS_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-2xl ${item.containerClass} border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group cursor-pointer`}
            >
              <div className={`w-6 h-6 rounded-lg bg-white/90 ${item.iconColorClass} flex items-center justify-center ${item.iconHoverClass} group-hover:text-white transition shadow-2xs`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
