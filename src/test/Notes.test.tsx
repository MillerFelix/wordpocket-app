import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { NotesView } from '../components/notes/NotesView';
import { Sidebar } from '../components/Sidebar';
import { TopHeader } from '../components/TopHeader';
import {
  createEmptyNote,
  getLocalNotes,
  saveNote,
  deleteNote,
  sortNotes,
  stripHtml,
  formatNoteDate,
  saveLocalNotes
} from '../services/notesService';
import { Note } from '../types/notes';
import { AuthProvider } from '../contexts/AuthContext';
import App from '../App';

describe('Anotações (Notes) Service Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    vi.clearAllMocks();
  });

  it('creates an initialized empty note with valid defaults', () => {
    const note = createEmptyNote();
    expect(note.id).toMatch(/^note_\d+_[a-z0-9]+/);
    expect(note.title).toBe('');
    expect(note.content).toBe('');
    expect(note.isPinned).toBe(false);
    expect(note.createdAt).toBeDefined();
    expect(note.updatedAt).toBeDefined();
  });

  it('persists and retrieves notes from localStorage in visitor mode', async () => {
    const note1 = createEmptyNote();
    note1.title = 'Regra do Present Perfect';
    note1.content = '<p>Have/Has + Past Participle</p>';

    await saveNote(note1, null);

    const saved = getLocalNotes(null);
    expect(saved.length).toBe(1);
    expect(saved[0].title).toBe('Regra do Present Perfect');
    expect(saved[0].content).toBe('<p>Have/Has + Past Participle</p>');
  });

  it('deletes note from local storage', async () => {
    const note1 = createEmptyNote();
    note1.title = 'Nota para apagar';
    await saveNote(note1, null);

    expect(getLocalNotes(null).length).toBe(1);

    await deleteNote(note1.id, null);
    expect(getLocalNotes(null).length).toBe(0);
  });

  it('sorts pinned notes first, then by latest updated date', () => {
    const now = Date.now();
    const older: Note = {
      id: '1',
      title: 'Nota Antiga Fixada',
      content: '',
      createdAt: new Date(now - 100000).toISOString(),
      updatedAt: new Date(now - 100000).toISOString(),
      isPinned: true
    };
    const newer: Note = {
      id: '2',
      title: 'Nota Recente Não Fixada',
      content: '',
      createdAt: new Date(now).toISOString(),
      updatedAt: new Date(now).toISOString(),
      isPinned: false
    };

    const sorted = sortNotes([newer, older]);
    expect(sorted[0].id).toBe('1'); // Pinned first
    expect(sorted[1].id).toBe('2');
  });

  it('strips html tags cleanly for snippets', () => {
    expect(stripHtml('<p>Texto com <strong>negrito</strong> e <br/>tags</p>')).toBe('Texto com negrito e tags');
    expect(stripHtml('')).toBe('');
  });

  it('formats dates into readable Portuguese text', () => {
    const today = new Date().toISOString();
    expect(formatNoteDate(today)).toMatch(/Hoje às \d{2}:\d{2}/);
  });
});

describe('Anotações (Notes) UI and Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    vi.clearAllMocks();
  });

  it('renders Sidebar with Anotações in secondary navigation and triggers tab change', () => {
    const handleTabChange = vi.fn();
    render(
      <AuthProvider>
        <Sidebar
          activeTab="home"
          onTabChange={handleTabChange}
          verbCount={200}
          practiceCount={4}
        />
      </AuthProvider>
    );

    const notesBtn = screen.getByRole('button', { name: /Anotações/i });
    expect(notesBtn).toBeInTheDocument();
    fireEvent.click(notesBtn);
    expect(handleTabChange).toHaveBeenCalledWith('notes');
  });

  it('renders TopHeader with Caderno de Anotações title and badge', () => {
    const handleNavigate = vi.fn();
    render(<TopHeader activeTab="notes" onNavigate={handleNavigate} />);

    expect(screen.getByRole('heading', { name: /Caderno de Anotações/i })).toBeInTheDocument();
    expect(screen.getByText('Anotações')).toBeInTheDocument();
  });

  it('shows closed notebook cover when opened for the first time and opens upon click', async () => {
    render(<NotesView />);

    // Notebook cover title
    expect(screen.getByText(/Caderno de Anotações/i)).toBeInTheDocument();
    expect(screen.getByText(/Seu espaço pessoal para registrar vocabulário/i)).toBeInTheDocument();

    const openBtn = screen.getByRole('button', { name: /Abrir Caderno/i });
    expect(openBtn).toBeInTheDocument();

    fireEvent.click(openBtn);

    // After animation delay, the notebook interior is opened
    await waitFor(
      () => {
        expect(screen.getByRole('button', { name: /Nova Anotação/i })).toBeInTheDocument();
      },
      { timeout: 1500 }
    );
  });

  it('creates, edits title and auto-saves a note', async () => {
    // Open notebook directly by setting session storage
    sessionStorage.setItem('wordpocket_notebook_opened', 'true');

    render(<NotesView />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Nova Anotação/i })).toBeInTheDocument();
    });

    const newNoteBtn = screen.getByRole('button', { name: /Nova Anotação/i });
    fireEvent.click(newNoteBtn);

    // Title input should be editable
    const titleInput = screen.getByRole('textbox', { name: /Título da anotação/i });
    fireEvent.change(titleInput, { target: { value: 'Minhas Anotações de Phrasal Verbs' } });
    expect(titleInput).toHaveValue('Minhas Anotações de Phrasal Verbs');

    // Title appears in the sidebar list
    await waitFor(() => {
      expect(screen.getByText('Minhas Anotações de Phrasal Verbs')).toBeInTheDocument();
    });
  });

  it('searches and filters notes in realtime', async () => {
    sessionStorage.setItem('wordpocket_notebook_opened', 'true');
    const noteA: Note = {
      id: 'a',
      title: 'Dicas de Pronúncia',
      content: 'Foco no som do TH',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const noteB: Note = {
      id: 'b',
      title: 'Lista de Conectivos',
      content: 'However, Therefore, Furthermore',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveLocalNotes([noteA, noteB], null);

    render(<NotesView />);

    await waitFor(() => {
      expect(screen.getByText('Dicas de Pronúncia')).toBeInTheDocument();
      expect(screen.getByText('Lista de Conectivos')).toBeInTheDocument();
    });

    const searchInput = screen.getByRole('searchbox', { name: /Buscar por título ou conteúdo/i });
    fireEvent.change(searchInput, { target: { value: 'Pronúncia' } });

    expect(screen.getByText('Dicas de Pronúncia')).toBeInTheDocument();
    expect(screen.queryByText('Lista de Conectivos')).not.toBeInTheDocument();

    // Clear search
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(screen.getByText('Dicas de Pronúncia')).toBeInTheDocument();
    expect(screen.getByText('Lista de Conectivos')).toBeInTheDocument();
  });

  it('confirms before deleting a note and removes it upon confirmation', async () => {
    sessionStorage.setItem('wordpocket_notebook_opened', 'true');
    const noteToDelete: Note = {
      id: 'del-1',
      title: 'Nota Temporária',
      content: 'Conteúdo que será excluído',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveLocalNotes([noteToDelete], null);

    render(<NotesView />);

    await waitFor(() => {
      expect(screen.getByText('Nota Temporária')).toBeInTheDocument();
    });

    // Click delete trigger button in the note editor
    const deleteBtn = screen.getByRole('button', { name: /Excluir anotação/i });
    fireEvent.click(deleteBtn);

    // Modal dialog opens
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Excluir anotação\?/i)).toBeInTheDocument();

    // Confirm deletion inside the dialog
    const confirmBtn = within(dialog).getByRole('button', { name: /Excluir Anotação/i });
    fireEvent.click(confirmBtn);

    // Note is removed
    await waitFor(() => {
      expect(screen.queryByText('Nota Temporária')).not.toBeInTheDocument();
    });
  });

  it('can close the notebook to return to the cover view', async () => {
    sessionStorage.setItem('wordpocket_notebook_opened', 'true');
    render(<NotesView />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Ver Capa/i })).toBeInTheDocument();
    });

    const closeBtn = screen.getByRole('button', { name: /Ver Capa/i });
    fireEvent.click(closeBtn);

    // Back to cover
    expect(screen.getByText(/Toque na capa para abrir suas anotações/i)).toBeInTheDocument();
  });

  it('renders Anotações tab through main App routing', async () => {
    render(<App initialTab="notes" />);

    // TopHeader should show Caderno de Anotações heading
    expect(screen.getAllByRole('heading', { name: /Caderno de Anotações/i }).length).toBeGreaterThanOrEqual(1);

    // NotesView should be rendered with its cover and open button
    expect(screen.getByRole('button', { name: /Abrir Caderno/i })).toBeInTheDocument();
  });
});
