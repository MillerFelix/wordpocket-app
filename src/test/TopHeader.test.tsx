import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TopHeader } from '../components/TopHeader';

describe('TopHeader Component Tests', () => {
  it('renders contextual tab title and badge without any search or filter input', () => {
    const handleNavigate = vi.fn();
    render(<TopHeader activeTab="verbs" onNavigate={handleNavigate} />);

    // Header title and badge
    expect(screen.getByRole('heading', { name: /Verbos Irregulares/i })).toBeInTheDocument();
    expect(screen.getByText('200 Verbos')).toBeInTheDocument();

    // Verify search and filter inputs are completely removed
    const inputs = screen.queryAllByRole('textbox');
    expect(inputs.length).toBe(0);
    expect(screen.queryByPlaceholderText(/Buscar/i)).not.toBeInTheDocument();
  });

  it('renders network connection status and visitor login action', () => {
    const handleNavigate = vi.fn();
    render(<TopHeader activeTab="home" onNavigate={handleNavigate} />);

    expect(screen.getByText(/Conectado|Modo Offline/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });
});
