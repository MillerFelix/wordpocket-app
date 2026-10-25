import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Word Pocket Refined Interface Tests', () => {
  it('renders brand Word Pocket and Home dashboard with greeting and 3 main feature cards without global search', () => {
    render(<App />);
    const wordMatches = screen.getAllByText(/Word/i);
    expect(wordMatches.length).toBeGreaterThan(0);
    const pocketMatches = screen.getAllByText(/Pocket/i);
    expect(pocketMatches.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Olá/i).length).toBeGreaterThan(0);
    expect(screen.queryByPlaceholderText(/Buscar palavra, verbo ou tradução/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Verbos Irregulares/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Praticar/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Tradutor/i).length).toBeGreaterThan(0);
  });

  it('navigates to irregular verbs view, filters verbs with search query and highlights verb forms', () => {
    render(<App />);
    const verbButtons = screen.getAllByRole('button', { name: /Verbos/i });
    fireEvent.click(verbButtons[0]);

    const searchInput = screen.getByPlaceholderText(/Buscar verbo em inglês/i);
    expect(searchInput).toBeInTheDocument();
    expect(screen.getByText(/Exibindo/i)).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'break' } });
    const breakMatches = screen.getAllByText('break');
    expect(breakMatches.length).toBeGreaterThan(0);
    const brokenMatches = screen.getAllByText('broken');
    expect(brokenMatches.length).toBeGreaterThan(0);
  });

  it('toggles coverage methodology information modal in irregular verbs', () => {
    render(<App initialTab="verbs" />);
    const coverageBtn = screen.getByText(/Metodologia & Fontes/i);
    fireEvent.click(coverageBtn);

    expect(screen.getByText(/Critérios Linguísticos e Fontes da Base/i)).toBeInTheDocument();
  });

  it('navigates to Praticar Inglês hub and displays the 4 skills and discrete progress', () => {
    render(<App />);
    const practiceButtons = screen.getAllByRole('button', { name: /Praticar/i });
    fireEvent.click(practiceButtons[0]);

    expect(screen.getByRole('heading', { level: 1, name: 'Praticar Inglês' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Listening/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Speaking/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Reading/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Writing/i })).toBeInTheDocument();
    expect(screen.getByText(/Progresso Geral/i)).toBeInTheDocument();
  });

  it('navigates to quick translator tab, supports typing, translation and language inversion on same screen', async () => {
    render(<App />);
    const translatorButtons = screen.getAllByRole('button', { name: /Tradutor/i });
    fireEvent.click(translatorButtons[0]);

    expect(screen.getByRole('heading', { level: 1, name: 'Tradutor Rápido' })).toBeInTheDocument();
    expect(screen.getByText('Inglês ⇄ Português')).toBeInTheDocument();

    const textarea = screen.getByPlaceholderText(/Digite ou cole a palavra ou frase em inglês/i);
    expect(textarea).toBeInTheDocument();

    // Type a word and translate
    fireEvent.change(textarea, { target: { value: 'break' } });
    const translateBtn = screen.getByRole('button', { name: /Traduzir/i });
    fireEvent.click(translateBtn);

    // Should display result directly on the same screen
    expect(await screen.findByText(/Tradução em Português/i)).toBeInTheDocument();
    expect(screen.getByText(/quebrar/i)).toBeInTheDocument();

    // Test invert direction
    const invertBtn = screen.getByTitle(/Inverter direção da tradução/i);
    fireEvent.click(invertBtn);
    expect(screen.getByText(/Tradução em Inglês/i)).toBeInTheDocument();
  });
});
