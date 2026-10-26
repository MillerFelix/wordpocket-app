import { Activity, ListeningQuestion } from '../types/activity';
import { LISTENING_A1 } from './activities/listeningA1';
import { LISTENING_A2 } from './activities/listeningA2';
import { LISTENING_B1 } from './activities/listeningB1';

export const LISTENING_ACTIVITIES: Activity<ListeningQuestion>[] = [
  ...LISTENING_A1,
  ...LISTENING_A2,
  ...LISTENING_B1
];

export function getListeningActivities(level?: string, type?: string): Activity<ListeningQuestion>[] {
  return LISTENING_ACTIVITIES.filter((act) => {
    const matchesLevel = !level || level.toLowerCase() === 'all' || act.level.toLowerCase() === level.toLowerCase();
    const matchesType = !type || type.toLowerCase() === 'all' || act.type.toLowerCase() === type.toLowerCase();
    return matchesLevel && matchesType;
  });
}

export function getListeningActivityById(id: string): Activity<ListeningQuestion> | undefined {
  return LISTENING_ACTIVITIES.find((a) => a.id === id);
}
