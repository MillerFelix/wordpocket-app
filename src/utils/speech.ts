export interface SpeechResult {
  success: boolean;
  message?: string;
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

let cachedVoices: SpeechSynthesisVoice[] = [];
let cachedEnglishVoice: SpeechSynthesisVoice | null = null;
let cachedPortugueseVoice: SpeechSynthesisVoice | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null;

function resolveVoices(): void {
  try {
    cachedVoices = window.speechSynthesis.getVoices() || [];
    if (cachedVoices.length > 0) {
      const enVoices = cachedVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
      cachedEnglishVoice = enVoices.find(v => v.lang === 'en-US') || enVoices.find(v => v.lang === 'en-GB') || enVoices[0] || null;
      cachedPortugueseVoice = cachedVoices.find(v => v.lang === 'pt-BR') || cachedVoices.find(v => v.lang && v.lang.toLowerCase().startsWith('pt')) || null;
    }
  } catch {
    cachedVoices = [];
  }
}

/**
 * Prepara o mecanismo de áudio nativo para resposta imediata ao primeiro toque/clique.
 */
export function warmUpSpeech(): void {
  if (!isSpeechSupported()) return;
  try {
    resolveVoices();
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  } catch {}
}

export function getActiveUtterance(): SpeechSynthesisUtterance | null {
  return currentUtterance;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  resolveVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = resolveVoices;
  }
}

export function getEnglishVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSupported()) return [];
  let voices: SpeechSynthesisVoice[] = [];
  try {
    voices = window.speechSynthesis.getVoices();
  } catch {}
  if (!voices || voices.length === 0) {
    voices = cachedVoices;
  }
  return voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('en'));
}

export function getEnglishVoice(): SpeechSynthesisVoice | null {
  if (cachedEnglishVoice) return cachedEnglishVoice;
  const englishVoices = getEnglishVoices();
  if (englishVoices.length === 0) return null;
  
  const usVoice = englishVoices.find(v => v.lang === 'en-US');
  if (usVoice) {
    cachedEnglishVoice = usVoice;
    return usVoice;
  }

  const gbVoice = englishVoices.find(v => v.lang === 'en-GB');
  if (gbVoice) {
    cachedEnglishVoice = gbVoice;
    return gbVoice;
  }

  cachedEnglishVoice = englishVoices[0];
  return englishVoices[0];
}

export function getPortugueseVoice(): SpeechSynthesisVoice | null {
  if (cachedPortugueseVoice) return cachedPortugueseVoice;
  if (!isSpeechSupported()) return null;
  let voices: SpeechSynthesisVoice[] = [];
  try {
    voices = window.speechSynthesis.getVoices();
  } catch {}
  if (!voices || voices.length === 0) {
    voices = cachedVoices;
  }
  
  const ptBr = voices.find(v => v.lang === 'pt-BR');
  if (ptBr) {
    cachedPortugueseVoice = ptBr;
    return ptBr;
  }

  const anyPt = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('pt'));
  if (anyPt) {
    cachedPortugueseVoice = anyPt;
    return anyPt;
  }

  return null;
}

const FEMALE_VOICE_NAMES = /\b(zira|susan|hazel|samantha|victoria|karen|catherine|linda|heather|jenny|aria|zoe|helena|fiona|moira|veena|tessa|female|woman)\b/i;
const MALE_VOICE_NAMES = /\b(david|mark|george|alex|daniel|fred|guy|christopher|brian|oliver|arthur|male|man)\b/i;

export function classifyVoiceGender(voice: SpeechSynthesisVoice): 'male' | 'female' | 'unknown' {
  const name = voice.name || '';
  if (FEMALE_VOICE_NAMES.test(name)) return 'female';
  if (MALE_VOICE_NAMES.test(name)) return 'male';
  return 'unknown';
}

export interface VoiceProfile {
  speaker: string;
  voice: SpeechSynthesisVoice | null;
  pitch: number;
  rate: number;
  gender: 'male' | 'female';
  isDistinctNativeVoice: boolean;
}

const FEMALE_SPEAKER_NAMES = new Set([
  'sarah', 'rachel', 'laura', 'emma', 'anna', 'linda', 'lucy', 'mary', 'jessica', 
  'woman', 'girl', 'female', 'pharmacist'
]);
const MALE_SPEAKER_NAMES = new Set([
  'mark', 'daniel', 'kevin', 'lucas', 'john', 'david', 'alex', 'peter', 
  'barista', 'customer', 'man', 'boy', 'male'
]);

export function inferSpeakerGender(speakerName: string, explicitGender?: 'male' | 'female'): 'male' | 'female' {
  if (explicitGender) return explicitGender;
  const normalized = speakerName.trim().toLowerCase();
  if (FEMALE_SPEAKER_NAMES.has(normalized)) return 'female';
  if (MALE_SPEAKER_NAMES.has(normalized)) return 'male';
  return 'female';
}

/**
 * Aloca de forma consistente e estável perfis de voz para cada personagem de um diálogo.
 * Se o navegador possuir vozes nativas distintas (masculina e feminina), usa vozes reais diferentes.
 * Se o navegador possuir apenas 1 voz em inglês instalada, aplica modulação acústica precisa de tom (pitch)
 * e ritmo (rate) para garantir que os interlocutores soem claramente como pessoas distintas.
 */
export function allocateDialogueVoices(
  dialogueLines: Array<{ speaker: string; gender?: 'male' | 'female'; speechRate?: number; pitch?: number }>
): Map<string, VoiceProfile> {
  const profiles = new Map<string, VoiceProfile>();
  const englishVoices = getEnglishVoices();

  const femaleVoices = englishVoices.filter(v => classifyVoiceGender(v) === 'female');
  const maleVoices = englishVoices.filter(v => classifyVoiceGender(v) === 'male');
  const otherVoices = englishVoices.filter(v => classifyVoiceGender(v) === 'unknown');

  const usedVoiceNames = new Set<string>();

  // Identifica falantes únicos mantendo a ordem de aparição
  const uniqueSpeakers: string[] = [];
  for (const line of dialogueLines) {
    if (!uniqueSpeakers.includes(line.speaker)) {
      uniqueSpeakers.push(line.speaker);
    }
  }

  uniqueSpeakers.forEach((speakerName, index) => {
    // Acha primeira ocorrência para inspecionar metadados explícitos de gênero
    const sampleLine = dialogueLines.find(l => l.speaker === speakerName);
    const targetGender = inferSpeakerGender(speakerName, sampleLine?.gender);

    let chosenVoice: SpeechSynthesisVoice | null = null;
    let isDistinct = false;

    if (targetGender === 'female') {
      const available = femaleVoices.find(v => !usedVoiceNames.has(v.name));
      if (available) {
        chosenVoice = available;
        usedVoiceNames.add(available.name);
        isDistinct = true;
      }
    } else {
      const available = maleVoices.find(v => !usedVoiceNames.has(v.name));
      if (available) {
        chosenVoice = available;
        usedVoiceNames.add(available.name);
        isDistinct = true;
      }
    }

    // Se não encontrou do gênero específico, busca nas outras vozes inglesas disponíveis
    if (!chosenVoice) {
      const availableOther = otherVoices.find(v => !usedVoiceNames.has(v.name));
      if (availableOther) {
        chosenVoice = availableOther;
        usedVoiceNames.add(availableOther.name);
        isDistinct = true;
      } else if (englishVoices.length > 0) {
        // Reutiliza voz disponível
        chosenVoice = englishVoices[index % englishVoices.length];
      }
    }

    // Modulação de pitch e rate:
    // Mesmo que haja voz nativa, refinamos pitch para expressividade e clareza pedagógica.
    // Se não houver vozes distintas no navegador, a modulação é ainda mais nítida para evitar que pareça a mesma pessoa.
    let basePitch = 1.0;
    let baseRate = sampleLine?.speechRate ?? 0.92;

    if (targetGender === 'female') {
      basePitch = isDistinct ? (sampleLine?.pitch ?? 1.06) : (sampleLine?.pitch ?? 1.15);
      baseRate = sampleLine?.speechRate ?? 0.94;
    } else {
      basePitch = isDistinct ? (sampleLine?.pitch ?? 0.94) : (sampleLine?.pitch ?? 0.86);
      baseRate = sampleLine?.speechRate ?? 0.89;
    }

    // Se houver mais de 2 interlocutores do mesmo gênero, ajusta ligeiramente o tom para que o 3º falante seja distinto
    if (index >= 2) {
      basePitch += ((index - 1) % 2 === 0 ? 0.08 : -0.08);
    }

    profiles.set(speakerName, {
      speaker: speakerName,
      voice: chosenVoice,
      pitch: Math.min(1.4, Math.max(0.7, basePitch)),
      rate: Math.min(1.4, Math.max(0.6, baseRate)),
      gender: targetGender,
      isDistinctNativeVoice: isDistinct
    });
  });

  return profiles;
}

/**
 * Remove prefixos de interlocutor ("Sarah:", "Mark: ", "Person A:") e direções de cena entre colchetes
 * para que o sintetizador nunca narre os nomes dos personagens em voz alta.
 */
export function cleanSpokenLine(text: string, speakerName?: string): string {
  if (!text) return '';
  let cleaned = text.trim();

  // 1. Remove qualquer prefixo no formato "Nome:", "Speaker 1:", "Pessoa A:"
  cleaned = cleaned.replace(/^(?:[A-Za-z0-9_\s]{1,25}):\s*/, '');
  if (speakerName) {
    const escaped = speakerName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    cleaned = cleaned.replace(new RegExp(`^${escaped}\\s*:\\s*`, 'i'), '');
  }

  // 2. Remove notas e direções de cena como [laughs], (chuckles), [clears throat]
  cleaned = cleaned.replace(/\[[^\]]*\]/g, ' ');
  cleaned = cleaned.replace(/\([^)]*\)/g, ' ');

  // 3. Normaliza texto usando formatTextForSpeech
  return formatTextForSpeech(cleaned);
}

export function getDialogueVoicesCapability(): {
  totalEnglishVoices: number;
  hasDistinctNativeVoices: boolean;
  strategyDescription: string;
  summary: string;
} {
  const voices = getEnglishVoices();
  const females = voices.filter(v => classifyVoiceGender(v) === 'female');
  const males = voices.filter(v => classifyVoiceGender(v) === 'male');
  const hasDistinct = (females.length > 0 && males.length > 0) || voices.length >= 2;

  const desc = hasDistinct
    ? `${voices.length} vozes em inglês detectadas (vozes nativas distintas ativas)`
    : voices.length === 1
    ? '1 voz em inglês detectada (modulação acústica ativa por tom e frequência)'
    : 'Síntese de voz padrão ativa';

  return {
    totalEnglishVoices: voices.length,
    hasDistinctNativeVoices: hasDistinct,
    strategyDescription: desc,
    summary: desc
  };
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

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

let globalActiveDialogueController: DialoguePlaybackController | null = null;

export function stopSpeech(): void {
  if (globalActiveDialogueController) {
    try {
      globalActiveDialogueController.stop();
    } catch {}
    globalActiveDialogueController = null;
  }
  currentUtterance = null;
  if (isSpeechSupported()) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

export function pauseSpeech(): void {
  if (globalActiveDialogueController) {
    try {
      globalActiveDialogueController.pause();
    } catch {}
    return;
  }
  if (isSpeechSupported()) {
    try {
      window.speechSynthesis.pause();
    } catch {}
  }
}

export function resumeSpeech(): void {
  if (globalActiveDialogueController) {
    try {
      globalActiveDialogueController.resume();
    } catch {}
    return;
  }
  if (isSpeechSupported()) {
    try {
      window.speechSynthesis.resume();
    } catch {}
  }
}

export function isSpeaking(): boolean {
  return isSpeechSupported() && window.speechSynthesis.speaking;
}

export function isPaused(): boolean {
  return isSpeechSupported() && window.speechSynthesis.paused;
}

export function speakEnglish(text: string, options?: SpeakOptions): SpeechResult {
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
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    currentUtterance = utterance;
    
    const voice = getEnglishVoice();
    if (voice) {
      utterance.voice = voice;
    }
    
    utterance.lang = 'en-US';
    utterance.rate = options?.rate ?? 0.9; // Articulação clara para estudantes
    utterance.pitch = options?.pitch ?? 1.0;

    utterance.onstart = () => {
      options?.onStart?.();
    };
    utterance.onend = () => {
      currentUtterance = null;
      options?.onEnd?.();
    };
    utterance.onerror = (err) => {
      currentUtterance = null;
      options?.onError?.(err);
    };

    window.speechSynthesis.speak(utterance);
    return { success: true };
  } catch {
    currentUtterance = null;
    return {
      success: false,
      message: 'Não foi possível reproduzir a pronúncia no momento.'
    };
  }
}

export function speakPortuguese(text: string, options?: SpeakOptions): SpeechResult {
  if (!isSpeechSupported()) {
    return {
      success: false,
      message: 'Síntese de voz não é suportada neste navegador ou dispositivo.'
    };
  }

  const cleanText = text.trim();
  if (!cleanText) {
    return {
      success: false,
      message: 'Texto vazio para pronúncia.'
    };
  }

  try {
    window.speechSynthesis.cancel();
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    currentUtterance = utterance;

    const voice = getPortugueseVoice();
    if (voice) {
      utterance.voice = voice;
    }
    utterance.lang = 'pt-BR';
    utterance.rate = options?.rate ?? 0.95;
    utterance.pitch = options?.pitch ?? 1.0;

    utterance.onstart = () => {
      options?.onStart?.();
    };
    utterance.onend = () => {
      currentUtterance = null;
      options?.onEnd?.();
    };
    utterance.onerror = (err) => {
      currentUtterance = null;
      options?.onError?.(err);
    };

    window.speechSynthesis.speak(utterance);
    return { success: true };
  } catch {
    currentUtterance = null;
    return {
      success: false,
      message: 'Não foi possível reproduzir a pronúncia no momento.'
    };
  }
}

export function speakText(text: string, lang: 'en' | 'pt' = 'en', options?: SpeakOptions): SpeechResult {
  return lang === 'pt' ? speakPortuguese(text, options) : speakEnglish(text, options);
}

export interface DialoguePlaybackController {
  pause: () => void;
  resume: () => void;
  stop: () => void;
  isPlaying: () => boolean;
  isPaused: () => boolean;
  getCurrentIndex: () => number;
}

export interface PlayDialogueOptions {
  speedMultiplier?: number;
  pauseBetweenLinesMs?: number;
  onLineStart?: (index: number, line: { speaker: string; text: string; gender?: 'male' | 'female' }, profile: VoiceProfile) => void;
  onLineEnd?: (index: number, line: { speaker: string; text: string }) => void;
  onComplete?: () => void;
  onError?: (err: unknown) => void;
}

export function speakDialogueLine(
  line: { speaker: string; text: string; gender?: 'male' | 'female'; speechRate?: number; pitch?: number },
  profile?: VoiceProfile,
  options?: SpeakOptions
): SpeechResult {
  if (!isSpeechSupported()) {
    return {
      success: false,
      message: 'Síntese de voz não é suportada neste navegador ou dispositivo.'
    };
  }

  const cleanText = cleanSpokenLine(line.text, line.speaker);
  if (!cleanText) {
    return { success: false, message: 'Texto vazio para pronúncia.' };
  }

  // Se não foi passado profile pronto, aloca um perfil consistente
  const activeProfile = profile || allocateDialogueVoices([line]).get(line.speaker)!;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);

    if (activeProfile.voice) {
      utterance.voice = activeProfile.voice;
      utterance.lang = activeProfile.voice.lang || 'en-US';
    } else {
      const fallbackVoice = getEnglishVoice();
      if (fallbackVoice) {
        utterance.voice = fallbackVoice;
      }
      utterance.lang = 'en-US';
    }

    const rateMult = options?.rate ?? 1.0;
    utterance.rate = Math.min(1.5, Math.max(0.6, activeProfile.rate * rateMult));
    utterance.pitch = options?.pitch ?? activeProfile.pitch;

    if (options?.onStart) utterance.onstart = options.onStart;
    if (options?.onEnd) utterance.onend = options.onEnd;
    if (options?.onError) utterance.onerror = options.onError;

    window.speechSynthesis.speak(utterance);
    return { success: true };
  } catch {
    return {
      success: false,
      message: 'Não foi possível reproduzir a fala do diálogo.'
    };
  }
}

export function playDialogueSequence(
  dialogueLines: Array<{ speaker: string; text: string; gender?: 'male' | 'female'; speechRate?: number; pitch?: number }>,
  options?: PlayDialogueOptions
): DialoguePlaybackController {
  let isCancelled = false;
  let isPausedState = false;
  let currentIndex = 0;
  let pauseTimer: ReturnType<typeof setTimeout> | null = null;

  const speed = options?.speedMultiplier ?? 1.0;
  const pauseGap = Math.max(250, (options?.pauseBetweenLinesMs ?? 480) / speed);

  const voiceMap = allocateDialogueVoices(dialogueLines);

  const cleanup = () => {
    isCancelled = true;
    if (pauseTimer) {
      clearTimeout(pauseTimer);
      pauseTimer = null;
    }
    try {
      window.speechSynthesis.cancel();
    } catch {}
  };

  const playLine = (index: number) => {
    if (isCancelled) return;
    if (index >= dialogueLines.length) {
      if (globalActiveDialogueController === controller) {
        globalActiveDialogueController = null;
      }
      options?.onComplete?.();
      return;
    }

    currentIndex = index;
    const line = dialogueLines[index];
    const profile = voiceMap.get(line.speaker)!;
    const cleanText = cleanSpokenLine(line.text, line.speaker);

    if (!cleanText) {
      playLine(index + 1);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);

      if (profile.voice) {
        utterance.voice = profile.voice;
        utterance.lang = profile.voice.lang || 'en-US';
      } else {
        const fallbackVoice = getEnglishVoice();
        if (fallbackVoice) utterance.voice = fallbackVoice;
        utterance.lang = 'en-US';
      }

      utterance.pitch = profile.pitch;
      utterance.rate = Math.min(1.5, Math.max(0.6, profile.rate * speed));

      utterance.onstart = () => {
        if (!isCancelled) {
          options?.onLineStart?.(index, line, profile);
        }
      };

      utterance.onend = () => {
        if (isCancelled) return;
        options?.onLineEnd?.(index, line);

        // Intervalo conversacional natural entre interlocutores
        pauseTimer = setTimeout(() => {
          if (!isCancelled) {
            playLine(index + 1);
          }
        }, pauseGap);
      };

      utterance.onerror = (e: any) => {
        if (isCancelled || e?.error === 'interrupted' || e?.error === 'canceled') {
          return;
        }
        options?.onError?.(e);
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      if (!isCancelled) {
        options?.onError?.(err);
      }
    }
  };

  // Inicia cancelando qualquer fala anterior
  try {
    window.speechSynthesis.cancel();
  } catch {}

  const controller: DialoguePlaybackController = {
    pause: () => {
      isPausedState = true;
      if (pauseTimer) {
        clearTimeout(pauseTimer);
        pauseTimer = null;
      }
      try {
        window.speechSynthesis.pause();
      } catch {}
    },
    resume: () => {
      isPausedState = false;
      if (window.speechSynthesis.paused) {
        try {
          window.speechSynthesis.resume();
        } catch {}
      } else if (!window.speechSynthesis.speaking && currentIndex < dialogueLines.length) {
        // Se pausou no meio do gap entre falas
        playLine(currentIndex);
      }
    },
    stop: () => {
      cleanup();
      if (globalActiveDialogueController === controller) {
        globalActiveDialogueController = null;
      }
    },
    isPlaying: () => !isCancelled && !isPausedState && (window.speechSynthesis.speaking || pauseTimer !== null),
    isPaused: () => isPausedState,
    getCurrentIndex: () => currentIndex
  };

  globalActiveDialogueController = controller;

  // Dispara primeira fala
  playLine(0);

  return controller;
}
