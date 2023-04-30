import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AgeCalcResults from './AgeCalcResults';

export default {
  component: AgeCalcResults,
  title: 'Components/AgeCalcResults',
} as Meta;

type Story = StoryObj<typeof AgeCalcResults>;

export const Default: Story = {
  args: {},
  render: (args: any) => <AgeCalcResults {...args} />,
};
