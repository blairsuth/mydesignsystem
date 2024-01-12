import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export const Default: Story = {
  args: {
    label: 'Title goes here',
    isOpen: true,
    content: 'Content goes here',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
