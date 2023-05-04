import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import AgeCalcResults from '@/components/AgeCalcResults';

expect.extend(toHaveNoViolations);

describe('AgeCalcResults Component', () => {
  it('Should render without errors', () => {
    const measures = [{ value: "5", metric: 'years' }];

    render(<AgeCalcResults key={measures[0].metric} measures={measures} />);

    expect(screen.getByTestId('age-calc-results')).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const measures = [{ value: "5", metric: 'years' }];

    const { container } = render(
      <AgeCalcResults key={measures[0].metric} measures={measures} />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
