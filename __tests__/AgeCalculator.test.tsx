import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import AgeCalculator from '@/components/AgeCalculator';

expect.extend(toHaveNoViolations);

describe('AgeCalculator Component', () => {
  it.skip('Should render without errors', () => {
    render(<AgeCalculator />);

    expect(screen.getByTestId('age-calculator')).toBeInTheDocument();
  });
  it.skip('Should render without Axe Core A11Y errors', async () => {
    const { container } = render(<AgeCalculator />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('Should display inline errors if input field is empty', async () => {
    const user = UserEvent.setup();

    render(<AgeCalculator />);

    await user.click(screen.getByRole('button'));

    expect(screen.getAllByText(/this field is required/i)).toHaveLength(3);
  });
  it.skip('Should display inline errors if date is invalid', async () => {
    const user = UserEvent.setup();

    render(<AgeCalculator />);

    await user.click(screen.getByLabelText('day'));
    await user.keyboard('30');
    await user.click(screen.getByLabelText('month'));
    await user.keyboard('2');
    await user.click(screen.getByLabelText('year'));
    await user.keyboard('1991');

    await user.click(screen.getByRole('button'));

    expect(await screen.findByText(/must be a valid date/i)).toBeVisible();
  });
});
