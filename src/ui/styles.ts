export const WIDGET_STYLES = `
  #aralxp-widget {
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    z-index: 9999;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    color: #1f2937;
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 10px;
    padding: 0.75rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 0.8rem;
    min-width: 170px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    user-select: none;
    animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-size: 0.65rem;
    color: #6366f1;
    transition: opacity 0.2s ease;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  }

  .aralxp-header:hover {
    opacity: 0.8;
  }

  .aralxp-toggle {
    background: none;
    border: none;
    color: #6366f1;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0 0 0 0.3rem;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  .aralxp-toggle:hover {
    transform: scale(1.1);
  }

  .aralxp-body {
    margin-top: 0.5rem;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .aralxp-level {
    font-size: 1rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }

  .aralxp-xp {
    font-size: 0.7rem;
    color: #64748b;
    margin-bottom: 0.4rem;
    font-weight: 500;
  }

  .aralxp-bar {
    font-family: 'Courier New', monospace;
    font-size: 0.65rem;
    color: #0ea5e9;
    white-space: pre;
    letter-spacing: 0.04em;
    padding: 0.35rem;
    background: linear-gradient(90deg, rgba(6, 182, 212, 0.05) 0%, transparent 100%);
    border-radius: 5px;
    border-left: 2px solid #0ea5e9;
    margin-bottom: 0.5rem;
  }
`;

export const FINISH_BUTTON_STYLES = `
  .aralxp-finish-btn-wrapper {
    margin: 0;
  }

  .aralxp-finish-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.2);
    position: relative;
    overflow: hidden;
  }

  .aralxp-finish-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .aralxp-finish-btn:hover:not(:disabled)::before {
    left: 100%;
  }

  .aralxp-finish-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
  }

  .aralxp-finish-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .aralxp-finish-btn:disabled {
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    color: #94a3b8;
    cursor: not-allowed;
    box-shadow: none;
  }

  .aralxp-finish-btn.completed {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
  }

  .aralxp-finish-btn.completed:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
  }

  .aralxp-xp-label {
    font-size: 0.65rem;
    opacity: 0.85;
    font-weight: 400;
  }
`;
