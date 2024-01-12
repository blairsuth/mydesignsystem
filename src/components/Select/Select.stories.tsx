import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { name: 'Harmony', value: 12, selected: false },
  { name: 'Unity', value: 24, selected: false },
  { name: 'Resilience', value: 18, selected: false },
  { name: 'Creativity', value: 30, selected: false },
  { name: 'Empathy', value: 27, selected: false },
  { name: 'Courage', value: 33, selected: false },
  { name: 'Wisdom', value: 22, selected: false },
  { name: 'Freedom', value: 14, selected: false },
  { name: 'Integrity', value: 29, selected: false },
  { name: 'Passion', value: 37, selected: false },
  { name: 'Gratitude', value: 21, selected: false },
  { name: 'Respect', value: 25, selected: false },
  { name: 'Optimism', value: 35, selected: false },
  { name: 'Compassion', value: 31, selected: false },
  { name: 'Balance', value: 28, selected: false },
];

export const Default: Story = {
  args: {
    aboveLabel: 'You can do anything you set your mind to.',
    dropdownLabel: 'Select Your Dream',
    options: options,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: options,
  },
};

export const Error: Story = {
  args: {
    aboveLabel: 'Error State: ',
    dropdownLabel: "It's okay to make mistakes.",
    options: options,
    error: true,
  },
};

export const LongError: Story = {
  args: {
    aboveLabel: 'Error State: ',
    dropdownLabel: "It's okay to make mistakes.",
    errorLabel:
      "Oops. It appears a mistake has been made. I'm not smart enough, as software, to tell you what that mistake was. Otherwise I would fix it before it happened. I've failed you, and I apologize.",
    options: options,
    error: true,
  },
};
