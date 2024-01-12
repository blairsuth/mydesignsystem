import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import darkImage from '../Card/images/dark.jpg';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const title = 'Fish of the Ocean';
const description =
  'Fish are an incredibly diverse group of animals, with over 30,000 different species. ';

export const HorizontalTwoButtons: Story = {
  args: {
    cardType: 'horizontal',
    title: title,
    content: description,
    actionPrimary: () => {},
    actionPrimaryLabel: 'Submit',
    actionSecondary: () => {},
    actionSecondaryLabel: 'Cancel',
    imageUrl: darkImage,
    tags: [{ label: 'Saltwater' }, { label: 'Tropical' }],
  },
};

export const HorizontalNoButtons: Story = {
  args: {
    cardType: 'horizontal',
    title: title,
    content: description,
    imageUrl: darkImage,
    tags: [{ label: 'Saltwater' }, { label: 'Tropical' }],
  },
};

export const Horizontal: Story = {
  args: {
    cardType: 'horizontal',
    title: title,
    content: description,
    actionPrimary: () => {},
    actionPrimaryLabel: 'Submit',
    imageUrl: darkImage,
    tags: [],
  },
};

export const Vertical: Story = {
  args: {
    cardType: 'vertical',
    title: title,
    content: description,
    actionPrimary: () => {},
    actionPrimaryLabel: 'Submit',
    actionSecondary: () => {},
    actionSecondaryLabel: 'Cancel',
    imageUrl: darkImage,
    imageStyle: 'regular',
    tags: [
      { label: 'Tag 1' },
      { label: 'Tag 2' },
      { label: 'Tag 3' },
      { label: 'Tag 4' },
      { label: 'Tag 5' },
      { label: 'Tag 6' },
      { label: 'Tag 7' },
      { label: 'Tag 8' },
    ],
  },
};

export const VerticalFilledImage: Story = {
  args: {
    cardType: 'vertical',
    title: title,
    content: description,
    actionPrimary: () => {},
    actionPrimaryLabel: 'Submit',
    actionSecondary: () => {},
    actionSecondaryLabel: 'Cancel',
    imageUrl: darkImage,
    imageStyle: 'filled',
    tags: [{ label: 'Tag 1' }, { label: 'Tag 2' }],
  },
};

export const VerticalPrimaryButtonOnly: Story = {
  args: {
    cardType: 'vertical',
    title: title,
    content: description,
    actionPrimary: () => {},
    actionPrimaryLabel: 'Purchase',
    imageUrl: darkImage,
    imageStyle: 'filled',
    tags: [{ label: 'Saltwater' }, { label: 'Tropical' }],
  },
};
