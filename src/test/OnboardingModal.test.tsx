import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OnboardingModal } from '../components/onboarding/OnboardingModal';
import * as AuthContextModule from '../contexts/AuthContext';
import * as PwaHookModule from '../hooks/usePwaInstall';
import { hasCompletedOnboarding, setLocalOnboardingCompleted } from '../services/userService';

const mockCompleteOnboarding = vi.fn();
const mockCloseOnboarding = vi.fn();
const mockPromptInstall = vi.fn().mockResolvedValue(true);

let mockAuthState = {
  isOnboardingOpen: true,
  closeOnboarding: mockCloseOnboarding,
  completeOnboarding: mockCompleteOnboarding
};

let mockPwaState: PwaHookModule.UsePwaInstallResult = {
  canInstall: false,
  isInstalled: false,
  isIOS: false,
  isAndroid: false,
  isDesktop: true,
  promptInstall: mockPromptInstall
};

vi.spyOn(AuthContextModule, 'useAuth').mockImplementation(() => mockAuthState as any);
vi.spyOn(PwaHookModule, 'usePwaInstall').mockImplementation(() => mockPwaState);

describe('OnboardingModal ("Como usar") Tests - 3 Tabs Layout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    mockAuthState = {
      isOnboardingOpen: true,
      closeOnboarding: mockCloseOnboarding,
      completeOnboarding: mockCompleteOnboarding
    };
    mockPwaState = {
      canInstall: false,
      isInstalled: false,
      isIOS: false,
      isAndroid: false,
      isDesktop: true,
      promptInstall: mockPromptInstall
    };
  });

  it('renders Aba 1 (Conheça o app) with progress indicator "Etapa 1 de 3" and all 5 implemented features', () => {
    render(<OnboardingModal />);

    expect(screen.getByRole('heading', { level: 2, name: /Bem-vindo ao Word Pocket!/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Etapa 1 de 3/i).length).toBeGreaterThanOrEqual(1);

    // Verify all 5 core application features appear together on this single tab
    expect(screen.getByText('Aprender')).toBeInTheDocument();
    expect(screen.getByText(/Artigos práticos com vocabulário contextualizado/i)).toBeInTheDocument();

    expect(screen.getByText('Praticar')).toBeInTheDocument();
    expect(screen.getByText(/Atividades de leitura, escuta, escrita e desafios de fixação/i)).toBeInTheDocument();

    expect(screen.getByText('Traduzir')).toBeInTheDocument();
    expect(screen.getByText(/Tradução rápida e bidirecional entre inglês e português/i)).toBeInTheDocument();

    expect(screen.getByText('Verbos Irregulares')).toBeInTheDocument();
    expect(screen.getByText(/Consulta rápida de mais de 200 verbos/i)).toBeInTheDocument();

    expect(screen.getByText('Anotações')).toBeInTheDocument();
    expect(screen.getByText(/Seu caderno pessoal para registrar observações/i)).toBeInTheDocument();

    // Verify sequential navigation buttons on Step 1
    expect(screen.getByRole('button', { name: /^Fechar$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Próxima/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Voltar/i })).not.toBeInTheDocument();
  });

  it('navigates sequentially through the 3 tabs with Próxima and Concluir', () => {
    render(<OnboardingModal />);

    // Step 1 -> Step 2: Instalação
    fireEvent.click(screen.getByRole('button', { name: /Próxima/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Instale o Word Pocket/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Etapa 2 de 3/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('button', { name: /Voltar/i })).toBeInTheDocument();

    // Step 2 -> Step 3: Desenvolvedor
    fireEvent.click(screen.getByRole('button', { name: /Próxima/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Apresentação do Desenvolvedor/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Etapa 3 de 3/i).length).toBeGreaterThanOrEqual(1);

    // Developer section checks: first name only Miller & text
    expect(screen.getByText('Miller')).toBeInTheDocument();
    expect(screen.getByText(/Sou o Miller, desenvolvedor de software e criador do Word Pocket/i)).toBeInTheDocument();

    // Verify Developer LinkedIn button text and attributes
    const linkedInBtn = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInBtn).toBeInTheDocument();
    expect(linkedInBtn).toHaveTextContent('LinkedIn');
    expect(linkedInBtn).toHaveAttribute('href', 'https://www.linkedin.com/in/miller-redigolo-felix-6a7a53253/');
    expect(linkedInBtn).toHaveAttribute('target', '_blank');
    expect(linkedInBtn).toHaveAttribute('rel', 'noopener noreferrer');

    // On last step, button is "Concluir"
    const finishBtn = screen.getByRole('button', { name: /Concluir/i });
    expect(finishBtn).toBeInTheDocument();
    fireEvent.click(finishBtn);
    expect(mockCompleteOnboarding).toHaveBeenCalled();
  });

  it('allows jumping directly between any of the 3 tabs via tablist pills', () => {
    render(<OnboardingModal />);

    // Click "Instalação" tab pill directly
    fireEvent.click(screen.getByRole('tab', { name: /Instalação/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Instale o Word Pocket/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Etapa 2 de 3/i).length).toBeGreaterThanOrEqual(1);

    // Click "Desenvolvedor" tab pill directly
    fireEvent.click(screen.getByRole('tab', { name: /Desenvolvedor/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Apresentação do Desenvolvedor/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Etapa 3 de 3/i).length).toBeGreaterThanOrEqual(1);

    // Click "Conheça o app" tab pill directly
    fireEvent.click(screen.getByRole('tab', { name: /Conheça o app/i }));
    expect(screen.getByRole('heading', { level: 2, name: /Bem-vindo ao Word Pocket!/i })).toBeInTheDocument();
  });

  it('renders direct install button on Aba 2 when canInstall is true and handles install click', () => {
    mockPwaState = {
      ...mockPwaState,
      canInstall: true
    };

    render(<OnboardingModal />);

    // Jump to Instalação
    fireEvent.click(screen.getByRole('tab', { name: /Instalação/i }));

    expect(screen.getByRole('heading', { level: 2, name: /Instale o Word Pocket/i })).toBeInTheDocument();
    const installBtn = screen.getByRole('button', { name: /Instalar aplicativo/i });
    expect(installBtn).toBeInTheDocument();

    fireEvent.click(installBtn);
    expect(mockPromptInstall).toHaveBeenCalled();
  });

  it('allows switching device instructions in Instalação tab (Android, iPhone/iPad, Computador)', () => {
    render(<OnboardingModal />);

    fireEvent.click(screen.getByRole('tab', { name: /Instalação/i }));

    // Switch to iPhone / iPad
    fireEvent.click(screen.getByRole('button', { name: /iPhone \/ iPad/i }));
    expect(screen.getByText(/Instalação no iPhone e iPad \(Safari\):/i)).toBeInTheDocument();
    expect(screen.getByText(/Adicionar à Tela de Início/i)).toBeInTheDocument();

    // Switch to Android
    fireEvent.click(screen.getByRole('button', { name: /Android/i }));
    expect(screen.getByText(/Instalação no Android \(Chrome ou Edge\):/i)).toBeInTheDocument();

    // Switch to Computador
    fireEvent.click(screen.getByRole('button', { name: /Computador/i }));
    expect(screen.getByText(/Instalação no Computador \(Windows, macOS ou Linux\):/i)).toBeInTheDocument();
  });

  it('renders confirmation when app is already installed', () => {
    mockPwaState = {
      ...mockPwaState,
      isInstalled: true
    };

    render(<OnboardingModal />);

    fireEvent.click(screen.getByRole('tab', { name: /Instalação/i }));
    expect(screen.getByText(/Aplicativo já instalado no dispositivo/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Instalar aplicativo/i })).not.toBeInTheDocument();
  });

  it('closes tutorial when clicking the top close button without marking as completed', () => {
    render(<OnboardingModal />);

    const closeBtn = screen.getByLabelText(/Fechar tutorial/i);
    fireEvent.click(closeBtn);

    expect(mockCloseOnboarding).toHaveBeenCalled();
    expect(mockCompleteOnboarding).not.toHaveBeenCalled();
  });

  it('falls back to monogram avatar "M" if developer photo fails to load', () => {
    render(<OnboardingModal />);

    // Go to Developer tab
    fireEvent.click(screen.getByRole('tab', { name: /Desenvolvedor/i }));

    const img = screen.getByAltText(/Miller - Desenvolvedor de Software/i);
    expect(img).toBeInTheDocument();

    // Trigger onError
    fireEvent.error(img);

    // Monogram fallback displayed
    expect(screen.getByText('M')).toBeInTheDocument();
  });

  it('persists completion state in localStorage only when completed', () => {
    expect(hasCompletedOnboarding()).toBe(false);

    setLocalOnboardingCompleted(true);
    expect(hasCompletedOnboarding()).toBe(true);

    setLocalOnboardingCompleted(false);
    expect(hasCompletedOnboarding()).toBe(false);
  });
});
