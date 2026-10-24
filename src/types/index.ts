export type TabType = 'verbs' | 'vocab' | 'translator';

export type VerbGroup = 'identical' | 'en-ending' | 'vowel-change' | 'past-same' | 'general';

export interface IrregularVerb {
  id: string;
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  translation: string;
  variants?: string;
  example: string;
  group?: VerbGroup;
}

export type WordCategory = 
  | 'cotidiano' 
  | 'trabalho' 
  | 'viagem' 
  | 'tecnologia' 
  | 'expressoes' 
  | 'academico';

export type PartOfSpeech = 
  | 'substantivo' 
  | 'verbo' 
  | 'adjetivo' 
  | 'adverbio' 
  | 'expressao' 
  | 'phrasal-verb';

export interface WordSense {
  meaning: string;
  translation: string;
  exampleEn?: string;
  examplePt?: string;
}

export interface VocabWord {
  id: string;
  word: string;
  phonetic?: string;
  translation: string;
  partOfSpeech: PartOfSpeech;
  category: WordCategory;
  meaning: string;
  exampleEn: string;
  examplePt: string;
  senses?: WordSense[];
  synonyms?: string[];
}
