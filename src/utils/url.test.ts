import { describe, it, expect } from 'vitest';
import { getPageKey } from './url';

describe('getPageKey', () => {
  it('returns pathname from a full URL', () => {
    expect(getPageKey('https://example.com/docs/intro/')).toBe('/docs/intro/');
  });

  it('strips query string', () => {
    expect(getPageKey('https://example.com/docs/intro/?ref=nav')).toBe('/docs/intro/');
  });

  it('strips hash fragment', () => {
    expect(getPageKey('https://example.com/docs/intro/#section-1')).toBe('/docs/intro/');
  });

  it('strips both query and hash', () => {
    expect(getPageKey('https://example.com/docs/intro/?ref=nav#section-1')).toBe('/docs/intro/');
  });

  it('handles root path', () => {
    expect(getPageKey('https://example.com/')).toBe('/');
  });

  it('handles path with no trailing slash', () => {
    expect(getPageKey('https://example.com/docs/loops')).toBe('/docs/loops');
  });
});
