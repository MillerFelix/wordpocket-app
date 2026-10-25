import { doc, setDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import { Activity, ActivityGradingResult, ActivityLevel, ReadingActivityType, ReadingQuestion, UserActivityResult } from '../types/activity';
import { getReadingActivities, getReadingActivityById } from '../data/readingActivities';
import { gradeActivity } from './activityGradingService';
import { saveActivityAttempt } from './progressService';

const STORAGE_KEY_PREFIX = 'wordpocket_reading_latest_';

function getStorageKey(uid?: string | null): string {
  return `${STORAGE_KEY_PREFIX}${uid || 'visitor'}`;
}

/**
 * Lê do cache local os resultados das últimas tentativas concluídas por atividade de Reading
 */
function getLocalActivityResults(uid?: string | null): Record<string, UserActivityResult> {
  try {
    const raw = localStorage.getItem(getStorageKey(uid));
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // Ignora erro de storage
  }
  return {};
}

/**
 * Salva no cache local o resultado mais recente de uma atividade de Reading
 */
function saveLocalActivityResult(uid: string | null | undefined, result: UserActivityResult): void {
  try {
    const current = getLocalActivityResults(uid);
    current[result.activityId] = result;
    localStorage.setItem(getStorageKey(uid), JSON.stringify(current));
  } catch {
    // Fallback silencioso de storage
  }
}

export const readingService = {
  /**
   * Retorna todas as atividades de leitura ou filtradas por nível e/ou tipo
   */
  getActivities(
    level?: ActivityLevel | 'all',
    type?: ReadingActivityType | 'all'
  ): Activity<ReadingQuestion>[] {
    return getReadingActivities(level, type);
  },

  /**
   * Retorna uma atividade de leitura pelo ID
   */
  getActivityById(id: string): Activity<ReadingQuestion> | undefined {
    return getReadingActivityById(id);
  },

  /**
   * Corrige determinística e automaticamente a atividade, calcula a pontuação e persiste o resultado
   * Filosofia: a última tentativa concluída SEMPRE substitui o resultado principal anterior.
   */
  async completeActivity(
    activityId: string,
    answers: Record<string, string>,
    durationSeconds: number,
    uid?: string | null
  ): Promise<{ grading: ActivityGradingResult; latestResult: UserActivityResult }> {
    const activity = getReadingActivityById(activityId);
    if (!activity) {
      throw new Error(`Atividade com id "${activityId}" não encontrada.`);
    }

    // 1. Correção e cálculo centralizado da pontuação
    const grading = gradeActivity(activity, answers);

    // 2. Monta o registro da última tentativa concluída
    const latestResult: UserActivityResult = {
      activityId: activity.id,
      pillar: 'reading',
      level: activity.level,
      type: activity.type,
      score: grading.score,
      earnedPoints: grading.earnedPoints,
      totalPoints: grading.totalPoints,
      correctCount: grading.correctCount,
      totalQuestions: grading.totalQuestions,
      userAnswers: { ...answers },
      completedAt: grading.completedAt,
      durationSeconds
    };

    // 3. Salva imediatamente no cache local (funciona para visitantes e offline)
    saveLocalActivityResult(uid, latestResult);

    // 4. Se autenticado e online, sincroniza com o Firestore
    if (uid && isFirebaseConfigured && db) {
      (async () => {
        try {
          // Grava no documento da atividade de leitura (substituindo pelo resultado da última tentativa)
          const activityDocRef = doc(db, 'users', uid, 'reading_results', activityId);
          await setDoc(activityDocRef, {
            ...latestResult,
            updatedAtServer: serverTimestamp()
          });

          // Atualiza também o progresso geral consolidado da habilidade 'reading'
          await saveActivityAttempt(uid, {
            userId: uid,
            skillId: 'reading',
            difficulty: activity.level === 'a1' ? 'easy' : activity.level === 'a2' ? 'medium' : 'hard',
            activityId: activity.id,
            activityTitle: activity.title,
            score: grading.score,
            totalQuestions: grading.totalQuestions,
            correctAnswers: grading.correctCount,
            durationSeconds
          });
        } catch (err) {
          console.warn('Persistência remota de atividade de leitura pendente ou offline:', err);
        }
      })();
    }

    return { grading, latestResult };
  },

  /**
   * Obtém de forma síncrona o cache local das últimas tentativas
   */
  getLocalResults(uid?: string | null): Record<string, UserActivityResult> {
    return getLocalActivityResults(uid);
  },

  /**
   * Obtém os resultados mais recentes de todas as atividades de leitura concluídas
   */
  async getLatestResults(uid?: string | null): Promise<Record<string, UserActivityResult>> {
    const local = getLocalActivityResults(uid);

    if (uid && isFirebaseConfigured && db) {
      try {
        const colRef = collection(db, 'users', uid, 'reading_results');
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('timeout')), 1200)
        );
        const snap = await Promise.race([getDocs(colRef), timeoutPromise]);
        const remoteResults: Record<string, UserActivityResult> = {};

        snap.forEach((docSnap) => {
          const data = docSnap.data() as UserActivityResult;
          if (data && data.activityId) {
            remoteResults[data.activityId] = data;
          }
        });

        // Mescla remoto com local
        const merged = { ...local, ...remoteResults };
        try {
          localStorage.setItem(getStorageKey(uid), JSON.stringify(merged));
        } catch {}
        return merged;
      } catch (err) {
        console.warn('Erro ao carregar resultados remotos de leitura, utilizando cache local:', err);
      }
    }

    return local;
  },

  /**
   * Retorna o resultado da última tentativa concluída de uma atividade específica
   */
  async getLatestResultForActivity(
    activityId: string,
    uid?: string | null
  ): Promise<UserActivityResult | null> {
    const all = await this.getLatestResults(uid);
    return all[activityId] || null;
  }
};
