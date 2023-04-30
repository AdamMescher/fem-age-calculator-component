import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import AgeCalculator from '@/components/AgeCalculator';

expect.extend(toHaveNoViolations);

describe('AgeCalculator Component', () => {
  it('Should render without errors', () => {
    render(<AgeCalculator />);

    expect(screen.getByTestId('age-calculator')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<AgeCalculator />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
