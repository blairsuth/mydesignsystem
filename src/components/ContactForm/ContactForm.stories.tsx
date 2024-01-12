import { Meta, StoryObj } from '@storybook/react';
import ContactForm from './ContactForm';
import { useState } from 'react';

const meta = {
  title: 'ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nameState: ['', () => {}],
    emailState: ['', () => {}],
    messageState: ['', () => {}],
  },
};

export const Required: Story = {
  args: {
    nameState: ['', () => {}],
    emailState: ['', () => {}],
    messageState: ['', () => {}],

    nameIsRequired: true,
    emailIsRequired: true,
    messageIsRequired: true,
  },
};

export const Disabled: Story = {
  args: {
    nameState: ['', () => {}],
    emailState: ['', () => {}],
    messageState: ['', () => {}],

    nameIsDisabled: true,
    emailIsDisabled: true,
    isButtonDisabled: true,
    messageIsDisabled: true,
  },
};

export const Helper: Story = {
  args: {
    nameState: ['', () => {}],
    emailState: ['', () => {}],
    messageState: ['', () => {}],

    nameHelperText: 'Please introduce yourself, if you wish.',
    emailHelperText: 'We will contact you by this email address.',
    messageHelperText:
      'Share whatever is on your mind in a judgement free place. This last helper text is very long to demonstrate the visual design and aesthetics. You should limit this text, no more than three lines. ',
    emailIsRequired: true,
    isButtonDisabled: true,
    messageIsRequired: true,
  },
};
