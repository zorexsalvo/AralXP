export function getPageKey(href: string): string {
  return new URL(href).pathname;
}
