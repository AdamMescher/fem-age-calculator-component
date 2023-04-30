import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Form from '@/components/Form';

expect.extend(toHaveNoViolations);

describe('Form Component', () => {
  it('Should render without errors', () => {
    const name = 'login';

    render(
      <Form name={name}>
        <div>
          <label htmlFor="test">test</label>
          <input name="test" type="text" />
        </div>
      </Form>
    );

    expect(screen.getByRole('form', { name: '' })).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    const name = 'login';

    const { container } = render(
      <Form name={name}>
        <label htmlFor="test">test</label>
        <input id="test" name="test" type="text" />
      </Form>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
