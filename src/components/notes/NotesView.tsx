import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getAvatarById } from '../../data/avatars';
import { Note } from '../../types/notes';
import { 
  getNotes, 
  saveNote, 
  deleteNote, 
  createEmptyNote, 
  sortNotes 
} from '../../services/notesService';
import { NotebookCover } from './NotebookCover';
import { NotebookSidebar } from './NotebookSidebar';
import { NotebookEditor } from './NotebookEditor';
import { DeleteNoteModal } from './DeleteNoteModal';
import { TabType } from '../../types';
import { recordRecentAccess } from '../../services/recentAccessService';

interface NotesViewProps {
  onNavigate?: (tab: TabType) => void;
}

const STORAGE_SESSION_OPEN_KEY = 'wordpocket_notebook_opened';

export const NotesView: React.FC<NotesViewProps> = () => {
  const { user, profile, avatarId } = useAuth();
  const currentAvatar = getAvatarById(avatarId);
  const userName = profile?.displayName || user?.displayName || 'Caderno de Estudos';

  // Notebook cover vs opened state
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_SESSION_OPEN_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [isOpening, setIsOpening] = useState(false);

  // Notes state
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');

  // Mobile navigation between list and editor
  const [mobileView, setMobileView] = useState<'list' | 'editor'>('list');

  // Delete modal state
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    noteId: string | null;
    noteTitle: string;
    isDeleting: boolean;
  }>({
    isOpen: false,
    noteId: null,
    noteTitle: '',
    isDeleting: false
  });

  // Debounce save timer reference & current note ref to prevent data loss on unmount
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pendingNoteRef = useRef<Note | null>(null);

  // Load notes on mount and when user auth changes
  useEffect(() => {
    let isMounted = true;
    getNotes(user?.uid).then((loadedNotes) => {
      if (!isMounted) return;
      setNotes(loadedNotes);
      if (loadedNotes.length > 0 && !selectedNoteId) {
        setSelectedNoteId(loadedNotes[0].id);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [user?.uid]);

  // Flush any pending save immediately
  const flushPendingSave = useCallback(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = null;
    }
    if (pendingNoteRef.current) {
      saveNote(pendingNoteRef.current, user?.uid);
      pendingNoteRef.current = null;
      setSaveStatus('saved');
    }
  }, [user?.uid]);

  // Flush save on window unload or unmount
  useEffect(() => {
    const handleBeforeUnload = () => {
      flushPendingSave();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      flushPendingSave();
    };
  }, [flushPendingSave]);

  const handleOpenNotebook = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
      try {
        sessionStorage.setItem(STORAGE_SESSION_OPEN_KEY, 'true');
      } catch {
        // Ignora restrição de storage
      }
    }, 450);
  };

  const handleCloseNotebook = () => {
    flushPendingSave();
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_SESSION_OPEN_KEY, 'false');
    } catch {
      // Ignora restrição de storage
    }
  };

  // Find currently selected note
  const currentNote = notes.find((n) => n.id === selectedNoteId) || null;

  // Schedule auto-save with debounce
  const scheduleSave = useCallback(
    (updatedNote: Note) => {
      setSaveStatus('saving');
      pendingNoteRef.current = updatedNote;

      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      saveTimeoutRef.current = setTimeout(async () => {
        try {
          await saveNote(updatedNote, user?.uid);
          setSaveStatus('saved');
          pendingNoteRef.current = null;
        } catch (err) {
          console.error('Erro no salvamento automático:', err);
          setSaveStatus('saved');
        }
      }, 700);
    },
    [user?.uid]
  );

  const handleSelectNote = (noteId: string) => {
    flushPendingSave();
    setSelectedNoteId(noteId);
    setMobileView('editor');
    const note = notes.find((n) => n.id === noteId);
    if (note && note.title.trim()) {
      recordRecentAccess({
        id: `note:${note.id}`,
        title: note.title,
        typeLabel: 'Anotações',
        subtitle: 'Caderno Pessoal',
        targetTab: 'notes'
      });
    }
  };

  const handleCreateNote = async () => {
    flushPendingSave();
    const newNote = createEmptyNote();
    const updated = [newNote, ...notes];
    setNotes(updated);
    setSelectedNoteId(newNote.id);
    setMobileView('editor');

    // Salva imediatamente
    await saveNote(newNote, user?.uid);
  };

  const handleTitleChange = (newTitle: string) => {
    if (!currentNote) return;
    const updated: Note = {
      ...currentNote,
      title: newTitle,
      updatedAt: new Date().toISOString()
    };

    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
    scheduleSave(updated);
  };

  const handleContentChange = (newContent: string) => {
    if (!currentNote) return;
    const updated: Note = {
      ...currentNote,
      content: newContent,
      updatedAt: new Date().toISOString()
    };

    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
    scheduleSave(updated);
  };

  const handleTogglePin = async () => {
    if (!currentNote) return;
    const updated: Note = {
      ...currentNote,
      isPinned: !currentNote.isPinned,
      updatedAt: new Date().toISOString()
    };

    const newNotes = sortNotes(notes.map((n) => (n.id === updated.id ? updated : n)));
    setNotes(newNotes);
    await saveNote(updated, user?.uid);
  };

  const handleRequestDelete = () => {
    if (!currentNote) return;
    setDeleteModal({
      isOpen: true,
      noteId: currentNote.id,
      noteTitle: currentNote.title.trim() || 'Anotação sem título',
      isDeleting: false
    });
  };

  const handleConfirmDelete = async () => {
    if (!deleteModal.noteId) return;
    setDeleteModal((prev) => ({ ...prev, isDeleting: true }));

    const idToDelete = deleteModal.noteId;
    await deleteNote(idToDelete, user?.uid);

    const remaining = notes.filter((n) => n.id !== idToDelete);
    setNotes(remaining);

    // Seleciona a próxima anotação se houver
    if (remaining.length > 0) {
      setSelectedNoteId(remaining[0].id);
    } else {
      setSelectedNoteId(null);
      setMobileView('list');
    }

    setDeleteModal({
      isOpen: false,
      noteId: null,
      noteTitle: '',
      isDeleting: false
    });
  };

  const handleCancelDelete = () => {
    setDeleteModal({
      isOpen: false,
      noteId: null,
      noteTitle: '',
      isDeleting: false
    });
  };

  // Se o caderno estiver fechado, exibe a capa com animação
  if (!isOpen) {
    return (
      <div className="animate-in fade-in duration-300">
        <NotebookCover
          noteCount={notes.length}
          userName={userName}
          userAvatar={currentAvatar.image}
          isOpening={isOpening}
          onOpen={handleOpenNotebook}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* Notebook Realistic Frame and Paper Binding */}
      <div className="relative rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_rgba(23,107,255,0.08)] overflow-hidden min-h-[640px] flex flex-col">
        {/* Subtle top leather spine header */}
        <div className="h-2 w-full bg-gradient-to-r from-[#0D3B94] via-[#176BFF] to-[#2446C8]" />

        {/* Content Columns: List + Editor */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-[600px]">
          {/* Notebook Sidebar / Index (Always visible on lg; conditional on mobile) */}
          <div
            className={`w-full lg:w-80 xl:w-96 shrink-0 h-full ${
              mobileView === 'list' ? 'flex flex-col' : 'hidden lg:flex lg:flex-col'
            }`}
          >
            <NotebookSidebar
              notes={notes}
              selectedNoteId={selectedNoteId}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSelectNote={handleSelectNote}
              onCreateNote={handleCreateNote}
              onCloseNotebook={handleCloseNotebook}
            />
          </div>

          {/* Notebook Editor / Open Page (Visible on lg or when in editor view on mobile) */}
          <div
            className={`flex-1 flex flex-col min-w-0 ${
              mobileView === 'editor' ? 'flex' : 'hidden lg:flex'
            }`}
          >
            <NotebookEditor
              note={currentNote}
              saveStatus={saveStatus}
              onTitleChange={handleTitleChange}
              onContentChange={handleContentChange}
              onTogglePin={handleTogglePin}
              onRequestDelete={handleRequestDelete}
              onBackToList={() => setMobileView('list')}
              onCreateNew={handleCreateNote}
            />
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteNoteModal
        isOpen={deleteModal.isOpen}
        noteTitle={deleteModal.noteTitle}
        isDeleting={deleteModal.isDeleting}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};
