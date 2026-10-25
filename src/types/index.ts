export type TabType = 'home' | 'verbs' | 'practice' | 'translator' | 'favorites' | 'history' | 'settings' | 'profile';

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
  meaning: string;
  exampleEn: string;
  examplePt: string;
  partOfSpeech?: string;
  category?: string;
  senses?: WordSense[];
  synonyms?: string[];
}
