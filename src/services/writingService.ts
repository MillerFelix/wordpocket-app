import { Activity, ActivityLevel, UserActivityResult, WritingActivityType } from '../types/activity';
import { getWritingActivities, getWritingActivityById } from '../data/writingActivities';
import { createPillarPersistenceService } from './activityPersistenceService';

const persistence = createPillarPersistenceService({
  pillar: 'writing',
  storageKeyPrefix: 'wordpocket_writing_latest_',
  remoteCollectionName: 'activity_results',
  getActivityById: getWritingActivityById
});

export const writingService = {
  /**
   * Retorna todas as atividades de escrita ou filtradas por nível e formato
   */
  getActivities(level?: ActivityLevel | 'all', format?: WritingActivityType | 'all'): Activity[] {
    return getWritingActivities(level, format);
  },


  /**
   * Retorna uma atividade de escrita pelo ID
   */
  getActivityById(id: string): Activity | undefined {
    return getWritingActivityById(id);
  },

  /**
   * Corrige determinística e flexivelmente a atividade, calcula a pontuação e persiste o resultado
   * Filosofia: a última tentativa concluída SEMPRE substitui o resultado principal anterior.
   */
  completeActivity(
    activityId: string,
    answers: Record<string, string>,
    durationSeconds: number,
    uid?: string | null
  ) {
    return persistence.completeActivity(activityId, answers, durationSeconds, uid);
  },

  /**
   * Obtém de forma síncrona o cache local das últimas tentativas
   */
  getLocalResults(uid?: string | null): Record<string, UserActivityResult> {
    return persistence.getLocalResults(uid);
  },

  /**
   * Obtém os resultados mais recentes de todas as atividades concluídas pelo usuário
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

