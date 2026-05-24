import { describe, it, expect, afterEach } from 'vitest';
import { getChapterInfo } from './chapterInfo';

describe('getChapterInfo', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('returns default xp when no chapter info element exists', () => {
    const result = getChapterInfo();
    expect(result).toEqual({ xp: 50, hasChapterInfo: false });
  });

  it('detects chapter info element', () => {
    const details = document.createElement('details');
    details.className = 'example';
    const table = document.createElement('table');
    details.appendChild(table);
    document.body.appendChild(details);

    const result = getChapterInfo();
    expect(result.hasChapterInfo).toBe(true);
  });

  it('extracts XP from chapter info table', () => {
    const details = document.createElement('details');
    details.className = 'example';
    details.innerHTML = `
      <table>
        <tbody>
          <tr><td><strong>XP</strong></td><td>+100 XP</td></tr>
        </tbody>
      </table>
    `;
    document.body.appendChild(details);

    const result = getChapterInfo();
    expect(result.xp).toBe(100);
    expect(result.hasChapterInfo).toBe(true);
  });

  it('extracts XP without plus sign', () => {
    const details = document.createElement('details');
    details.className = 'example';
    details.innerHTML = `
      <table>
        <tbody>
          <tr><td>XP</td><td>75 XP</td></tr>
        </tbody>
      </table>
    `;
    document.body.appendChild(details);

    const result = getChapterInfo();
    expect(result.xp).toBe(75);
  });

  it('extracts XP with various formats', () => {
    const details = document.createElement('details');
    details.className = 'example';
    details.innerHTML = `
      <table>
        <tbody>
          <tr><td>XP</td><td>+250xp</td></tr>
        </tbody>
      </table>
    `;
    document.body.appendChild(details);

    const result = getChapterInfo();
    expect(result.xp).toBe(250);
  });

  it('returns default xp if no XP found in table', () => {
    const details = document.createElement('details');
    details.className = 'example';
    details.innerHTML = `
      <table>
        <tbody>
          <tr><td>Difficulty</td><td>Easy</td></tr>
        </tbody>
      </table>
    `;
    document.body.appendChild(details);

    const result = getChapterInfo();
    expect(result.xp).toBe(50);
    expect(result.hasChapterInfo).toBe(true);
  });
});
