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
    measures:
      [
        { value: "105", metric: 'year' },
        { value: "8", metric: 'month' },
        { value: "31", metric: 'day' }
      ]
  },
  render: (args: any) => <AgeCalcResults {...args} />,
};

export const Null: Story = {
  args: {
    measures: [
      { value: null, metric: 'year' },
      { value: null, metric: 'month' },
      { value: null, metric: 'day' }
    ]
  },
  render: (args: any) => <AgeCalcResults {...args} />,
};

export const Singular: Story = {
  args: {
    measures: [
      { value: "1", metric: 'year' },
      { value: "1", metric: 'month' },
      { value: "1", metric: 'day' }
    ]
  },
  render: (args: any) => <AgeCalcResults {...args} />,
};

export const Plurar: Story = {
  args: {
    measures: [
      { value: "2", metric: 'year' },
      { value: "2", metric: 'month' },
      { value: "2", metric: 'day' }
    ]
  },
  render: (args: any) => <AgeCalcResults {...args} />,
};