import { describe, it, expect, afterEach } from 'vitest';
import { isMkDocsPage, findFooterAnchor } from './mkdocs';

describe('isMkDocsPage', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('returns false when no MkDocs selectors are present', () => {
    expect(isMkDocsPage()).toBe(false);
  });

  it('returns true when .md-content is present', () => {
    const el = document.createElement('div');
    el.className = 'md-content';
    document.body.appendChild(el);
    expect(isMkDocsPage()).toBe(true);
  });
});

describe('findFooterAnchor', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('returns null when .md-footer is absent', () => {
    expect(findFooterAnchor()).toBeNull();
  });

  it('returns the .md-footer element when present', () => {
    const footer = document.createElement('footer');
    footer.className = 'md-footer';
    document.body.appendChild(footer);
    expect(findFooterAnchor()).toBe(footer);
  });
});
