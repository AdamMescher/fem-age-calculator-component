import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';

expect.extend(toHaveNoViolations);

describe('Input Component', () => {
  it('Should render without errors', () => {
    interface FormValues {
      firstName: string;
    }

    const InputWithForm = () => {
      const type = 'text';
      const name = 'firstName';
      const label = 'First Name';
      const placeholder = 'Bill';

      const {
        control,
        formState: { errors },
      } = useForm<FormValues>({
        defaultValues: { firstName: '' },
        mode: 'onBlur',
      });

      return (
        <Input
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          control={control}
          errors={errors}
        />
      );
    };

    render(<InputWithForm />);

    expect(screen.getByRole('textbox', { name: 'First Name' })).toBeInTheDocument();
  });
  it('Should render without Axe Core A11Y errors', async () => {
    interface FormValues {
      firstName: string;
    }

    const InputWithForm = () => {
      const type = 'text';
      const name = 'firstName';
      const label = 'First Name';
      const placeholder = 'Bill';

      const {
        control,
        formState: { errors },
      } = useForm<FormValues>({
        defaultValues: { firstName: '' },
        mode: 'onBlur',
      });

      return (
        <Input
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          control={control}
          errors={errors}
        />
      );
    };

    const { container } = render(<InputWithForm />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it('Should show inline error message if input error is invalid', async () => {
    const InputWithForm = () => {
      const type = 'text';
      const name = 'firstName';
      const label = 'First Name';
      const placeholder = 'Bill';
      const errors = {
        firstName: {
          message: 'error message text',
          type: 'min',
        },
      };

      const { control } = useForm<{ firstName: string }>({
        defaultValues: { firstName: '' },
        mode: 'onBlur',
      });

      return (
        <Input
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          control={control}
          errors={errors}
        />
      );
    };

    render(<InputWithForm />);

    expect(screen.getByText('error message text')).toBeInTheDocument();
  });
});
