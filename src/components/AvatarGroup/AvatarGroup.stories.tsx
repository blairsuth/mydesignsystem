import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';
import avatarImage1 from '../Avatar/images/avatar1.png';
import avatarImage2 from '../Avatar/images/avatar2.png';
import avatarImage3 from '../Avatar/images/avatar3.png';
import avatarImage4 from '../Avatar/images/avatar4.png';
import avatarImage5 from '../Avatar/images/avatar5.png';

const meta = {
  title: 'AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumGroup: Story = {
  args: {
    maxSize: 6,
    avatarSize: 'medium',
    group: [
      { initials: 'TS', image: avatarImage1 },
      { initials: 'OB', image: avatarImage2 },
      { initials: 'AC', image: avatarImage3 },
      { initials: 'AC', image: avatarImage4 },
      { initials: 'AC', image: avatarImage5 },
    ],
  },
};

export const SmallGroup: Story = {
  args: {
    maxSize: 6,
    avatarSize: 'small',
    group: [
      { initials: 'TS', image: avatarImage1 },
      { initials: 'OB', image: avatarImage2 },
      { initials: 'AC', image: avatarImage3 },
      { initials: 'AC', image: avatarImage4 },
      { initials: 'AC', image: avatarImage5 },
    ],
  },
};

export const MixedMediumGroup: Story = {
  args: {
    group: [
      { initials: 'TS', image: avatarImage1 },
      { initials: 'OB', image: avatarImage2 },
      { initials: 'AC', image: '' },
      { initials: 'AC', image: avatarImage4 },
      { initials: 'AC', image: '' },
    ],
  },
};

export const InitialsMediumGroup: Story = {
  args: {
    group: [
      { initials: 'TS', image: '' },
      { initials: 'OB', image: '' },
      { initials: 'AC', image: '' },
      { initials: 'AC', image: '' },
      { initials: 'AC', image: '' },
    ],
  },
};

export const LargeGroup: Story = {
  args: {
    maxSize: 6,
    avatarSize: 'large',
    group: [
      { initials: 'TS', image: avatarImage1 },
      { initials: 'OB', image: avatarImage2 },
      { initials: 'AC', image: avatarImage3 },
      { initials: 'AC', image: avatarImage4 },
      { initials: 'AC', image: avatarImage5 },
    ],
  },
};
