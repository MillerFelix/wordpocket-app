import React from 'react';
import { Plus, Pin, Clock, BookOpen, BookMarked, Sparkles } from 'lucide-react';
import { Note } from '../../types/notes';
import { SearchInput } from '../shared/SearchInput';
import { formatNoteDate, stripHtml } from '../../services/notesService';

interface NotebookSidebarProps {
  notes: Note[];
  selectedNoteId: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectNote: (noteId: string) => void;
  onCreateNote: () => void;
  onCloseNotebook: () => void;
}

export const NotebookSidebar: React.FC<NotebookSidebarProps> = ({
  notes,
  selectedNoteId,
  searchQuery,
  onSearchChange,
  onSelectNote,
  onCreateNote,
  onCloseNotebook
}) => {
  const filteredNotes = notes.filter((n) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = (n.title || '').toLowerCase().includes(q);
    const contentMatch = stripHtml(n.content || '').toLowerCase().includes(q);
    return titleMatch || contentMatch;
  });

  return (
    <aside 
      className="flex flex-col h-full bg-[#F0F6FF]/70 backdrop-blur-xl border-r border-white/80 p-3 sm:p-4 select-none"
      aria-label="Índice do Caderno"
    >
      {/* Top Bar: Cover Return & New Note CTA */}
      <div className="space-y-3 pb-3 border-b border-white/80">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onCloseNotebook}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/80 hover:bg-white text-xs font-bold text-[#1250C4] border border-white/90 shadow-2xs transition active:scale-95 cursor-pointer"
            title="Fechar caderno e voltar à capa"
          >
            <BookMarked className="w-3.5 h-3.5 text-[#176BFF]" />
            <span>Ver Capa</span>
          </button>

          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#52456F] bg-white/60 px-2 py-1 rounded-lg">
            <BookOpen className="w-3 h-3 text-[#176BFF]" />
            <span>{notes.length} {notes.length === 1 ? 'nota' : 'notas'}</span>
          </div>
        </div>

        {/* Primary Action: New Note */}
        <button
          type="button"
          onClick={onCreateNote}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs shadow-soft transition-all duration-200 hover:shadow-glow hover:scale-[1.01] active:scale-95 cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Nova Anotação</span>
        </button>

        {/* Realtime Search Bar */}
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Buscar no caderno..."
          ariaLabel="Buscar por título ou conteúdo nas anotações"
          className="w-full text-xs"
        />
      </div>

      {/* Notes List Scroll Area */}
      <div className="flex-1 overflow-y-auto pt-3 space-y-2 pr-0.5" role="list">
        {filteredNotes.length === 0 ? (
          <div className="py-10 px-3 text-center space-y-3">
            <div className="w-10 h-10 mx-auto rounded-2xl bg-white/80 text-slate-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            {searchQuery ? (
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#160F2E]">Nenhuma anotação encontrada</p>
                <p className="text-[11px] text-[#52456F]">Não encontramos nada para "{searchQuery}"</p>
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="text-xs text-[#176BFF] font-bold hover:underline pt-1 inline-block cursor-pointer"
                >
                  Limpar busca
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#160F2E]">Seu caderno está vazio</p>
                <p className="text-[11px] text-[#52456F]">Toque em "Nova Anotação" acima para começar.</p>
              </div>
            )}
          </div>
        ) : (
          filteredNotes.map((note) => {
            const isSelected = note.id === selectedNoteId;
            const plainContent = stripHtml(note.content);
            const displayTitle = note.title.trim() || 'Anotação sem título';

            return (
              <div
                key={note.id}
                role="listitem"
                onClick={() => onSelectNote(note.id)}
                className={`relative p-3.5 rounded-2xl text-left transition-all duration-150 cursor-pointer group border ${
                  isSelected
                    ? 'bg-[#E1ECFC] border-[#BED7FA] text-[#176BFF] shadow-xs'
                    : 'bg-white/75 hover:bg-white border-white/90 text-[#160F2E] hover:shadow-2xs'
                }`}
              >
                {/* Left Active Indicator Bar */}
                {isSelected && (
                  <span className="absolute left-0 top-3 bottom-3 w-1 bg-[#176BFF] rounded-r-full" />
                )}

                <div className="flex items-start justify-between gap-1.5">
                  <h3 className={`text-xs font-black truncate flex-1 ${
                    isSelected ? 'text-[#176BFF]' : 'text-[#160F2E] group-hover:text-[#176BFF]'
                  }`}>
                    {displayTitle}
                  </h3>
                  {note.isPinned && (
                    <Pin className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B] shrink-0 mt-0.5" />
                  )}
                </div>

                <p className="text-[11px] text-[#52456F] line-clamp-2 mt-1 leading-relaxed font-normal">
                  {plainContent || 'Nenhum texto ainda...'}
                </p>

                <div className="flex items-center gap-1 mt-2 text-[10px] text-[#7E749B] font-medium">
                  <Clock className="w-2.5 h-2.5 shrink-0 text-slate-400" />
                  <span>{formatNoteDate(note.updatedAt || note.createdAt)}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
};
