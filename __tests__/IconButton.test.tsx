import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import IconButton from '@/components/IconButton';

expect.extend(toHaveNoViolations);

describe('IconButton Component', () => {
  it('Should render without errors', () => {
    render(<IconButton type="submit" label="submit" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<IconButton type="submit" label="submit" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
