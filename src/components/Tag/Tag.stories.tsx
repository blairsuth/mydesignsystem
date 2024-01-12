import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';
import { Profile, Xmark } from '../Svgs';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Label',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Label',
  },
};

export const MediumLeadingIcon: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    leadingIcon: <Profile />,
  },
};

export const MediumTrailingIcon: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    trailingIcon: <Xmark />,
  },
};

export const MediumBothIcon: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    leadingIcon: <Profile />,
    trailingIcon: <Xmark />,
  },
};

export const MediumBothIconDisabled: Story = {
  args: {
    size: 'medium',
    label: 'Label',
    isDisabled: true,
    leadingIcon: <Profile />,
    trailingIcon: <Xmark />,
  },
};
