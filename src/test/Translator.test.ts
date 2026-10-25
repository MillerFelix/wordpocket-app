import { describe, it, expect, vi, beforeEach } from 'vitest';
import { translateText } from '../utils/translator';

describe('Translator Utility Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('translates irregular verbs from English to Portuguese instantly using local database', async () => {
    const result = await translateText('break', 'en_pt');
    expect(result.source).toBe('local_verbs');
    expect(result.translatedText.toLowerCase()).toContain('quebrar');
    expect(result.fromLang).toBe('en');
    expect(result.toLang).toBe('pt');
    expect(result.extraInfo).toContain('broke');
  });

  it('translates past tense of irregular verb with contextual explanation', async () => {
    const result = await translateText('went', 'en_pt');
    expect(result.source).toBe('local_verbs');
    expect(result.translatedText.toLowerCase()).toContain('ir');
    expect(result.extraInfo).toContain('Passado simples de "go"');
  });

  it('translates vocabulary words from English to Portuguese using local dictionary', async () => {
    const result = await translateText('resilient', 'en_pt');
    expect(result.source).toBe('local_vocab');
    expect(result.translatedText.toLowerCase()).toContain('resiliente');
    expect(result.extraInfo).toBeDefined();
  });

  it('translates words from Portuguese to English using local dictionary', async () => {
    const result = await translateText('resiliente', 'pt_en');
    expect(result.source).toBe('local_vocab');
    expect(result.translatedText.toLowerCase()).toBe('resilient');
  });

  it('translates Portuguese verbs to English infinitive using local verbs database', async () => {
    const result = await translateText('ir', 'pt_en');
    expect(result.source).toBe('local_verbs');
    expect(result.translatedText.toLowerCase()).toBe('go');
  });

  it('falls back to Google Translate client endpoint for free-form sentences', async () => {
    const mockApiResponse = [
      [['Olá mundo, bem-vindo ao Word Pocket', 'Hello world, welcome to Word Pocket', null, null, 1]],
      null,
      'en'
    ];
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse
    } as Response);

    const result = await translateText('Hello world, welcome to Word Pocket', 'en_pt');
    expect(result.source).toBe('google');
    expect(result.translatedText).toBe('Olá mundo, bem-vindo ao Word Pocket');
    expect(result.fromLang).toBe('en');
    expect(result.toLang).toBe('pt');
  });

  it('throws a friendly validation error if input text is empty or blank', async () => {
    await expect(translateText('   ', 'en_pt')).rejects.toThrow(/Digite uma palavra ou frase/i);
  });

  it('handles fetch network error with user-friendly message', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new TypeError('Failed to fetch'));

    await expect(translateText('phrase that does not exist in local db 123456', 'en_pt')).rejects.toThrow(
      /Sem conexão/i
    );
  });
});
