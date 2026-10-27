import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from '../components/shared/SearchInput';

describe('SearchInput Shared Component Tests', () => {
  it('renders with placeholder and accessible role', () => {
    const handleChange = vi.fn();
    render(
      <SearchInput
        value=""
        onChange={handleChange}
        placeholder="Buscar verbos..."
        ariaLabel="Buscar verbos irregulares"
      />
    );

    const input = screen.getByRole('searchbox', { name: /Buscar verbos irregulares/i });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Buscar verbos...');
    expect(screen.queryByRole('button', { name: /Limpar pesquisa/i })).not.toBeInTheDocument();
  });

  it('triggers onChange when user types', () => {
    const handleChange = vi.fn();
    render(
      <SearchInput
        value=""
        onChange={handleChange}
        placeholder="Buscar..."
      />
    );

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'present continuous' } });
    expect(handleChange).toHaveBeenCalledWith('present continuous');
  });

  it('shows clear button when value is present and clears text on click', () => {
    const handleChange = vi.fn();
    render(
      <SearchInput
        value="simple past"
        onChange={handleChange}
        placeholder="Buscar..."
      />
    );

    const clearBtn = screen.getByRole('button', { name: /Limpar pesquisa/i });
    expect(clearBtn).toBeInTheDocument();

    fireEvent.click(clearBtn);
    expect(handleChange).toHaveBeenCalledWith('');
  });

  it('calls custom onClear if provided', () => {
    const handleChange = vi.fn();
    const handleClear = vi.fn();
    render(
      <SearchInput
        value="test"
        onChange={handleChange}
        onClear={handleClear}
      />
    );

    const clearBtn = screen.getByRole('button', { name: /Limpar pesquisa/i });
    fireEvent.click(clearBtn);
    expect(handleClear).toHaveBeenCalledTimes(1);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders banner variant correctly', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <SearchInput
        value=""
        onChange={handleChange}
        variant="banner"
      />
    );

    const input = container.querySelector('input');
    expect(input).toHaveClass('shadow-md');
  });
});
