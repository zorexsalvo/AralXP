import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { h } from 'preact';
import { FinishButton } from './FinishButton';

describe('FinishButton', () => {
  it('renders "Finish Chapter" when not completed', () => {
    render(<FinishButton isCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByRole('button', { name: /finish chapter/i })).toBeInTheDocument();
  });

  it('shows "+50 XP" label when not completed', () => {
    render(<FinishButton isCompleted={false} onFinish={vi.fn()} />);
    expect(screen.getByText('+50 XP')).toBeInTheDocument();
  });

  it('renders "✓ Completed" when page is already complete', () => {
    render(<FinishButton isCompleted={true} onFinish={vi.fn()} />);
    expect(screen.getByRole('button', { name: /completed/i })).toBeInTheDocument();
  });

  it('button is disabled when already complete', () => {
    render(<FinishButton isCompleted={true} onFinish={vi.fn()} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls onFinish when clicked and not completed', () => {
    const onFinish = vi.fn();
    render(<FinishButton isCompleted={false} onFinish={onFinish} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onFinish).toHaveBeenCalledOnce();
  });

  it('does not call onFinish when button is disabled', () => {
    const onFinish = vi.fn();
    render(<FinishButton isCompleted={true} onFinish={onFinish} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onFinish).not.toHaveBeenCalled();
  });

  it('has data-aralxp attribute for SPA cleanup', () => {
    const { container } = render(<FinishButton isCompleted={false} onFinish={vi.fn()} />);
    expect(container.firstChild).toHaveAttribute('data-aralxp');
  });
});
