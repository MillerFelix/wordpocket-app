import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { formatAuthError } from '../services/authService';
import { syncLocalFavoritesToRemote } from '../services/favoritesSyncService';
import { createDefaultProgress } from '../services/progressService';

describe('Word Pocket Authentication, Visitor Mode & Persistence Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('formats Firebase Auth error codes into friendly Portuguese messages', () => {
    expect(formatAuthError({ code: 'auth/invalid-credential' })).toContain('E-mail ou senha incorretos');
    expect(formatAuthError({ code: 'auth/email-already-in-use' })).toContain('já está cadastrado');
    expect(formatAuthError({ code: 'auth/weak-password' })).toContain('mínimo 6 caracteres');
    expect(formatAuthError({ code: 'auth/network-request-failed' })).toContain('Falha de conexão');
    expect(formatAuthError({ code: 'auth/popup-closed-by-user' })).toContain('fechada antes da conclusão');
  });

  it('generates a clean default progress model for all 4 skills', () => {
    const progress = createDefaultProgress();
    expect(progress.listening).toBeDefined();
    expect(progress.speaking).toBeDefined();
    expect(progress.reading).toBeDefined();
    expect(progress.writing).toBeDefined();

    expect(progress.listening.completedActivitiesCount).toBe(0);
    expect(progress.listening.currentLevel).toBe('easy');
  });

  it('merges local visitor favorites into remote set without duplicating', async () => {
    localStorage.setItem('wordpocket_fav_verbs', JSON.stringify(['go', 'come', 'take']));
    localStorage.setItem('wordpocket_fav_vocab', JSON.stringify(['resilient', 'insightful']));

    const result = await syncLocalFavoritesToRemote('test_user_123');
    expect(result.verbsCount).toBeGreaterThanOrEqual(3);
    expect(result.vocabCount).toBeGreaterThanOrEqual(2);

    const updatedVerbs = JSON.parse(localStorage.getItem('wordpocket_fav_verbs') || '[]');
    expect(updatedVerbs).toContain('go');
    expect(updatedVerbs).toContain('come');
    expect(updatedVerbs).toContain('take');
  });

  it('renders visitor mode by default, showing Entrar button and no fake user name', () => {
    render(<App />);

    // TopHeader should show "Entrar" button for visitor
    const loginBtns = screen.getAllByRole('button', { name: /Entrar/i });
    expect(loginBtns.length).toBeGreaterThan(0);

    // No hardcoded "Lucas Silva" in header
    expect(screen.queryByText('Lucas Silva')).not.toBeInTheDocument();
  });

  it('opens and closes the AuthModal when clicking the Entrar button', () => {
    render(<App />);

    const loginBtns = screen.getAllByRole('button', { name: /Entrar/i });
    fireEvent.click(loginBtns[0]);

    // Modal opens
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Entrar no Word Pocket/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar com Google/i })).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Fechar janela de autenticação/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('heading', { level: 2, name: /Entrar no Word Pocket/i })).not.toBeInTheDocument();
  });

  it('navigates to Profile view and presents visitor status with option to login', () => {
    render(<App initialTab="profile" />);

    expect(screen.getByRole('heading', { level: 1, name: /Modo Visitante Ativo/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Criar Conta ou Fazer Login/i })).toBeInTheDocument();
  });

  it('walks through the 5 steps of the Guided Onboarding tutorial from settings', async () => {
    render(<App initialTab="settings" />);

    // Click Tutorial button in settings
    const tutorialBtn = screen.getByRole('button', { name: /Tutorial de Boas-Vindas/i });
    fireEvent.click(tutorialBtn);

    // Step 1: Boas-vindas
    expect(screen.getByRole('heading', { level: 2, name: /Bem-vindo ao Word Pocket!/i })).toBeInTheDocument();

    // Advance to Step 2
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Verbos Irregulares Completos/i })).toBeInTheDocument();

    // Advance to Step 3
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Praticar Inglês/i })).toBeInTheDocument();

    // Advance to Step 4
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Tradutor Rápido/i })).toBeInTheDocument();

    // Advance to Step 5: Apresentação do Desenvolvedor
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Apresentação do Desenvolvedor/i })).toBeInTheDocument();
    expect(screen.getByText(/Eu sou o desenvolvedor do Word Pocket/i)).toBeInTheDocument();

    // Complete Onboarding
    const finishBtn = screen.getByRole('button', { name: /Concluir e Começar/i });
    fireEvent.click(finishBtn);

    await waitFor(() => {
      expect(screen.queryByRole('heading', { level: 2, name: /Apresentação do Desenvolvedor/i })).not.toBeInTheDocument();
    });
  });

  it('prompts visitor when launching interactive practice exercise and lets visitor continue without saving', () => {
    render(<App initialTab="practice" />);

    // Access Listening
    const listeningCard = screen.getByRole('button', { name: /Acessar área de prática de Listening/i });
    fireEvent.click(listeningCard);

    // Start practice exercise
    const startPracticeBtn = screen.getByRole('button', { name: /Iniciar Prática/i });
    fireEvent.click(startPracticeBtn);

    // Visitor Prompt Modal should appear
    expect(screen.getByRole('heading', { level: 2, name: /Pratique e salve sua evolução!/i })).toBeInTheDocument();

    // Click "Continuar praticando sem salvar"
    const continueBtn = screen.getByRole('button', { name: /Continuar praticando sem salvar/i });
    fireEvent.click(continueBtn);

    // Exercise question runner is shown
    expect(screen.getByText(/Questão 1 de/i)).toBeInTheDocument();
  });
});
