import '@testing-library/jest-dom';

// Mock window.speechSynthesis & SpeechSynthesisUtterance
if (typeof window !== 'undefined') {
  window.speechSynthesis = {
    speak: () => {},
    cancel: () => {},
    pause: () => {},
    resume: () => {},
    getVoices: () => [{ lang: 'en-US', name: 'English (US)' }] as unknown as SpeechSynthesisVoice[],
    onvoiceschanged: null,
    pending: false,
    speaking: false,
    paused: false,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true
  } as unknown as SpeechSynthesis;

  window.SpeechSynthesisUtterance = class {
    text: string;
    lang: string = 'en-US';
    pitch: number = 1;
    rate: number = 1;
    voice: SpeechSynthesisVoice | null = null;
    volume: number = 1;
    onstart: (() => void) | null = null;
    onend: (() => void) | null = null;
    onerror: (() => void) | null = null;
    constructor(text?: string) {
      this.text = text || '';
    }
  } as unknown as typeof SpeechSynthesisUtterance;
}
