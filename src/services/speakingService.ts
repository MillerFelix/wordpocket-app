import { Activity, ActivityLevel, SpeakingActivityType, SpeakingQuestion, UserActivityResult } from '../types/activity';
import { getSpeakingActivities, getSpeakingActivityById } from '../data/speakingActivities';
import { createPillarPersistenceService } from './activityPersistenceService';

const persistence = createPillarPersistenceService<Activity<SpeakingQuestion>>({
  pillar: 'speaking',
  storageKeyPrefix: 'wordpocket_speaking_latest_',
  remoteCollectionName: 'speaking_results',
  getActivityById: getSpeakingActivityById
});

export const speakingService = {
  /**
   * Retorna todas as atividades de fala ou filtradas por nível e/ou tipo
   */
  getActivities(
    level?: ActivityLevel | 'all',
    type?: SpeakingActivityType | 'all'
  ): Activity<SpeakingQuestion>[] {
    return getSpeakingActivities(level, type);
  },

  /**
   * Retorna uma atividade de fala pelo ID
   */
  getActivityById(id: string): Activity<SpeakingQuestion> | undefined {
    return getSpeakingActivityById(id);
  },

  /**
   * Avalia a atividade e persiste o resultado da tentativa concluída.
   * Filosofia do Word Pocket: a última tentativa concluída SEMPRE substitui o resultado principal anterior.
   * Gravações de áudio são mantidas locais e temporárias; não são enviadas aos servidores.
   */
  completeActivity(
    activityId: string,
    answers: Record<string, string>,
    durationSeconds: number,
    uid?: string | null,
    selfEvaluation?: Record<string, boolean>
  ) {
    return persistence.completeActivity(activityId, answers, durationSeconds, uid, selfEvaluation);
  },

  /**
   * Obtém de forma síncrona o cache local das últimas tentativas
   */
  getLocalResults(uid?: string | null): Record<string, UserActivityResult> {
    return persistence.getLocalResults(uid);
  },

  /**
   * Obtém os resultados mais recentes de todas as atividades de fala concluídas
   */
  getLatestResults(uid?: string | null): Promise<Record<string, UserActivityResult>> {
    return persistence.getLatestResults(uid);
  },

  /**
   * Retorna o resultado da última tentativa concluída de uma atividade específica
   */
  getLatestResultForActivity(
    activityId: string,
    uid?: string | null
  ): Promise<UserActivityResult | null> {
    return persistence.getLatestResultForActivity(activityId, uid);
  }
};

