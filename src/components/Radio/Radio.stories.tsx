import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import { Check, ChevronDown } from '../Svgs';

const meta = {
  title: 'Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    label: 'Label',
    isDisabled: false,
    isSelected: true,
    htmlFor: 'radio-storybook',
  },
};

export const Unselected: Story = {
  args: {
    label: 'Label',
    isDisabled: false,
    isSelected: false,
    htmlFor: 'radio-storybook',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Label',
    isDisabled: true,
    isSelected: true,
    htmlFor: 'radio-storybook',
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: 'Label',
    isDisabled: true,
    isSelected: false,
    htmlFor: 'radio-storybook',
  },
};

export const SelectedMedium: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    isDisabled: false,
    isSelected: true,
    htmlFor: 'radio-storybook',
  },
};

export const UnselectedMedium: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    isDisabled: false,
    isSelected: false,
    htmlFor: 'radio-storybook',
  },
};

export const DisabledCheckedMedium: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    isDisabled: true,
    isSelected: true,
    htmlFor: 'radio-storybook',
  },
};

export const DisabledUncheckedMedium: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    isDisabled: true,
    isSelected: false,
    htmlFor: 'radio-storybook',
  },
};
