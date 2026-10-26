import { Activity, ReadingQuestion } from '../types/activity';
import { READING_A1 } from './activities/readingA1';
import { READING_A2 } from './activities/readingA2';
import { READING_B1 } from './activities/readingB1';

export const READING_ACTIVITIES: Activity<ReadingQuestion>[] = [
  ...READING_A1,
  ...READING_A2,
  ...READING_B1
];

export function getReadingActivities(level?: string, type?: string): Activity<ReadingQuestion>[] {
  return READING_ACTIVITIES.filter((act) => {
    const matchesLevel = !level || level.toLowerCase() === 'all' || act.level.toLowerCase() === level.toLowerCase();
    const matchesType = !type || type.toLowerCase() === 'all' || act.type.toLowerCase() === type.toLowerCase();
    return matchesLevel && matchesType;
  });
}

export function getReadingActivityById(id: string): Activity<ReadingQuestion> | undefined {
  return READING_ACTIVITIES.find((a) => a.id === id);
}
