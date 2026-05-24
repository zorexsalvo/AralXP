export const WIDGET_STYLES = `
  #aralxp-widget {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    color: #1f2937;
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 12px;
    padding: 1rem 1.25rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 0.875rem;
    min-width: 200px;
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
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-size: 0.7rem;
    color: #6366f1;
    transition: opacity 0.2s ease;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid transparent;
  }

  .aralxp-header:hover {
    opacity: 0.8;
  }

  .aralxp-toggle {
    background: none;
    border: none;
    color: #6366f1;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0 0 0 0.5rem;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  .aralxp-toggle:hover {
    transform: scale(1.1);
  }

  .aralxp-body {
    margin-top: 0.75rem;
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
    font-size: 1.25rem;
    font-weight: 800;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .aralxp-xp {
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 0.75rem;
    font-weight: 500;
  }

  .aralxp-bar {
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
    color: #0ea5e9;
    white-space: pre;
    letter-spacing: 0.05em;
    padding: 0.5rem;
    background: linear-gradient(90deg, rgba(6, 182, 212, 0.05) 0%, transparent 100%);
    border-radius: 6px;
    border-left: 3px solid #0ea5e9;
  }
`;

export const FINISH_BUTTON_STYLES = `
  .aralxp-finish-btn-wrapper {
    margin: 1.5rem 0;
    padding: 1rem 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }

  .aralxp-finish-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
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
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.3);
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
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);
  }

  .aralxp-finish-btn.completed:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.3);
  }

  .aralxp-xp-label {
    font-size: 0.75rem;
    opacity: 0.9;
    font-weight: 500;
  }
`;
