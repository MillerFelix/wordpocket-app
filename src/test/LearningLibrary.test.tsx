import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { 
  LEARNING_CATEGORIES, 
  getAllArticles, 
  getArticleById,
  searchArticles,
  getRelatedArticles
} from '../data/learning';
import { LearningLibraryView } from '../components/learning/LearningLibraryView';

describe('Aprender: Data Integrity & Service Tests', () => {
  it('contains exactly 6 structured categories', () => {
    expect(LEARNING_CATEGORIES).toHaveLength(6);
    const categoryIds = LEARNING_CATEGORIES.map((c) => c.id);
    expect(categoryIds).toEqual([
      'fundamentos',
      'gramatica',
      'formacao-frases',
      'vocabulario',
      'situacoes-reais',
      'revisao'
    ]);
  });

  it('contains all 37 mandatory initial pedagogical articles', () => {
    const articles = getAllArticles();
    expect(articles).toHaveLength(37);

    // Verify all IDs are unique
    const uniqueIds = new Set(articles.map((a) => a.id));
    expect(uniqueIds.size).toBe(37);
  });

  it('guarantees complete metadata, sections and takeaways for every article', () => {
    const articles = getAllArticles();
    articles.forEach((art) => {
      expect(art.id).toBeTruthy();
      expect(art.title).toBeTruthy();
      expect(art.description).toBeTruthy();
      expect(art.categoryId).toBeTruthy();
      expect(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).toContain(art.level);
      expect(art.readingTimeMinutes).toBeGreaterThanOrEqual(3);
      expect(art.keywords.length).toBeGreaterThan(0);
      expect(art.sections.length).toBeGreaterThan(0);
      expect(art.takeaways.length).toBeGreaterThan(0);

      // Verify each section has content
      art.sections.forEach((sec) => {
        expect(sec.content).toBeTruthy();
      });
    });
  });

  it('verifies required topics in Fundamentos do inglês (5 articles)', () => {
    const required = [
      'pronomes-pessoais',
      'verbo-to-be-presente',
      'contracoes-comuns',
      'diferenca-to-be-outros-verbos',
      'construcao-frases-fundamentos'
    ];
    required.forEach((id) => {
      expect(getArticleById(id)).toBeDefined();
    });
  });

  it('verifies required topics in Gramática (10 articles)', () => {
    const required = [
      'simple-present',
      'uso-do-does',
      'simple-past',
      'uso-did',
      'artigos-a-an-the',
      'contaveis-incontaveis',
      'diferenca-much-many',
      'uso-some-any',
      'preposicoes-tempo-lugar',
      'pronomes-adjetivos-possessivos'
    ];
    required.forEach((id) => {
      expect(getArticleById(id)).toBeDefined();
    });
  });

  it('verifies required topics in Formação de frases (6 articles)', () => {
    const required = [
      'ordem-palavras-ingles',
      'como-formular-perguntas',
      'como-formar-negativas',
      'como-usar-auxiliares',
      'construir-frases-longas',
      'conectivos-basicos'
    ];
    required.forEach((id) => {
      expect(getArticleById(id)).toBeDefined();
    });
  });

  it('verifies required topics in Vocabulário e expressões (5 articles)', () => {
    const required = [
      'expressoes-frequentes-cotidiano',
      'falsos-cognatos-comuns',
      'palavras-parecidas-diferencas',
      'collocations-combinacoes-naturais',
      'expressoes-idiomaticas-nao-literais'
    ];
    required.forEach((id) => {
      expect(getArticleById(id)).toBeDefined();
    });
  });

  it('verifies required topics in Inglês para situações reais (6 articles)', () => {
    const required = [
      'apresentacoes-pessoais',
      'rotina-diaria',
      'compras-restaurantes',
      'pedir-informacoes-direcoes',
      'ingles-para-viagens',
      'conversas-cotidianas'
    ];
    required.forEach((id) => {
      expect(getArticleById(id)).toBeDefined();
    });
  });

  it('verifies required topics in Revisão de conceitos (5 articles)', () => {
    const required = [
      'erros-comuns-brasileiros',
      'confusoes-tempos-verbais',
      'quando-usar-nao-usar-auxiliares',
      'revisao-fundamentos-essenciais',
      'estruturas-confundidas'
    ];
    required.forEach((id) => {
      expect(getArticleById(id)).toBeDefined();
    });
  });

  it('supports functional search across titles, descriptions, keywords and examples', () => {
    const resultsToBe = searchArticles('verbo to be');
    expect(resultsToBe.length).toBeGreaterThan(0);
    expect(resultsToBe.some((a) => a.id === 'verbo-to-be-presente')).toBe(true);

    const resultsRotina = searchArticles('rotina');
    expect(resultsRotina.length).toBeGreaterThan(0);

    const resultsPreposicoes = searchArticles('preposicoes');
    expect(resultsPreposicoes.length).toBeGreaterThan(0);
  });

  it('resolves valid related articles without self-referencing', () => {
    const related = getRelatedArticles('pronomes-pessoais');
    expect(related.length).toBeGreaterThan(0);
    expect(related.every((r) => r.id !== 'pronomes-pessoais')).toBe(true);
  });
});

describe('LearningLibraryView Component Tests', () => {
  it('renders the library header, search input, and 6 category cards', () => {
    render(<LearningLibraryView />);

    expect(screen.getByRole('heading', { name: /Aprender Inglês/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Buscar por assunto/i)).toBeInTheDocument();
    expect(screen.getByText('Categorias de Aprendizagem')).toBeInTheDocument();
    expect(screen.getByText('Todas as Categorias')).toBeInTheDocument();
    expect(screen.getAllByText(/37 de 37 artigos/i).length).toBeGreaterThan(0);

    // Verify category cards
    expect(screen.getByRole('button', { name: /Fundamentos/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Gramática/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Formação de Frases/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Vocabulário/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Situações Reais/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Revisão/i })).toBeInTheDocument();
  });

  it('filters articles dynamically when typing in search input', () => {
    render(<LearningLibraryView />);

    const searchInput = screen.getByPlaceholderText(/Buscar por assunto/i);
    fireEvent.change(searchInput, { target: { value: 'falsos cognatos' } });

    expect(screen.getByRole('heading', { name: /Falsos Cognatos Perigosos/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Verbo To Be no Presente/i })).not.toBeInTheDocument();
  });

  it('displays empty state when search returns no matches and allows clearing', () => {
    render(<LearningLibraryView />);

    const searchInput = screen.getByPlaceholderText(/Buscar por assunto/i);
    fireEvent.change(searchInput, { target: { value: 'termo-inexistente-xyz123' } });

    expect(screen.getByText(/Nenhum artigo encontrado/i)).toBeInTheDocument();

    const clearButton = screen.getByRole('button', { name: /Ver todos os 37 artigos/i });
    fireEvent.click(clearButton);

    expect(screen.getByText('Categorias de Aprendizagem')).toBeInTheDocument();
  });

  it('opens a category to view its articles, then opens an article to read', () => {
    render(<LearningLibraryView />);

    // Click on Fundamentos category card
    const fundCategory = screen.getByRole('button', { name: /Fundamentos/i });
    fireEvent.click(fundCategory);

    // Should be in dedicated category view
    expect(screen.getByText(/5 artigos disponíveis/i)).toBeInTheDocument();

    // Click on the article inside dedicated category view
    const firstArticleButton = screen.getByRole('button', { name: /Ler artigo: Pronomes Pessoais/i });
    fireEvent.click(firstArticleButton);

    // Verify ArticleView is rendered
    expect(screen.getByRole('button', { name: /Voltar para a biblioteca/i })).toBeInTheDocument();
    expect(screen.getByText(/Pontos-Chave para Lembrar/i)).toBeInTheDocument();

    // Click back to category
    const backButton = screen.getByRole('button', { name: /Voltar para a biblioteca/i });
    fireEvent.click(backButton);

    // Verify back in dedicated category view
    expect(screen.getByText(/5 artigos disponíveis/i)).toBeInTheDocument();

    // Click back to all categories
    const backToCategoriesBtn = screen.getByRole('button', { name: /Voltar para categorias/i });
    fireEvent.click(backToCategoriesBtn);

    // Verify back on home
    expect(screen.getByText('Categorias de Aprendizagem')).toBeInTheDocument();
  });

  it('navigates to related article when clicked from inside ArticleView', () => {
    render(<LearningLibraryView initialArticleId="pronomes-pessoais" />);

    // Currently on Pronomes Pessoais
    expect(screen.getByText(/Pronomes Pessoais: Sujeito e Objeto no Inglês/i)).toBeInTheDocument();

    // Click related article
    const relatedCards = screen.getAllByRole('button', { name: /Ler este artigo/i });
    expect(relatedCards.length).toBeGreaterThan(0);
    fireEvent.click(relatedCards[0]);

    // Should remain in ArticleView reading the new article
    expect(screen.getByRole('button', { name: /Voltar para a biblioteca/i })).toBeInTheDocument();
  });

  it('opens the complete library (Todas as Categorias) and supports pagination', () => {
    render(<LearningLibraryView />);

    // Click on "Todas as Categorias" complete library card
    const allBtn = screen.getByRole('button', { name: /Todas as Categorias/i });
    fireEvent.click(allBtn);

    // Verify in complete library view
    expect(screen.getByText(/Todos os Artigos da Biblioteca/i)).toBeInTheDocument();
    expect(screen.getByText(/37 artigos disponíveis/i)).toBeInTheDocument();

    // Check pagination exists with 37 articles (12 per page = 4 pages)
    const nav = screen.getByRole('navigation', { name: /Navegação por páginas dos artigos/i });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveTextContent(/Mostrando 1–12 de 37 artigos/i);

    // Navigate to page 2
    const page2Btn = screen.getByRole('button', { name: /Ir para a página 2/i });
    fireEvent.click(page2Btn);

    expect(nav).toHaveTextContent(/Mostrando 13–24 de 37 artigos/i);
  });

  it('allows navigating directly into a category via initialCategoryId', () => {
    render(<LearningLibraryView initialCategoryId="gramatica" />);

    expect(screen.getByRole('heading', { name: /Gramática/i })).toBeInTheDocument();
    expect(screen.getByText(/10 artigos disponíveis/i)).toBeInTheDocument();
  });
});

