export function speakEnglish(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for better learner clarity
    window.speechSynthesis.speak(utterance);
  } catch {
    // Graceful fallback if audio is not supported in the environment
  }
}
