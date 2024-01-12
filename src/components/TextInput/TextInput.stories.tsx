import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../TextInput';
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    errors: { control: 'none' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Required: Story = {
  args: {
    isRequired: true,
    titleText: 'Label',
    placeholderText: 'Placeholder',
    helperText: 'Helper text Donec ullamcorper nulla non metus auctor fringilla.',
  },
};

export const Optional: Story = {
  args: {
    isRequired: false,
    titleText: 'Label',
    placeholderText: 'Placeholder',
    helperText: 'Helper text Donec ullamcorper nulla non metus auctor fringilla.',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isRequired: false,
    titleText: 'Label',
    placeholderText: 'Placeholder',
    helperText: 'Helper text Donec ullamcorper nulla non metus auctor fringilla.',
  },
};

export const Password: Story = {
  args: {
    isDisabled: false,
    isRequired: true,
    titleText: 'Password',
    placeholderText: 'Enter Password',
    inputType: 'password',
    helperText: 'Helper text Donec ullamcorper nulla non metus auctor fringilla.',
  },
};

export const Number: Story = {
  args: {
    isDisabled: false,
    isRequired: true,
    titleText: 'Number',
    placeholderText: 'Enter Value',
    inputType: 'number',
    helperText: 'Helper text Donec ullamcorper nulla non metus auctor fringilla.',
  },
};

export const Errors: Story = {
  args: {
    isRequired: true,
    titleText: 'Label',
    placeholderText: 'Placeholder',
    helperText: 'Helper text Donec ullamcorper nulla non metus auctor fringilla.',
    errors: ['Must be longer than 8 characters', 'Invalid characters'],
  },
};
