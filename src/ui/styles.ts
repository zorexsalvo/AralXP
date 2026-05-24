export const WIDGET_STYLES = `
  #aralxp-widget {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    background: #1e1e2e;
    color: #cdd6f4;
    border: 1px solid #313244;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-size: 0.85rem;
    min-width: 180px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    user-select: none;
  }

  #aralxp-widget[data-collapsed="true"] .aralxp-body {
    display: none;
  }

  .aralxp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #89b4fa;
  }

  .aralxp-toggle {
    background: none;
    border: none;
    color: #89b4fa;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0;
    line-height: 1;
  }

  .aralxp-body {
    margin-top: 0.5rem;
  }

  .aralxp-level {
    font-size: 1rem;
    font-weight: 700;
    color: #a6e3a1;
    margin-bottom: 0.2rem;
  }

  .aralxp-xp {
    font-size: 0.8rem;
    color: #bac2de;
    margin-bottom: 0.4rem;
  }

  .aralxp-bar {
    font-family: monospace;
    font-size: 0.75rem;
    color: #89dceb;
    white-space: pre;
  }
`;

export const FINISH_BUTTON_STYLES = `
  .aralxp-finish-btn-wrapper {
    margin: 1.5rem 0;
  }

  .aralxp-finish-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
    padding: 0.6rem 1.2rem;
    background: #1e66f5;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background 0.15s ease;
  }

  .aralxp-finish-btn:hover:not(:disabled) {
    background: #1a56d6;
  }

  .aralxp-finish-btn:disabled {
    background: #313244;
    color: #6c7086;
    cursor: default;
  }

  .aralxp-finish-btn.completed {
    background: #313244;
    color: #a6e3a1;
  }

  .aralxp-xp-label {
    font-size: 0.72rem;
    opacity: 0.75;
  }
`;
