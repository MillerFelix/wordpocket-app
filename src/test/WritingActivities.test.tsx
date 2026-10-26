import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { activityGradingService } from '../services/activityGradingService';
import { writingService } from '../services/writingService';
import { WRITING_ACTIVITIES } from '../data/writingActivities';
import { WritingActivitiesHub } from '../components/practice/writing/WritingActivitiesHub';
import { WritingActivityRunner } from '../components/practice/writing/WritingActivityRunner';
import { Activity } from '../types/activity';

describe('Writing Pillar & Extensible Activity Framework Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('1. Activity Content & Structure Validation', () => {
    it('contains 45 high-quality activities evenly distributed across A1, A2, and B1', () => {
      const all = writingService.getActivities();
      expect(all.length).toBe(45);

      const a1 = writingService.getActivities('a1');
      const a2 = writingService.getActivities('a2');
      const b1 = writingService.getActivities('b1');

      expect(a1.length).toBe(15);
      expect(a2.length).toBe(15);
      expect(b1.length).toBe(15);
    });

    it('covers all 4 writing activity mechanics with structured data and learning objectives', () => {
      const types = new Set(WRITING_ACTIVITIES.map((act) => act.type));
      expect(types.has('fill_blank')).toBe(true);
      expect(types.has('sentence_order')).toBe(true);
      expect(types.has('find_fix_error')).toBe(true);
      expect(types.has('open_prompt')).toBe(true);

      WRITING_ACTIVITIES.forEach((act) => {
        expect(act.id).toBeTruthy();
        expect(act.pillar).toBe('writing');
        expect(act.title).toBeTruthy();
        expect(act.description).toBeTruthy();
        expect(act.objective).toBeTruthy();
        expect(act.instructions).toBeTruthy();
        expect(act.maxScore).toBe(100);
        expect(act.questions.length).toBeGreaterThanOrEqual(2);
      });
    });
  });

  describe('2. Deterministic & Flexible Grading Logic (activityGradingService)', () => {
    it('grades "fill_blank" questions deterministically, accepting alternatives and contractions', () => {
      const act = WRITING_ACTIVITIES.find((a) => a.id === 'writing-a1-fill-intro')!;
      
      const answersCorrect: Record<string, string> = {
        'w-a1-fb-1': 'am',
        'w-a1-fb-2': 'is',
        'w-a1-fb-3': 'are'
      };

      const resultCorrect = activityGradingService.gradeActivity(act, answersCorrect);
      expect(resultCorrect.score).toBe(100);
      expect(resultCorrect.correctCount).toBe(3);
      expect(resultCorrect.questionsGrading[0].isCorrect).toBe(true);

      // Question 1 with contraction "'m"
      const answersContraction: Record<string, string> = {
        'w-a1-fb-1': "'m",
        'w-a1-fb-2': 'is',
        'w-a1-fb-3': 'are'
      };
      const resultContraction = activityGradingService.gradeActivity(act, answersContraction);
      expect(resultContraction.questionsGrading[0].isCorrect).toBe(true);

      // Wrong answer
      const answersWrong: Record<string, string> = {
        'w-a1-fb-1': 'are',
        'w-a1-fb-2': 'are',
        'w-a1-fb-3': 'is'
      };
      const resultWrong = activityGradingService.gradeActivity(act, answersWrong);
      expect(resultWrong.score).toBe(0);
      expect(resultWrong.correctCount).toBe(0);
    });

    it('correctly handles case insensitivity and extra spaces in fill_blank answers', () => {
      const act = WRITING_ACTIVITIES.find((a) => a.id === 'writing-a1-fill-intro')!;
      
      const answersMixedCaseAndSpaces: Record<string, string> = {
        'w-a1-fb-1': '   AM   ',
        'w-a1-fb-2': 'Is  ',
        'w-a1-fb-3': '  aRe '
      };

      const result = activityGradingService.gradeActivity(act, answersMixedCaseAndSpaces);
      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);
      expect(result.questionsGrading[0].isCorrect).toBe(true);
      expect(result.questionsGrading[1].isCorrect).toBe(true);
      expect(result.questionsGrading[2].isCorrect).toBe(true);
    });

    it('handles trailing punctuation and space-before-punctuation in fill_blank', () => {
      const act = WRITING_ACTIVITIES.find((a) => a.id === 'writing-a2-fill-past')!;
      
      const answersWithPunctuation: Record<string, string> = {
        'w-a2-fb-1': 'bought .',  // Trailing period with space before
        'w-a2-fb-2': 'went!',      // Trailing exclamation
        'w-a2-fb-3': '"wrote"'     // In quotes
      };

      const result = activityGradingService.gradeActivity(act, answersWithPunctuation);
      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);
    });

    it('handles curly apostrophe variations and expanded/contracted forms in fill_blank', () => {
      const act = WRITING_ACTIVITIES.find((a) => a.id === 'writing-a1-fill-intro')!;
      
      // Curly apostrophe ’m (iOS/Mac keyboard default)
      const answersCurly: Record<string, string> = {
        'w-a1-fb-1': '’m',
        'w-a1-fb-2': '’s',
        'w-a1-fb-3': 'are'
      };
      const resultCurly = activityGradingService.gradeActivity(act, answersCurly);
      expect(resultCurly.questionsGrading[0].isCorrect).toBe(true);
      expect(resultCurly.questionsGrading[1].isCorrect).toBe(true);

      // Pronoun repetition (e.g. typing "I am" or "I'm" into "Hello! I ___ a software student")
      const answersWithSubject: Record<string, string> = {
        'w-a1-fb-1': 'I am',
        'w-a1-fb-2': 'She is',
        'w-a1-fb-3': 'are'
      };
      const resultWithSubject = activityGradingService.gradeActivity(act, answersWithSubject);
      expect(resultWithSubject.questionsGrading[0].isCorrect).toBe(true);
      expect(resultWithSubject.questionsGrading[1].isCorrect).toBe(true);

      // Typing the complete sentence in the blank field
      const answersFullSentence: Record<string, string> = {
        'w-a1-fb-1': 'Hello! I am a software student from Brazil.',
        'w-a1-fb-2': 'This is Sarah. She is from Canada.',
        'w-a1-fb-3': 'Where are you from?'
      };
      const resultFullSentence = activityGradingService.gradeActivity(act, answersFullSentence);
      expect(resultFullSentence.score).toBe(100);
      expect(resultFullSentence.correctCount).toBe(3);
    });

    it('grades "sentence_order" questions deterministically with punctuation tolerance and whitespace normalization', () => {
      const act = WRITING_ACTIVITIES.find((a) => a.id === 'writing-a1-order-routine')!;
      
      const answers: Record<string, string> = {
        'w-a1-so-1': '  I   have   breakfast   every   morning  ',
        'w-a1-so-2': 'He works in an office.',
        'w-a1-so-3': 'We study English together at night'
      };

      const result = activityGradingService.gradeActivity(act, answers);
      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);

      // Inverted order (wrong) - word order MUST NOT be compromised
      const wrongAnswers: Record<string, string> = {
        'w-a1-so-1': 'breakfast every morning I have',
        'w-a1-so-2': 'office an in works He',
        'w-a1-so-3': 'together English at study We night'
      };
      const resultWrong = activityGradingService.gradeActivity(act, wrongAnswers);
      expect(resultWrong.score).toBe(0);
      expect(resultWrong.correctCount).toBe(0);
    });

    it('grades "sentence_order" accepting valid alternatives with or without internal commas', () => {
      const act = WRITING_ACTIVITIES.find((a) => a.id === 'writing-b1-order-cond')!;
      
      // w-b1-so-1: "If I had more free time I would travel more often" with comma
      const answersWithComma: Record<string, string> = {
        'w-b1-so-1': 'If I had more free time, I would travel more often',
        'w-b1-so-2': 'If I were you, I would accept the opportunity'
      };

      const resultWithComma = activityGradingService.gradeActivity(act, answersWithComma);
      expect(resultWithComma.score).toBe(100);
      expect(resultWithComma.correctCount).toBe(2);

      // Inverted conditional clause order (accepted alternative)
      const answersInvertedClause: Record<string, string> = {
        'w-b1-so-1': 'I would travel more often if I had more free time',
        'w-b1-so-2': 'If I were you I would accept the opportunity'
      };

      const resultInverted = activityGradingService.gradeActivity(act, answersInvertedClause);
      expect(resultInverted.score).toBe(100);
      expect(resultInverted.correctCount).toBe(2);

      // Wrong syntax: incomplete or random order must be rejected
      const answersWrongOrder: Record<string, string> = {
        'w-b1-so-1': 'time more free had I if travel often more would I',
        'w-b1-so-2': 'accept opportunity the would I you were I if'
      };
      const resultWrong = activityGradingService.gradeActivity(act, answersWrongOrder);
      expect(resultWrong.score).toBe(0);
      expect(resultWrong.correctCount).toBe(0);
    });

    it('grades "find_fix_error" accepting isolated word, accepted alternatives, and full corrected sentence', () => {
      const actA1 = WRITING_ACTIVITIES.find((a) => a.id === 'writing-a1-error-plural')!;
      
      // 1. Direct word correction with case and whitespace tolerance
      const answersWord: Record<string, string> = {
        'w-a1-fe-1': '  Children  ',
        'w-a1-fe-2': 'an.',
        'w-a1-fe-3': 'lives'
      };

      const resultWord = activityGradingService.gradeActivity(actA1, answersWord);
      expect(resultWord.score).toBe(100);
      expect(resultWord.correctCount).toBe(3);

      // 2. Typing the entire corrected sentence
      const answersFullSentence: Record<string, string> = {
        'w-a1-fe-1': 'They have two children playing in the garden.',
        'w-a1-fe-2': 'I would like an apple for dessert.',
        'w-a1-fe-3': 'My sister lives in Rio de Janeiro.'
      };

      const resultFull = activityGradingService.gradeActivity(actA1, answersFullSentence);
      expect(resultFull.score).toBe(100);
      expect(resultFull.correctCount).toBe(3);

      // 3. Registered alternatives in B1 activity (intend vs plan, did vs performed/conducted)
      const actB1 = WRITING_ACTIVITIES.find((a) => a.id === 'writing-b1-error-work')!;
      const answersAlternatives: Record<string, string> = {
        'w-b1-fe-1': 'plan',        // Alternative for "intend"
        'w-b1-fe-2': 'conducted'   // Alternative for "did"
      };

      const resultAlt = activityGradingService.gradeActivity(actB1, answersAlternatives);
      expect(resultAlt.score).toBe(100);
      expect(resultAlt.correctCount).toBe(2);

      // 4. Incorrect responses: the error itself ("childs") or unrelated words must be rejected
      const answersErrors: Record<string, string> = {
        'w-a1-fe-1': 'childs',   // The error word itself!
        'w-a1-fe-2': 'a',        // The error word itself!
        'w-a1-fe-3': 'living'    // Wrong form
      };
      const resultErrors = activityGradingService.gradeActivity(actA1, answersErrors);
      expect(resultErrors.score).toBe(0);
      expect(resultErrors.correctCount).toBe(0);
    });

    it('grades "open_prompt" questions non-literally with contextual feedback and rejects empty inputs', () => {
      const act = WRITING_ACTIVITIES.find((a) => a.id === 'writing-a1-open-intro')!;
      
      const answersGood: Record<string, string> = {
        'w-a1-op-1': 'Hello! My name is Lucas and I am from Brazil.',
        'w-a1-op-2': 'I like to read books and watch movies on weekends.'
      };

      const resultGood = activityGradingService.gradeActivity(act, answersGood);
      expect(resultGood.score).toBeGreaterThanOrEqual(75);
      expect(resultGood.questionsGrading[0].isCorrect).toBe(true);

      // Empty input
      const answersEmpty: Record<string, string> = {
        'w-a1-op-1': '   ',
        'w-a1-op-2': ''
      };
      const resultEmpty = activityGradingService.gradeActivity(act, answersEmpty);
      expect(resultEmpty.score).toBe(0);
      expect(resultEmpty.questionsGrading[0].isCorrect).toBe(false);
      expect(resultEmpty.questionsGrading[0].feedback).toContain('Nenhuma resposta');

      // Too short
      const answersShort: Record<string, string> = {
        'w-a1-op-1': 'Hi Lucas',
        'w-a1-op-2': 'Read'
      };

      const resultShort = activityGradingService.gradeActivity(act, answersShort);
      expect(resultShort.questionsGrading[0].isCorrect).toBe(false);
      expect(resultShort.questionsGrading[0].feedback).toContain('muito curta');
    });
  });

  describe('3. Persistence & "Latest Attempt" Philosophy (writingService)', () => {
    it('always records the latest completed attempt, even if the score is lower than previous', async () => {
      const act = WRITING_ACTIVITIES[0];

      // Attempt 1: 100% score (all correct)
      const answersPerfect: Record<string, string> = {
        'w-a1-fb-1': 'am',
        'w-a1-fb-2': 'is',
        'w-a1-fb-3': 'are'
      };

      const { grading: g1, latestResult: r1 } = await writingService.completeActivity(
        act.id,
        answersPerfect,
        45,
        'test_user_abc'
      );
      expect(g1.score).toBe(100);
      expect(r1.score).toBe(100);

      const latest1 = await writingService.getLatestResults('test_user_abc');
      expect(latest1[act.id]?.score).toBe(100);

      // Attempt 2 (Retry): Intentionally score lower (all wrong)
      const answersWrong: Record<string, string> = {
        'w-a1-fb-1': 'wrong1',
        'w-a1-fb-2': 'wrong2',
        'w-a1-fb-3': 'wrong3'
      };

      const { grading: g2, latestResult: r2 } = await writingService.completeActivity(
        act.id,
        answersWrong,
        30,
        'test_user_abc'
      );
      expect(g2.score).toBe(0);
      expect(r2.score).toBe(0);

      // The recorded result MUST now be 0 (latest attempt replaces previous)
      const latest2 = await writingService.getLatestResults('test_user_abc');
      expect(latest2[act.id]?.score).toBe(0);
      expect(latest2[act.id]?.durationSeconds).toBe(30);
    });

    it('works seamlessly in visitor mode (localStorage storage)', async () => {
      const act = WRITING_ACTIVITIES[1];
      const answers: Record<string, string> = {
        'w-a1-so-1': 'I have breakfast every morning',
        'w-a1-so-2': 'He works in an office',
        'w-a1-so-3': 'We study English together at night'
      };

      const { grading } = await writingService.completeActivity(act.id, answers, 40, null);
      expect(grading.score).toBe(100);

      const visitorResults = await writingService.getLatestResults(null);
      expect(visitorResults[act.id]?.score).toBe(100);
    });
  });

  describe('4. UI Components: WritingActivitiesHub & WritingActivityRunner', () => {
    it('renders the WritingActivitiesHub and filters activities by CEFR level', () => {
      const onSelect = vi.fn();
      const onLevelChange = vi.fn();

      const { rerender } = render(
        <WritingActivitiesHub
          selectedLevel="all"
          onLevelChange={onLevelChange}
          onSelectActivity={onSelect}
        />
      );

      // Should show summary badge and activities
      expect(screen.getByText(/45 atividades/i)).toBeInTheDocument();
      expect(screen.getByText('Construindo Frases de Rotina')).toBeInTheDocument();

      // Click level A2 filter
      const a2Filter = screen.getByRole('button', { name: /A2 — Básico/i });
      fireEvent.click(a2Filter);
      expect(onLevelChange).toHaveBeenCalledWith('a2');

      // Re-render as A2 selected
      rerender(
        <WritingActivitiesHub
          selectedLevel="a2"
          onLevelChange={onLevelChange}
          onSelectActivity={onSelect}
        />
      );

      // Should show A2 activities
      expect(screen.getByText('Relatando o Dia de Ontem')).toBeInTheDocument();
    });

    it('runs a complete writing activity from start to result screen and allows retry', async () => {
      const act: Activity = WRITING_ACTIVITIES[0]; // A1 Complete a frase (3 questions)
      const onExit = vi.fn();

      render(<WritingActivityRunner activity={act} onExit={onExit} />);

      // Verify runner shows activity title and instructions
      expect(screen.getByText(act.title)).toBeInTheDocument();
      expect(screen.getByText(`Questão 1 de ${act.questions.length}`)).toBeInTheDocument();

      // Answer question 1: am
      const input1 = screen.getByPlaceholderText(/digite aqui.../i);
      fireEvent.change(input1, { target: { value: 'am' } });

      // Click "Próxima Questão"
      const nextBtn = screen.getByRole('button', { name: /Próxima Questão/i });
      fireEvent.click(nextBtn);

      // Now at question 2: is
      expect(screen.getByText(`Questão 2 de ${act.questions.length}`)).toBeInTheDocument();
      const input2 = screen.getByPlaceholderText(/digite aqui.../i);
      fireEvent.change(input2, { target: { value: 'is' } });

      // Click "Próxima Questão" to go to question 3
      fireEvent.click(screen.getByRole('button', { name: /Próxima Questão/i }));

      // Now at question 3 (final question): are
      expect(screen.getByText(`Questão 3 de ${act.questions.length}`)).toBeInTheDocument();
      const input3 = screen.getByPlaceholderText(/digite aqui.../i);
      fireEvent.change(input3, { target: { value: 'are' } });

      // Final step: Click "Concluir e Ver Nota"
      const finishBtn = screen.getByRole('button', { name: /Concluir/i });
      fireEvent.click(finishBtn);

      // Wait for Result View
      await waitFor(() => {
        expect(screen.getByText(/Resultado da Atividade/i)).toBeInTheDocument();
      });

      // Verify score 100% and latest attempt notice is visible
      expect(screen.getByText(/Pontuação Perfeita/i)).toBeInTheDocument();
      expect(screen.getByText(/última tentativa concluída/i)).toBeInTheDocument();

      // "Refazer Atividade" button is available
      const retryBtn = screen.getByRole('button', { name: /Refazer Atividade/i });
      expect(retryBtn).toBeInTheDocument();

      // Click retry
      fireEvent.click(retryBtn);

      // Should be back at question 1
      expect(screen.getByText(`Questão 1 de ${act.questions.length}`)).toBeInTheDocument();
    });
  });
});
