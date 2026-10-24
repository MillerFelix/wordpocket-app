import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Upword Pocket MVP Application', () => {
  it('renders header, brand title, and default irregular verbs view', () => {
    render(<App />);
    expect(screen.getByText('Upword Pocket')).toBeInTheDocument();
    expect(screen.getByText('Guia Rápido de Inglês')).toBeInTheDocument();
    // Check for irregular verbs default content
    expect(screen.getByPlaceholderText(/Buscar por verbo em inglês/i)).toBeInTheDocument();
    expect(screen.getByText(/Mostrando/i)).toBeInTheDocument();
  });

  it('filters irregular verbs with search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Buscar por verbo em inglês/i);

    fireEvent.change(searchInput, { target: { value: 'break' } });
    expect(screen.getByText('break')).toBeInTheDocument();
    expect(screen.getByText('broken')).toBeInTheDocument();
  });

  it('navigates to vocabulary tab and shows vocabulary cards', () => {
    render(<App />);
    const vocabButtons = screen.getAllByText('Vocabulário');
    fireEvent.click(vocabButtons[0]);

    expect(screen.getByPlaceholderText(/Buscar por termo em inglês/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Resilient' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Insightful' })).toBeInTheDocument();
  });

  it('navigates to quick translator tab and provides translator button and input', () => {
    render(<App />);
    const translatorButtons = screen.getAllByText(/Tradutor/i);
    fireEvent.click(translatorButtons[0]);

    expect(screen.getByText(/Consulta via Google Tradutor/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite ou cole qualquer texto/i)).toBeInTheDocument();
    expect(screen.getByText(/Abrir no Google Tradutor/i)).toBeInTheDocument();
  });
});
