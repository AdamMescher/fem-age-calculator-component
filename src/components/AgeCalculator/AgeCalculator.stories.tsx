import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AgeCalculator from './AgeCalculator';

export default {
  component: AgeCalculator,
  title: 'Components/AgeCalculator',
} as Meta;

type Story = StoryObj<typeof AgeCalculator>;

export const Default: Story = {
  args: {},
  render: (args: any) => <AgeCalculator {...args} />,
};
