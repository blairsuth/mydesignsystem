import React, { useState } from 'react';
import Avatar from '../Avatar';
import { Meta, StoryObj } from '@storybook/react';
import Tooltip, { PointerPosition } from './Tooltip';

const AvatarTooltip = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className='avatar_group'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      onBlur={() => setIsOpen(false)}
    >
      <Tooltip
        label='Tooltip'
        content='Here is our content'
        isOpen={isOpen}
        pointerPosition={PointerPosition.BottomCenter}
      />
      <div onFocus={() => setIsOpen(true)}>
        <Avatar avatarType='initials' initials='TJ' onClick={() => setIsOpen(!isOpen)} />
      </div>
    </div>
  );
};

const meta = {
  title: 'AvatarTooltip',
  component: AvatarTooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
