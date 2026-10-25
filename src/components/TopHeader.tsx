import React from 'react';
import { Search, Bell, X } from 'lucide-react';
import { TabType } from '../types';

interface TopHeaderProps {
  onSearchSelect?: (tab: TabType, term: string) => void;
  onNavigate: (tab: TabType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  searchQuery,
  onSearchChange,
  onNavigate: _onNavigate
}) => {
  return (
    <header className="hidden lg:flex items-center justify-between gap-4 py-4 px-8 border-b border-white/80 bg-white/70 backdrop-blur-2xl sticky top-0 z-30 shadow-[0_4px_24px_rgba(105,56,245,0.06)]">
      {/* Global Search Bar */}
      <div className="relative flex-1 max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6938F5]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar palavra, verbo ou tradução..."
          className="w-full pl-11 pr-10 py-2.5 text-sm bg-white/85 backdrop-blur-md hover:border-[#6938F5]/40 focus:border-[#6938F5] focus:bg-white focus:ring-4 focus:ring-[#6938F5]/10 rounded-2xl border border-white/90 shadow-2xs outline-none transition text-[#160F2E] placeholder:text-[#645A82] font-medium"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#52456F] hover:text-[#160F2E] rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Right Controls: Notifications, Avatar */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative p-2.5 rounded-2xl bg-white/80 hover:bg-white text-[#52456F] hover:text-[#6938F5] border border-white/90 shadow-2xs transition"
          title="Notificações"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#F52E91]" />
        </button>

        {/* Profile Avatar with Neon Candy colors */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-white/80">
          <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#6938F5] via-[#F52E91] to-[#FF6534] p-0.5 cursor-pointer shadow-xs">
            <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-sm text-[#6938F5]">
              L
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#19D9B4] ring-2 ring-white" />
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
