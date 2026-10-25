import { vocabularyData } from '../data/vocabulary';
import { VocabWord } from '../types';

/**
 * Serviço de Consulta ao Vocabulário do Word Pocket.
 *
 * Utilizado para resolução de termos e frases no Tradutor Rápido (100% offline).
 */

export const vocabularyService = {
  /**
   * Retorna a lista completa de termos de vocabulário.
   */
  getAll(): VocabWord[] {
    return vocabularyData;
  },

  /**
   * Retorna o total de termos cadastrados no vocabulário.
   */
  getCount(): number {
    return vocabularyData.length;
  },

  /**
   * Busca um termo pelo seu identificador único.
   */
  getById(id: string): VocabWord | undefined {
    const normalized = id.trim().toLowerCase();
    return vocabularyData.find((w) => w.id.toLowerCase() === normalized);
  },

  /**
   * Busca um termo pelo nome da palavra em inglês.
   */
  getByWord(word: string): VocabWord | undefined {
    const normalized = word.trim().toLowerCase();
    return vocabularyData.find((w) => w.word.toLowerCase() === normalized);
  },

  /**
   * Localiza um termo por tradução em português (tradução reversa para tradutor).
   */
  findByTranslation(term: string): VocabWord | undefined {
    const normalized = term.trim().toLowerCase();
    if (!normalized) return undefined;

    return vocabularyData.find((w) => {
      const parts = w.translation.toLowerCase().split(/[;,/]/).map((s) => s.trim());
      return parts.includes(normalized) || w.translation.toLowerCase() === normalized;
    });
  }
};
