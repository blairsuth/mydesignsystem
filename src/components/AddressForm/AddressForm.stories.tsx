import { Meta, StoryObj } from '@storybook/react';
import AddressForm from './AddressForm';

const meta = {
  title: 'AddressForm',
  component: AddressForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddressForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    streetState: ['', () => {}],
    apartmentState: ['', () => {}],
    cityState: ['', () => {}],
    stateState: ['', () => {}],
    zipState: ['', () => {}],
    countryState: [{ name: '', value: 9234587, selected: false }, () => {}],

    countryOptions: [
      { name: 'USA', value: 0, selected: false },
      { name: 'India', value: 1, selected: false },
    ],
  },
};

export const Required: Story = {
  args: {
    streetState: ['', () => {}],
    apartmentState: ['', () => {}],
    cityState: ['', () => {}],
    stateState: ['', () => {}],
    zipState: ['', () => {}],
    countryState: [{ name: '', value: 9234587, selected: false }, () => {}],

    countryOptions: [
      { name: 'USA', value: 0, selected: false },
      { name: 'India', value: 1, selected: false },
    ],

    isStreetRequired: true,
  },
};
