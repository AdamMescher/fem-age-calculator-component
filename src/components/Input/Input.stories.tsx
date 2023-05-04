import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Input from './Input';

type FormValues = {
  day: string;
}

const InputWithForm = () => {
  const type = 'text';
  const name = 'day';
  const label = 'day';
  const placeholder = 'DD';

  const {
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { day: '' },
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

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
  render: (args: any) => <InputWithForm {...args} />,
};
