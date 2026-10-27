import React from 'react';
import { BookMarked, Sparkles, BookOpen, PenLine } from 'lucide-react';
import { WordPocketLogo } from '../brand/WordPocketLogo';

interface NotebookCoverProps {
  noteCount: number;
  userName?: string;
  userAvatar?: string;
  isOpening?: boolean;
  onOpen: () => void;
}

export const NotebookCover: React.FC<NotebookCoverProps> = ({
  noteCount,
  userName = 'Meu Caderno',
  userAvatar,
  isOpening = false,
  onOpen
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-12 px-4 max-w-xl mx-auto w-full select-none">
      {/* 3D Perspective Container for Smooth Opening Animation */}
      <div 
        className="w-full relative [perspective:1200px]"
        role="region"
        aria-label="Capa do Caderno de Anotações"
      >
        <div
          onClick={onOpen}
          className={`relative rounded-3xl cursor-pointer group transition-all duration-700 ease-out transform-gpu ${
            isOpening 
              ? '-rotate-y-45 scale-95 opacity-80 pointer-events-none' 
              : 'hover:scale-[1.015] hover:shadow-[0_25px_60px_-15px_rgba(18,80,196,0.35)] active:scale-[0.99]'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'left center'
          }}
        >
          {/* Notebook Outer Spine & Shadow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#092257] via-[#1250C4] to-[#1e40af] opacity-40 blur-lg group-hover:opacity-60 transition duration-500" />

          {/* Book Cover Body */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0a2769] via-[#1250C4] to-[#1a44b8] text-white p-7 sm:p-10 shadow-[0_20px_50px_rgba(9,34,87,0.4)] border border-[#2a68e8]/30 overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
            {/* Background Texture Lines and Lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#176BFF]/25 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#26D9FF]/15 blur-3xl pointer-events-none" />

            {/* Left Leather Spine Detail with Stitching */}
            <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-black/50 via-black/25 to-transparent border-r border-white/10 flex flex-col justify-between py-6 items-center">
              <div className="w-1.5 h-full border-r-2 border-dashed border-white/20" />
            </div>

            {/* Ribbon Bookmark Hanging Out */}
            <div className="absolute top-0 right-10 sm:right-14 w-6 sm:w-7 h-20 bg-gradient-to-b from-[#F59E0B] to-[#D97706] shadow-md rounded-b-md flex flex-col items-center justify-end pb-1.5 transform transition-transform group-hover:translate-y-1">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#0a2769] transform translate-y-2" />
            </div>

            {/* Header: Brand & Emblem */}
            <div className="pl-6 sm:pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
              <div className="flex items-center gap-2">
                <WordPocketLogo
                  variant="icon"
                  size="sm"
                  className="bg-white/10 p-1.5 rounded-xl border border-white/20 backdrop-blur-md"
                />
                <span className="text-xs uppercase tracking-widest font-black text-blue-200/90">
                  Word Pocket Journal
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[11px] font-bold text-blue-100">
                <BookOpen className="w-3.5 h-3.5 text-blue-300" />
                <span>{noteCount} {noteCount === 1 ? 'anotação' : 'anotações'}</span>
              </div>
            </div>

            {/* Center Golden/Embossed Plaque */}
            <div className="pl-6 sm:pl-8 my-auto relative z-10 py-6">
              <div className="bg-white/[0.08] backdrop-blur-xl border border-white/25 rounded-2xl p-6 sm:p-8 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] relative overflow-hidden group-hover:border-white/40 transition">
                {/* Subtle shine line across plaque */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#176BFF] via-[#26D9FF] to-white/90 p-0.5 shadow-lg flex items-center justify-center">
                  <div className="w-full h-full rounded-[14px] bg-[#0c2f78] flex items-center justify-center text-white">
                    <BookMarked className="w-7 h-7 sm:w-8 sm:h-8 text-[#26D9FF]" />
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-sm mb-1.5">
                  Caderno de Anotações
                </h1>
                <p className="text-blue-100 text-xs sm:text-sm font-medium max-w-sm mx-auto leading-relaxed">
                  Seu espaço pessoal para registrar vocabulário, regras gramaticais e reflexões de estudo.
                </p>

                {/* Owner Info Plaque */}
                <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-center gap-2.5 text-xs text-blue-200">
                  {userAvatar ? (
                    <img 
                      src={userAvatar} 
                      alt={userName} 
                      className="w-5 h-5 rounded-full object-cover ring-1 ring-white/40" 
                    />
                  ) : (
                    <PenLine className="w-3.5 h-3.5 text-blue-300" />
                  )}
                  <span className="font-semibold text-white truncate max-w-[200px]">
                    {userName || 'Caderno Pessoal'}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pl-6 sm:pl-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-blue-200/80 font-medium">
                Toque na capa para abrir suas anotações
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0c2f78] hover:bg-blue-50 font-extrabold text-xs shadow-lg transition transform group-hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#176BFF]" />
                <span>Abrir Caderno</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
