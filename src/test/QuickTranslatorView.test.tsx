import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QuickTranslatorView } from '../components/QuickTranslatorView';
import * as speechUtils from '../utils/speech';

describe('QuickTranslatorView Component Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders strictly bidirectional English <-> Portuguese interface without extraneous phrase sections', () => {
    render(<QuickTranslatorView />);

    // Header & Badge
    expect(screen.getByRole('heading', { level: 1, name: 'Tradutor Rápido' })).toBeInTheDocument();
    expect(screen.getByText('Inglês ⇄ Português')).toBeInTheDocument();

    // Language indicators
    expect(screen.getByText('Inglês')).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();

    // Verify removed extraneous sections are NOT in the document
    expect(screen.queryByText(/Frases de Consulta Rápida/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Viagens & Aeroporto/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Trabalho & Reuniões/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Conversação Diária/i)).not.toBeInTheDocument();
  });

  it('translates word on the same screen upon clicking Traduzir', async () => {
    render(<QuickTranslatorView />);

    const textarea = screen.getByPlaceholderText(/Digite ou cole a palavra ou frase em inglês/i);
    fireEvent.change(textarea, { target: { value: 'break' } });

    const translateBtn = screen.getByRole('button', { name: /Traduzir/i });
    fireEvent.click(translateBtn);

    // Translation result appears on same screen
    expect(await screen.findByText(/Tradução em Português/i)).toBeInTheDocument();
    expect(screen.getByText(/quebrar/i)).toBeInTheDocument();
    expect(screen.getByText(/Dicionário Local/i)).toBeInTheDocument();
  });

  it('translates immediately when user presses Enter key without shift', async () => {
    render(<QuickTranslatorView />);

    const textarea = screen.getByPlaceholderText(/Digite ou cole a palavra ou frase em inglês/i);
    fireEvent.change(textarea, { target: { value: 'speak' } });
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: false });

    expect(await screen.findByText(/Tradução em Português/i)).toBeInTheDocument();
    expect(screen.getByText(/falar/i)).toBeInTheDocument();
  });

  it('inverts language direction and swaps content without data loss', async () => {
    render(<QuickTranslatorView />);

    const textarea = screen.getByPlaceholderText(/Digite ou cole a palavra ou frase em inglês/i);
    fireEvent.change(textarea, { target: { value: 'break' } });

    const translateBtn = screen.getByRole('button', { name: /Traduzir/i });
    fireEvent.click(translateBtn);

    expect(await screen.findByText(/Tradução em Português/i)).toBeInTheDocument();

    // Click invert direction
    const invertBtn = screen.getByTitle(/Inverter direção da tradução/i);
    fireEvent.click(invertBtn);

    // After inverting: target should be English, input should now hold the Portuguese result
    expect(screen.getByText(/Tradução em Inglês/i)).toBeInTheDocument();
    expect((textarea as HTMLTextAreaElement).value).toContain('quebrar');
  });

  it('copies translated result to clipboard and displays feedback', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
        readText: vi.fn().mockResolvedValue('test text')
      }
    });

    render(<QuickTranslatorView initialText="resilient" />);
    const translateBtn = screen.getByRole('button', { name: /Traduzir/i });
    fireEvent.click(translateBtn);

    expect(await screen.findByText(/Tradução em Português/i)).toBeInTheDocument();

    const copyBtn = screen.getByRole('button', { name: /Copiar/i });
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith(expect.stringMatching(/resiliente/i));
    expect(await screen.findByText(/Copiado!/i)).toBeInTheDocument();
  });

  it('triggers speech pronunciation for translated result', async () => {
    const speakSpy = vi.spyOn(speechUtils, 'speakText').mockReturnValue({ success: true });

    render(<QuickTranslatorView initialText="go" />);
    const translateBtn = screen.getByRole('button', { name: /Traduzir/i });
    fireEvent.click(translateBtn);

    expect(await screen.findByText(/Tradução em Português/i)).toBeInTheDocument();

    const listenBtn = screen.getByRole('button', { name: /Ouvir/i });
    fireEvent.click(listenBtn);

    expect(speakSpy).toHaveBeenCalledWith(expect.stringContaining('ir'), 'pt');
  });

  it('clears input text and result when clicking Limpar', async () => {
    render(<QuickTranslatorView initialText="hello" />);
    const translateBtn = screen.getByRole('button', { name: /Traduzir/i });
    fireEvent.click(translateBtn);

    expect(await screen.findByText(/Tradução em Português/i)).toBeInTheDocument();

    const clearBtn = screen.getByTitle('Limpar campo');
    fireEvent.click(clearBtn);

    const textarea = screen.getByPlaceholderText(/Digite ou cole a palavra ou frase/i) as HTMLTextAreaElement;
    expect(textarea.value).toBe('');
    await waitFor(() => {
      expect(screen.queryByText(/Tradução em Português/i)).not.toBeInTheDocument();
    });
  });
});
