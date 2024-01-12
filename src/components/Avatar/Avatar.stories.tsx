import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { Profile } from '../Svgs';
import avatarImage from '../Avatar/images/avatar1.png';

const meta = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XSmallImage: Story = {
  args: {
    size: 'xsmall',
    avatarType: 'image',
    image: avatarImage,
  },
};

export const SmallImage: Story = {
  args: {
    size: 'small',
    avatarType: 'image',
    image: avatarImage,
  },
};

export const MediumImage: Story = {
  args: {
    size: 'medium',
    avatarType: 'image',
    image: avatarImage,
  },
};

export const LargeImage: Story = {
  args: {
    size: 'large',
    avatarType: 'image',
    image: avatarImage,
  },
};

export const XSmallIcon: Story = {
  args: {
    size: 'xsmall',
    avatarType: 'icon',
    icon: <Profile />,
  },
};

export const SmallIcon: Story = {
  args: {
    size: 'small',
    avatarType: 'icon',
    icon: <Profile />,
  },
};

export const MediumIcon: Story = {
  args: {
    size: 'medium',
    avatarType: 'icon',
    icon: <Profile />,
  },
};

export const LargeIcon: Story = {
  args: {
    size: 'large',
    avatarType: 'icon',
    icon: <Profile />,
  },
};

export const XSmallInitials: Story = {
  args: {
    size: 'xsmall',
    avatarType: 'initials',
    initials: 'BS',
  },
};

export const SmallInitials: Story = {
  args: {
    size: 'small',
    avatarType: 'initials',
    initials: 'BS',
  },
};

export const MediumInitials: Story = {
  args: {
    size: 'medium',
    avatarType: 'initials',
    initials: 'BS',
  },
};

export const LargeInitials: Story = {
  args: {
    size: 'large',
    avatarType: 'initials',
    initials: 'BS',
  },
};
