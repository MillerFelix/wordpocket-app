import { describe, it, expect, vi } from 'vitest';
import { formatTextForSpeech, speakEnglish } from '../utils/speech';

describe('Speech synthesis text normalization and pronunciation tests', () => {
  it('converts alternative verb forms separated by slashes into natural speech with "or"', () => {
    expect(formatTextForSpeech('was / were')).toBe('was or were');
    expect(formatTextForSpeech('abode / abided')).toBe('abode or abided');
    expect(formatTextForSpeech('abode/abided')).toBe('abode or abided');
    expect(formatTextForSpeech('burned / burnt')).toBe('burned or burnt');
    expect(formatTextForSpeech('got / gotten')).toBe('got or gotten');
    expect(formatTextForSpeech('dive / dived / dove')).toBe('dive, dived or dove');
  });

  it('strips parenthetical pronunciation guides and IPA transcriptions', () => {
    expect(formatTextForSpeech('read (/rɛd/)')).toBe('read');
    expect(formatTextForSpeech('read /rɛd/')).toBe('read');
    expect(formatTextForSpeech('sawed (sawn)')).toBe('sawed');
  });

  it('cleans up quotes, bullet points, and special symbols so they are not spoken literally', () => {
    expect(formatTextForSpeech('"She awoke early to finish her study plan."')).toBe(
      'She awoke early to finish her study plan.'
    );
    expect(formatTextForSpeech('went • gone • ir')).toBe('went, gone, ir');
    expect(formatTextForSpeech('first – second')).toBe('first, second');
    expect(formatTextForSpeech('[sample] *word* #tag')).toBe('sample word tag');
  });

  it('handles empty or whitespace-only strings gracefully', () => {
    expect(formatTextForSpeech('')).toBe('');
    expect(formatTextForSpeech('   ')).toBe('');
  });

  it('delegates to window.speechSynthesis with sanitized text containing "or"', () => {
    const speakMock = vi.fn();
    const cancelMock = vi.fn();

    // Mock speechSynthesis
    const originalSpeechSynthesis = window.speechSynthesis;
    (window as any).speechSynthesis = {
      cancel: cancelMock,
      speak: speakMock,
      getVoices: () => []
    };
    (window as any).SpeechSynthesisUtterance = function (this: any, text: string) {
      this.text = text;
    };

    const result = speakEnglish('was / were');
    expect(result.success).toBe(true);
    expect(cancelMock).toHaveBeenCalled();
    expect(speakMock).toHaveBeenCalledWith(
      expect.objectContaining({
        text: 'was or were'
      })
    );

    // Restore
    (window as any).speechSynthesis = originalSpeechSynthesis;
  });
});
