import { render, h } from 'preact';
import { isMkDocsPage, findFooterAnchor } from '../utils/mkdocs';
import { getPageKey } from '../utils/url';
import { loadProgress, markComplete } from '../storage';
import { FinishButton } from '../ui/FinishButton';
import { ProgressWidget } from '../ui/ProgressWidget';
import { WIDGET_STYLES, FINISH_BUTTON_STYLES } from '../ui/styles';
import type { ProgressData } from '../storage/types';

function injectStyles(): void {
  if (document.getElementById('aralxp-styles')) return;
  const style = document.createElement('style');
  style.id = 'aralxp-styles';
  style.textContent = WIDGET_STYLES + FINISH_BUTTON_STYLES;
  document.head.appendChild(style);
}

function cleanupInjected(): void {
  document.querySelectorAll('[data-aralxp]').forEach((el) => el.remove());
}

function createMount(): HTMLDivElement {
  const el = document.createElement('div');
  return el;
}

async function init(): Promise<void> {
  if (!isMkDocsPage()) return;

  injectStyles();
  cleanupInjected();

  let progress: ProgressData;
  try {
    progress = await loadProgress();
  } catch {
    return;
  }

  const pageKey = getPageKey(window.location.href);

  const footerAnchor = findFooterAnchor();
  const buttonMount = createMount();

  if (footerAnchor && footerAnchor.parentElement) {
    footerAnchor.parentElement.insertBefore(buttonMount, footerAnchor);
  } else {
    document.body.appendChild(buttonMount);
  }

  const widgetMount = createMount();
  document.body.appendChild(widgetMount);

  function renderAll(data: ProgressData): void {
    render(
      h(FinishButton, {
        isCompleted: !!data.completed_pages[pageKey],
        onFinish: async () => {
          const updated = await markComplete(data, pageKey);
          renderAll(updated);
        },
      }),
      buttonMount
    );

    render(h(ProgressWidget, { progress: data }), widgetMount);
  }

  renderAll(progress);
}

async function handleNavigation(): Promise<void> {
  cleanupInjected();
  await init();
}

init().catch(() => { /* fail silently */ });

window.addEventListener('popstate', () => {
  handleNavigation().catch(() => { /* fail silently */ });
});
