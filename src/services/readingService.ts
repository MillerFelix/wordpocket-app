import { Activity, ActivityLevel, ReadingActivityType, ReadingQuestion, UserActivityResult } from '../types/activity';
import { getReadingActivities, getReadingActivityById } from '../data/readingActivities';
import { createPillarPersistenceService } from './activityPersistenceService';

const persistence = createPillarPersistenceService<Activity<ReadingQuestion>>({
  pillar: 'reading',
  storageKeyPrefix: 'wordpocket_reading_latest_',
  remoteCollectionName: 'reading_results',
  getActivityById: getReadingActivityById
});

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
   * Obtém os resultados mais recentes de todas as atividades de leitura concluídas
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

