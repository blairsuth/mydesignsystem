import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordian';
import { AlertCircle } from '../Svgs';
import React from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    showIcon: true,
    title: 'Title',
    content: 'Content',
    actionPrimary: () => {},
    actionPrimaryLabel: 'Submit',
    actionSecondary: () => {},
    actionSecondaryLabel: 'Cancel',
  },
};

export const Icon: Story = {
  args: {
    showIcon: true,
    title: 'Title',
    content: 'Content',
    titleIcon: <AlertCircle />,
    actionPrimary: () => {},
    actionPrimaryLabel: 'Submit',
    actionSecondary: () => {},
    actionSecondaryLabel: 'Cancel',
  },
};
