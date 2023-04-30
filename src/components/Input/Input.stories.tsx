import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
  render: (args: any) => <Input {...args} />,
};