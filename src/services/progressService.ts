import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  addDoc, 
  query, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import { PracticeDifficulty, PracticeSkillId } from '../types';
import { ActivityAttempt, SkillProgress } from '../types/progress';
import { PRACTICE_SKILLS } from '../data/practiceSkills';

/**
 * Cria a estrutura padrão de progresso inicial para todas as habilidades
 */
export function createDefaultProgress(): Record<PracticeSkillId, SkillProgress> {
  const result = {} as Record<PracticeSkillId, SkillProgress>;
  PRACTICE_SKILLS.forEach((skill) => {
    result[skill.id] = {
      skillId: skill.id,
      currentLevel: 'easy',
      completedActivitiesCount: 0,
      totalAttempts: 0,
      totalScore: 0,
      lastPracticedAt: null
    };
  });
  return result;
}

/**
 * Busca o progresso consolidado de todas as 4 habilidades no Firestore
 */
export async function getUserSkillProgress(
  uid: string
): Promise<Record<PracticeSkillId, SkillProgress>> {
  const defaults = createDefaultProgress();
  if (!isFirebaseConfigured || !db) return defaults;

  try {
    const progressCol = collection(db, 'users', uid, 'progress');
    const snap = await getDocs(progressCol);

    snap.forEach((docSnap) => {
      const data = docSnap.data() as SkillProgress;
      if (data && data.skillId && defaults[data.skillId]) {
        defaults[data.skillId] = {
          ...defaults[data.skillId],
          ...data
        };
      }
    });

    return defaults;
  } catch (error) {
    console.error('Erro ao buscar progresso do usuário no Firestore:', error);
    return defaults;
  }
}

/**
 * Registra uma tentativa de atividade e atualiza o resumo da habilidade
 */
export async function saveActivityAttempt(
  uid: string,
  attemptInput: Omit<ActivityAttempt, 'id' | 'completedAt'>
): Promise<ActivityAttempt> {
  const nowIso = new Date().toISOString();
  const attemptId = `att_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const fullAttempt: ActivityAttempt = {
    ...attemptInput,
    id: attemptId,
    completedAt: nowIso
  };

  if (!isFirebaseConfigured || !db) {
    return fullAttempt;
  }

  try {
    // 1. Salva a tentativa na subcoleção 'attempts'
    const attemptsCol = collection(db, 'users', uid, 'attempts');
    await addDoc(attemptsCol, {
      ...fullAttempt,
      createdAtServer: serverTimestamp()
    });

    // 2. Atualiza o resumo consolidado na subcoleção 'progress'
    const progressRef = doc(db, 'users', uid, 'progress', attemptInput.skillId);
    const existingDoc = await getDoc(progressRef);
    const existingData = existingDoc.exists()
      ? (existingDoc.data() as SkillProgress)
      : {
          skillId: attemptInput.skillId,
          currentLevel: attemptInput.difficulty,
          completedActivitiesCount: 0,
          totalAttempts: 0,
          totalScore: 0,
          lastPracticedAt: null
        };

    // Atualiza contadores
    const updatedTotalAttempts = existingData.totalAttempts + 1;
    const updatedTotalScore = existingData.totalScore + attemptInput.score;
    const updatedActivities = existingData.completedActivitiesCount + (attemptInput.score >= 60 ? 1 : 0);

    // Ajuste dinâmico de nível baseado em desempenho
    let nextLevel: PracticeDifficulty = existingData.currentLevel;
    if (updatedActivities >= 6 && existingData.currentLevel === 'easy') {
      nextLevel = 'medium';
    } else if (updatedActivities >= 12 && existingData.currentLevel === 'medium') {
      nextLevel = 'hard';
    }

    const updatedSummary: SkillProgress = {
      skillId: attemptInput.skillId,
      currentLevel: nextLevel,
      completedActivitiesCount: updatedActivities,
      totalAttempts: updatedTotalAttempts,
      totalScore: updatedTotalScore,
      lastPracticedAt: nowIso
    };

    await setDoc(progressRef, {
      ...updatedSummary,
      updatedAtServer: serverTimestamp()
    });
  } catch (error) {
    console.warn('Gravação remota de progresso em fila ou offline:', error);
  }

  return fullAttempt;
}

/**
 * Busca as últimas tentativas realizadas pelo usuário
 */
export async function getRecentAttempts(
  uid: string,
  maxItems = 10
): Promise<ActivityAttempt[]> {
  if (!isFirebaseConfigured || !db) return [];

  try {
    const attemptsCol = collection(db, 'users', uid, 'attempts');
    const q = query(attemptsCol, orderBy('completedAt', 'desc'), limit(maxItems));
    const snap = await getDocs(q);

    const attempts: ActivityAttempt[] = [];
    snap.forEach((d) => {
      attempts.push({ id: d.id, ...(d.data() as Omit<ActivityAttempt, 'id'>) });
    });
    return attempts;
  } catch (error) {
    console.error('Erro ao buscar histórico de tentativas:', error);
    return [];
  }
}
