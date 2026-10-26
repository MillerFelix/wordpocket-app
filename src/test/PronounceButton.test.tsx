import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { PronounceButton } from '../components/PronounceButton';
import * as speechUtils from '../utils/speech';

describe('PronounceButton Audio Controls & Interaction Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders button with accessible label and title', () => {
    render(<PronounceButton text="take" size="xs" />);

    const button = screen.getByRole('button', { name: /Ouvir pronúncia de take/i });
    expect(button).toBeInTheDocument();
  });

  it('renders "Ouvir" text without fixed overflow-prone width when showLabel={true}', () => {
    render(<PronounceButton text="She spoke softly." size="sm" showLabel />);

    const button = screen.getByRole('button', { name: /Ouvir pronúncia de She spoke softly/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Ouvir');
    // Verifica se possui classes de largura flexível (min-w-...) em vez de largura fixa (w-7)
    expect(button.className).toContain('min-w-');
    expect(button.className).not.toContain('w-7');
  });

  it('provides immediate feedback and triggers speech synthesis with lifecycle callbacks', () => {
    let capturedOptions: speechUtils.SpeakOptions | undefined;
    const speakSpy = vi.spyOn(speechUtils, 'speakText').mockImplementation((_text, _lang, options) => {
      capturedOptions = options;
      return { success: true };
    });

    render(<PronounceButton text="went" size="sm" showLabel />);
    const button = screen.getByRole('button', { name: /Ouvir pronúncia de went/i });

    fireEvent.click(button);
    expect(speakSpy).toHaveBeenCalledWith('went', 'en', expect.any(Object));

    // Quando o áudio começa (onStart), transiciona para estado reproduzindo
    act(() => {
      capturedOptions?.onStart?.();
    });
    expect(button).toHaveTextContent('Ouvindo...');

    // Quando o áudio termina (onEnd), retorna ao estado de repouso
    act(() => {
      capturedOptions?.onEnd?.();
    });
    expect(button).toHaveTextContent('Ouvir');
  });

  it('handles playback failure gracefully without getting stuck', () => {
    vi.spyOn(speechUtils, 'speakText').mockReturnValue({
      success: false,
      message: 'Falha no sintetizador'
    });

    render(<PronounceButton text="arise" size="xs" />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    // Exibe notificação de erro acessível
    expect(screen.getByRole('status')).toHaveTextContent('Falha no sintetizador');
  });
});
