import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { h } from 'preact';
import { ProgressWidget } from './ProgressWidget';
import type { ProgressData } from '../storage/types';

const makeProgress = (xp: number): ProgressData => ({ xp, completed_pages: {} });

describe('ProgressWidget', () => {
  it('shows Level 1 at 0 XP', () => {
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByText('Level 1')).toBeInTheDocument();
  });

  it('shows Level 2 at 100 XP', () => {
    render(<ProgressWidget progress={makeProgress(100)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByText('Level 2')).toBeInTheDocument();
  });

  it('shows total XP', () => {
    render(<ProgressWidget progress={makeProgress(150)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByText('XP: 150')).toBeInTheDocument();
  });

  it('renders a progress bar toward next level', () => {
    render(<ProgressWidget progress={makeProgress(150)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows "MAX" at max level (500 XP)', () => {
    render(<ProgressWidget progress={makeProgress(500)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByText('MAX')).toBeInTheDocument();
  });

  it('is expanded by default', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(container.querySelector('#aralxp-widget')).not.toHaveAttribute('data-collapsed', 'true');
  });

  it('collapses when toggle is clicked', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /collapse|expand/i }));
    expect(container.querySelector('#aralxp-widget')).toHaveAttribute('data-collapsed', 'true');
  });

  it('expands again when toggle clicked twice', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} />);
    const toggle = screen.getByRole('button', { name: /collapse|expand/i });
    fireEvent.click(toggle);
    fireEvent.click(toggle);
    expect(container.querySelector('#aralxp-widget')).not.toHaveAttribute('data-collapsed', 'true');
  });

  it('has data-aralxp attribute for SPA cleanup', () => {
    const { container } = render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(container.querySelector('#aralxp-widget')).toHaveAttribute('data-aralxp');
  });

  it('shows "Finish Chapter" button when page not completed', () => {
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByText('Finish Chapter')).toBeInTheDocument();
  });

  it('shows "✓ Done" button when page completed', () => {
    render(<ProgressWidget progress={makeProgress(50)} isPageCompleted={true} onFinish={vi.fn()} />);
    expect(screen.getByText('✓ Done')).toBeInTheDocument();
  });

  it('calls onFinish when finish button clicked', () => {
    const onFinish = vi.fn();
    render(<ProgressWidget progress={makeProgress(0)} isPageCompleted={false} onFinish={onFinish} />);
    fireEvent.click(screen.getByRole('button', { name: /finish chapter/i }));
    expect(onFinish).toHaveBeenCalledOnce();
  });
});
