import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AgeCalcResults from './AgeCalcResults';

export default {
  component: AgeCalcResults,
  title: 'Components/AgeCalcResults',
} as Meta;

type Story = StoryObj<typeof AgeCalcResults>;

export const Default: Story = {
  args: {
    measures: [{ value: "105", metric: 'years ' },
    { value: "8", metric: 'months ' },
    { value: "31", metric: 'days ' }]
  },
  render: (args: any) => <AgeCalcResults {...args} />,
};

export const Null: Story = {
  args: {
    measures: [{ value: null, metric: 'years ' },
    { value: null, metric: 'months ' },
    { value: null, metric: 'days ' }]
  },
  render: (args: any) => <AgeCalcResults {...args} />,
};