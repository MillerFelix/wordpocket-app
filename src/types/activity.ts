import { PracticeSkillId } from './index';

/**
 * Níveis de proficiência pedagógica do CEFR adotados no Word Pocket
 */
export type ActivityLevel = 'a1' | 'a2' | 'b1';

/**
 * Modalidades de atividades específicas para o pilar de Writing (Escrita)
 */
export type WritingActivityType = 
  | 'fill_blank'        // Complete a frase
  | 'sentence_order'     // Organize as palavras
  | 'find_fix_error'     // Corrija o erro
  | 'open_prompt';       // Escreva sua resposta

/**
 * Identificador universal do tipo de atividade (extensível aos 4 pilares)
 */
export type ActivityType = WritingActivityType | string;

/**
 * Estrutura base para qualquer questão nos 4 pilares
 */
export interface BaseQuestion {
  id: string;
  prompt?: string;
  instruction?: string;
  explanation: string;
  points?: number; // Padrão: 10 pontos por questão
}

/**
 * Questão 1: Complete a frase (Fill in the blank)
 */
export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill_blank';
  /** Frase com marcação de lacuna, ex: "She ___ to school yesterday." */
  sentenceWithBlank: string;
  /** Respostas aceitas (case-insensitive) */
  expectedAnswers: string[];
  hint?: string;
  audioPrompt?: string;
}

/**
 * Questão 2: Organize as palavras (Sentence Order / Word Scramble)
 */
export interface SentenceOrderQuestion extends BaseQuestion {
  type: 'sentence_order';
  /** Palavras desordenadas para o usuário montar */
  scrambledWords: string[];
  /** Sentença correta principal */
  expectedSentence: string;
  /** Alternativas sintáticas válidas adicionais */
  acceptedSentences?: string[];
  translation?: string;
}

/**
 * Questão 3: Corrija o erro (Identify and fix error)
 */
export interface FindFixErrorQuestion extends BaseQuestion {
  type: 'find_fix_error';
  /** Sentença original contendo o erro */
  sentenceWithError: string;
  /** Palavra ou trecho incorreto que deve ser substituído */
  errorWord?: string;
  /** Correção esperada da palavra ou frase completa */
  correction: string;
  /** Variações válidas aceitas */
  acceptedCorrections?: string[];
  explanationPt: string;
}

/**
 * Questão 4: Escreva sua resposta (Open contextual prompt)
 */
export interface OpenPromptQuestion extends BaseQuestion {
  type: 'open_prompt';
  /** Cenário situacional cotidiano */
  contextScenario: string;
  /** Pergunta ou comando a ser respondido em inglês */
  promptQuestion: string;
  /** Palavras-chave sugeridas para guiar o estudante */
  suggestedKeywords: string[];
  /** Mínimo de palavras esperado */
  minWords?: number;
  /** Exemplo modelo de resposta */
  sampleAnswer: string;
  /** Critérios de correção flexíveis */
  evaluationCriteria: {
    requiredKeywords?: string[];
    keyPatterns?: string[];
    minLength?: number;
  };
}

/**
 * União de todas as questões suportadas pelo Writing
 */
export type WritingQuestion = 
  | FillBlankQuestion 
  | SentenceOrderQuestion 
  | FindFixErrorQuestion 
  | OpenPromptQuestion;

/**
 * Contrato de uma atividade educacional padronizada
 */
export interface Activity<TQuestion = WritingQuestion> {
  id: string;
  pillar: PracticeSkillId;
  type: WritingActivityType;
  title: string;
  description: string;
  level: ActivityLevel;
  topic: string;
  objective: string;
  instructions: string;
  questions: TQuestion[];
  maxScore: number;
  version: number;
}

/**
 * Avaliação individual de uma questão
 */
export interface QuestionGrading {
  questionId: string;
  isCorrect: boolean;
  scorePercent: number; // 0 a 100%
  userAnswer: string;
  expectedAnswer: string;
  feedback: string;
  explanation: string;
}

/**
 * Resultado consolidado da correção de uma atividade
 */
export interface ActivityGradingResult {
  activityId: string;
  pillar: PracticeSkillId;
  level: ActivityLevel;
  type: WritingActivityType;
  score: number; // 0 a 100%
  earnedPoints: number;
  totalPoints: number;
  correctCount: number;
  totalQuestions: number;
  questionsGrading: QuestionGrading[];
  completedAt: string; // ISO 8601
}

/**
 * Registro de resultado da última tentativa concluída do usuário para uma atividade
 */
export interface UserActivityResult {
  activityId: string;
  pillar: PracticeSkillId;
  level: ActivityLevel;
  type: WritingActivityType;
  score: number; // 0 a 100%
  earnedPoints: number;
  totalPoints: number;
  correctCount: number;
  totalQuestions: number;
  userAnswers: Record<string, string>;
  completedAt: string; // ISO 8601
  durationSeconds: number;
}
