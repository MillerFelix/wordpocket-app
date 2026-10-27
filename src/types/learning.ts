export type LearningCategoryId = 
  | 'fundamentos'
  | 'gramatica'
  | 'formacao-frases'
  | 'vocabulario'
  | 'situacoes-reais'
  | 'revisao';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

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
