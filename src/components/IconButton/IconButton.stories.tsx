import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

export default {
  component: IconButton,
  title: 'Components/IconButton',
} as Meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {},
  render: (args: any) => <IconButton {...args} />,
};
