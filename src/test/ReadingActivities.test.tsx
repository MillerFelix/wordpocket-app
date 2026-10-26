import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { activityGradingService } from '../services/activityGradingService';
import { readingService } from '../services/readingService';
import { READING_ACTIVITIES } from '../data/readingActivities';
import { ReadingActivitiesHub } from '../components/practice/reading/ReadingActivitiesHub';
import { ReadingActivityRunner } from '../components/practice/reading/ReadingActivityRunner';
import { Activity, ReadingQuestion } from '../types/activity';

describe('Reading Pillar & Extensible Activity Framework Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('1. Activity Content & Structure Validation', () => {
    it('contains 12 high-quality reading activities evenly distributed across A1, A2, and B1', () => {
      const all = readingService.getActivities();
      expect(all.length).toBe(12);

      const a1 = readingService.getActivities('a1');
      const a2 = readingService.getActivities('a2');
      const b1 = readingService.getActivities('b1');

      expect(a1.length).toBe(4);
      expect(a2.length).toBe(4);
      expect(b1.length).toBe(4);
    });

    it('covers all 4 reading formats with passages, glossaries, and multiple-choice questions', () => {
      const types = new Set(READING_ACTIVITIES.map((act) => act.type));
      expect(types.has('read_comprehend')).toBe(true);
      expect(types.has('context_clue')).toBe(true);
      expect(types.has('message_interpret')).toBe(true);
      expect(types.has('main_idea')).toBe(true);

      READING_ACTIVITIES.forEach((act) => {
        expect(act.id).toBeTruthy();
        expect(act.pillar).toBe('reading');
        expect(act.title).toBeTruthy();
        expect(act.description).toBeTruthy();
        expect(act.objective).toBeTruthy();
        expect(act.instructions).toBeTruthy();
        expect(act.readingPassage).toBeDefined();
        expect(act.readingPassage?.content).toBeTruthy();
        expect(act.readingPassage?.glossary?.length).toBeGreaterThanOrEqual(2);
        expect(act.questions.length).toBeGreaterThanOrEqual(2);

        // Every question must have 4 options and valid correctOptionId
        act.questions.forEach((q) => {
          expect(q.type).toBe('multiple_choice');
          expect(q.options.length).toBe(4);
          expect(['A', 'B', 'C', 'D']).toContain(q.correctOptionId);
        });
      });
    });
  });

  describe('2. Deterministic Grading Logic (activityGradingService)', () => {
    it('grades multiple-choice reading questions deterministically and handles case-insensitivity', () => {
      const act = READING_ACTIVITIES.find((a) => a.id === 'reading-a1-read-morning')!;
      
      // Question 1: B (6:30 AM), Question 2: C (walks for 15 minutes), Question 3: A (in front of library)
      const answersPerfect: Record<string, string> = {
        'r-a1-rc-1': 'B',
        'r-a1-rc-2': 'c', // lowercase accepted
        'r-a1-rc-3': 'A'
      };

      const result = activityGradingService.gradeActivity(act, answersPerfect);
      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);
      expect(result.totalQuestions).toBe(3);
      expect(result.questionsGrading[0].isCorrect).toBe(true);
      expect(result.questionsGrading[0].feedback).toContain('Correto');
    });

    it('identifies incorrect choices and provides informative pedagogical explanations', () => {
      const act = READING_ACTIVITIES.find((a) => a.id === 'reading-a1-read-morning')!;
      
      // All wrong answers
      const answersWrong: Record<string, string> = {
        'r-a1-rc-1': 'A',
        'r-a1-rc-2': 'A',
        'r-a1-rc-3': 'D'
      };

      const result = activityGradingService.gradeActivity(act, answersWrong);
      expect(result.score).toBe(0);
      expect(result.correctCount).toBe(0);
      expect(result.questionsGrading[0].isCorrect).toBe(false);
      expect(result.questionsGrading[0].feedback).toContain('Incorreto');
      expect(result.questionsGrading[0].explanation).toBeTruthy();
    });
  });

  describe('3. Persistence & "Latest Attempt" Philosophy (readingService)', () => {
    it('always records the latest completed attempt, even if the score is lower than previous', async () => {
      const act = READING_ACTIVITIES[0];

      // Attempt 1: 100% score (all correct)
      const answersPerfect: Record<string, string> = {};
      act.questions.forEach((q) => {
        answersPerfect[q.id] = q.correctOptionId;
      });

      const { grading: g1, latestResult: r1 } = await readingService.completeActivity(
        act.id,
        answersPerfect,
        50,
        'user_reading_test'
      );
      expect(g1.score).toBe(100);
      expect(r1.score).toBe(100);

      const latest1 = await readingService.getLatestResults('user_reading_test');
      expect(latest1[act.id]?.score).toBe(100);

      // Attempt 2 (Retry): Intentionally score lower (all wrong)
      const answersWrong: Record<string, string> = {};
      act.questions.forEach((q) => {
        answersWrong[q.id] = q.correctOptionId === 'A' ? 'B' : 'A';
      });

      const { grading: g2, latestResult: r2 } = await readingService.completeActivity(
        act.id,
        answersWrong,
        35,
        'user_reading_test'
      );
      expect(g2.score).toBe(0);
      expect(r2.score).toBe(0);

      // The recorded result MUST now be 0 (latest attempt replaces previous)
      const latest2 = await readingService.getLatestResults('user_reading_test');
      expect(latest2[act.id]?.score).toBe(0);
      expect(latest2[act.id]?.durationSeconds).toBe(35);
    });

    it('works seamlessly in visitor mode (localStorage storage)', async () => {
      const act = READING_ACTIVITIES[1];
      const answers: Record<string, string> = {};
      act.questions.forEach((q) => {
        answers[q.id] = q.correctOptionId;
      });

      const { grading } = await readingService.completeActivity(act.id, answers, 45, null);
      expect(grading.score).toBe(100);

      const visitorResults = await readingService.getLatestResults(null);
      expect(visitorResults[act.id]?.score).toBe(100);
    });
  });

  describe('4. UI Components: ReadingActivitiesHub & ReadingActivityRunner', () => {
    it('renders the ReadingActivitiesHub and filters activities by CEFR level and format', () => {
      const onSelect = vi.fn();
      const onLevelChange = vi.fn();

      const { rerender } = render(
        <ReadingActivitiesHub
          selectedLevel="all"
          onLevelChange={onLevelChange}
          onSelectActivity={onSelect}
        />
      );

      // Should show summary and initial activities
      expect(screen.getByText(/12 atividades/i)).toBeInTheDocument();
      expect(screen.getByText('A Rotina Matinal de David')).toBeInTheDocument();

      // Click level B1 filter
      const b1Filter = screen.getByRole('button', { name: /B1 — Intermediário/i });
      fireEvent.click(b1Filter);
      expect(onLevelChange).toHaveBeenCalledWith('b1');

      // Re-render as B1 selected
      rerender(
        <ReadingActivitiesHub
          selectedLevel="b1"
          onLevelChange={onLevelChange}
          onSelectActivity={onSelect}
        />
      );

      // Should show B1 activities
      expect(screen.getByText('A Cultura do Trabalho Remoto na Tecnologia')).toBeInTheDocument();
    });

    it('runs a complete reading activity from passage reading to result screen and allows retry', async () => {
      const act: Activity<ReadingQuestion> = READING_ACTIVITIES[0]; // A1 (3 questions)
      const onExit = vi.fn();

      render(<ReadingActivityRunner activity={act} onExit={onExit} />);

      // Verify runner shows activity title, instructions, and passage
      expect(screen.getByText(act.title)).toBeInTheDocument();
      expect(screen.getByText(/David's Morning Routine/i)).toBeInTheDocument();
      expect(screen.getByText(/Questão 1 de 3/i)).toBeInTheDocument();

      // Test glossary toggle
      const glossaryBtn = screen.getByRole('button', { name: /Glossário & Dicas/i });
      fireEvent.click(glossaryBtn);
      expect(screen.getByText(/dia útil/i)).toBeInTheDocument();
      expect(screen.getByText('weekday')).toBeInTheDocument();
      expect(screen.queryByText(/Toque no termo/i)).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /weekday/i })).not.toBeInTheDocument();

      // Answer question 1: select option B (6:30 AM)
      const optionB = screen.getByRole('radio', { name: /At 6:30 AM/i });
      fireEvent.click(optionB);
      expect(optionB).toHaveAttribute('aria-checked', 'true');

      // Click "Próxima Questão"
      const nextBtn = screen.getByRole('button', { name: /Próxima Questão/i });
      fireEvent.click(nextBtn);

      // Question 2: select option C (He walks for fifteen minutes)
      expect(screen.getByText(/Questão 2 de 3/i)).toBeInTheDocument();
      const optionC = screen.getByRole('radio', { name: /He walks for fifteen minutes/i });
      fireEvent.click(optionC);

      // Click "Próxima Questão" to go to question 3
      fireEvent.click(screen.getByRole('button', { name: /Próxima Questão/i }));

      // Question 3: select option A (In front of the library)
      expect(screen.getByText(/Questão 3 de 3/i)).toBeInTheDocument();
      const optionA = screen.getByRole('radio', { name: /In front of the library/i });
      fireEvent.click(optionA);

      // Click "Concluir e Ver Nota"
      const finishBtn = screen.getByRole('button', { name: /Concluir e Ver Nota/i });
      fireEvent.click(finishBtn);

      // Wait for Result View
      await waitFor(() => {
        expect(screen.getByText(/Resultado da Leitura/i)).toBeInTheDocument();
      });

      // Verify score 100% and latest attempt notice is visible
      expect(screen.getByText(/Pontuação Perfeita/i)).toBeInTheDocument();
      expect(screen.getByText(/100%/i)).toBeInTheDocument();
      expect(screen.getByText(/última tentativa concluída/i)).toBeInTheDocument();

      // "Refazer Atividade" button is available
      const retryBtn = screen.getByRole('button', { name: /Refazer Atividade/i });
      expect(retryBtn).toBeInTheDocument();

      // Click retry
      fireEvent.click(retryBtn);

      // Should be back at question 1
      expect(screen.getByText(/Questão 1 de 3/i)).toBeInTheDocument();
    });

    it('is strictly text-based and contains no audio, speech synthesis, or pronunciation buttons', () => {
      const act: Activity<ReadingQuestion> = READING_ACTIVITIES[0];
      render(<ReadingActivityRunner activity={act} onExit={vi.fn()} />);

      // Verify no pronunciation or audio playback buttons exist in reading
      expect(screen.queryByRole('button', { name: /ouvir/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /pronúncia/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /áudio/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /escutar/i })).not.toBeInTheDocument();
    });
  });
});
