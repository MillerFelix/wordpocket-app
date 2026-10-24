export interface SpeechResult {
  success: boolean;
  message?: string;
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => {
    try {
      cachedVoices = window.speechSynthesis.getVoices();
    } catch {
      cachedVoices = [];
    }
  };
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

export function getEnglishVoice(): SpeechSynthesisVoice | null {
  if (!isSpeechSupported()) return null;
  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  
  // Prefer US English, then GB English, then any English
  const usVoice = voices.find(v => v.lang === 'en-US');
  if (usVoice) return usVoice;

  const gbVoice = voices.find(v => v.lang === 'en-GB');
  if (gbVoice) return gbVoice;

  const anyEnglish = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'));
  if (anyEnglish) return anyEnglish;

  return null;
}

export function speakEnglish(text: string): SpeechResult {
  if (!isSpeechSupported()) {
    return {
      success: false,
      message: 'Síntese de voz não é suportada neste navegador ou dispositivo.'
    };
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    const voice = getEnglishVoice();
    if (voice) {
      utterance.voice = voice;
    }
    
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Clear articulation for language learners
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
    return { success: true };
  } catch {
    return {
      success: false,
      message: 'Não foi possível reproduzir a pronúncia no momento.'
    };
  }
}
