import React, { lazy } from 'react';
import styles from './avatar.module.css';

export interface AvatarProps {
  /**
   * Specifies whether the avatar is disabled.
   */
  isDisabled?: boolean;
  /**
   * The background color of the avatar.
   */
  backgroundColor?: string;
  /**
   * The size of the avatar. Can be 'xsmall', 'small', 'medium', or 'large'.
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /**
   *  The type of avatar. Can be 'icon', 'image', or 'initials'.
   */
  avatarType?: 'icon' | 'image' | 'initials';
  /**
   * The initials to display if the avatar type is 'initials'. Limit is 2 characters.
   */
  initials?: string;
  /**
   * Optional onClick
   */
  onClick?: () => any;
  /**
   *  Optional icon
   */
  icon?: React.ReactNode;
  /**
   *  Optional image
   */
  image?: string;
}

const Avatar = ({
  isDisabled = false,
  size = 'medium',
  backgroundColor,
  avatarType = 'initials',
  onClick = () => {},
  icon,
  initials = '',
  image = '',
  ...props
}: AvatarProps) => {
  return (
    <button
      className={[styles.avatar, styles[size], styles[avatarType]].join(' ')}
      onClick={onClick}
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: backgroundColor,
      }}
      disabled={isDisabled}
    >
      {avatarType === 'initials' && <span>{initials.substring(0, 2)}</span>}
      {avatarType === 'icon' && icon}
    </button>
  );
};

export default Avatar;
