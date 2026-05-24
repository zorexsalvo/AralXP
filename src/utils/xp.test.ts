import { describe, it, expect } from 'vitest';
import { getLevel, getLevelThreshold, getNextLevelThreshold, formatProgressBar } from './xp';

describe('getLevel', () => {
  it('returns 1 at 0 XP', () => { expect(getLevel(0)).toBe(1); });
  it('returns 1 just below level 2 threshold', () => { expect(getLevel(99)).toBe(1); });
  it('returns 2 at exactly 100 XP', () => { expect(getLevel(100)).toBe(2); });
  it('returns 2 between 100 and 249 XP', () => { expect(getLevel(200)).toBe(2); });
  it('returns 3 at exactly 250 XP', () => { expect(getLevel(250)).toBe(3); });
  it('returns 4 at exactly 500 XP', () => { expect(getLevel(500)).toBe(4); });
  it('returns 4 at XP beyond max threshold', () => { expect(getLevel(9999)).toBe(4); });
});

describe('getLevelThreshold', () => {
  it('returns 0 for level 1', () => { expect(getLevelThreshold(1)).toBe(0); });
  it('returns 100 for level 2', () => { expect(getLevelThreshold(2)).toBe(100); });
  it('returns 250 for level 3', () => { expect(getLevelThreshold(3)).toBe(250); });
  it('returns 500 for level 4', () => { expect(getLevelThreshold(4)).toBe(500); });
});

describe('getNextLevelThreshold', () => {
  it('returns 100 when at level 1', () => { expect(getNextLevelThreshold(1)).toBe(100); });
  it('returns 250 when at level 2', () => { expect(getNextLevelThreshold(2)).toBe(250); });
  it('returns 500 when at level 3', () => { expect(getNextLevelThreshold(3)).toBe(500); });
  it('returns null when at max level (4)', () => { expect(getNextLevelThreshold(4)).toBeNull(); });
});

describe('formatProgressBar', () => {
  it('renders empty bar at 0%', () => {
    expect(formatProgressBar(0)).toBe('[□□□□□□□□□□] 0%');
  });
  it('renders 4 filled at 40%', () => {
    expect(formatProgressBar(40)).toBe('[■■■■□□□□□□] 40%');
  });
  it('renders full bar at 100%', () => {
    expect(formatProgressBar(100)).toBe('[■■■■■■■■■■] 100%');
  });
  it('floors partial fills — 35% fills 3 blocks', () => {
    expect(formatProgressBar(35)).toBe('[■■■□□□□□□□] 35%');
  });
});
