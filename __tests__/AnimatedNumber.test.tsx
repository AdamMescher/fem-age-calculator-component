import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import AnimatedNumber from '@/components/AnimatedNumber';

expect.extend(toHaveNoViolations);

describe("AnimatedNumber Component", () => {
  it("Should render without errors", () => {
    render(<AnimatedNumber start={0} end={100} />);

    expect(screen.getByTestId('animated-number')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<AnimatedNumber start={10} end={0} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('should finish with the end value', async () => {
    render(<AnimatedNumber start={0} end={100} />);
    waitFor(() => {
      expect(screen.getByTestId('animated-number')).toHaveTextContent('100');
    })
  });
});