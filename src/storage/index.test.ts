import { describe, it, expect, vi } from 'vitest';
import { loadProgress, saveProgress, markComplete } from './index';
import { DEFAULT_PROGRESS } from './types';

describe('loadProgress', () => {
  it('returns DEFAULT_PROGRESS when storage is empty', async () => {
    const result = await loadProgress();
    expect(result).toEqual(DEFAULT_PROGRESS);
  });

  it('returns stored progress when data exists', async () => {
    const stored = {
      xp: 50,
      completed_pages: {
        '/docs/intro/': { completed_at: '2026-01-01T00:00:00Z', xp: 50 },
      },
    };
    await chrome.storage.local.set({ aralxp_progress: stored });
    const result = await loadProgress();
    expect(result).toEqual(stored);
  });

  it('returns DEFAULT_PROGRESS when stored data is corrupted', async () => {
    (chrome.storage.local.get as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      { aralxp_progress: 'not-an-object' }
    );
    const result = await loadProgress();
    expect(result).toEqual(DEFAULT_PROGRESS);
  });
});

describe('saveProgress', () => {
  it('calls chrome.storage.local.set with the correct key', async () => {
    const data = { xp: 100, completed_pages: {} };
    await saveProgress(data);
    expect(chrome.storage.local.set).toHaveBeenCalledWith({
      aralxp_progress: data,
    });
  });
});

describe('markComplete', () => {
  it('adds page to completed_pages and increments xp by 50', async () => {
    const initial = { xp: 0, completed_pages: {} };
    const result = await markComplete(initial, '/docs/intro/');
    expect(result.xp).toBe(50);
    expect(result.completed_pages['/docs/intro/']).toMatchObject({ xp: 50 });
    expect(result.completed_pages['/docs/intro/'].completed_at).toBeDefined();
  });

  it('is idempotent — does not add XP for already-completed page', async () => {
    const initial = {
      xp: 50,
      completed_pages: {
        '/docs/intro/': { completed_at: '2026-01-01T00:00:00Z', xp: 50 },
      },
    };
    const result = await markComplete(initial, '/docs/intro/');
    expect(result.xp).toBe(50);
    expect(Object.keys(result.completed_pages)).toHaveLength(1);
  });

  it('persists the updated progress via saveProgress', async () => {
    const initial = { xp: 0, completed_pages: {} };
    await markComplete(initial, '/docs/intro/');
    expect(chrome.storage.local.set).toHaveBeenCalledOnce();
  });
});
