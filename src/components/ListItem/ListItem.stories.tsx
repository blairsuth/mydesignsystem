import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import avatarImage from '../ListItem/images/avatar2.png';
import ListItem from './ListItem';

const meta = {
  title: 'ListItem',
  component: ListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarListItemUnchecked: Story = {
  args: {
    avatarProps: { image: avatarImage, avatarType: 'image' },
    label: 'Jane Doe',
    checkboxProps: {
      isSelected: false,
      onChange: () => {},
    },
  },
};

export const AvatarListItemChecked: Story = {
  args: {
    avatarProps: { image: avatarImage, avatarType: 'image' },
    label: 'Jane Doe',
    checkboxProps: {
      isSelected: true,
      onChange: () => {},
    },
  },
};

export const AvatarListItemNoCheckbox: Story = {
  args: {
    avatarProps: { image: avatarImage, avatarType: 'image' },
    label: 'Jane Doe',
  },
};

export const ListItemChecked: Story = {
  args: {
    label: 'Jane Doe',
    checkboxProps: {
      isSelected: true,
      onChange: () => {},
    },
  },
};
