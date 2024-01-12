import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta = {
  title: 'Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchChecked: Story = {
  args: {
    label: 'This is On',
    isSelected: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'This is Off',
    isSelected: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'This is Disabled',
    isSelected: false,
    isDisabled: true,
  },
};

export const SelectedDisabled: Story = {
  args: {
    label: 'This is Disabled',
    isSelected: true,
    isDisabled: true,
  },
};
