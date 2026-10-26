import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '../components/shared/Pagination';

describe('Pagination Component Tests', () => {
  it('renders nothing when totalItems is 0', () => {
    const { container } = render(
      <Pagination
        currentPage={1}
        totalPages={0}
        totalItems={0}
        startIndex={0}
        endIndex={0}
        onPageChange={vi.fn()}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders range, summary, and disabled buttons when only 1 page exists', () => {
    const onPageChange = vi.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={1}
        totalItems={5}
        startIndex={0}
        endIndex={5}
        onPageChange={onPageChange}
        itemLabel="lições"
      />
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveTextContent(/Mostrando 1–5 de 5 lições/i);
    expect(nav).toHaveTextContent(/Página 1 de 1/i);

    const prevBtn = screen.getByRole('button', { name: /Página anterior/i });
    const nextBtn = screen.getByRole('button', { name: /Próxima página/i });
    const firstBtn = screen.getByRole('button', { name: /Primeira página/i });
    const lastBtn = screen.getByRole('button', { name: /Última página/i });

    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeDisabled();
    expect(firstBtn).toBeDisabled();
    expect(lastBtn).toBeDisabled();
  });

  it('handles page navigation and calls onPageChange correctly', () => {
    const onPageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        totalItems={40}
        startIndex={8}
        endIndex={16}
        onPageChange={onPageChange}
        itemLabel="atividades"
      />
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveTextContent(/Mostrando 9–16 de 40 atividades/i);
    expect(nav).toHaveTextContent(/Página 2 de 5/i);



    const prevBtn = screen.getByRole('button', { name: /Página anterior/i });
    const nextBtn = screen.getByRole('button', { name: /Próxima página/i });
    const firstBtn = screen.getByRole('button', { name: /Primeira página/i });
    const lastBtn = screen.getByRole('button', { name: /Última página/i });

    expect(prevBtn).toBeEnabled();
    expect(nextBtn).toBeEnabled();
    expect(firstBtn).toBeEnabled();
    expect(lastBtn).toBeEnabled();

    // Click next
    fireEvent.click(nextBtn);
    expect(onPageChange).toHaveBeenCalledWith(3);

    // Click prev
    fireEvent.click(prevBtn);
    expect(onPageChange).toHaveBeenCalledWith(1);

    // Click first
    fireEvent.click(firstBtn);
    expect(onPageChange).toHaveBeenCalledWith(1);

    // Click last
    fireEvent.click(lastBtn);
    expect(onPageChange).toHaveBeenCalledWith(5);

    // Click direct page number
    const page4Btn = screen.getByRole('button', { name: /Ir para a página 4/i });
    fireEvent.click(page4Btn);
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it('renders smart ellipsis for large page counts', () => {
    render(
      <Pagination
        currentPage={7}
        totalPages={15}
        totalItems={120}
        startIndex={48}
        endIndex={56}
        onPageChange={vi.fn()}
      />
    );

    const ellipses = screen.getAllByText('…');
    expect(ellipses.length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: 'Ir para a página 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ir para a página 15' })).toBeInTheDocument();
  });
});

