import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from '.';
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Search: Story = {
  args: {
    titleText: 'Search',
  },
};

export const SearchOnly: Story = {
  args: {
    titleText: 'Search',
    searchOnly: true,
  },
};

export const NoResults: Story = {
  args: {
    searchValue: 'Finding Dory',
    titleText: 'Search',
    isLoadingResults: false,
  },
};

export const FewResults: Story = {
  args: {
    searchValue: 'Finding Dory',
    titleText: 'Search',
    isLoadingResults: false,
    searchResults: [
      { name: 'One Fish', value: 'One Fish' },
      { name: 'Two Fish', value: 'Two Fish' },
      { name: 'Red Fish', value: 'Red Fish' },
    ],
  },
};

export const ManyResults: Story = {
  args: {
    searchValue: 'Finding Dory',
    titleText: 'Search',
    isLoadingResults: false,
    searchResults: [
      { name: 'One Fish', value: 'One Fish' },
      { name: 'Two Fish', value: 'Two Fish' },
      { name: 'Red Fish', value: 'Red Fish' },
      { name: 'Blue Fish', value: 'Blue Fish' },
      { name: 'One Fish', value: 'One Fish' },
      { name: 'Two Fish', value: 'Two Fish' },
      { name: 'Red Fish', value: 'Red Fish' },
      { name: 'Blue Fish', value: 'Blue Fish' },
      { name: 'One Fish', value: 'One Fish' },
      { name: 'Two Fish', value: 'Two Fish' },
      { name: 'Red Fish', value: 'Red Fish' },
      { name: 'Blue Fish', value: 'Blue Fish' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    titleText: 'Search',
  },
};
