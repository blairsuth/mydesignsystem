import React from 'react';
import styles from './button.module.css';

export interface ButtonProps {
  /**
   * isDisabled?
   */
  isDisabled?: boolean;
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * When grow is selected, the button expands horizontally to fill the space of its parent container. By default, regular is selected
   */
  width?: 'regular' | 'grow';
  /**
   * Button label
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => any;
  /**
   *  Optional Button Types
   */
  buttonType?: 'primary' | 'secondary' | 'outline' | 'warning' | 'ghost';
  /**
   *  Which side should the icon be?
   */
  iconStyle?: 'leading' | 'trailing';
  /**
   *  Optional icon
   */
  icon?: React.ReactNode;

  /** The button's HTML type. Defaults to button. */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  isDisabled = false,
  size = 'medium',
  width = 'regular',
  buttonType = 'primary',
  type = 'button',
  iconStyle,
  icon,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={[styles.button, styles[size], styles[buttonType], width].join(' ')}
      {...props}
      disabled={isDisabled}
    >
      {iconStyle === 'leading' && icon ? icon : null}
      <span className={iconStyle && icon ? styles[iconStyle] : ''}>{label}</span>
      {iconStyle === 'trailing' && icon ? icon : null}
    </button>
  );
};

export default Button;
