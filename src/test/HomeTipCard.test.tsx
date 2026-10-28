import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HomeTipCard, HomeNotesShortcut } from '../components/home/HomeMotivationSection';
import { getDailyTip, ENGLISH_TIPS } from '../data/englishTips';

describe('HomeTipCard & English Tips Tests', () => {
  it('contains a reviewed collection of practical English tips with title, explanation and example with translation', () => {
    expect(ENGLISH_TIPS.length).toBeGreaterThanOrEqual(10);

    for (const tip of ENGLISH_TIPS) {
      expect(tip.id).toBeTruthy();
      expect(tip.topic).toBeTruthy();
      expect(tip.title).toBeTruthy();
      expect(tip.explanation).toBeTruthy();
      expect(tip.exampleEn).toBeTruthy();
      expect(tip.examplePt).toBeTruthy();
    }
  });

  it('provides a deterministic and stable daily tip based on the date without changing randomly', () => {
    const fixedDate = new Date(2026, 4, 15); // 15 de maio de 2026
    const tip1 = getDailyTip(fixedDate);
    const tip2 = getDailyTip(fixedDate);

    expect(tip1).toEqual(tip2);
    expect(tip1).toHaveProperty('title');
    expect(tip1).toHaveProperty('exampleEn');
  });

  it('renders HomeTipCard with badge, subject topic, explanation, EN/PT examples and Praticar button', () => {
    const onNavigateMock = vi.fn();
    render(<HomeTipCard onNavigate={onNavigateMock} />);

    // Dica do dia badge
    expect(screen.getByText('Dica do dia')).toBeInTheDocument();

    // Verify presence of EN and PT labels in the example box
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('PT')).toBeInTheDocument();

    // Verify Praticar button navigates to 'practice'
    const practiceBtn = screen.getByRole('button', { name: 'Praticar' });
    expect(practiceBtn).toBeInTheDocument();

    fireEvent.click(practiceBtn);
    expect(onNavigateMock).toHaveBeenCalledWith('practice');
  });

  it('renders HomeNotesShortcut with notebook icon, description and navigates to notes', () => {
    const onNavigateMock = vi.fn();
    render(<HomeNotesShortcut onNavigate={onNavigateMock} />);

    expect(screen.getByText('Anotações')).toBeInTheDocument();
    expect(screen.getByText('Seu caderno pessoal')).toBeInTheDocument();
    expect(screen.getByText('Caderno de Estudos')).toBeInTheDocument();

    const shortcutBtn = screen.getByRole('button', { name: /Anotações/i });
    fireEvent.click(shortcutBtn);
    expect(onNavigateMock).toHaveBeenCalledWith('notes');
  });
});
