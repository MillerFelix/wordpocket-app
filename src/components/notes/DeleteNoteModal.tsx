import React, { useEffect } from 'react';
import { Trash2, AlertTriangle, X } from 'lucide-react';

interface DeleteNoteModalProps {
  isOpen: boolean;
  noteTitle?: string;
  isDeleting?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteNoteModal: React.FC<DeleteNoteModalProps> = ({
  isOpen,
  noteTitle,
  isDeleting = false,
  onConfirm,
  onCancel
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isDeleting) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isDeleting, onCancel]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-note-title"
    >
      <div 
        className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#FDE8F1] text-[#F52E91] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          <h2 id="delete-note-title" className="text-lg font-black text-[#160F2E]">
            Excluir anotação?
          </h2>
          <p className="text-xs sm:text-sm text-[#52456F] leading-relaxed">
            {noteTitle ? (
              <>
                Tem certeza de que deseja excluir a anotação <strong className="text-[#160F2E]">"{noteTitle}"</strong>?
              </>
            ) : (
              'Tem certeza de que deseja excluir permanentemente esta anotação?'
            )}
            {' '}Esta ação é definitiva e o conteúdo não poderá ser recuperado.
          </p>
        </div>

        <div className="flex items-center justify-end gap-2.5 pt-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-[#52456F] hover:bg-slate-100 border border-slate-200 transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#F52E91] hover:bg-[#D91B77] text-white shadow-xs transition active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" />
            <span>{isDeleting ? 'Excluindo...' : 'Excluir Anotação'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
