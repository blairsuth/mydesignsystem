import React from 'react';
import styles from './tag.module.css';

export interface TagProps {
  /**
   * isDisabled?
   */
  isDisabled?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the tag be?
   */
  size?: 'small' | 'medium';
  /**
   * Tag contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   *  Optional leading icon
   */
  leadingIcon?: React.ReactNode;

  /**
   *  Optional trailing icon
   */
  trailingIcon?: React.ReactNode;
}

const Tag = ({
  isDisabled = false,
  size = 'medium',
  backgroundColor,
  label,
  leadingIcon,
  trailingIcon,
  ...props
}: TagProps) => {
  return (
    <button className={[styles.tag, styles[size]].join(' ')} disabled={isDisabled}>
      {leadingIcon ? leadingIcon : null}
      <span>{label}</span>
      {trailingIcon ? trailingIcon : null}
    </button>
  );
};

export default Tag;
