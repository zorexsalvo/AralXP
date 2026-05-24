import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { h } from 'preact';
import { ProgressWidget } from './ProgressWidget';
import type { ProgressData } from '../storage/types';

const makeProgress = (xp: number): ProgressData => ({ xp, completed_pages: {} });

describe('ProgressWidget', () => {
  const defaultProps = { hasChapterInfo: true, xpAmount: 50 };

  it('shows Level 1 at 0 XP', () => {
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    expect(screen.getByText('Level 1')).toBeInTheDocument();
  });

  it('shows Level 2 at 100 XP', () => {
    render(<ProgressWidget progress={makeProgress(100)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    expect(screen.getByText('Level 2')).toBeInTheDocument();
  });

  it('shows total XP', () => {
    render(<ProgressWidget progress={makeProgress(150)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    expect(screen.getByText('XP: 150')).toBeInTheDocument();
  });

  it('renders a progress bar toward next level', () => {
    render(<ProgressWidget progress={makeProgress(150)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows "MAX" at max level (500 XP)', () => {
    render(<ProgressWidget progress={makeProgress(500)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    expect(screen.getByText('MAX')).toBeInTheDocument();
  });

  it('is expanded by default', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    expect(container.querySelector('#aralxp-widget')).not.toHaveAttribute('data-collapsed', 'true');
  });

  it('collapses when toggle is clicked', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /collapse|expand/i }));
    expect(container.querySelector('#aralxp-widget')).toHaveAttribute('data-collapsed', 'true');
  });

  it('expands again when toggle clicked twice', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    const toggle = screen.getByRole('button', { name: /collapse|expand/i });
    fireEvent.click(toggle);
    fireEvent.click(toggle);
    expect(container.querySelector('#aralxp-widget')).not.toHaveAttribute('data-collapsed', 'true');
  });

  it('has data-aralxp attribute for SPA cleanup', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} {...defaultProps} />);
    expect(container.querySelector('#aralxp-widget')).toHaveAttribute('data-aralxp');
  });

  it('shows "Finish Chapter" button when page not completed and chapter info exists', () => {
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} hasChapterInfo={true} xpAmount={50} />);
    expect(screen.getByText('Finish Chapter')).toBeInTheDocument();
  });

  it('hides finish button when chapter info does not exist', () => {
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} hasChapterInfo={false} xpAmount={50} />);
    expect(screen.queryByText('Finish Chapter')).not.toBeInTheDocument();
  });

  it('shows "✓ Done" button when page completed and chapter info exists', () => {
    render(<ProgressWidget progress={makeProgress(50)} isPageCompleted={true} onFinish={vi.fn()} hasChapterInfo={true} xpAmount={50} />);
    expect(screen.getByText('✓ Done')).toBeInTheDocument();
  });

  it('displays dynamic XP amount in button label', () => {
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} hasChapterInfo={true} xpAmount={100} />);
    expect(screen.getByText('+100 XP')).toBeInTheDocument();
  });

  it('calls onFinish when finish button clicked', () => {
    const onFinish = vi.fn();
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={onFinish} hasChapterInfo={true} xpAmount={50} />);
    fireEvent.click(screen.getByRole('button', { name: /finish chapter/i }));
    expect(onFinish).toHaveBeenCalledOnce();
  });
});
