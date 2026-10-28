import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { 
  getRecentAccesses, 
  recordRecentAccess, 
  clearRecentAccesses 
} from '../services/recentAccessService';
import { HomeRecentList } from '../components/home/HomeRecentList';
import App from '../App';

describe('Recent Access Service & HomeRecentList Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    clearRecentAccesses();
    vi.clearAllMocks();
  });

  it('starts with an empty recent access list and shows friendly empty state', () => {
    expect(getRecentAccesses()).toEqual([]);

    const onNavigate = vi.fn();
    render(<HomeRecentList onNavigate={onNavigate} />);

    expect(screen.getByText(/Nenhum conteúdo recente/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Conforme você consulta artigos, verbos e práticas/i)
    ).toBeInTheDocument();
  });

  it('records recent access, deduplicates and moves re-accessed items to the top', () => {
    recordRecentAccess({
      id: 'verb:go',
      title: 'go',
      typeLabel: 'Verbos Irregulares',
      subtitle: 'went • gone • ir',
      targetTab: 'verbs',
      targetParam: 'go'
    });

    recordRecentAccess({
      id: 'learn:to-be',
      title: 'Verbo To Be',
      typeLabel: 'Aprender',
      subtitle: 'Fundamentos • A1',
      targetTab: 'learn',
      targetParam: 'to-be'
    });

    let list = getRecentAccesses();
    expect(list.length).toBe(2);
    expect(list[0].id).toBe('learn:to-be');
    expect(list[1].id).toBe('verb:go');

    // Re-accessing 'verb:go' should move it to the top without duplicate
    recordRecentAccess({
      id: 'verb:go',
      title: 'go',
      typeLabel: 'Verbos Irregulares',
      subtitle: 'went • gone • ir',
      targetTab: 'verbs',
      targetParam: 'go'
    });

    list = getRecentAccesses();
    expect(list.length).toBe(2);
    expect(list[0].id).toBe('verb:go');
    expect(list[1].id).toBe('learn:to-be');
  });

  it('renders up to 5 items and navigates with correct parameters on click', () => {
    for (let i = 1; i <= 7; i++) {
      recordRecentAccess({
        id: `verb:item${i}`,
        title: `item${i}`,
        typeLabel: 'Verbos Irregulares',
        targetTab: 'verbs',
        targetParam: `item${i}`
      });
    }

    const onNavigate = vi.fn();
    render(<HomeRecentList onNavigate={onNavigate} />);

    // Renders up to 5 items
    expect(screen.getByText('5 itens')).toBeInTheDocument();
    expect(screen.getByText('item7')).toBeInTheDocument();
    expect(screen.getByText('item6')).toBeInTheDocument();
    expect(screen.getByText('item5')).toBeInTheDocument();
    expect(screen.getByText('item4')).toBeInTheDocument();
    expect(screen.getByText('item3')).toBeInTheDocument();
    expect(screen.queryByText('item2')).not.toBeInTheDocument();
    expect(screen.queryByText('item1')).not.toBeInTheDocument();

    // Clicking item7 calls onNavigate('verbs', 'item7')
    const item7 = screen.getByText('item7');
    fireEvent.click(item7);
    expect(onNavigate).toHaveBeenCalledWith('verbs', 'item7');
  });

  it('persists recent access across page reload and integrates with main App', () => {
    // Record an access in localStorage
    recordRecentAccess({
      id: 'learn:verbo-to-be-presente',
      title: 'Verbo To Be no Presente',
      typeLabel: 'Aprender',
      subtitle: 'Fundamentos • A1',
      targetTab: 'learn',
      targetParam: 'verbo-to-be-presente'
    });

    render(<App />);

    // Item should appear on the home screen
    const articleLink = screen.getByText('Verbo To Be no Presente');
    expect(articleLink).toBeInTheDocument();

    // Clicking it navigates directly to the article in the Learn tab
    fireEvent.click(articleLink);

    // Article title is now rendered on the main reading screen
    expect(screen.getByRole('heading', { level: 1, name: /Verbo To Be no Presente/i })).toBeInTheDocument();
  });
});
