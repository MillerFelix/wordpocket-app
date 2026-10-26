import { PracticeSkillId } from './index';

export type { PracticeSkillId };

/**
 * Níveis de proficiência pedagógica do CEFR adotados no Word Pocket (A1 a C2)
 */
export type ActivityLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

/**
 * Modalidades de atividades específicas para o pilar de Writing (Escrita)
 */
export type WritingActivityType = 
  | 'fill_blank'        // Complete a frase
  | 'sentence_order'     // Organize as palavras
  | 'find_fix_error'     // Corrija o erro
  | 'open_prompt';       // Escreva sua resposta

/**
 * Modalidades de atividades específicas para o pilar de Reading (Leitura)
 */
export type ReadingActivityType =
  | 'read_comprehend'    // Leia e compreenda
  | 'context_clue'       // Descubra pelo contexto
  | 'message_interpret'  // Interprete a mensagem
  | 'main_idea';         // Identifique a ideia principal

/**
 * Modalidades de atividades específicas para o pilar de Listening (Escuta)
 */
export type ListeningActivityType =
  | 'listen_identify'     // Ouça e identifique
  | 'listen_dialogue'     // Compreenda o diálogo
  | 'real_life_situation' // Situações da vida real
  | 'natural_speech';     // Entenda o inglês natural

/**
 * Modalidades de atividades específicas para o pilar de Speaking (Fala e Produção Oral)
 */
export type SpeakingActivityType =
  | 'listen_repeat'       // Ouça e imite
  | 'sound_training'      // Treino de sons
  | 'rapid_response'      // Respostas rápidas
  | 'roleplay_situation';  // Fale em situações reais

/**
 * Identificador universal do tipo de atividade (extensível aos 4 pilares)
 */
export type ActivityType = 
  | WritingActivityType 
  | ReadingActivityType 
  | ListeningActivityType 
  | SpeakingActivityType 
  | string;

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
  incorrectPart?: string;
  /** Correção esperada da palavra ou frase completa */
  correction?: string;
  correctForm?: string;
  /** Variações válidas aceitas */
  acceptedCorrections?: string[];
  explanationPt?: string;
}

/**
 * Questão 4: Escreva sua resposta (Open contextual prompt)
 */
export interface OpenPromptQuestion extends BaseQuestion {
  type: 'open_prompt';
  /** Cenário situacional cotidiano */
  contextScenario?: string;
  /** Pergunta ou comando a ser respondido em inglês */
  promptQuestion?: string;
  /** Palavras-chave sugeridas para guiar o estudante */
  suggestedKeywords?: string[];
  /** Mínimo de palavras esperado */
  minWords?: number;
  /** Exemplo modelo de resposta */
  sampleAnswer?: string;
  modelAnswer?: string;
  acceptedAnswers?: string[];
  hint?: string;
  /** Critérios de correção flexíveis */
  evaluationCriteria?: {
    requiredKeywords?: string[];
    keyPatterns?: string[];
    minLength?: number;
  };
}

/**
 * Opção de múltipla escolha para atividades de leitura e interpretação
 */
export interface MultipleChoiceOption {
  id: string; // Ex: 'A', 'B', 'C', 'D'
  text: string;
}

/**
 * Questão de múltipla escolha para o pilar de Reading (todos os 4 formatos)
 */
export interface ReadingQuestion extends BaseQuestion {
  type: 'multiple_choice';
  questionText: string;
  options: MultipleChoiceOption[];
  correctOptionId: string; // Ex: 'A'
}

/**
 * Item de vocabulário ou glossário do texto
 */
export interface GlossaryItem {
  word: string;
  translation: string;
  context?: string;
}

/**
 * Estrutura do texto ou mensagem para atividades de Reading
 */
export interface ReadingPassage {
  title?: string;
  content: string;
  genre?: string; // Ex: 'E-mail de Trabalho', 'Aviso no Aeroporto', 'Mensagem de WhatsApp', 'Artigo'
  estimatedReadTimeMinutes?: number;
  glossary?: GlossaryItem[];
  passageTranslation?: string;
}

/**
 * Linha de diálogo entre interlocutores para áudios de conversas
 */
export interface DialogueLine {
  speaker: string;
  text: string;
  translation?: string;
  gender?: 'male' | 'female';
  speechRate?: number;
  pitch?: number;
}

/**
 * Estrutura da faixa e conteúdo falado para o pilar de Listening (Escuta)
 */
export interface ListeningTrack {
  title?: string;
  scenario?: string; // Ex: 'No restaurante', 'Check-in no aeroporto', 'Ligação profissional'
  spokenText: string; // Texto contínuo falado pelo sintetizador ou gravação
  dialogueLines?: DialogueLine[]; // Linhas de diálogo para conversas
  speechRate?: number; // Ex: 0.85 (A1), 0.95 (A2), 1.05 (B1)
  estimatedDurationSeconds?: number;
  transcript?: string; // Transcrição integral revelada pedagogicamente ao final
  transcriptTranslation?: string; // Tradução de apoio
  audioUrl?: string; // URL opcional para áudio offline estático pré-gerado
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
 * Questão de múltipla escolha para o pilar de Listening (reutiliza o modelo de ReadingQuestion)
 */
export type ListeningQuestion = ReadingQuestion;

/**
 * Item ou turno de conversação para o pilar de Speaking (Fala e Produção Oral)
 */
export interface SpeakingQuestion extends BaseQuestion {
  type: 'speaking_item';
  itemTitle?: string;
  contextScenario?: string;
  modelAudioText: string;
  modelSpeaker?: string;
  speechRate?: number;
  targetPhrase?: string;
  phoneticFocus?: string;
  pronunciationTip?: string;
  sampleResponses?: string[];
  translation?: string;
  perceptionQuestion?: {
    questionText: string;
    options: MultipleChoiceOption[];
    correctOptionId: string;
    audioText: string;
    explanation: string;
  };
}

/**
 * Informações contextuais e metas pedagógicas para práticas de Speaking
 */
export interface SpeakingPracticeInfo {
  scenario?: string;
  partnerRole?: string;
  userRole?: string;
  focusSound?: string;
  checklist?: string[];
}

/**
 * União universal de tipos de questões nos pilares
 */
export type AnyQuestion = WritingQuestion | ReadingQuestion | ListeningQuestion | SpeakingQuestion;

/**
 * Contrato de uma atividade educacional padronizada (Writing, Reading, Listening, Speaking)
 */
export interface Activity<TQuestion = AnyQuestion> {
  id: string;
  pillar: PracticeSkillId;
  type: ActivityType;
  title: string;
  description: string;
  level: ActivityLevel;
  topic: string;
  objective: string;
  instructions: string;
  readingPassage?: ReadingPassage;
  listeningTrack?: ListeningTrack;
  speakingInfo?: SpeakingPracticeInfo;
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
  type: ActivityType;
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
  type: ActivityType;
  score: number; // 0 a 100%
  earnedPoints: number;
  totalPoints: number;
  correctCount: number;
  totalQuestions: number;
  userAnswers: Record<string, string>;
  completedAt: string; // ISO 8601
  durationSeconds: number;
  selfEvaluation?: Record<string, boolean>;
}
