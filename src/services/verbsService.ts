import { irregularVerbs } from '../data/irregularVerbs';
import { IrregularVerb, VerbGroup } from '../types';

/**
 * Serviço de Acesso e Consulta aos Verbos Irregulares do Word Pocket.
 *
 * Arquitetura:
 * - Isola a fonte de dados (banco local tipado e versionado).
 * - Centraliza buscas, filtros por letra e grupo morfológico.
 * - Garante busca insensível a maiúsculas/minúsculas e acentuação.
 */

export interface VerbFilterCriteria {
  search?: string;
  group?: VerbGroup | 'all';
  letter?: string;
}

export const verbsService = {
  /**
   * Retorna a lista completa de verbos irregulares.
   */
  getAll(): IrregularVerb[] {
    return irregularVerbs;
  },

  /**
   * Retorna o total de verbos irregulares cadastrados.
   */
  getCount(): number {
    return irregularVerbs.length;
  },

  /**
   * Busca um verbo pelo seu identificador único.
   */
  getById(id: string): IrregularVerb | undefined {
    const normalized = id.trim().toLowerCase();
    return irregularVerbs.find((v) => v.id.toLowerCase() === normalized);
  },

  /**
   * Busca um verbo pelo infinitivo exato.
   */
  getByInfinitive(infinitive: string): IrregularVerb | undefined {
    const normalized = infinitive.trim().toLowerCase();
    return irregularVerbs.find((v) => v.infinitive.toLowerCase() === normalized);
  },

  /**
   * Retorna todas as letras iniciais presentes na base para a barra de filtro alfabético.
   */
  getAlphabetLetters(): string[] {
    const letters = new Set<string>();
    for (const v of irregularVerbs) {
      if (v.infinitive) {
        letters.add(v.infinitive.charAt(0).toUpperCase());
      }
    }
    return Array.from(letters).sort();
  },

  /**
   * Filtra verbos conforme critérios combinados de busca, grupo morfológico e letra inicial.
   */
  filter(criteria: VerbFilterCriteria): IrregularVerb[] {
    const { search = '', group = 'all', letter = 'all' } = criteria;
    const q = search.trim().toLowerCase();
    const upperLetter = letter.toUpperCase();

    return irregularVerbs.filter((verb) => {
      // Filtro por grupo morfológico
      if (group !== 'all' && verb.group !== group) {
        return false;
      }

      // Filtro por letra inicial
      if (letter !== 'all' && !verb.infinitive.toUpperCase().startsWith(upperLetter)) {
        return false;
      }

      // Filtro por termo de busca
      if (!q) return true;

      return (
        verb.infinitive.toLowerCase().includes(q) ||
        verb.pastSimple.toLowerCase().includes(q) ||
        verb.pastParticiple.toLowerCase().includes(q) ||
        verb.translation.toLowerCase().includes(q) ||
        (verb.variants ? verb.variants.toLowerCase().includes(q) : false)
      );
    });
  },

  /**
   * Localiza um verbo que corresponda a qualquer uma de suas formas conjugadas
   * (usado para suporte a tradução e identificação contextual).
   */
  findByAnyForm(term: string): { verb: IrregularVerb; matchedForm: 'infinitive' | 'pastSimple' | 'pastParticiple' } | undefined {
    const normalized = term.trim().toLowerCase();
    if (!normalized) return undefined;

    for (const verb of irregularVerbs) {
      if (verb.infinitive.toLowerCase() === normalized) {
        return { verb, matchedForm: 'infinitive' };
      }
      if (verb.pastSimple.toLowerCase() === normalized) {
        return { verb, matchedForm: 'pastSimple' };
      }
      if (verb.pastParticiple.toLowerCase() === normalized) {
        return { verb, matchedForm: 'pastParticiple' };
      }
    }
    return undefined;
  },

  /**
   * Localiza verbos pelo termo em português (tradução reversa).
   */
  findByTranslation(term: string): IrregularVerb | undefined {
    const normalized = term.trim().toLowerCase();
    if (!normalized) return undefined;

    return irregularVerbs.find((v) => {
      const parts = v.translation.toLowerCase().split(/[;,/]/).map((s) => s.trim());
      return parts.includes(normalized) || v.translation.toLowerCase() === normalized;
    });
  }
};
