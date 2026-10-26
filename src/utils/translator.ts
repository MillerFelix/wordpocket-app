import { verbsService } from '../services/verbsService';
import { vocabularyService } from '../services/vocabularyService';

export type TranslationDirection = 'en_pt' | 'pt_en';

export interface TranslationResult {
  translatedText: string;
  sourceText: string;
  fromLang: 'en' | 'pt';
  toLang: 'en' | 'pt';
  source: 'local_verbs' | 'local_vocab' | 'google';
  extraInfo?: string;
}

/**
 * Traduz texto entre inglês e português.
 *
 * Estratégia:
 * 1. Consulta bases locais validadas (verbos irregulares e vocabulário) para resposta
 *    imediata, confiável e funcional offline.
 * 2. Para frases livres ou termos não catalogados, consulta o endpoint público do Google Tradutor.
 */
export async function translateText(
  text: string,
  direction: TranslationDirection
): Promise<TranslationResult> {
  const query = text.trim();
  if (!query) {
    throw new Error('Digite uma palavra ou frase para traduzir.');
  }

  const fromLang = direction === 'en_pt' ? 'en' : 'pt';
  const toLang = direction === 'en_pt' ? 'pt' : 'en';

  // 1. Resolução local em cache/dicionário para velocidade e suporte offline
  if (direction === 'en_pt') {
    const verbMatch = verbsService.findByAnyForm(query);
    if (verbMatch) {
      const { verb, matchedForm } = verbMatch;
      let extra = `Formas: ${verb.infinitive} (infinitivo) • ${verb.pastSimple} (passado) • ${verb.pastParticiple} (particípio)`;
      if (matchedForm === 'pastSimple' && verb.pastSimple !== verb.infinitive) {
        extra = `Passado simples de "${verb.infinitive}" • particípio: ${verb.pastParticiple}`;
      } else if (matchedForm === 'pastParticiple' && verb.pastParticiple !== verb.infinitive) {
        extra = `Particípio passado de "${verb.infinitive}" • passado simples: ${verb.pastSimple}`;
      }

      return {
        translatedText: verb.translation,
        sourceText: query,
        fromLang,
        toLang,
        source: 'local_verbs',
        extraInfo: extra
      };
    }

    const vocab = vocabularyService.getByWord(query);
    if (vocab) {
      return {
        translatedText: vocab.translation,
        sourceText: query,
        fromLang,
        toLang,
        source: 'local_vocab',
        extraInfo: vocab.meaning ? `Sentido contextual: ${vocab.meaning}` : undefined
      };
    }
  } else {
    // pt_en: Português para Inglês
    const verb = verbsService.findByTranslation(query);
    if (verb) {
      return {
        translatedText: verb.infinitive,
        sourceText: query,
        fromLang,
        toLang,
        source: 'local_verbs',
        extraInfo: `Verbo irregular inglês: ${verb.infinitive} • ${verb.pastSimple} • ${verb.pastParticiple}`
      };
    }

    const vocab = vocabularyService.findByTranslation(query);
    if (vocab) {
      return {
        translatedText: vocab.word,
        sourceText: query,
        fromLang,
        toLang,
        source: 'local_vocab',
        extraInfo: vocab.meaning ? `Sentido: ${vocab.meaning}` : undefined
      };
    }
  }

  // 2. Consulta ao endpoint do Google Tradutor para frases gerais
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(query)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Falha no serviço de tradução (código ${response.status})`);
    }

    const data = await response.json();
    if (!data || !Array.isArray(data[0])) {
      throw new Error('Resposta de tradução vazia ou inválida.');
    }

    interface TranslationChunk {
      0?: string;
    }
    const chunks = data[0] as TranslationChunk[];
    const translatedText = chunks
      .map((chunk) => chunk[0])
      .filter((s): s is string => typeof s === 'string')
      .join('');

    if (!translatedText) {
      throw new Error('Nenhum resultado de tradução retornado.');
    }

    return {
      translatedText,
      sourceText: query,
      fromLang,
      toLang,
      source: 'google'
    };
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error('A consulta demorou muito para responder.');
    }
    // Mensagem amigável para falha de conectividade ou rede offline
    if (err instanceof TypeError && err.message.toLowerCase().includes('fetch')) {
      throw new Error('Sem conexão à internet para traduzir novos termos no momento. Conecte-se para traduzir frases livres.');
    }
    throw err;
  }
}
