import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { activityGradingService } from '../services/activityGradingService';
import { listeningService } from '../services/listeningService';
import { LISTENING_ACTIVITIES } from '../data/listeningActivities';
import { ListeningActivitiesHub } from '../components/practice/listening/ListeningActivitiesHub';
import { ListeningActivityRunner } from '../components/practice/listening/ListeningActivityRunner';
import { AudioPlayerCard } from '../components/practice/listening/AudioPlayerCard';
import { Activity, ListeningQuestion } from '../types/activity';

describe('Listening Pillar & Audio Practice Framework Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();

    // Mock window.speechSynthesis
    (window as any).speechSynthesis = {
      cancel: vi.fn(),
      speak: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      speaking: false,
      paused: false,
      getVoices: () => [
        { lang: 'en-US', name: 'English US', default: true }
      ]
    };
    (window as any).SpeechSynthesisUtterance = function (this: any, text: string) {
      this.text = text;
      this.lang = 'en-US';
      this.rate = 1.0;
      this.pitch = 1.0;
    };
  });

  describe('1. Activity Content & Structure Validation', () => {
    it('contains 45 listening activities evenly distributed across A1, A2, and B1', () => {
      const all = listeningService.getActivities();
      expect(all.length).toBe(45);

      const a1 = listeningService.getActivities('a1');
      const a2 = listeningService.getActivities('a2');
      const b1 = listeningService.getActivities('b1');

      expect(a1.length).toBe(15);
      expect(a2.length).toBe(15);
      expect(b1.length).toBe(15);
    });

    it('covers all 4 listening formats with audio tracks, spoken text, and transcripts', () => {
      const types = new Set(LISTENING_ACTIVITIES.map((act) => act.type));
      expect(types.has('listen_identify')).toBe(true);
      expect(types.has('listen_dialogue')).toBe(true);
      expect(types.has('real_life_situation')).toBe(true);
      expect(types.has('natural_speech')).toBe(true);

      LISTENING_ACTIVITIES.forEach((act) => {
        expect(act.id).toBeTruthy();
        expect(act.pillar).toBe('listening');
        expect(act.title).toBeTruthy();
        expect(act.description).toBeTruthy();
        expect(act.objective).toBeTruthy();
        expect(act.instructions).toBeTruthy();

        // Validates audio track
        expect(act.listeningTrack).toBeDefined();
        expect(act.listeningTrack?.spokenText).toBeTruthy();
        expect(act.listeningTrack?.transcript).toBeTruthy();
        expect(act.listeningTrack?.transcriptTranslation).toBeTruthy();
        expect(act.listeningTrack?.speechRate).toBeGreaterThan(0.7);
        expect(act.listeningTrack?.estimatedDurationSeconds).toBeGreaterThan(0);

        // Validates questions
        expect(act.questions.length).toBeGreaterThanOrEqual(3);
        act.questions.forEach((q) => {
          expect(q.type).toBe('multiple_choice');
          expect(q.options.length).toBe(4);
          expect(['A', 'B', 'C', 'D']).toContain(q.correctOptionId);
          expect(q.explanation).toBeTruthy();
        });
      });
    });
  });

  describe('2. Deterministic Grading Logic (activityGradingService)', () => {
    it('grades multiple-choice listening questions deterministically and handles case-insensitivity', () => {
      const act = LISTENING_ACTIVITIES.find((a) => a.id === 'listening-a1-id-minimal-pairs')!;
      
      // Question 1: B (Sit), Question 2: C (Sheep), Question 3: A (blue pen)
      const answersPerfect: Record<string, string> = {
        'l-a1-mp-1': 'B',
        'l-a1-mp-2': 'c', // lowercase accepted
        'l-a1-mp-3': 'A'
      };

      const result = activityGradingService.gradeActivity(act, answersPerfect);
      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);
      expect(result.totalQuestions).toBe(3);
      expect(result.questionsGrading[0].isCorrect).toBe(true);
      expect(result.questionsGrading[0].feedback).toContain('Correto');
    });

    it('identifies incorrect choices and provides informative pedagogical explanations', () => {
      const act = LISTENING_ACTIVITIES.find((a) => a.id === 'listening-a1-id-minimal-pairs')!;
      
      // All wrong answers
      const answersWrong: Record<string, string> = {
        'l-a1-mp-1': 'A',
        'l-a1-mp-2': 'A',
        'l-a1-mp-3': 'D'
      };

      const result = activityGradingService.gradeActivity(act, answersWrong);
      expect(result.score).toBe(0);
      expect(result.correctCount).toBe(0);
      expect(result.questionsGrading[0].isCorrect).toBe(false);
      expect(result.questionsGrading[0].feedback).toContain('Incorreto');
      expect(result.questionsGrading[0].explanation).toBeTruthy();
    });
  });

  describe('3. Persistence & "Latest Attempt" Philosophy (listeningService)', () => {
    it('always records the latest completed attempt, even if the score is lower than previous', async () => {
      const act = LISTENING_ACTIVITIES[0];

      // Attempt 1: 100% score (all correct)
      const answersPerfect: Record<string, string> = {};
      act.questions.forEach((q) => {
        answersPerfect[q.id] = q.correctOptionId;
      });

      const { grading: g1, latestResult: r1 } = await listeningService.completeActivity(
        act.id,
        answersPerfect,
        45,
        'user_listening_test'
      );
      expect(g1.score).toBe(100);
      expect(r1.score).toBe(100);

      const latest1 = await listeningService.getLatestResults('user_listening_test');
      expect(latest1[act.id]?.score).toBe(100);

      // Attempt 2 (Retry): Intentionally score lower (all wrong)
      const answersWrong: Record<string, string> = {};
      act.questions.forEach((q) => {
        answersWrong[q.id] = q.correctOptionId === 'A' ? 'B' : 'A';
      });

      const { grading: g2, latestResult: r2 } = await listeningService.completeActivity(
        act.id,
        answersWrong,
        30,
        'user_listening_test'
      );
      expect(g2.score).toBe(0);
      expect(r2.score).toBe(0);

      // The recorded result MUST now be 0 (latest attempt replaces previous)
      const latest2 = await listeningService.getLatestResults('user_listening_test');
      expect(latest2[act.id]?.score).toBe(0);
      expect(latest2[act.id]?.durationSeconds).toBe(30);
    });

    it('works seamlessly in visitor mode (localStorage storage)', async () => {
      const act = LISTENING_ACTIVITIES[1];
      const answers: Record<string, string> = {};
      act.questions.forEach((q) => {
        answers[q.id] = q.correctOptionId;
      });

      const { grading } = await listeningService.completeActivity(act.id, answers, 50, null);
      expect(grading.score).toBe(100);

      const visitorResults = await listeningService.getLatestResults(null);
      expect(visitorResults[act.id]?.score).toBe(100);
    });
  });

  describe('4. Audio Player & Playback Experience (AudioPlayerCard)', () => {
    it('renders the audio controls, scenario pill, and pedagogical transcript protection notice', () => {
      const act = LISTENING_ACTIVITIES[0];
      render(<AudioPlayerCard track={act.listeningTrack!} activityTitle={act.title} />);

      expect(screen.getByText(act.listeningTrack!.title!)).toBeInTheDocument();
      expect(screen.getByText(act.listeningTrack!.scenario!)).toBeInTheDocument();
      expect(screen.getByText(/Transcrição oculta durante o exercício/i)).toBeInTheDocument();

      // Check speed options
      expect(screen.getByRole('button', { name: '0.8x' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '1.0x' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '1.2x' })).toBeInTheDocument();
    });

    it('triggers speech synthesis when clicking play and tracks play count', () => {
      const act = LISTENING_ACTIVITIES[0];
      render(<AudioPlayerCard track={act.listeningTrack!} activityTitle={act.title} />);

      const playBtn = screen.getByRole('button', { name: /Reproduzir áudio em inglês/i });
      fireEvent.click(playBtn);

      expect(window.speechSynthesis.speak).toHaveBeenCalled();
      expect(screen.getByText(/Áudio escutado/i)).toBeInTheDocument();
    });

    it('identifies interlocutors and renders voice badges for dialogue activities', () => {
      const dialogueAct = LISTENING_ACTIVITIES.find((a) => a.id === 'listening-a1-dial-weekend')!;
      render(<AudioPlayerCard track={dialogueAct.listeningTrack!} activityTitle={dialogueAct.title} />);

      expect(screen.getByText(/Interlocutores do Diálogo/i)).toBeInTheDocument();
      expect(screen.getByText('Sarah')).toBeInTheDocument();
      expect(screen.getByText('Mark')).toBeInTheDocument();
      expect(screen.getByText('Voz Feminina')).toBeInTheDocument();
      expect(screen.getByText('Voz Masculina')).toBeInTheDocument();

      // Starts full dialogue sequence
      const playBtn = screen.getByRole('button', { name: /Reproduzir áudio em inglês/i });
      fireEvent.click(playBtn);

      expect(window.speechSynthesis.speak).toHaveBeenCalled();
    });

    it('allows expanding and practicing individual lines in dialogue without spoiling transcript', () => {
      const dialogueAct = LISTENING_ACTIVITIES.find((a) => a.id === 'listening-a1-dial-weekend')!;
      render(<AudioPlayerCard track={dialogueAct.listeningTrack!} activityTitle={dialogueAct.title} />);

      const toggleDrawer = screen.getByRole('button', { name: /Treinar Falas Individuais/i });
      fireEvent.click(toggleDrawer);

      expect(screen.getByText(/Ouça novamente cada fala de forma isolada/i)).toBeInTheDocument();

      // Click to play line 1 (Sarah)
      const line1Btn = screen.getByRole('button', { name: /Ouvir fala 1: Sarah/i });
      fireEvent.click(line1Btn);

      expect(window.speechSynthesis.speak).toHaveBeenCalled();
    });
  });

  describe('5. UI Integration: ListeningActivitiesHub & ListeningActivityRunner', () => {
    it('renders the ListeningActivitiesHub and filters activities by CEFR level', () => {
      const onSelect = vi.fn();
      const onLevelChange = vi.fn();

      const { rerender } = render(
        <ListeningActivitiesHub
          selectedLevel="all"
          onLevelChange={onLevelChange}
          onSelectActivity={onSelect}
        />
      );

      // Should show summary and initial activities
      expect(screen.getByText(/45 atividades/i)).toBeInTheDocument();
      expect(screen.getByText('Distinção de Sons: Vogais Curtas e Longas')).toBeInTheDocument();

      // Click level B1 filter
      const b1Filter = screen.getByRole('button', { name: /B1 — Intermediário/i });
      fireEvent.click(b1Filter);
      expect(onLevelChange).toHaveBeenCalledWith('b1');

      // Re-render as B1 selected: page 1 shows first 8 activities
      rerender(
        <ListeningActivitiesHub
          selectedLevel="b1"
          onLevelChange={onLevelChange}
          onSelectActivity={onSelect}
        />
      );

      // Should show B1 activities on page 1
      expect(screen.getByText('Reduções Modais: Would have, Could have, Should have')).toBeInTheDocument();
      expect(screen.getByText(/1–8/)).toBeInTheDocument();

      // Navigate to page 2 via pagination control: shows Anúncio de Aeroporto Internacional
      const nextBtn = screen.getByRole('button', { name: /Próxima página/i });
      fireEvent.click(nextBtn);
      expect(screen.getByText('Anúncio de Aeroporto Internacional')).toBeInTheDocument();
      expect(screen.getByText(/9–15/)).toBeInTheDocument();
    });


    it('runs a complete listening activity from audio listening to result screen with revealed transcript and allows retry', async () => {
      const act: Activity<ListeningQuestion> = LISTENING_ACTIVITIES[0]; // A1 (3 questions)
      const onExit = vi.fn();

      render(<ListeningActivityRunner activity={act} onExit={onExit} />);

      // Verify runner shows activity title, instructions, and audio player
      expect(screen.getAllByText(act.title).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText(/Short and Long Vowel Contrasts/i)).toBeInTheDocument();
      expect(screen.getByText(/Questão 1 de 3/i)).toBeInTheDocument();

      // Play audio
      const playBtn = screen.getByRole('button', { name: /Reproduzir áudio em inglês/i });
      fireEvent.click(playBtn);
      expect(window.speechSynthesis.speak).toHaveBeenCalled();

      // Answer question 1: select option B (Sit)
      const optionB = screen.getByRole('radio', { name: /Sit \(sentar/i });
      fireEvent.click(optionB);
      expect(optionB).toHaveAttribute('aria-checked', 'true');

      // Click "Próxima Questão"
      const nextBtn = screen.getByRole('button', { name: /Próxima Questão/i });
      fireEvent.click(nextBtn);

      // Question 2: select option C (Sheep)
      expect(screen.getByText(/Questão 2 de 3/i)).toBeInTheDocument();
      const optionC = screen.getByRole('radio', { name: /Sheep \(ovelha/i });
      fireEvent.click(optionC);

      // Click "Próxima Questão" to go to question 3
      fireEvent.click(screen.getByRole('button', { name: /Próxima Questão/i }));

      // Question 3: select option A (A blue pen)
      expect(screen.getByText(/Questão 3 de 3/i)).toBeInTheDocument();
      const optionA = screen.getByRole('radio', { name: /A blue pen/i });
      fireEvent.click(optionA);

      // Click "Concluir e Ver Nota"
      const finishBtn = screen.getByRole('button', { name: /Concluir e Ver Nota/i });
      fireEvent.click(finishBtn);

      // Wait for Result View
      await waitFor(() => {
        expect(screen.getByText(/Resultado do Listening/i)).toBeInTheDocument();
      });

      // Verify score 100% and latest attempt notice is visible
      expect(screen.getByText(/Pontuação Perfeita/i)).toBeInTheDocument();
      expect(screen.getByText(/100%/i)).toBeInTheDocument();
      expect(screen.getByText(/última tentativa concluída/i)).toBeInTheDocument();

      // Verify that transcript is now REVEALED
      expect(screen.getByText(/Transcrição Completa Revelada/i)).toBeInTheDocument();
      expect(screen.getByText(/Tradução de Apoio/i)).toBeInTheDocument();

      // "Refazer Atividade" button is available
      const retryBtn = screen.getByRole('button', { name: /Refazer Atividade/i });
      expect(retryBtn).toBeInTheDocument();

      // Click retry
      fireEvent.click(retryBtn);

      // Should be back at question 1
      expect(screen.getByText(/Questão 1 de 3/i)).toBeInTheDocument();
    });
  });
});
