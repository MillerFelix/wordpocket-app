import { doc, setDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import { Activity, ActivityGradingResult, PracticeSkillId, UserActivityResult } from '../types/activity';
import { gradeActivity } from './activityGradingService';
import { saveActivityAttempt } from './progressService';

export interface PillarPersistenceConfig<TActivity extends Activity = Activity> {
  pillar: PracticeSkillId;
  storageKeyPrefix: string;
  remoteCollectionName: string;
  getActivityById: (id: string) => TActivity | undefined;
}

/**
 * Cria a infraestrutura compartilhada e robusta de persistência para um pilar educacional.
 * Filosofia: a última tentativa concluída SEMPRE substitui o resultado principal anterior.
 * Funciona offline com cache em localStorage e sincroniza com o Firestore quando autenticado.
 */
export function createPillarPersistenceService<TActivity extends Activity = Activity>(
  config: PillarPersistenceConfig<TActivity>
) {
  const { pillar, storageKeyPrefix, remoteCollectionName, getActivityById } = config;

  function getStorageKey(uid?: string | null): string {
    return `${storageKeyPrefix}${uid || 'visitor'}`;
  }

  function getLocalActivityResults(uid?: string | null): Record<string, UserActivityResult> {
    try {
      const raw = localStorage.getItem(getStorageKey(uid));
      if (raw) return JSON.parse(raw);
    } catch {
      // Ignora erro de storage local
    }
    return {};
  }

  function saveLocalActivityResult(uid: string | null | undefined, result: UserActivityResult): void {
    try {
      const current = getLocalActivityResults(uid);
      current[result.activityId] = result;
      localStorage.setItem(getStorageKey(uid), JSON.stringify(current));
    } catch {
      // Fallback silencioso de storage
    }
  }

  return {
    getLocalResults(uid?: string | null): Record<string, UserActivityResult> {
      return getLocalActivityResults(uid);
    },

    async completeActivity(
      activityId: string,
      answers: Record<string, string>,
      durationSeconds: number,
      uid?: string | null,
      selfEvaluation?: Record<string, boolean>
    ): Promise<{ grading: ActivityGradingResult; latestResult: UserActivityResult }> {
      const activity = getActivityById(activityId);
      if (!activity) {
        throw new Error(`Atividade com id "${activityId}" não encontrada.`);
      }

      // 1. Correção e cálculo centralizado da pontuação
      const grading = gradeActivity(activity, answers);

      // 2. Monta o registro da última tentativa concluída
      const latestResult: UserActivityResult = {
        activityId: activity.id,
        pillar,
        level: activity.level,
        type: activity.type,
        score: grading.score,
        earnedPoints: grading.earnedPoints,
        totalPoints: grading.totalPoints,
        correctCount: grading.correctCount,
        totalQuestions: grading.totalQuestions,
        userAnswers: { ...answers },
        completedAt: grading.completedAt,
        durationSeconds,
        selfEvaluation: selfEvaluation ? { ...selfEvaluation } : undefined
      };

      // 3. Salva imediatamente no cache local (funciona para visitantes e offline)
      saveLocalActivityResult(uid, latestResult);

      // 4. Se autenticado e online, sincroniza com o Firestore
      if (uid && isFirebaseConfigured && db) {
        (async () => {
          try {
            const activityDocRef = doc(db, 'users', uid, remoteCollectionName, activity.id);
            const dataToPersist: Record<string, unknown> = {
              ...latestResult,
              updatedAtServer: serverTimestamp()
            };
            if (dataToPersist.selfEvaluation === undefined) {
              delete dataToPersist.selfEvaluation;
            }
            await setDoc(activityDocRef, dataToPersist);

            await saveActivityAttempt(uid, {
              userId: uid,
              skillId: pillar,
              difficulty: activity.level === 'a1' ? 'easy' : activity.level === 'a2' ? 'medium' : 'hard',
              activityId: activity.id,
              activityTitle: activity.title,
              score: grading.score,
              totalQuestions: grading.totalQuestions,
              correctAnswers: grading.correctCount,
              durationSeconds
            });
          } catch (err) {
            console.warn(`Persistência remota de atividade de ${pillar} pendente ou offline:`, err);
          }
        })();
      }

      return { grading, latestResult };
    },

    async getLatestResults(uid?: string | null): Promise<Record<string, UserActivityResult>> {
      const local = getLocalActivityResults(uid);

      if (uid && isFirebaseConfigured && db) {
        try {
          const colRef = collection(db, 'users', uid, remoteCollectionName);
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
          console.warn(`Erro ao carregar resultados remotos de ${pillar}, utilizando cache local:`, err);
        }
      }

      return local;
    },

    async getLatestResultForActivity(
      activityId: string,
      uid?: string | null
    ): Promise<UserActivityResult | null> {
      const all = await this.getLatestResults(uid);
      return all[activityId] || null;
    }
  };
}
