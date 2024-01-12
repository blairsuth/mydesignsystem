import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxChecked: Story = {
  args: {
    label: 'Jane Doe',
    isSelected: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Jane Doe',
    isSelected: false,
  },
};
export const Indeterminate: Story = {
  args: {
    label: 'Jane Doe',
  },
};

export const CheckboxDisabled: Story = {
  args: {
    label: 'Jane Doe',
    isSelected: false,
    isDisabled: true,
  },
};

export const CheckboxSelectedDisabled: Story = {
  args: {
    label: 'Jane Doe',
    isSelected: true,
    isDisabled: true,
  },
};
