import React from 'react';
import { BookOpen, GraduationCap, Languages, ArrowRight } from 'lucide-react';
import { TabType } from '../../types';

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
          onClick={() => onNavigate('verbs')}
          className="text-xs font-bold text-[#176BFF] hover:underline flex items-center gap-1"
        >
          <span>Ver todos</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => onNavigate('verbs')}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#EDE8FD] hover:bg-[#E2D7F8] text-[#6545F5] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group"
        >
          <div className="w-6 h-6 rounded-lg bg-white/90 text-[#6545F5] flex items-center justify-center group-hover:bg-[#6545F5] group-hover:text-white transition shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <span>Verbos</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('practice')}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#E1ECFC] hover:bg-[#D0E2FA] text-[#176BFF] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group"
        >
          <div className="w-6 h-6 rounded-lg bg-white/90 text-[#176BFF] flex items-center justify-center group-hover:bg-[#176BFF] group-hover:text-white transition shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5" />
          </div>
          <span>Praticar</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('translator')}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#FFEAE1] hover:bg-[#FEDBD0] text-[#E04D1B] border border-white/90 shadow-2xs font-bold text-xs sm:text-sm transition active:scale-95 group"
        >
          <div className="w-6 h-6 rounded-lg bg-white/90 text-[#E04D1B] flex items-center justify-center group-hover:bg-[#FF6534] group-hover:text-white transition shadow-2xs">
            <Languages className="w-3.5 h-3.5" />
          </div>
          <span>Tradutor</span>
        </button>
      </div>
    </div>
  );
};
