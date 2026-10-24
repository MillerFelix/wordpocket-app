import '@testing-library/jest-dom';

// Mock window.speechSynthesis
if (typeof window !== 'undefined') {
  window.speechSynthesis = {
    speak: () => {},
    cancel: () => {},
    pause: () => {},
    resume: () => {},
    getVoices: () => [],
    onvoiceschanged: null,
    pending: false,
    speaking: false,
    paused: false,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true
  } as unknown as SpeechSynthesis;
}
