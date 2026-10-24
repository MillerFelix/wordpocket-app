export type TabType = 'verbs' | 'vocab' | 'translator';

export interface IrregularVerb {
  id: string;
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  translation: string;
  variants?: string;
  example: string;
  group?: 'identical' | 'en-ending' | 'vowel-change' | 'general';
}

export type WordCategory = 'cotidiano' | 'trabalho' | 'viagem' | 'tecnologia' | 'expressoes';

export type PartOfSpeech = 'substantivo' | 'verbo' | 'adjetivo' | 'adverbio' | 'expressao';

export interface VocabWord {
  id: string;
  word: string;
  translation: string;
  partOfSpeech: PartOfSpeech;
  category: WordCategory;
  meaning: string;
  exampleEn: string;
  examplePt: string;
}
