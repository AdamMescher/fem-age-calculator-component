import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Form from './Form';
import Input from '../Input';

export default {
  component: Form,
  title: 'Components/Form',
} as Meta;

type FormValues = {
  year: string;
}

const InputWithWrapper = () => {
  const type = 'text';
  const name = 'year';
  const label = 'year';
  const placeholder = 'YYYY';

  const {
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { year: '' },
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

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {},
  render: (args: any) => (<Form {...args}>
    <InputWithWrapper />
  </Form>),
};
