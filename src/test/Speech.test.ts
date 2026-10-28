import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  formatTextForSpeech, 
  speakEnglish, 
  cleanSpokenLine, 
  classifyVoiceGender, 
  inferSpeakerGender, 
  allocateDialogueVoices, 
  playDialogueSequence, 
  speakDialogueLine,
  stopSpeech,
  getDialogueVoicesCapability,
  getEnglishVoice,
  getPortugueseVoice
} from '../utils/speech';

describe('Speech synthesis text normalization and pronunciation tests', () => {
  it('converts alternative verb forms separated by slashes into natural speech with "or"', () => {
    expect(formatTextForSpeech('was / were')).toBe('was or were');
    expect(formatTextForSpeech('abode / abided')).toBe('abode or abided');
    expect(formatTextForSpeech('abode/abided')).toBe('abode or abided');
    expect(formatTextForSpeech('burned / burnt')).toBe('burned or burnt');
    expect(formatTextForSpeech('got / gotten')).toBe('got or gotten');
    expect(formatTextForSpeech('dive / dived / dove')).toBe('dive, dived or dove');
  });

  it('strips parenthetical pronunciation guides and IPA transcriptions', () => {
    expect(formatTextForSpeech('read (/rɛd/)')).toBe('read');
    expect(formatTextForSpeech('read /rɛd/')).toBe('read');
    expect(formatTextForSpeech('sawed (sawn)')).toBe('sawed');
  });

  it('cleans up quotes, bullet points, and special symbols so they are not spoken literally', () => {
    expect(formatTextForSpeech('"She awoke early to finish her study plan."')).toBe(
      'She awoke early to finish her study plan.'
    );
    expect(formatTextForSpeech('went • gone • ir')).toBe('went, gone, ir');
    expect(formatTextForSpeech('first – second')).toBe('first, second');
    expect(formatTextForSpeech('[sample] *word* #tag')).toBe('sample word tag');
  });

  it('handles empty or whitespace-only strings gracefully', () => {
    expect(formatTextForSpeech('')).toBe('');
    expect(formatTextForSpeech('   ')).toBe('');
  });

  it('delegates to window.speechSynthesis with sanitized text containing "or"', () => {
    const speakMock = vi.fn();
    const cancelMock = vi.fn();

    const originalSpeechSynthesis = window.speechSynthesis;
    (window as any).speechSynthesis = {
      cancel: cancelMock,
      speak: speakMock,
      getVoices: () => []
    };
    (window as any).SpeechSynthesisUtterance = function (this: any, text: string) {
      this.text = text;
    };

    const result = speakEnglish('was / were');
    expect(result.success).toBe(true);
    expect(cancelMock).toHaveBeenCalled();
    expect(speakMock).toHaveBeenCalledWith(
      expect.objectContaining({
        text: 'was or were'
      })
    );

    (window as any).speechSynthesis = originalSpeechSynthesis;
  });
});

describe('Multi-voice Dialogue Engine & Natural Speech Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('1. Stripping Character Names & Stage Directions (cleanSpokenLine)', () => {
    it('removes character names and labels from speech so they are never spoken aloud', () => {
      expect(cleanSpokenLine('Sarah: Hey Mark! How was your weekend?', 'Sarah'))
        .toBe('Hey Mark! How was your weekend?');
      expect(cleanSpokenLine('Mark: It was wonderful, Sarah!', 'Mark'))
        .toBe('It was wonderful, Sarah!');
      expect(cleanSpokenLine('Person A: Can I help you?', 'Person A'))
        .toBe('Can I help you?');
      expect(cleanSpokenLine('Pessoa B: Sim, por favor.', 'Pessoa B'))
        .toBe('Sim, por favor.');
      expect(cleanSpokenLine('Speaker 1: Welcome aboard.', 'Speaker 1'))
        .toBe('Welcome aboard.');
    });

    it('strips bracketed and parenthesized stage directions from audio', () => {
      expect(cleanSpokenLine('[laughs] That was hilarious!', 'Rachel'))
        .toBe('That was hilarious!');
      expect(cleanSpokenLine('Sarah: (chuckles) Exactly what I thought.', 'Sarah'))
        .toBe('Exactly what I thought.');
    });

    it('formats slashes and quotes inside dialogue lines naturally', () => {
      expect(cleanSpokenLine('Barista: Small or large / regular?', 'Barista'))
        .toBe('Small or large or regular?');
    });
  });

  describe('2. Voice & Gender Classification', () => {
    it('classifies female voice names accurately across browser voice catalogs', () => {
      expect(classifyVoiceGender({ name: 'Microsoft Zira Desktop - English (United States)', lang: 'en-US' } as any)).toBe('female');
      expect(classifyVoiceGender({ name: 'Google US English Samantha', lang: 'en-US' } as any)).toBe('female');
      expect(classifyVoiceGender({ name: 'Jenny Online (Natural)', lang: 'en-US' } as any)).toBe('female');
      expect(classifyVoiceGender({ name: 'Apple Victoria', lang: 'en-US' } as any)).toBe('female');
    });

    it('classifies male voice names accurately across browser voice catalogs', () => {
      expect(classifyVoiceGender({ name: 'Microsoft David Desktop - English (United States)', lang: 'en-US' } as any)).toBe('male');
      expect(classifyVoiceGender({ name: 'Google UK English Male', lang: 'en-GB' } as any)).toBe('male');
      expect(classifyVoiceGender({ name: 'Alex', lang: 'en-US' } as any)).toBe('male');
      expect(classifyVoiceGender({ name: 'Daniel', lang: 'en-GB' } as any)).toBe('male');
    });

    it('infers character gender from typical names and roles or uses explicit override', () => {
      expect(inferSpeakerGender('Sarah')).toBe('female');
      expect(inferSpeakerGender('Rachel')).toBe('female');
      expect(inferSpeakerGender('Pharmacist')).toBe('female');
      expect(inferSpeakerGender('Mark')).toBe('male');
      expect(inferSpeakerGender('Barista')).toBe('male');
      expect(inferSpeakerGender('Customer')).toBe('male');

      // Explicit override takes precedence
      expect(inferSpeakerGender('Alex', 'female')).toBe('female');
      expect(inferSpeakerGender('Alex', 'male')).toBe('male');
    });
  });

  describe('3. Voice Allocation & Consistency (allocateDialogueVoices)', () => {
    it('allocates distinct native voices when both male and female voices are available in the browser', () => {
      const mockVoices = [
        { name: 'Microsoft Zira', lang: 'en-US' },
        { name: 'Microsoft David', lang: 'en-US' }
      ] as SpeechSynthesisVoice[];

      const originalSpeech = window.speechSynthesis;
      (window as any).speechSynthesis = {
        getVoices: () => mockVoices,
        onvoiceschanged: null
      };

      const dialogue = [
        { speaker: 'Sarah', text: 'Hey Mark!' },
        { speaker: 'Mark', text: 'Hi Sarah!' },
        { speaker: 'Sarah', text: 'How are you?' }
      ];

      const voiceMap = allocateDialogueVoices(dialogue);
      expect(voiceMap.size).toBe(2);

      const sarahProfile = voiceMap.get('Sarah')!;
      const markProfile = voiceMap.get('Mark')!;

      // Distinct native voices assigned
      expect(sarahProfile.voice?.name).toBe('Microsoft Zira');
      expect(markProfile.voice?.name).toBe('Microsoft David');
      expect(sarahProfile.gender).toBe('female');
      expect(markProfile.gender).toBe('male');

      (window as any).speechSynthesis = originalSpeech;
    });

    it('preserves vocal identity: the same character always gets the same voice throughout the conversation', () => {
      const dialogue = [
        { speaker: 'Sarah', text: 'First line.' },
        { speaker: 'Mark', text: 'Second line.' },
        { speaker: 'Sarah', text: 'Third line from Sarah.' },
        { speaker: 'Mark', text: 'Fourth line from Mark.' },
        { speaker: 'Sarah', text: 'Fifth line from Sarah.' }
      ];

      const voiceMap = allocateDialogueVoices(dialogue);
      expect(voiceMap.get('Sarah')).toBe(voiceMap.get('Sarah'));
      expect(voiceMap.get('Mark')).toBe(voiceMap.get('Mark'));
      expect(voiceMap.get('Sarah')?.pitch).not.toBe(voiceMap.get('Mark')?.pitch);
    });

    it('provides acoustic pitch and cadence modulation fallback when only 1 voice exists in the browser', () => {
      const singleVoice = [
        { name: 'Generic English Voice', lang: 'en-US' }
      ] as SpeechSynthesisVoice[];

      const originalSpeech = window.speechSynthesis;
      (window as any).speechSynthesis = {
        getVoices: () => singleVoice,
        onvoiceschanged: null
      };

      const dialogue = [
        { speaker: 'Sarah', text: 'Good morning!' },
        { speaker: 'Mark', text: 'Good morning, how can I help?' }
      ];

      const voiceMap = allocateDialogueVoices(dialogue);
      const sarah = voiceMap.get('Sarah')!;
      const mark = voiceMap.get('Mark')!;

      // Both use available voice, but with clearly distinct pitch and cadence
      expect(sarah.pitch).toBeGreaterThan(1.05); // Higher pitch for female
      expect(mark.pitch).toBeLessThan(0.95);    // Lower pitch for male
      expect(sarah.pitch).not.toEqual(mark.pitch);

      (window as any).speechSynthesis = originalSpeech;
    });
  });

  describe('4. Sequential Dialogue Player & Single Line Execution', () => {
    it('executes dialogue turns sequentially without verbalizing character prefixes', () => {
      const speakMock = vi.fn();
      const cancelMock = vi.fn();

      const originalSpeech = window.speechSynthesis;
      (window as any).speechSynthesis = {
        speak: speakMock,
        cancel: cancelMock,
        getVoices: () => [{ name: 'Test Voice', lang: 'en-US' }],
        pause: vi.fn(),
        resume: vi.fn(),
        speaking: false,
        paused: false
      };

      const dialogue = [
        { speaker: 'Sarah', text: 'Sarah: Hello Mark!' },
        { speaker: 'Mark', text: 'Mark: Hi Sarah, great to see you!' }
      ];

      const onLineStart = vi.fn();
      const controller = playDialogueSequence(dialogue, { onLineStart });

      expect(controller).toBeDefined();
      expect(cancelMock).toHaveBeenCalled();
      expect(speakMock).toHaveBeenCalled();

      // Check utterance passed to speak: must have clean text (WITHOUT "Sarah:")
      const firstUtterance = speakMock.mock.calls[0][0];
      expect(firstUtterance.text).toBe('Hello Mark!');
      expect(firstUtterance.text).not.toContain('Sarah:');

      controller.stop();
      (window as any).speechSynthesis = originalSpeech;
    });

    it('speakDialogueLine speaks single turn with correct voice and cleaned text', () => {
      const speakMock = vi.fn();
      const cancelMock = vi.fn();

      const originalSpeech = window.speechSynthesis;
      (window as any).speechSynthesis = {
        speak: speakMock,
        cancel: cancelMock,
        getVoices: () => [{ name: 'Test Voice', lang: 'en-US' }]
      };

      const line = { speaker: 'Pharmacist', text: 'Pharmacist: Take two pills twice daily.' };
      const res = speakDialogueLine(line);

      expect(res.success).toBe(true);
      expect(speakMock).toHaveBeenCalled();
      const utterance = speakMock.mock.calls[0][0];
      expect(utterance.text).toBe('Take two pills twice daily.');
      expect(utterance.text).not.toContain('Pharmacist:');

      (window as any).speechSynthesis = originalSpeech;
    });

    it('stopSpeech cleanly stops active dialogue player and speech synthesis', () => {
      const cancelMock = vi.fn();
      const originalSpeech = window.speechSynthesis;
      (window as any).speechSynthesis = {
        speak: vi.fn(),
        cancel: cancelMock,
        getVoices: () => [{ name: 'Test Voice', lang: 'en-US' }],
        speaking: true,
        paused: false
      };

      const dialogue = [
        { speaker: 'Sarah', text: 'Line 1' },
        { speaker: 'Mark', text: 'Line 2' }
      ];

      const controller = playDialogueSequence(dialogue);
      expect(controller.isPlaying()).toBe(true);

      stopSpeech();
      expect(cancelMock).toHaveBeenCalled();

      (window as any).speechSynthesis = originalSpeech;
    });

    it('reports dialogue voice capability transparently for UI inspection', () => {
      const cap = getDialogueVoicesCapability();
      expect(cap).toHaveProperty('totalEnglishVoices');
      expect(cap).toHaveProperty('strategyDescription');
    });
  });

  describe('5. Female Voice Preference & Fallback in Speech Synthesis', () => {
    it('prioritizes female voice for English pronunciation when available in the catalog', () => {
      const voices = [
        { name: 'Microsoft David Desktop', lang: 'en-US' },
        { name: 'Microsoft Zira Desktop', lang: 'en-US' }
      ] as SpeechSynthesisVoice[];

      const originalSpeech = window.speechSynthesis;
      (window as any).speechSynthesis = {
        getVoices: () => voices,
        onvoiceschanged: null
      };

      const selected = getEnglishVoice('female');
      expect(selected).not.toBeNull();
      expect(selected?.name).toBe('Microsoft Zira Desktop');

      (window as any).speechSynthesis = originalSpeech;
    });

    it('prioritizes female voice for Portuguese pronunciation when available in the catalog', () => {
      const voices = [
        { name: 'Microsoft Ricardo Desktop', lang: 'pt-BR' },
        { name: 'Microsoft Maria Desktop', lang: 'pt-BR' }
      ] as SpeechSynthesisVoice[];

      const originalSpeech = window.speechSynthesis;
      (window as any).speechSynthesis = {
        getVoices: () => voices,
        onvoiceschanged: null
      };

      const selected = getPortugueseVoice('female');
      expect(selected).not.toBeNull();
      expect(selected?.name).toBe('Microsoft Maria Desktop');

      (window as any).speechSynthesis = originalSpeech;
    });

    it('falls back to the best available voice without interrupting pronunciation if no female voice exists', () => {
      const maleOnlyVoices = [
        { name: 'David Only', lang: 'en-US' }
      ] as SpeechSynthesisVoice[];

      const originalSpeech = window.speechSynthesis;
      const speakMock = vi.fn();
      const cancelMock = vi.fn();

      (window as any).speechSynthesis = {
        getVoices: () => maleOnlyVoices,
        speak: speakMock,
        cancel: cancelMock,
        onvoiceschanged: null
      };

      // Uses fallback voice and applies subtle acoustic pitch modulation
      const result = speakEnglish('achievement', { preferredGender: 'female' });
      expect(result.success).toBe(true);
      expect(speakMock).toHaveBeenCalled();
      const utterance = speakMock.mock.calls[0][0];
      expect(utterance.voice?.name).toBe('David Only');
      expect(utterance.pitch).toBeGreaterThan(1.0);

      (window as any).speechSynthesis = originalSpeech;
    });
  });
});
