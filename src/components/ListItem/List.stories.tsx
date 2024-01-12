import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import avatarImage1 from '../ListItem/images/avatar1.png';
import avatarImage2 from '../ListItem/images/avatar2.png';
import avatarImage3 from '../ListItem/images/avatar3.png';
import avatarImage4 from '../ListItem/images/avatar4.png';
import ListItem from './ListItem';

const listOfUsers: { name: string; image: string; selected?: boolean }[] = [
  {
    name: 'Johnny',
    image: avatarImage1,
    selected: false,
  },
  {
    name: 'Olivia',
    image: avatarImage2,
    selected: false,
  },
  {
    name: 'Beck',
    image: avatarImage3,
    selected: false,
  },
  {
    name: 'Donald',
    image: avatarImage4,
    selected: false,
  },
];

// NOTE This component is NOT part of the component library. It's purely to showcase the ListItem and Checkbox components.

const List = () => {
  const [users, setUsers] = useState(listOfUsers);

  const handleCheck = (index: number) => {
    const updatedUsers = [...users];
    const foundUser = updatedUsers[index];
    const newCheckState = foundUser.selected
      ? undefined
      : foundUser.selected === undefined
      ? false
      : true;
    updatedUsers.splice(index, 1, { ...foundUser, selected: newCheckState });
    setUsers(updatedUsers);
  };

  return (
    <div>
      {users.map((u, index) => {
        return (
          <ListItem
            label={u.name}
            avatarProps={{ avatarType: 'image', image: u.image }}
            checkboxProps={{ isSelected: u.selected, onChange: () => handleCheck(index) }}
            key={u.name + index}
          />
        );
      })}
    </div>
  );
};

const meta = {
  title: 'List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SampleList: Story = {
  args: {},
};
