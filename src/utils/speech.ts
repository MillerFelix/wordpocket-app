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

/**
 * Normalizes text for natural English speech synthesis:
 * - Replaces alternative slashes (e.g. "was / were", "abode/abided") with natural "or"
 * - Strips parenthetical phonetic annotations like (/rɛd/) or (UK)
 * - Removes rogue quotes, IPA symbols, and non-verbal punctuation
 */
export function formatTextForSpeech(text: string): string {
  if (!text) return '';

  let formatted = text;

  // 1. Remove parenthetical notes/phonetic guides like (/rɛd/), (US), (UK), (transitive)
  formatted = formatted.replace(/\s*\([^)]*\)/g, ' ');

  // 2. Remove isolated IPA phonetic guides containing special IPA characters
  formatted = formatted.replace(/\/[^/\s]*[ɛɪʊʌəɒæɔːθðʃʒŋˈˌ][^/\s]*\//g, ' ');

  // 3. Convert alternative word slashes to " or " (e.g. "was / were" -> "was or were", "abode/abided" -> "abode or abided")
  if (formatted.includes('/')) {
    const parts = formatted.split(/\s*\/\s*/).map(p => p.trim()).filter(Boolean);
    if (parts.length > 2) {
      formatted = parts.slice(0, -1).join(', ') + ' or ' + parts[parts.length - 1];
    } else if (parts.length === 2) {
      formatted = `${parts[0]} or ${parts[1]}`;
    } else {
      formatted = formatted.replace(/\s*\/\s*/g, ' or ');
    }
  }

  // 4. Remove quotation marks that might be spoken as "quote" by some engines
  formatted = formatted.replace(/["“”'‘’]/g, '');

  // 5. Replace bullet points, en-dashes or em-dashes used as separators with commas
  formatted = formatted.replace(/\s*[•–—]\s*/g, ', ');

  // 6. Clean up symbols that could be verbalized literally (brackets, asterisks, hashes, backslashes, etc.)
  formatted = formatted.replace(/[*#~_<>^{}[\]|\\]/g, ' ');

  // 7. Remove any trailing or stray slashes
  formatted = formatted.replace(/\//g, ' ');

  // 8. Normalize spaces and multiple commas
  formatted = formatted
    .replace(/\s*,\s*,+/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();

  return formatted;
}

export function speakEnglish(text: string): SpeechResult {
  if (!isSpeechSupported()) {
    return {
      success: false,
      message: 'Síntese de voz não é suportada neste navegador ou dispositivo.'
    };
  }

  const cleanText = formatTextForSpeech(text);
  if (!cleanText) {
    return {
      success: false,
      message: 'Texto vazio para pronúncia.'
    };
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
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
