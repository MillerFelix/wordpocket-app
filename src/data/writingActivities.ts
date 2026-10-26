import { Activity } from '../types/activity';
import { WRITING_A1 } from './activities/writingA1';
import { WRITING_A2 } from './activities/writingA2';
import { WRITING_B1 } from './activities/writingB1';

export const WRITING_ACTIVITIES: Activity[] = [
  ...WRITING_A1,
  ...WRITING_A2,
  ...WRITING_B1
];

export function getWritingActivities(level?: string, type?: string): Activity[] {
  let list = WRITING_ACTIVITIES;
  if (level && level.toLowerCase() !== 'all') {
    list = list.filter((a) => a.level.toLowerCase() === level.toLowerCase());
  }
  if (type && type.toLowerCase() !== 'all') {
    list = list.filter((a) => a.type.toLowerCase() === type.toLowerCase());
  }
  return list;
}

export function getWritingActivityById(id: string): Activity | undefined {
  return WRITING_ACTIVITIES.find((a) => a.id === id);
}

