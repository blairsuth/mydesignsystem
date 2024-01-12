import React, { lazy } from 'react';
import './avatarGroup.css';
import Avatar, { AvatarProps } from '../Avatar/Avatar';

export interface AvatarGroupProps {
  /**
   * Specifies whether the avatar group is disabled.
   */
  isDisabled?: boolean;
  /**
   * The background color of the avatar.
   */
  group: AvatarProps[];
  /*
   * Max group size
   */
  maxSize?: number;
  /*
   * Max group size
   */
  avatarSize?: 'xsmall' | 'small' | 'medium' | 'large';
  /*
   * Optional onClick applied to the entire avatar group
   */
  onClick?: () => any;
}

const AvatarGroup = ({
  isDisabled = true,
  avatarSize = 'medium',
  maxSize = 5,
  group = [],
  onClick = () => {},
  ...props
}: AvatarGroupProps) => {
  const randomThemeColor = () => {
    const colors = ['--primary', '--primary-200', '--tertiary'];
    return `var(${colors[Math.floor(Math.random() * colors.length)]})`;
  };

  return (
    <div className='avatar-group'>
      {group
        ?.map((a, index) => {
          return (
            <div style={{ zIndex: index + 1 }} key={'avatar' + index}>
              <Avatar
                onClick={onClick}
                isDisabled={isDisabled}
                size={avatarSize}
                avatarType={a.image ? 'image' : 'initials'}
                image={a.image}
                initials={a.initials}
                backgroundColor={randomThemeColor()}
              />
            </div>
          );
        })
        .splice(0, maxSize)}
    </div>
  );
};

export default AvatarGroup;
