import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BreadCrumb from './BreadCrumb';

const meta = {
  title: 'BreadCrumb',
  component: BreadCrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {
    separatorStyle: 'arrow',
    crumbs: [
      { name: 'Home', route: '/' },
      { name: 'Preferences', route: '/' },
      { name: 'Notifications', route: '/' },
    ],
  },
};

export const ForwardSlash: Story = {
  args: {
    separatorStyle: 'slash',
    crumbs: [
      { name: 'Home', route: '/' },
      { name: 'Preferences', route: '/' },
      { name: 'Notifications', route: '/' },
    ],
  },
};

export const ManyCrumbs: Story = {
  args: {
    crumbs: [
      { name: 'Home', route: '/' },
      { name: 'Preferences', route: '/' },
      { name: 'Notifications', route: '/' },
      { name: 'Email', route: '/' },
      { name: 'Password', route: '/' },
      { name: 'Reset', route: '/' },
    ],
  },
};

export const SingleCrumb: Story = {
  args: {
    crumbs: [{ name: 'Home', route: '/' }],
  },
};
