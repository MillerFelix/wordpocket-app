import { Activity, ActivityLevel, ListeningActivityType, ListeningQuestion, UserActivityResult } from '../types/activity';
import { getListeningActivities, getListeningActivityById } from '../data/listeningActivities';
import { createPillarPersistenceService } from './activityPersistenceService';

const persistence = createPillarPersistenceService<Activity<ListeningQuestion>>({
  pillar: 'listening',
  storageKeyPrefix: 'wordpocket_listening_latest_',
  remoteCollectionName: 'listening_results',
  getActivityById: getListeningActivityById
});

export const listeningService = {
  /**
   * Retorna todas as atividades de escuta ou filtradas por nível e/ou tipo
   */
  getActivities(
    level?: ActivityLevel | 'all',
    type?: ListeningActivityType | 'all'
  ): Activity<ListeningQuestion>[] {
    return getListeningActivities(level, type);
  },

  /**
   * Retorna uma atividade de escuta pelo ID
   */
  getActivityById(id: string): Activity<ListeningQuestion> | undefined {
    return getListeningActivityById(id);
  },

  /**
   * Corrige determinística e automaticamente a atividade, calcula a pontuação e persiste o resultado.
   * Filosofia do projeto: a última tentativa concluída SEMPRE substitui o resultado principal anterior.
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
   * Obtém os resultados mais recentes de todas as atividades de escuta concluídas
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

