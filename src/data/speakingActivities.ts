import { Activity, SpeakingQuestion } from '../types/activity';
import { SPEAKING_A1 } from './activities/speakingA1';
import { SPEAKING_A2 } from './activities/speakingA2';
import { SPEAKING_B1 } from './activities/speakingB1';

export const SPEAKING_ACTIVITIES: Activity<SpeakingQuestion>[] = [
  ...SPEAKING_A1,
  ...SPEAKING_A2,
  ...SPEAKING_B1
];

export function getSpeakingActivities(level?: string, type?: string): Activity<SpeakingQuestion>[] {
  return SPEAKING_ACTIVITIES.filter((act) => {
    const matchesLevel = !level || level.toLowerCase() === 'all' || act.level.toLowerCase() === level.toLowerCase();
    const matchesType = !type || type.toLowerCase() === 'all' || act.type.toLowerCase() === type.toLowerCase();
    return matchesLevel && matchesType;
  });
}

export function getSpeakingActivityById(id: string): Activity<SpeakingQuestion> | undefined {
  return SPEAKING_ACTIVITIES.find((a) => a.id === id);
}
