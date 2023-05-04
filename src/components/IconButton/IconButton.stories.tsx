import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

export default {
  component: IconButton,
  title: 'Components/IconButton',
} as Meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: 'arrow',
  },
  render: (args: any) => <IconButton label="submit" {...args} />,
};
