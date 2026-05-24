/**
 * Detects and extracts XP value from chapter info element
 * Looks for: <details class="example"> with XP value in table
 */

export interface ChapterInfo {
  xp: number;
  hasChapterInfo: boolean;
}

const DEFAULT_XP = 50;

export function getChapterInfo(): ChapterInfo {
  // Look for the chapter info details element
  const detailsEl = document.querySelector('details.example');

  if (!detailsEl) {
    return { xp: DEFAULT_XP, hasChapterInfo: false };
  }

  // Try to find and parse XP from the table
  const xpValue = extractXPFromTable(detailsEl);

  return {
    xp: xpValue || DEFAULT_XP,
    hasChapterInfo: true,
  };
}

function extractXPFromTable(detailsEl: Element): number | null {
  // Find all cells in the details element
  const cells = detailsEl.querySelectorAll('td');

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const text = cell.textContent?.trim() || '';

    // Look for XP pattern like "+100 XP" or "100 XP"
    const match = text.match(/\+?(\d+)\s*XP/i);
    if (match) {
      return parseInt(match[1], 10);
    }
  }

  return null;
}
