import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const logo = (
  <>
    <img
      src='https://www.intimetec.com/hubfs/External%20Favicon%204.png'
      alt='in time tec logo'
      width={50}
      height={50}
      onClick={() => alert('In Time Tec!')}
    />
  </>
);

const linkArr = [
  <a href='https://www.intimetec.com/'>Dashboard</a>,
  <a href='https://www.intimetec.com/'>Invoice Overview</a>,
  <a href='https://www.intimetec.com/'>Create Invoice</a>,
  <a href='https://www.intimetec.com/'>Contact</a>,
];

export const Default: Story = {
  args: {
    leadingLogo: logo,

    centeredElements: linkArr,

    trailingElement: <Button label='Sign In' />,
  },
};

export const ProfileIcon: Story = {
  args: {
    leadingLogo: logo,

    centeredElements: linkArr,

    trailingElement: (
      <Avatar avatarType='initials' initials='TJ' onClick={() => alert('Clickable')} />
    ),
  },
};

export const HamburgerIcon: Story = {
  args: {
    leadingLogo: logo,

    centeredElements: linkArr,

    trailingElement: <HamburgerMenu menuOptions={linkArr} />,
  },
};
