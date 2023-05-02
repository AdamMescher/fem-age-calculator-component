import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import AnimatedNumber from '@/components/AnimatedNumber';

expect.extend(toHaveNoViolations);

describe("AnimatedNumber Component", () => {
  it("Should render without errors", () => {
    render(<AnimatedNumber />);
    
    expect(screen.getByTestId('animated-number')).toBeInTheDocument();
  });
  it("Should render without Axe Core A11Y errors", async () => {
    const { container } = render(<AnimatedNumber />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});