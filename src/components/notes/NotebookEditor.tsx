import React, { useRef, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading3, 
  Type, 
  Pin, 
  Trash2, 
  Check, 
  ArrowLeft,
  Calendar,
  CloudCheck,
  Sparkles
} from 'lucide-react';
import { Note } from '../../types/notes';
import { formatNoteDate } from '../../services/notesService';

interface NotebookEditorProps {
  note: Note | null;
  saveStatus: 'saved' | 'saving';
  onTitleChange: (newTitle: string) => void;
  onContentChange: (newContent: string) => void;
  onTogglePin: () => void;
  onRequestDelete: () => void;
  onBackToList?: () => void;
  onCreateNew?: () => void;
}

export const NotebookEditor: React.FC<NotebookEditorProps> = ({
  note,
  saveStatus,
  onTitleChange,
  onContentChange,
  onTogglePin,
  onRequestDelete,
  onBackToList,
  onCreateNew
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const currentNoteIdRef = useRef<string | null>(null);

  // Sincroniza o conteúdo com o DOM do editor ao trocar de anotação ou inicializar
  useEffect(() => {
    if (!editorRef.current) return;

    if (note && currentNoteIdRef.current !== note.id) {
      currentNoteIdRef.current = note.id;
      editorRef.current.innerHTML = note.content || '';
    } else if (!note) {
      currentNoteIdRef.current = null;
      editorRef.current.innerHTML = '';
    }
  }, [note?.id]);

  const handleInput = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    onContentChange(html);
  };

  const executeCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
      handleInput();
    }
  };

  if (!note) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white/60 backdrop-blur-md rounded-r-3xl select-none min-h-[480px]">
        <div className="w-16 h-16 rounded-3xl bg-[#E1ECFC] text-[#176BFF] flex items-center justify-center mb-4 shadow-sm">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="text-lg font-black text-[#160F2E] mb-2">
          Seu caderno está pronto para suas ideias
        </h2>
        <p className="text-xs sm:text-sm text-[#52456F] max-w-md leading-relaxed mb-6">
          Selecione uma anotação na lista ao lado ou crie uma nova para registrar palavras novas, regras gramaticais ou pensamentos em inglês.
        </p>
        {onCreateNew && (
          <button
            type="button"
            onClick={onCreateNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-brand text-white font-extrabold text-xs shadow-soft hover:shadow-glow transition active:scale-95 cursor-pointer"
          >
            <span>Criar Primeira Anotação</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div 
      className="flex-1 flex flex-col h-full bg-white/95 backdrop-blur-xl rounded-r-3xl overflow-hidden shadow-sm"
      role="region"
      aria-label="Editor de Anotação"
    >
      {/* Barra superior de ações */}
      <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-slate-100 bg-white/80">
        <div className="flex items-center gap-2">
          {onBackToList && (
            <button
              type="button"
              onClick={onBackToList}
              className="lg:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#160F2E] transition active:scale-95 cursor-pointer"
              aria-label="Voltar para a lista de anotações"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Lista</span>
            </button>
          )}

          {/* Indicador de status de salvamento */}
          <div className="flex items-center gap-1.5 text-[11px] font-bold">
            {saveStatus === 'saving' ? (
              <span className="inline-flex items-center gap-1 text-[#176BFF] animate-pulse">
                <span className="w-2 h-2 rounded-full bg-[#176BFF]" />
                <span>Salvando...</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[#0A9B80]">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="hidden sm:inline">Salvo automaticamente</span>
                <span className="sm:hidden">Salvo</span>
              </span>
            )}
          </div>
        </div>

        {/* Ferramentas: fixar e excluir */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onTogglePin}
            className={`p-2 rounded-xl transition cursor-pointer ${
              note.isPinned 
                ? 'bg-[#FEF3C7] text-[#D97706] hover:bg-[#FDE68A]' 
                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
            }`}
            title={note.isPinned ? 'Desafixar do topo' : 'Fixar anotação no topo'}
            aria-label={note.isPinned ? 'Desafixar do topo' : 'Fixar anotação no topo'}
          >
            <Pin className={`w-4 h-4 ${note.isPinned ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            onClick={onRequestDelete}
            className="p-2 rounded-xl text-slate-400 hover:bg-[#FDE8F1] hover:text-[#F52E91] transition cursor-pointer"
            title="Excluir anotação"
            aria-label="Excluir anotação"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Corpo do editor */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 overflow-y-auto">
        {/* Campo de título */}
        <input
          type="text"
          value={note.title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Título da anotação..."
          className="w-full text-xl sm:text-2xl font-black text-[#160F2E] placeholder:text-slate-300 border-none outline-hidden bg-transparent mb-1 focus:ring-0"
          aria-label="Título da anotação"
        />

        {/* Metadados da anotação */}
        <div className="flex items-center gap-3 text-[11px] text-[#7E749B] mb-4 pb-3 border-b border-slate-100 font-medium">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            <span>Atualizado {formatNoteDate(note.updatedAt || note.createdAt)}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <CloudCheck className="w-3 h-3 text-[#176BFF]" />
            <span>Sincronizado</span>
          </div>
        </div>

        {/* Barra de formatação de texto */}
        <div 
          className="flex items-center flex-wrap gap-1 p-1 bg-slate-50/90 rounded-2xl border border-slate-200/60 mb-4 select-none shrink-0"
          role="toolbar"
          aria-label="Barra de ferramentas de formatação"
        >
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              executeCommand('bold');
            }}
            className="p-2 rounded-xl hover:bg-white text-slate-600 hover:text-[#176BFF] hover:shadow-2xs transition cursor-pointer"
            title="Negrito (Ctrl+B)"
            aria-label="Negrito"
          >
            <Bold className="w-4 h-4" />
          </button>

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              executeCommand('italic');
            }}
            className="p-2 rounded-xl hover:bg-white text-slate-600 hover:text-[#176BFF] hover:shadow-2xs transition cursor-pointer"
            title="Itálico (Ctrl+I)"
            aria-label="Itálico"
          >
            <Italic className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-slate-200 mx-1" />

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              executeCommand('formatBlock', '<h3>');
            }}
            className="p-2 rounded-xl hover:bg-white text-slate-600 hover:text-[#176BFF] hover:shadow-2xs transition cursor-pointer"
            title="Título de Seção (H3)"
            aria-label="Título"
          >
            <Heading3 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              executeCommand('formatBlock', '<p>');
            }}
            className="p-2 rounded-xl hover:bg-white text-slate-600 hover:text-[#176BFF] hover:shadow-2xs transition cursor-pointer"
            title="Parágrafo Normal"
            aria-label="Parágrafo"
          >
            <Type className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-slate-200 mx-1" />

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              executeCommand('insertUnorderedList');
            }}
            className="p-2 rounded-xl hover:bg-white text-slate-600 hover:text-[#176BFF] hover:shadow-2xs transition cursor-pointer"
            title="Lista com Marcadores"
            aria-label="Lista com Marcadores"
          >
            <List className="w-4 h-4" />
          </button>

          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              executeCommand('insertOrderedList');
            }}
            className="p-2 rounded-xl hover:bg-white text-slate-600 hover:text-[#176BFF] hover:shadow-2xs transition cursor-pointer"
            title="Lista Numerada"
            aria-label="Lista Numerada"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
        </div>

        {/* Área de conteúdo rico */}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          data-testid="notes-editor-content"
          className="flex-1 min-h-[300px] outline-hidden text-sm sm:text-base text-[#160F2E] leading-relaxed selection:bg-[#E1ECFC] selection:text-[#176BFF] focus:ring-0 empty:before:content-[attr(data-placeholder)] empty:before:text-slate-300 empty:before:pointer-events-none prose prose-slate max-w-none"
          data-placeholder="Escreva suas anotações, regras de inglês, exemplos ou frases aqui..."
          aria-label="Conteúdo da anotação"
        />
      </div>
    </div>
  );
};
