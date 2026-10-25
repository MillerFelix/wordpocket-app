import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WordPocketLogo } from '../components/brand/WordPocketLogo';

describe('WordPocketLogo Component Tests', () => {
  it('renders horizontal brand logo with Word and Pocket text', () => {
    render(<WordPocketLogo variant="horizontal" />);
    expect(screen.getByText('Word')).toBeInTheDocument();
    expect(screen.getByText('Pocket')).toBeInTheDocument();
  });

  it('renders icon variant without text', () => {
    const { container } = render(<WordPocketLogo variant="icon" size="sm" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(screen.queryByText('Word')).not.toBeInTheDocument();
  });

  it('renders optional subtitle and badge when provided', () => {
    render(
      <WordPocketLogo
        variant="horizontal"
        showSubtitle
        subtitleText="Estudo Inteligente de Inglês"
        badge="PWA"
      />
    );
    expect(screen.getByText('Estudo Inteligente de Inglês')).toBeInTheDocument();
    expect(screen.getByText('PWA')).toBeInTheDocument();
  });

  it('supports inverted mode for dark surfaces', () => {
    render(<WordPocketLogo variant="horizontal" inverted />);
    const wordText = screen.getByText('Word');
    expect(wordText.className).toContain('text-white');
  });
});
