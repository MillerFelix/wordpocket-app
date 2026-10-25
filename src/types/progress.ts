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
 * Estrutura para atividade interativa de prática
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
