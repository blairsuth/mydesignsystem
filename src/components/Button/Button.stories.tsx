import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Check, ChevronDown } from '../Svgs';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    label: 'Label',
  },
};

export const LeadingIcon: Story = {
  args: {
    buttonType: 'primary',
    label: 'Label',
    iconStyle: 'leading',
    icon: <Check />,
  },
};

export const TrailingIcon: Story = {
  args: {
    buttonType: 'primary',
    label: 'Label',
    iconStyle: 'trailing',
    icon: <ChevronDown />,
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    label: 'Label',
  },
};

export const Outline: Story = {
  args: {
    buttonType: 'outline',
    label: 'Label',
  },
};
export const Warning: Story = {
  args: {
    buttonType: 'warning',
    label: 'Label',
  },
};
export const Ghost: Story = {
  args: {
    buttonType: 'ghost',
    label: 'Label',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    label: 'Label',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Label',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Label',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Label',
  },
};
