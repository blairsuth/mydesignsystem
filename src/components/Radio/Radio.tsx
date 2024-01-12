import React, { useState } from 'react';
import styles from './radio.module.css';

export interface RadioProps {
  /**
   * By default, isDisabled is false
   */
  isDisabled?: boolean;
  /**
   * Required property isSelected?
   */
  isSelected: boolean;
  /**
   * Required htmlFor property to associate the label with the radio button?
   */
  htmlFor: string;
  /**
   * Optional Radio label
   */
  label?: string;
  /**
   * Radio button size
   */
  size?: 'small' | 'medium';
  /**
   * Optional click handler
   */
  onClick: (e: any) => void;
}

/**
 * Primary UI component for user interaction
 */
const Radio = ({
  isDisabled = false,
  isSelected = false,
  label,
  size = 'small',
  htmlFor,
  onClick = () => {},
  ...props
}: RadioProps) => {
  const selected = isSelected ? 'selected' : '';
  const disabled = isDisabled ? 'disabled' : '';

  return (
    <div className={styles.radio_group}>
      <button
        id={htmlFor + 'radio-option'}
        type='button'
        name={htmlFor + 'radio-option'}
        className={[styles.radio, styles[size], styles[selected], styles[disabled]].join(' ')}
        onClick={onClick}
        disabled={isDisabled}
      >
        <div className={styles.inner_circle}></div>
      </button>
      <label
        htmlFor={htmlFor + 'radio-option'}
        className={[styles[size], styles[disabled]].join(' ')}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
