import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'Modal Title Goes Here',
    width: 'small_modal',
    body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
  },
};

export const Medium: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'Modal Title Goes Here',
    width: 'medium_modal',
    body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
  },
};

export const Large: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'Modal Title Goes Here',
    width: 'large_modal',
    body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
  },
};

export const FitContent: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'Tiny',
    width: 'modal_fit_content',
    body: 'Simplistic is Beautiful.',
  },
};

export const Disabled: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'Modal Title Goes Here',
    submitIsDisabled: true,
    body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
  },
};

export const BuildYourOwn: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: undefined,
    body: undefined,
    includeFooter: false,
    customElements: [
      <>
        <h2>Partner and Project</h2>
      </>,
      <>
        <p>
          Select a partner and project in dropdown. Type in some keywords to find the partner or
          project.
        </p>
      </>,
    ],
  },
};

export const WithSlot: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'Modal Title Goes Here',
    body: undefined,
    includeFooter: true,
    customElements: [
      <>
        <h2>Custom Element</h2>
      </>,
      <>
        <p>This is receiving custom elements</p>
      </>,
      <>
        <button>Cool</button>
      </>,
    ],
  },
};

export const HeartModal: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: "Congratulations! You've done it!",
    body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
    icon: (
      <>
        <h2>❤️</h2>
      </>
    ),
  },
};

export const WarningModal: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'Look out!',
    body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
    icon: (
      <>
        <h2>⚠️</h2>
      </>
    ),
  },
};

export const ModalWithImage: Story = {
  args: {
    isCentered: false,
    isOpen: true,
    title: 'ITT!',
    customElements: [
      <>
        <img
          src='https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg?cs=srgb&dl=pexels-james-wheeler-3774243.jpg&fm=jpg'
          alt=''
          width={500}
          height={100}
        />
      </>,
    ],
    body: 'Company:',
  },
};
