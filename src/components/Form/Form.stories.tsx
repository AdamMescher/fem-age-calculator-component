import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Form from './Form';

export default {
  component: Form,
  title: 'Components/Form',
} as Meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {},
  render: (args: any) => <Form {...args} />,
};
