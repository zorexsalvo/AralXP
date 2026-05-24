import { DEFAULT_PROGRESS, STORAGE_KEY, type ProgressData } from './types';

function isProgressData(value: unknown): value is ProgressData {
  return (
    typeof value === 'object' &&
    value !== null &&
    'xp' in value &&
    typeof (value as ProgressData).xp === 'number' &&
    'completed_pages' in value &&
    typeof (value as ProgressData).completed_pages === 'object'
  );
}

export async function loadProgress(): Promise<ProgressData> {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    const data = result[STORAGE_KEY];
    return isProgressData(data) ? data : { ...DEFAULT_PROGRESS };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export async function saveProgress(data: ProgressData): Promise<void> {
  await chrome.storage.local.set({ [STORAGE_KEY]: data });
}

export async function markComplete(
  current: ProgressData,
  pageKey: string
): Promise<ProgressData> {
  if (current.completed_pages[pageKey]) {
    return current;
  }

  const updated: ProgressData = {
    xp: current.xp + 50,
    completed_pages: {
      ...current.completed_pages,
      [pageKey]: {
        completed_at: new Date().toISOString(),
        xp: 50,
      },
    },
  };

  await saveProgress(updated);
  return updated;
}
