const LEVELS: Record<number, number> = {
  1: 0,
  2: 100,
  3: 250,
  4: 500,
};

const MAX_LEVEL = 4;
const BAR_LENGTH = 10;

export function getLevelThreshold(level: number): number {
  return LEVELS[level] ?? LEVELS[MAX_LEVEL];
}

export function getNextLevelThreshold(level: number): number | null {
  if (level >= MAX_LEVEL) return null;
  return LEVELS[level + 1] ?? null;
}

export function getLevel(xp: number): number {
  let current = 1;
  for (let lvl = MAX_LEVEL; lvl >= 1; lvl--) {
    if (xp >= LEVELS[lvl]) {
      current = lvl;
      break;
    }
  }
  return current;
}

export function formatProgressBar(percent: number): string {
  const filled = Math.floor((percent / 100) * BAR_LENGTH);
  const empty = BAR_LENGTH - filled;
  return `[${'■'.repeat(filled)}${'□'.repeat(empty)}] ${percent}%`;
}
