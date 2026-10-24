import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('WordPocket Application Tests', () => {
  it('renders header with WordPocket brand and default irregular verbs view', () => {
    render(<App />);
    expect(screen.getByText('Word')).toBeInTheDocument();
    expect(screen.getByText('Pocket')).toBeInTheDocument();
    expect(screen.getByText('Guia Prático e Dicionário de Inglês')).toBeInTheDocument();
    // Check for irregular verbs default content
    expect(screen.getByPlaceholderText(/Buscar verbo em inglês/i)).toBeInTheDocument();
    expect(screen.getByText(/Exibindo/i)).toBeInTheDocument();
  });

  it('filters irregular verbs with search query', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Buscar verbo em inglês/i);

    fireEvent.change(searchInput, { target: { value: 'break' } });
    const breakMatches = screen.getAllByText('break');
    expect(breakMatches.length).toBeGreaterThan(0);
    const brokenMatches = screen.getAllByText('broken');
    expect(brokenMatches.length).toBeGreaterThan(0);
  });

  it('toggles coverage methodology information in irregular verbs', () => {
    render(<App />);
    const coverageBtn = screen.getByText(/Cobertura & Fontes/i);
    fireEvent.click(coverageBtn);

    expect(screen.getByText(/Metodologia de Curadoria dos Verbos Irregulares/i)).toBeInTheDocument();
  });

  it('navigates to vocabulary dictionary and displays phonetic notations and categories', () => {
    render(<App />);
    const vocabButton = screen.getAllByRole('button', { name: /Vocabulário/i })[0];
    fireEvent.click(vocabButton);

    expect(screen.getByPlaceholderText(/Consultar dicionário/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Resilient' })).toBeInTheDocument();
    expect(screen.getByText('/rɪˈzɪl.jənt/')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Insightful' })).toBeInTheDocument();
  });

  it('navigates to quick translator tab and supports paste, typing, and translate button', () => {
    window.open = vi.fn();
    render(<App />);
    const translatorButtons = screen.getAllByText(/Tradutor/i);
    fireEvent.click(translatorButtons[0]);

    expect(screen.getByText(/Tradutor Rápido Oficial/i)).toBeInTheDocument();
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
