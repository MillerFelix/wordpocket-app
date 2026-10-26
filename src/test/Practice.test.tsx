import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PracticeView } from '../components/practice/PracticeView';

describe('PracticeView & 4 English Skills Hub', () => {
  it('renders the Praticar Inglês hub with 4 distinct skill cards and discrete progress', () => {
    render(<PracticeView />);

    // Hub Header
    expect(screen.getByRole('heading', { level: 1, name: 'Praticar Inglês' })).toBeInTheDocument();
    expect(
      screen.getByText(/Desenvolva as quatro habilidades essenciais do idioma no seu próprio ritmo/i)
    ).toBeInTheDocument();

    // 4 Skill cards present
    expect(screen.getByRole('heading', { level: 3, name: /Listening/i })).toBeInTheDocument();
    expect(screen.getByText('• Escuta')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: /Speaking/i })).toBeInTheDocument();
    expect(screen.getByText('• Fala')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: /Reading/i })).toBeInTheDocument();
    expect(screen.getByText('• Leitura')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 3, name: /Writing/i })).toBeInTheDocument();
    expect(screen.getByText('• Escrita')).toBeInTheDocument();

    // Discrete Progress Section
    expect(screen.getByText(/Progresso Geral das Habilidades/i)).toBeInTheDocument();
    expect(screen.getByText(/Seu histórico e evolução serão computados/i)).toBeInTheDocument();
  });

  it('navigates to the Listening skill area and presents the Listening activities hub', () => {
    render(<PracticeView />);

    const listeningCard = screen.getByRole('button', { name: /Acessar área de prática de Listening/i });
    fireEvent.click(listeningCard);

    // Breadcrumb and Title
    expect(screen.getByRole('button', { name: /Voltar para Praticar Inglês/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: /Listening/i })).toBeInTheDocument();
    expect(screen.getByText(/Desenvolver a compreensão do inglês falado/i)).toBeInTheDocument();

    // Listening Activities Hub controls
    expect(screen.getByText('Atividades de Escuta (Listening)')).toBeInTheDocument();
    expect(screen.getByText(/45 atividades disponíveis/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /A1 — Iniciante/i })).toBeInTheDocument();

    // Return back to hub
    const backBtn = screen.getByRole('button', { name: /Voltar para Praticar Inglês/i });
    fireEvent.click(backBtn);

    // Hub is visible again
    expect(screen.getByRole('heading', { level: 1, name: 'Praticar Inglês' })).toBeInTheDocument();
  });

  it('navigates to Speaking, Reading, and Writing areas correctly and verifies Speaking activities hub', () => {
    render(<PracticeView />);

    // Test Speaking hub
    const speakingCard = screen.getByRole('button', { name: /Acessar área de prática de Speaking/i });
    fireEvent.click(speakingCard);
    expect(screen.getByRole('heading', { level: 1, name: /Speaking/i })).toBeInTheDocument();
    expect(screen.getByText(/Praticar a pronúncia, ritmo vocal e a produção oral/i)).toBeInTheDocument();

    // Speaking Activities Hub controls
    expect(screen.getByText('Atividades de Fala (Speaking)')).toBeInTheDocument();
    expect(screen.getByText(/45 atividades disponíveis/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /A1 — Iniciante/i })).toBeInTheDocument();

    const a2Btn = screen.getByRole('button', { name: /A2 — Básico/i });
    expect(a2Btn).toBeInTheDocument();
    fireEvent.click(a2Btn);

    // Return to hub
    fireEvent.click(screen.getByRole('button', { name: /Voltar para Praticar Inglês/i }));

    // Test Reading
    const readingCard = screen.getByRole('button', { name: /Acessar área de prática de Reading/i });
    fireEvent.click(readingCard);
    expect(screen.getByRole('heading', { level: 1, name: /Reading/i })).toBeInTheDocument();
    expect(screen.getByText(/Desenvolver a compreensão rápida e fluida de textos/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Voltar para Praticar Inglês/i }));

    // Test Writing
    const writingCard = screen.getByRole('button', { name: /Acessar área de prática de Writing/i });
    fireEvent.click(writingCard);
    expect(screen.getByRole('heading', { level: 1, name: /Writing/i })).toBeInTheDocument();
    expect(screen.getByText(/Praticar a ortografia, ordenação sintática e a elaboração/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Voltar para Praticar Inglês/i }));

    // Back to hub
    expect(screen.getByRole('heading', { level: 1, name: 'Praticar Inglês' })).toBeInTheDocument();
  });
});
