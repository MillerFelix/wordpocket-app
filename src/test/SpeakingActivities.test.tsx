import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { activityGradingService } from '../services/activityGradingService';
import { speakingService } from '../services/speakingService';
import { SPEAKING_ACTIVITIES } from '../data/speakingActivities';
import { SpeakingActivitiesHub } from '../components/practice/speaking/SpeakingActivitiesHub';
import { SpeakingActivityRunner } from '../components/practice/speaking/SpeakingActivityRunner';
import { VoiceRecorderCard } from '../components/practice/speaking/VoiceRecorderCard';

describe('Speaking Pillar & Oral Production Framework Tests', () => {
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
      getVoices: () => [{ lang: 'en-US', name: 'English US', default: true }]
    };
    (window as any).SpeechSynthesisUtterance = function (this: any, text: string) {
      this.text = text;
      this.lang = 'en-US';
      this.rate = 1.0;
      this.pitch = 1.0;
    };

    // Mock navigator.mediaDevices
    Object.defineProperty(navigator, 'mediaDevices', {
      value: {
        getUserMedia: vi.fn().mockResolvedValue({
          getTracks: () => [{ stop: vi.fn() }]
        })
      },
      writable: true,
      configurable: true
    });

    // Mock MediaRecorder
    (window as any).MediaRecorder = vi.fn().mockImplementation(() => {
      const recorderInstance: any = {
        state: 'inactive',
        ondataavailable: null,
        onstop: null,
        start: vi.fn(function () {
          recorderInstance.state = 'recording';
        }),
        stop: vi.fn(function () {
          recorderInstance.state = 'inactive';
          if (recorderInstance.ondataavailable) {
            recorderInstance.ondataavailable({ data: new Blob(['fake-audio'], { type: 'audio/webm' }) });
          }
          if (recorderInstance.onstop) {
            recorderInstance.onstop();
          }
        }),
        addEventListener: vi.fn((event: string, handler: any) => {
          if (event === 'dataavailable') recorderInstance.ondataavailable = handler;
          if (event === 'stop') recorderInstance.onstop = handler;
        }),
        removeEventListener: vi.fn()
      };
      return recorderInstance;
    });
    (window.MediaRecorder as any).isTypeSupported = vi.fn().mockReturnValue(true);

    // Mock URL create/revoke
    window.URL.createObjectURL = vi.fn().mockReturnValue('blob:http://localhost/test-recording-123');
    window.URL.revokeObjectURL = vi.fn();
  });

  describe('1. Activity Content & Structure Validation', () => {
    it('contains 45 speaking activities evenly distributed across A1, A2, and B1', () => {
      const all = speakingService.getActivities();
      expect(all.length).toBe(45);

      const a1 = speakingService.getActivities('a1');
      const a2 = speakingService.getActivities('a2');
      const b1 = speakingService.getActivities('b1');

      expect(a1.length).toBe(15);
      expect(a2.length).toBe(15);
      expect(b1.length).toBe(15);
    });

    it('covers all 4 speaking formats with complete instructional and pedagogical metadata', () => {
      const types = new Set(SPEAKING_ACTIVITIES.map((act) => act.type));
      expect(types.has('listen_repeat')).toBe(true);
      expect(types.has('sound_training')).toBe(true);
      expect(types.has('rapid_response')).toBe(true);
      expect(types.has('roleplay_situation')).toBe(true);

      SPEAKING_ACTIVITIES.forEach((act) => {
        expect(act.id).toBeTruthy();
        expect(act.pillar).toBe('speaking');
        expect(act.title).toBeTruthy();
        expect(act.description).toBeTruthy();
        expect(act.objective).toBeTruthy();
        expect(act.instructions).toBeTruthy();
        expect(act.questions.length).toBeGreaterThanOrEqual(3);

        act.questions.forEach((q) => {
          expect(q.id).toBeTruthy();
          expect(q.type).toBe('speaking_item');
          expect(q.targetPhrase).toBeTruthy();
          expect(q.modelAudioText).toBeTruthy();
          expect(q.pronunciationTip).toBeTruthy();
        });
      });
    });

    it('validates sound_training activities have deterministic perception questions with minimal pairs', () => {
      const soundActs = SPEAKING_ACTIVITIES.filter((act) => act.type === 'sound_training');
      expect(soundActs.length).toBe(12);

      soundActs.forEach((act) => {
        act.questions.forEach((q) => {
          expect(q.phoneticFocus).toBeTruthy();
          expect(q.perceptionQuestion).toBeDefined();
          expect(q.perceptionQuestion?.options.length).toBeGreaterThanOrEqual(2);
          expect(q.perceptionQuestion?.correctOptionId).toBeTruthy();
        });
      });
    });

    it('validates roleplay_situation and rapid_response activities provide authentic sample responses', () => {
      const conversationalActs = SPEAKING_ACTIVITIES.filter(
        (act) => act.type === 'rapid_response' || act.type === 'roleplay_situation'
      );
      expect(conversationalActs.length).toBe(21);

      conversationalActs.forEach((act) => {
        act.questions.forEach((q) => {
          expect(q.sampleResponses && q.sampleResponses.length).toBeGreaterThan(0);
          expect(q.sampleResponses?.[0]).toBeTruthy();
        });
      });
    });
  });

  describe('2. Deterministic Grading Logic (activityGradingService)', () => {
    it('grades perception questions deterministically in sound_training activities', () => {
      const act = SPEAKING_ACTIVITIES.find((a) => a.id === 'speaking-a1-sound-vowels')!;
      
      // All correct perception choices
      const answersPerfect: Record<string, string> = {
        's-a1-v-1': act.questions[0].perceptionQuestion!.correctOptionId,
        's-a1-v-2': act.questions[1].perceptionQuestion!.correctOptionId,
        's-a1-v-3': act.questions[2].perceptionQuestion!.correctOptionId
      };

      const result = activityGradingService.gradeActivity(act, answersPerfect);
      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);
      expect(result.totalQuestions).toBe(3);
      expect(result.questionsGrading[0].isCorrect).toBe(true);

      // One incorrect perception choice
      const answersPartial: Record<string, string> = {
        's-a1-v-1': act.questions[0].perceptionQuestion!.correctOptionId,
        's-a1-v-2': 'WRONG_CHOICE',
        's-a1-v-3': act.questions[2].perceptionQuestion!.correctOptionId
      };

      const partialResult = activityGradingService.gradeActivity(act, answersPartial);
      expect(partialResult.score).toBe(67);
      expect(partialResult.correctCount).toBe(2);
      expect(partialResult.questionsGrading[1].isCorrect).toBe(false);
    });

    it('evaluates oral production completion without inventing artificial accent/phoneme scores', () => {
      const act = SPEAKING_ACTIVITIES.find((a) => a.id === 'speaking-a1-shadow-greetings')!;

      // User recorded and confirmed speech for all 3 turns
      const answersDone: Record<string, string> = {
        's-a1-g-1': 'spoken_confirmed',
        's-a1-g-2': 'spoken_confirmed',
        's-a1-g-3': 'spoken_confirmed'
      };

      const result = activityGradingService.gradeActivity(act, answersDone);
      expect(result.score).toBe(100);
      expect(result.correctCount).toBe(3);
      expect(result.totalQuestions).toBe(3);
    });
  });

  describe('3. Persistence & "Latest Attempt" Philosophy (speakingService)', () => {
    it('works seamlessly in visitor mode using localStorage and keeps latest attempt', async () => {
      const act = SPEAKING_ACTIVITIES[0];
      const answers: Record<string, string> = {
        [act.questions[0].id]: 'spoken_confirmed',
        [act.questions[1].id]: 'spoken_confirmed',
        [act.questions[2].id]: 'spoken_confirmed'
      };

      const { latestResult } = await speakingService.completeActivity(
        act.id,
        answers,
        45,
        null, // Visitor
        { clarity: true, stress: true, rhythm: false }
      );

      expect(latestResult.activityId).toBe(act.id);
      expect(latestResult.score).toBe(100);
      expect(latestResult.durationSeconds).toBe(45);
      expect(latestResult.selfEvaluation?.clarity).toBe(true);

      // Verify stored in visitor localStorage
      const visitorResults = await speakingService.getLatestResults(null);
      expect(visitorResults[act.id]?.score).toBe(100);
      expect(visitorResults[act.id]?.selfEvaluation?.clarity).toBe(true);
    });

    it('always overwrites with the latest completed attempt, even if lower score', async () => {
      const act = SPEAKING_ACTIVITIES.find((a) => a.id === 'speaking-a1-sound-vowels')!;

      // First attempt: 100%
      const firstAnswers: Record<string, string> = {
        's-a1-v-1': act.questions[0].perceptionQuestion!.correctOptionId,
        's-a1-v-2': act.questions[1].perceptionQuestion!.correctOptionId,
        's-a1-v-3': act.questions[2].perceptionQuestion!.correctOptionId
      };
      await speakingService.completeActivity(act.id, firstAnswers, 30, null);

      let results = await speakingService.getLatestResults(null);
      expect(results[act.id]?.score).toBe(100);

      // Second attempt: 67% (simulating retrying and missing one)
      const secondAnswers: Record<string, string> = {
        's-a1-v-1': act.questions[0].perceptionQuestion!.correctOptionId,
        's-a1-v-2': 'WRONG_ID',
        's-a1-v-3': act.questions[2].perceptionQuestion!.correctOptionId
      };
      await speakingService.completeActivity(act.id, secondAnswers, 25, null);

      // Philosophy rule: Latest attempt MUST overwrite, not highest score
      results = await speakingService.getLatestResults(null);
      expect(results[act.id]?.score).toBe(67);
    });
  });

  describe('4. Audio & Voice Recording (VoiceRecorderCard & audioRecorder)', () => {
    it('renders model audio controls with speed toggle and pronunciation tips', () => {
      const q = SPEAKING_ACTIVITIES[0].questions[0];

      render(
        <VoiceRecorderCard
          question={q}
          recordedAudioUrl={null}
          onRecordingComplete={vi.fn()}
        />
      );

      // Model audio button
      expect(screen.getByRole('button', { name: /Ouvir Áudio Modelo/i })).toBeInTheDocument();

      // Speed toggles
      expect(screen.getByRole('button', { name: '0.8x' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '1.0x' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '1.2x' })).toBeInTheDocument();

      // Initial record button
      expect(screen.getByRole('button', { name: /Gravar Minha Voz/i })).toBeInTheDocument();
    });

    it('handles microphone permission denied gracefully with clear instructions and continuation button', async () => {
      const q = SPEAKING_ACTIVITIES[0].questions[0];

      // Simulate mic permission denied
      const notAllowedErr = new Error('Permission denied');
      notAllowedErr.name = 'NotAllowedError';
      const onCompleteMock = vi.fn();

      Object.defineProperty(navigator, 'mediaDevices', {
        value: {
          getUserMedia: vi.fn().mockRejectedValue(notAllowedErr)
        },
        writable: true,
        configurable: true
      });

      render(
        <VoiceRecorderCard
          question={q}
          recordedAudioUrl={null}
          onRecordingComplete={onCompleteMock}
        />
      );

      const recordBtn = screen.getByRole('button', { name: /Gravar Minha Voz/i });
      fireEvent.click(recordBtn);

      await waitFor(() => {
        expect(screen.getByText(/Permissão do microfone negada/i)).toBeInTheDocument();
      });

      // Clear non-blocking fallback action
      const fallbackBtn = screen.getByRole('button', { name: /Praticar em voz alta sem gravação/i });
      expect(fallbackBtn).toBeInTheDocument();
      fireEvent.click(fallbackBtn);

      // Verify it notified the runner that unrecorded oral practice was accepted
      expect(onCompleteMock).toHaveBeenCalledWith('unrecorded:fallback');
    });

    it('starts and stops recording, providing local blob URL for instant playback', async () => {
      const q = SPEAKING_ACTIVITIES[0].questions[0];
      const onCompleteMock = vi.fn();

      render(
        <VoiceRecorderCard
          question={q}
          recordedAudioUrl={null}
          onRecordingComplete={onCompleteMock}
        />
      );

      const recordBtn = screen.getByRole('button', { name: /Gravar Minha Voz/i });
      fireEvent.click(recordBtn);

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /Parar Gravação/i })).toBeInTheDocument();
      });

      // Stop recording
      const stopBtn = screen.getByRole('button', { name: /Parar Gravação/i });
      fireEvent.click(stopBtn);

      await waitFor(() => {
        expect(onCompleteMock).toHaveBeenCalledWith('blob:http://localhost/test-recording-123', undefined);
      });
    });
  });

  describe('5. UI Hub, Activity Execution & Result View', () => {
    it('allows filtering activities by level in SpeakingActivitiesHub', () => {
      render(<SpeakingActivitiesHub onSelectActivity={vi.fn()} />);

      expect(screen.getByText('Atividades de Fala (Speaking)')).toBeInTheDocument();
      expect(screen.getByText(/45 atividades disponíveis/i)).toBeInTheDocument();

      // Click A1 filter
      const a1Tab = screen.getByRole('button', { name: /A1 — Iniciante/i });
      fireEvent.click(a1Tab);

      // Should show 15 cards
      const startButtons = screen.getAllByRole('button', { name: /Iniciar/i });
      expect(startButtons.length).toBe(15);

      // Click B1 filter
      const b1Tab = screen.getByRole('button', { name: /B1 — Intermediário/i });
      fireEvent.click(b1Tab);

      const b1StartButtons = screen.getAllByRole('button', { name: /Iniciar/i });
      expect(b1StartButtons.length).toBe(15);
    });

    it('navigates turns and completes an activity showing result summary and self-evaluation checklist', async () => {
      const act = SPEAKING_ACTIVITIES[0]; // listen_repeat
      const onExitMock = vi.fn();

      render(
        <SpeakingActivityRunner
          activity={act}
          onExit={onExitMock}
        />
      );

      // Turn 1
      expect(screen.getByText(/Turno 1 de 3/i)).toBeInTheDocument();
      expect(screen.getByText(act.title)).toBeInTheDocument();

      // Click "Próximo Turno"
      const nextBtn = screen.getByRole('button', { name: /Próximo Turno/i });
      fireEvent.click(nextBtn);

      // Turn 2
      expect(screen.getByText(/Turno 2 de 3/i)).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: /Próximo Turno/i }));

      // Turn 3 (Last)
      expect(screen.getByText(/Turno 3 de 3/i)).toBeInTheDocument();
      const finishBtn = screen.getByRole('button', { name: /Concluir e Ver Resumo/i });
      expect(finishBtn).toBeInTheDocument();
      fireEvent.click(finishBtn);

      // Result View appears
      await waitFor(() => {
        expect(screen.getByText(/Resultado do Speaking • Nível A1/i)).toBeInTheDocument();
      });

      // Self-evaluation checklist present
      expect(screen.getByText(/Lista de Autoavaliação da Produção Oral/i)).toBeInTheDocument();
      expect(screen.getByText(/Clareza e articulação/i)).toBeInTheDocument();
      expect(screen.getByText(/Sílaba tônica/i)).toBeInTheDocument();
      expect(screen.getByText(/Ritmo, entonação/i)).toBeInTheDocument();

      // Detailed turns review present
      expect(screen.getByText(/Gabarito e Orientações de Pronúncia/i)).toBeInTheDocument();

      // Options to retry or return
      expect(screen.getByRole('button', { name: /Refazer Atividade/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Voltar para Atividades de Fala/i })).toBeInTheDocument();
    });
  });
});
