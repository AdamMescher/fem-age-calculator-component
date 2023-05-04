import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AnimatedNumber from './AnimatedNumber';

export default {
  component: AnimatedNumber,
  title: 'Components/AnimatedNumber',
} as Meta;

type Story = StoryObj<typeof AnimatedNumber>;

export const Default: Story = {
  args: {
    start: 0,
    end: 100,
  },
  render: (args: any) => <AnimatedNumber {...args} />,
};