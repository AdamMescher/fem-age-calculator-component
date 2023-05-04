import * as React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('Should display results when form is submitted with valid input values', async () => {
    const user = userEvent.setup();

    render(<AgeCalculator />);

    await user.type(screen.getByRole('textbox', { name: 'day' }), '15');
    await user.type(screen.getByRole('textbox', { name: 'month' }), '3');
    await user.type(screen.getByRole('textbox', { name: 'year' }), '1985');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      const results = screen.getByTestId('age-calc-results');
      expect(within(results).getByText('days')).toHaveTextContent(/19 days/i);
      expect(within(results).getByText('month')).toHaveTextContent(/1 month/i);
      expect(within(results).getByText('years')).toHaveTextContent(/38 years/i);
    })
  });
  it('Should render inline errors if form is submitted with no input values', async () => {
    const user = userEvent.setup();

    render(<AgeCalculator />);

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getAllByText(/this field is required/i)).toHaveLength(3);
  });
  it('Should render inline errors if form is submitted with invalid input values', async () => {
    const user = userEvent.setup();

    render(<AgeCalculator />);

    await user.type(screen.getByRole('textbox', { name: 'day' }), '32');
    await user.type(screen.getByRole('textbox', { name: 'month' }), '-1');
    await user.type(screen.getByRole('textbox', { name: 'year' }), '2027');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/must be a valid day/i)).toBeInTheDocument();
    expect(screen.getByText(/must be a valid month/i)).toBeInTheDocument();
    expect(screen.getByText(/must be in the past/i)).toBeInTheDocument();
  });
  it('Should render inline error if date is invalid', async () => {
    const user = userEvent.setup();

    render(<AgeCalculator />);

    await user.type(screen.getByRole('textbox', { name: 'day' }), '29');
    await user.type(screen.getByRole('textbox', { name: 'month' }), '2');
    await user.type(screen.getByRole('textbox', { name: 'year' }), '1991');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/must be a valid date/i)).toBeInTheDocument();
  });
});
