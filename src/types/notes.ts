export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isPinned?: boolean;
}

export type NoteSortOption = 'updated_desc' | 'updated_asc' | 'title_asc' | 'created_desc';
