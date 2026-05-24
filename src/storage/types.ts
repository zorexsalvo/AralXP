export interface PageCompletion {
  completed_at: string; // ISO 8601
  xp: number;
}

export interface ProgressData {
  xp: number;
  completed_pages: Record<string, PageCompletion>;
}

export const STORAGE_KEY = 'aralxp_progress';

export const DEFAULT_PROGRESS: ProgressData = {
  xp: 0,
  completed_pages: {},
};
