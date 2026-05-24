import { h } from 'preact';

interface FinishButtonProps {
  isCompleted: boolean;
  onFinish: () => void;
}

export function FinishButton({ isCompleted, onFinish }: FinishButtonProps) {
  return (
    <div class="aralxp-finish-btn-wrapper" data-aralxp>
      <button
        class={`aralxp-finish-btn${isCompleted ? ' completed' : ''}`}
        disabled={isCompleted}
        onClick={isCompleted ? undefined : onFinish}
        aria-label={isCompleted ? 'Completed' : 'Finish Chapter'}
      >
        <span>{isCompleted ? '✓ Completed' : 'Finish Chapter'}</span>
        {!isCompleted && <span class="aralxp-xp-label">+50 XP</span>}
      </button>
    </div>
  );
}
