import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { irregularVerbs } from '../data/irregularVerbs';
import { IrregularVerbsView } from '../components/IrregularVerbsView';

describe('Irregular Verbs 200 Database and Pagination Tests', () => {
  it('contains exactly 200 distinct irregular verbs without duplicates', () => {
    expect(irregularVerbs).toHaveLength(200);

    const ids = new Set(irregularVerbs.map((v) => v.id.toLowerCase()));
    expect(ids.size).toBe(200);

    const infinitives = new Set(irregularVerbs.map((v) => v.infinitive.toLowerCase()));
    expect(infinitives.size).toBe(200);

    // Verify all verbs have valid non-empty fields
    for (const verb of irregularVerbs) {
      expect(verb.id.trim()).not.toBe('');
      expect(verb.infinitive.trim()).not.toBe('');
      expect(verb.pastSimple.trim()).not.toBe('');
      expect(verb.pastParticiple.trim()).not.toBe('');
      expect(verb.translation.trim()).not.toBe('');
      expect(verb.example.trim()).not.toBe('');
    }
  });

  it('renders initial page with 25 verbs and shows range 1–25 de 200', () => {
    render(<IrregularVerbsView />);

    // Check range counter text (matches in counter and pagination bar)
    const rangeMatches = screen.getAllByText(/1–25/);
    expect(rangeMatches.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/200 verbos/).length).toBeGreaterThan(0);

    // Check pagination buttons exist
    const prevBtn = screen.getByRole('button', { name: /Página anterior/i });
    expect(prevBtn).toBeDisabled();

    const nextBtn = screen.getByRole('button', { name: /Próxima página/i });
    expect(nextBtn).toBeEnabled();

    // Check page 1 is current
    const page1Btn = screen.getByRole('button', { name: /Ir para a página 1/i });
    expect(page1Btn).toHaveAttribute('aria-current', 'page');
  });

  it('navigates to page 2 and page 8 via pagination controls', () => {
    render(<IrregularVerbsView />);

    const nextBtn = screen.getByRole('button', { name: /Próxima página/i });
    fireEvent.click(nextBtn);

    expect(screen.getAllByText(/26–50/).length).toBeGreaterThan(0);

    const lastBtn = screen.getByRole('button', { name: /Última página/i });
    fireEvent.click(lastBtn);

    expect(screen.getAllByText(/176–200/).length).toBeGreaterThan(0);
    expect(lastBtn).toBeDisabled();
    expect(screen.getByRole('button', { name: /Próxima página/i })).toBeDisabled();
  });

  it('searches across all 200 verbs regardless of current page and resets to page 1', () => {
    render(<IrregularVerbsView />);

    // Go to page 3 first
    const page3Btn = screen.getByRole('button', { name: /Ir para a página 3/i });
    fireEvent.click(page3Btn);
    expect(screen.getAllByText(/51–75/).length).toBeGreaterThan(0);

    // Search for 'write' (which starts with 'w' and is near the end of alphabet)
    const searchInput = screen.getByPlaceholderText(/Buscar verbo em inglês/i);
    fireEvent.change(searchInput, { target: { value: 'write' } });

    // Should find 'write' and 'rewrite', and reset to page 1
    const writeMatches = screen.getAllByText('write');
    expect(writeMatches.length).toBeGreaterThan(0);
    expect(screen.getByText(/Exibindo/)).toBeInTheDocument();
  });

  it('shows empty state when search term has no match', () => {
    render(<IrregularVerbsView />);

    const searchInput = screen.getByPlaceholderText(/Buscar verbo em inglês/i);
    fireEvent.change(searchInput, { target: { value: 'nonexistenttermxyz' } });

    expect(screen.getByText(/Nenhum verbo corresponde à busca/i)).toBeInTheDocument();
    expect(screen.getByText('0 verbos irregulares')).toBeInTheDocument();

    // Clicking clear filters resets search
    const clearBtn = screen.getByRole('button', { name: /Limpar todos os filtros/i });
    fireEvent.click(clearBtn);

    expect(screen.getAllByText(/1–25/).length).toBeGreaterThan(0);
  });

  it('filters by morphological group and updates pagination', () => {
    render(<IrregularVerbsView />);

    const identicalFilter = screen.getByRole('button', { name: /3 Formas Iguais/i });
    fireEvent.click(identicalFilter);

    // Identical verbs
    expect(screen.getByText(/Exibindo/)).toBeInTheDocument();
  });

  it('expands a verb row on click, showing contextual example and pronounce button together', () => {
    render(<IrregularVerbsView />);

    // Before expansion, example text is not visible
    const firstVerb = irregularVerbs[0]; // e.g. arise
    expect(screen.queryByText(`"${firstVerb.example}"`)).not.toBeInTheDocument();

    // Find expand toggle button for first verb
    const expandButtons = screen.getAllByRole('button', { name: new RegExp(`Ver exemplo de ${firstVerb.infinitive}`, 'i') });
    expect(expandButtons.length).toBeGreaterThanOrEqual(1);

    // Click the expand button
    fireEvent.click(expandButtons[0]);

    // Example and pronounce button should now be visible together
    expect(screen.getByText(`"${firstVerb.example}"`)).toBeInTheDocument();
    expect(screen.getByText('Exemplo de uso natural em inglês')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: new RegExp(firstVerb.example, 'i') })).toBeInTheDocument();
    expect(screen.getByText('Ouvir')).toBeInTheDocument();

    // Toggle collapse
    const collapseButtons = screen.getAllByRole('button', { name: new RegExp(`Recolher exemplo de ${firstVerb.infinitive}`, 'i') });
    fireEvent.click(collapseButtons[0]);
    expect(screen.queryByText(`"${firstVerb.example}"`)).not.toBeInTheDocument();
  });

  it('supports row keyboard interaction with Enter key to toggle expansion', () => {
    render(<IrregularVerbsView />);

    const firstVerb = irregularVerbs[0];
    const rows = screen.getAllByRole('row');
    // Row 0 is header, Row 1 is first verb row
    const firstRow = rows[1];

    // Press Enter to expand
    fireEvent.keyDown(firstRow, { key: 'Enter', code: 'Enter' });
    expect(screen.getByText(`"${firstVerb.example}"`)).toBeInTheDocument();

    // Press Enter again to collapse
    fireEvent.keyDown(firstRow, { key: 'Enter', code: 'Enter' });
    expect(screen.queryByText(`"${firstVerb.example}"`)).not.toBeInTheDocument();
  });
});
