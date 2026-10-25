export type TabType = 'home' | 'verbs' | 'practice' | 'translator' | 'favorites' | 'history' | 'settings' | 'vocab' | 'profile';

export * from './auth';
export * from './progress';

export type PracticeSkillId = 'listening' | 'speaking' | 'reading' | 'writing';

export type PracticeDifficulty = 'easy' | 'medium' | 'hard';

export interface PracticeSkillConfig {
  id: PracticeSkillId;
  nameEn: string;
  namePt: string;
  tagline: string;
  objective: string;
  activitiesTag: string;
  futureActivities: string[];
  difficultyInfo: Record<PracticeDifficulty, { label: string; desc: string }>;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  gradientClass: string;
  shadowClass: string;
}

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
