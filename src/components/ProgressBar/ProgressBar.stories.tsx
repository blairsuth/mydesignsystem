import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;
export default meta;

type Story = StoryObj<typeof meta>;
/**
 * The Progress Bar represents the completion progress of a task.
 */
export const Default: Story = {
  args: {
    value: 77,
  },
};

/**
 * A label can be important for accessibility purposes as well as providing more context to the User.
 */
export const Labeled: Story = {
  args: {
    value: 77,
    label: 'Download: ',
    aria: 'Download progress for your favorite movie.',
  },
};

/**
 * It may be useful for the bar to fill its container.
 *
 * Width is set to 90 view width, to allow for some spacing.
 */
export const Fill: Story = {
  args: {
    value: 23,
    fill: true,
    aria: 'Progress bar for your video game level.',
  },
};
