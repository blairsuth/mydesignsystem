import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headers: ['header 1', 'Header 2', 'Header 3'],
    content: [
      ['Content 1', 'Content 2', 'Content 3'],
      ['Content 1', 'Content 2', 'Content 3'],
      ['Content 1', 'Content 2', 'Content 3'],
      ['Content 1', 'Content 2', 'Content 3'],
      ['Content 1', 'Content 2', 'Content 3'],
    ],
  },
};
