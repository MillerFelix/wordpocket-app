import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingIndicator, WordPocketSpinner } from '../components/shared/LoadingIndicator';

describe('LoadingIndicator & WordPocketSpinner Component Tests', () => {
  it('renders with role="status" and accessible default text when label is omitted', () => {
    render(<LoadingIndicator />);

    const statusEl = screen.getByRole('status');
    expect(statusEl).toBeInTheDocument();
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('renders contextual label when provided', () => {
    render(<LoadingIndicator label="Traduzindo termo em tempo real..." />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Traduzindo termo em tempo real...')).toBeInTheDocument();
  });

  it('supports WordPocketSpinner alias identically', () => {
    render(<WordPocketSpinner label="Processando autenticação..." />);

    expect(screen.getByText('Processando autenticação...')).toBeInTheDocument();
  });

  it('applies horizontal alignment when labelPosition="right"', () => {
    const { container } = render(
      <LoadingIndicator label="Carregando..." labelPosition="right" size="sm" />
    );

    const statusEl = container.querySelector('[role="status"]');
    expect(statusEl).toHaveClass('flex-row');
  });

  it('renders in fullScreen modal mode when fullScreen={true}', () => {
    render(<LoadingIndicator fullScreen label="Carregando Word Pocket..." />);

    expect(screen.getByText('Carregando Word Pocket...')).toBeInTheDocument();
  });
});
