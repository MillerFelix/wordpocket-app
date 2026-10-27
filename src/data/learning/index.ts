import { LearningArticle, LearningCategoryId, CEFRLevel } from '../../types/learning';
import { LEARNING_CATEGORIES, getCategoryById } from './categories';
import { FUNDAMENTOS_ARTICLES } from './fundamentos';
import { GRAMATICA_ARTICLES } from './gramatica';
import { FORMACAO_FRASES_ARTICLES } from './formacaoFrases';
import { VOCABULARIO_ARTICLES } from './vocabulario';
import { SITUACOES_REAIS_ARTICLES } from './situacoesReais';
import { REVISAO_ARTICLES } from './revisao';

export * from './categories';

export const ALL_LEARNING_ARTICLES: LearningArticle[] = [
  ...FUNDAMENTOS_ARTICLES,
  ...GRAMATICA_ARTICLES,
  ...FORMACAO_FRASES_ARTICLES,
  ...VOCABULARIO_ARTICLES,
  ...SITUACOES_REAIS_ARTICLES,
  ...REVISAO_ARTICLES
];

export function getAllArticles(): LearningArticle[] {
  return ALL_LEARNING_ARTICLES;
}

export function getArticleById(id: string): LearningArticle | undefined {
  return ALL_LEARNING_ARTICLES.find((a) => a.id === id);
}

export function getArticlesByCategory(categoryId: LearningCategoryId): LearningArticle[] {
  return ALL_LEARNING_ARTICLES.filter((a) => a.categoryId === categoryId);
}

export function getEssentialArticles(): LearningArticle[] {
  return ALL_LEARNING_ARTICLES.filter((a) => a.isEssential);
}

export function getRelatedArticles(articleId: string): LearningArticle[] {
  const current = getArticleById(articleId);
  if (!current) return [];

  // Primeiro busca os explicitamente listados em relatedArticleIds
  const explicitlyRelated = current.relatedArticleIds
    .map((id) => getArticleById(id))
    .filter((a): a is LearningArticle => Boolean(a));

  // Se tiver menos de 3, complementa com outros da mesma categoria
  if (explicitlyRelated.length < 3) {
    const sameCategory = ALL_LEARNING_ARTICLES.filter(
      (a) => a.categoryId === current.categoryId && a.id !== current.id && !current.relatedArticleIds.includes(a.id)
    );
    return [...explicitlyRelated, ...sameCategory].slice(0, 4);
  }

  return explicitlyRelated.slice(0, 4);
}

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function searchArticles(
  query: string,
  categoryId?: LearningCategoryId | 'all',
  level?: CEFRLevel | 'all'
): LearningArticle[] {
  let filtered = ALL_LEARNING_ARTICLES;

  if (categoryId && categoryId !== 'all') {
    filtered = filtered.filter((a) => a.categoryId === categoryId);
  }

  if (level && level !== 'all') {
    filtered = filtered.filter((a) => a.level === level);
  }

  const cleanQuery = normalizeText(query.trim());
  if (!cleanQuery) {
    return filtered;
  }

  return filtered.filter((article) => {
    // 1. Título
    if (normalizeText(article.title).includes(cleanQuery)) return true;
    // 2. Descrição
    if (normalizeText(article.description).includes(cleanQuery)) return true;
    // 3. Palavras-chave
    if (article.keywords.some((kw) => normalizeText(kw).includes(cleanQuery))) return true;
    // 4. Conteúdo das seções e exemplos
    return article.sections.some((sec) => {
      if (sec.title && normalizeText(sec.title).includes(cleanQuery)) return true;
      if (normalizeText(sec.content).includes(cleanQuery)) return true;
      if (sec.examples?.some((ex) => normalizeText(ex.en).includes(cleanQuery) || normalizeText(ex.pt).includes(cleanQuery))) {
        return true;
      }
      if (sec.rules?.some((r) => normalizeText(r.title).includes(cleanQuery) || normalizeText(r.explanation).includes(cleanQuery))) {
        return true;
      }
      return false;
    });
  });
}

export const learningService = {
  getAll: getAllArticles,
  getById: getArticleById,
  getByCategory: getArticlesByCategory,
  getEssentials: getEssentialArticles,
  getRelated: getRelatedArticles,
  search: searchArticles,
  getCount: () => ALL_LEARNING_ARTICLES.length,
  getCategories: () => LEARNING_CATEGORIES,
  getCategoryById
};
