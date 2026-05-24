export function isMkDocsPage(): boolean {
  return !!document.querySelector('.md-content');
}

export function findFooterAnchor(): Element | null {
  return document.querySelector('.md-footer');
}
