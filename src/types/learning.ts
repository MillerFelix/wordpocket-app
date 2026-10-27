export type LearningCategoryId = 
  | 'fundamentos'
  | 'gramatica'
  | 'formacao-frases'
  | 'vocabulario'
  | 'situacoes-reais'
  | 'revisao';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export const CEFR_LEVEL_BADGE_STYLES: Record<CEFRLevel, { bg: string; text: string; border: string }> = {
  A1: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  A2: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
  B1: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  B2: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  C1: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  C2: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' }
};

export interface LearningCategory {
  id: LearningCategoryId;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  accentColor: string;
  bgLight: string;
  borderLight: string;
  gradientClass: string;
  order: number;
}

export interface ExampleItem {
  en: string;
  pt: string;
  note?: string;
}

export interface RuleItem {
  title: string;
  explanation: string;
  formula?: string;
}

export interface ComparisonItem {
  labelA: string;
  exampleA: string;
  labelB: string;
  exampleB: string;
  explanation: string;
}

export interface MistakeItem {
  wrong: string;
  correct: string;
  explanation: string;
}

export interface CalloutItem {
  type: 'note' | 'tip' | 'warning';
  title?: string;
  text: string;
}

export interface ArticleSection {
  title?: string;
  content: string;
  bullets?: string[];
  rules?: RuleItem[];
  examples?: ExampleItem[];
  comparisons?: ComparisonItem[];
  mistakes?: MistakeItem[];
  callout?: CalloutItem;
}

export interface LearningArticle {
  id: string;
  title: string;
  description: string;
  categoryId: LearningCategoryId;
  level: CEFRLevel;
  readingTimeMinutes: number;
  isEssential?: boolean;
  keywords: string[];
  relatedArticleIds: string[];
  sections: ArticleSection[];
  takeaways: string[];
}
