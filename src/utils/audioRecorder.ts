/**
 * Utilitário nativo de gravação de áudio e reconhecimento de voz (100% gratuito e local)
 * Utiliza MediaRecorder e Web Speech API sem depender de serviços ou tokens externos.
 */

export interface RecordedAudio {
  blob: Blob;
  audioUrl: string;
  durationSeconds: number;
}

export interface RecorderState {
  isRecording: boolean;
  durationSeconds: number;
  audioUrl: string | null;
  error: string | null;
}

export function isMediaRecorderSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices &&
    typeof navigator.mediaDevices.getUserMedia === 'function' &&
    typeof MediaRecorder !== 'undefined'
  );
}

export function isSpeechRecognitionSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)
  );
}

/**
 * Retorna o tipo MIME de gravação suportado pelo navegador atual
 */
function getSupportedMimeType(): string | undefined {
  if (typeof MediaRecorder === 'undefined') return undefined;

  const candidates = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus',
    'audio/mp4',
    'audio/aac'
  ];

  for (const candidate of candidates) {
    if (MediaRecorder.isTypeSupported(candidate)) {
      return candidate;
    }
  }

  return undefined;
}

class AudioRecordingSession {
  private mediaStream: MediaStream | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private startTime: number = 0;
  private recognition: any = null;
  private recognizedText: string = '';

  /**
   * Solicita permissão e inicia a gravação do microfone
   */
  async start(options?: { enableSpeechRecognition?: boolean }): Promise<void> {
    if (!isMediaRecorderSupported()) {
      throw new Error('A gravação de áudio nativa (MediaRecorder) não é suportada neste navegador.');
    }

    try {
      // 1. Obtém permissão do usuário apenas no momento de gravar
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
    } catch (err: any) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        throw new Error('Permissão do microfone negada. Autorize o microfone nas configurações do navegador para gravar sua pronúncia.');
      }
      if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        throw new Error('Nenhum microfone foi detectado neste dispositivo.');
      }
      throw new Error('Não foi possível inicializar o microfone. Verifique as permissões do dispositivo.');
    }

    this.recordedChunks = [];
    this.recognizedText = '';
    const mimeType = getSupportedMimeType();

    try {
      this.mediaRecorder = mimeType
        ? new MediaRecorder(this.mediaStream, { mimeType })
        : new MediaRecorder(this.mediaStream);
    } catch {
      this.mediaRecorder = new MediaRecorder(this.mediaStream);
    }

    this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
      if (event.data && event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };

    // Opcional: ativa SpeechRecognition para apoio de transcrição aproximada em en-US
    if (options?.enableSpeechRecognition && isSpeechRecognitionSupported()) {
      try {
        const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        this.recognition = new SpeechRec();
        this.recognition.lang = 'en-US';
        this.recognition.continuous = false;
        this.recognition.interimResults = false;

        this.recognition.onresult = (event: any) => {
          if (event.results && event.results[0] && event.results[0][0]) {
            this.recognizedText = event.results[0][0].transcript || '';
          }
        };

        this.recognition.onerror = () => {
          // Ignora falhas de reconhecimento silenciosamente: a gravação de áudio continua
        };

        this.recognition.start();
      } catch {
        // Fallback silencioso de reconhecimento de fala
      }
    }

    this.startTime = Date.now();
    this.mediaRecorder.start(100); // Coleta a cada 100ms
  }

  /**
   * Finaliza a gravação, libera os tracks do microfone e devolve o áudio capturado
   */
  async stop(): Promise<RecordedAudio & { recognizedText?: string }> {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        this.cleanup();
        reject(new Error('Nenhuma gravação ativa para finalizar.'));
        return;
      }

      const durationSeconds = Math.max(1, Math.round((Date.now() - this.startTime) / 1000));

      this.mediaRecorder.onstop = () => {
        try {
          const mimeType = this.mediaRecorder?.mimeType || 'audio/webm';
          const blob = new Blob(this.recordedChunks, { type: mimeType });
          const audioUrl = URL.createObjectURL(blob);
          const recognized = this.recognizedText.trim();

          this.cleanup();
          resolve({
            blob,
            audioUrl,
            durationSeconds,
            recognizedText: recognized || undefined
          });
        } catch (err) {
          this.cleanup();
          reject(err);
        }
      };

      try {
        if (this.recognition) {
          try {
            this.recognition.stop();
          } catch {}
        }
        this.mediaRecorder.stop();
      } catch (err) {
        this.cleanup();
        reject(err);
      }
    });
  }

  /**
   * Cancela a gravação e descarta dados
   */
  cancel(): void {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop();
      } catch {}
    }
    if (this.recognition) {
      try {
        this.recognition.abort();
      } catch {}
    }
    this.cleanup();
  }

  /**
   * Libera tracks do microfone para desligar a luz de gravação no dispositivo
   */
  private cleanup(): void {
    if (this.mediaStream) {
      try {
        this.mediaStream.getTracks().forEach((track) => track.stop());
      } catch {}
      this.mediaStream = null;
    }
    this.mediaRecorder = null;
    this.recordedChunks = [];
    this.recognition = null;
  }
}

let activeSession: AudioRecordingSession | null = null;

export const audioRecorder = {
  /**
   * Inicia a gravação
   */
  async start(options?: { enableSpeechRecognition?: boolean }): Promise<void> {
    if (activeSession) {
      activeSession.cancel();
    }
    activeSession = new AudioRecordingSession();
    await activeSession.start(options);
  },

  /**
   * Para a gravação e retorna o áudio capturado
   */
  async stop(): Promise<RecordedAudio & { recognizedText?: string }> {
    if (!activeSession) {
      throw new Error('Nenhuma sessão de gravação ativa.');
    }
    const result = await activeSession.stop();
    activeSession = null;
    return result;
  },

  /**
   * Cancela a gravação atual
   */
  cancel(): void {
    if (activeSession) {
      activeSession.cancel();
      activeSession = null;
    }
  },

  /**
   * Revoga URLs de objetos de áudio para evitar consumo de memória
   */
  revokeUrl(url?: string | null): void {
    if (url && url.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(url);
      } catch {}
    }
  }
};
