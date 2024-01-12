import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '../TextArea';
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
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

export const Errors: Story = {
  args: {
    isRequired: true,
    titleText: 'Label',
    placeholderText: 'Placeholder',
    helperText: 'Helper text Donec ullamcorper nulla non metus auctor fringilla.',
    errors: ['Must be longer than 8 characters', 'Invalid characters'],
  },
};
