import { h } from 'preact';
import { useState } from 'preact/hooks';
import type { ProgressData } from '../storage/types';
import { getLevel, getLevelThreshold, getNextLevelThreshold, formatProgressBar } from '../utils/xp';

interface ProgressWidgetProps {
  progress: ProgressData;
}

export function ProgressWidget({ progress }: ProgressWidgetProps) {
  const [collapsed, setCollapsed] = useState(false);
  const level = getLevel(progress.xp);
  const nextThreshold = getNextLevelThreshold(level);
  const currentThreshold = getLevelThreshold(level);

  let percent = 0;
  if (nextThreshold !== null) {
    const range = nextThreshold - currentThreshold;
    const earned = progress.xp - currentThreshold;
    percent = Math.floor((earned / range) * 100);
  }

  return (
    <div
      id="aralxp-widget"
      data-aralxp
      data-collapsed={collapsed ? 'true' : undefined}
    >
      <div class="aralxp-header">
        <span>AralXP</span>
        <button
          class="aralxp-toggle"
          aria-label={collapsed ? 'Expand' : 'Collapse'}
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? '▲' : '▼'}
        </button>
      </div>
      <div class="aralxp-body">
        <div class="aralxp-level">Level {level}</div>
        <div class="aralxp-xp">XP: {progress.xp}</div>
        {nextThreshold !== null ? (
          <div
            class="aralxp-bar"
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {formatProgressBar(percent)}
          </div>
        ) : (
          <div class="aralxp-bar">MAX</div>
        )}
      </div>
    </div>
  );
}
