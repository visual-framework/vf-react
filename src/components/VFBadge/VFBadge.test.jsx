import React from 'react';
import { render, screen } from '@testing-library/react';
import VFBadge from './VFBadge';

describe('VFBadge', () => {
  it('renders with default props', () => {
    render(<VFBadge text="Test Badge" />);
    const badge = screen.getByText('Test Badge');
    expect(badge).toHaveClass('vf-badge', 'vf-badge--primary');
  });

  it('applies custom theme', () => {
    render(<VFBadge text="Test Badge" theme="secondary" />);
    const badge = screen.getByText('Test Badge');
    expect(badge).toHaveClass('vf-badge--secondary');
  });

  it('applies outline and rounded modifiers', () => {
    render(<VFBadge text="Test Badge" outline rounded />);
    const badge = screen.getByText('Test Badge');
    expect(badge).toHaveClass('vf-badge--outline', 'vf-badge--rounded');
  });
});