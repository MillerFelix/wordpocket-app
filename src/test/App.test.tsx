import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Word Pocket Refined Interface Tests', () => {
  it('renders brand Word Pocket and Home dashboard with greeting, global search, and 3 main feature cards', () => {
    render(<App />);
    const wordMatches = screen.getAllByText(/Word/i);
    expect(wordMatches.length).toBeGreaterThan(0);
    const pocketMatches = screen.getAllByText(/Pocket/i);
    expect(pocketMatches.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Olá, Lucas!/i).length).toBeGreaterThan(0);
    expect(screen.getAllByPlaceholderText(/Buscar palavra, verbo ou tradução/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Verbos Irregulares/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Vocabulário/i).length).toBeGreaterThan(0);
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

  it('navigates to vocabulary dictionary and displays phonetic notations and categories', () => {
    render(<App />);
    const vocabButtons = screen.getAllByRole('button', { name: /Vocabulário/i });
    fireEvent.click(vocabButtons[0]);

    expect(screen.getByPlaceholderText(/Consultar dicionário/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Resilient' })).toBeInTheDocument();
    expect(screen.getByText('/rɪˈzɪl.jənt/')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Insightful' })).toBeInTheDocument();
  });

  it('navigates to quick translator tab and supports paste, typing, and translate button', () => {
    window.open = vi.fn();
    render(<App />);
    const translatorButtons = screen.getAllByRole('button', { name: /Tradutor/i });
    fireEvent.click(translatorButtons[0]);

    expect(screen.getByText(/Texto para Tradução/i)).toBeInTheDocument();
    const textarea = screen.getByPlaceholderText(/Digite ou cole qualquer palavra/i);
    fireEvent.change(textarea, { target: { value: 'Hello world' } });

    const translateBtn = screen.getByText(/Abrir Tradução no Google Tradutor/i);
    fireEvent.click(translateBtn);

    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('translate.google.com'),
      '_blank',
      'noopener,noreferrer'
    );
  });
});
