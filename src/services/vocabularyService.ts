import { vocabularyData } from '../data/vocabulary';
import { VocabWord, WordCategory, PartOfSpeech } from '../types';

/**
 * Serviço de Acesso e Consulta ao Vocabulário do Word Pocket.
 *
 * Arquitetura:
 * - Isola a base educacional de vocabulário.
 * - Centraliza buscas multissetoriais (por palavra, tradução, sentido, exemplos e sinônimos).
 * - Fornece métodos de filtro por classe gramatical e temas contextuais.
 */

export interface VocabFilterCriteria {
  search?: string;
  category?: WordCategory | 'all';
  partOfSpeech?: PartOfSpeech | 'all';
}

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
   * Filtra termos conforme critérios de pesquisa, tema e classe gramatical.
   */
  filter(criteria: VocabFilterCriteria): VocabWord[] {
    const { search = '', category = 'all', partOfSpeech = 'all' } = criteria;
    const q = search.trim().toLowerCase();

    return vocabularyData.filter((item: VocabWord) => {
      if (category !== 'all' && item.category !== category) {
        return false;
      }

      if (partOfSpeech !== 'all' && item.partOfSpeech !== partOfSpeech) {
        return false;
      }

      if (!q) return true;

      const matchesMain =
        item.word.toLowerCase().includes(q) ||
        item.translation.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.exampleEn.toLowerCase().includes(q) ||
        item.examplePt.toLowerCase().includes(q);

      const matchesSynonyms = item.synonyms?.some((s) => s.toLowerCase().includes(q));

      const matchesSenses = item.senses?.some(
        (sense) =>
          sense.meaning.toLowerCase().includes(q) ||
          sense.translation.toLowerCase().includes(q) ||
          (sense.exampleEn && sense.exampleEn.toLowerCase().includes(q))
      );

      return matchesMain || matchesSynonyms || matchesSenses;
    });
  },

  /**
   * Busca rápida para a barra de pesquisa global da Home.
   */
  searchGlobal(query: string, maxResults = 4): VocabWord[] {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return vocabularyData
      .filter((w) =>
        w.word.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q)
      )
      .slice(0, maxResults);
  },

  /**
   * Localiza um termo por tradução em português (tradução reversa).
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
