import React from 'react';
import styles from './list-item.module.css';
import Avatar, { AvatarProps } from '../Avatar/Avatar';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';

export interface ListItemProps {
  /**
   * if present, adds a checkbox and makes the list item selectable
   */
  checkboxProps?: CheckboxProps;
  /**
   * Required primary text of the component
   */
  label: string;
  /**
   * Optional avatar
   */
  avatarProps?: AvatarProps;
}

const ListItem = ({ checkboxProps, label, avatarProps, ...props }: ListItemProps) => {
  return (
    <div className={[styles.list_item, styles.row].join(' ')}>
      <div className={[styles.avatar_container, styles.row].join(' ')}>
        {avatarProps && <Avatar {...avatarProps} />}
        <label>{label}</label>
      </div>

      {checkboxProps && <Checkbox {...checkboxProps} />}
    </div>
  );
};

export default ListItem;
