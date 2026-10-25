import { PracticeDifficulty, PracticeSkillId } from './index';

/**
 * Resumo consolidado do progresso de uma habilidade
 */
export interface SkillProgress {
  skillId: PracticeSkillId;
  currentLevel: PracticeDifficulty;
  completedActivitiesCount: number;
  totalAttempts: number;
  totalScore: number;
  lastPracticedAt: string | null; // ISO 8601 string
}

/**
 * Registro de tentativa/resultado de uma atividade de prática
 */
export interface ActivityAttempt {
  id: string;
  userId: string;
  skillId: PracticeSkillId;
  difficulty: PracticeDifficulty;
  activityId: string;
  activityTitle: string;
  score: number; // 0 a 100%
  totalQuestions: number;
  correctAnswers: number;
  durationSeconds: number;
  completedAt: string; // ISO 8601 string
}

/**
 * Modalidades de atividades pedagógicas para os 4 pilares
 */
export type ActivityModality = 
  | 'multiple_choice' 
  | 'audio_matching' 
  | 'voice_repetition' 
  | 'sentence_reorder' 
  | 'cloze_fill';

/**
 * Contrato base para qualquer atividade interativa nos 4 pilares
 */
export interface BaseActivityMetadata {
  id: string;
  skillId: PracticeSkillId;
  difficulty: PracticeDifficulty;
  title: string;
  instruction: string;
  modality: ActivityModality;
}

/**
 * Especialização de contratos para cada um dos 4 pilares
 */
export interface ListeningActivityMetadata extends BaseActivityMetadata {
  skillId: 'listening';
  audioSource?: string;
  phonemeFocus?: string;
  playbackSpeedDefault?: number;
}

export interface SpeakingActivityMetadata extends BaseActivityMetadata {
  skillId: 'speaking';
  targetPhoneme?: string;
  referenceAudioText: string;
  nativeModelVoice?: string;
}

export interface ReadingActivityMetadata extends BaseActivityMetadata {
  skillId: 'reading';
  passageText: string;
  passageTitle?: string;
  glossaryHighlights?: string[];
}

export interface WritingActivityMetadata extends BaseActivityMetadata {
  skillId: 'writing';
  targetGrammarPoint?: string;
  sentenceScrambleTokens?: string[];
  expectedAnswerPattern?: string;
}

/**
 * Estrutura para atividade interativa de prática (compatibilidade retroativa)
 */
export interface PracticeQuestion {
  id: string;
  prompt: string;
  audioText?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface PracticeExercise {
  id: string;
  skillId: PracticeSkillId;
  difficulty: PracticeDifficulty;
  title: string;
  instruction: string;
  questions: PracticeQuestion[];
}
