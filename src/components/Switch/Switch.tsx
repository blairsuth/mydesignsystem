import React, { useId } from 'react';
import styles from './switch.module.css';

export interface SwitchProps {
  /**
   * Determines the Switch state.
   */
  isSelected: boolean;
  /**
   * Determines the Switch size. Defaults to 'medium'. Currently only 'medium' is supported.
   */
  size?: 'medium';
  /**
   * If true, the Switch becomes unclickable. Defaults to false.
   */
  isDisabled?: boolean;
  /**
   * Required primary text of the component.
   */
  label: string;
  /**
   * Function for handling setting the state of the switch.
   */
  onChange: () => void;
}

/**
 * Switch component intended for toggling (off/on). Using a descriptive label will greatly enhance the accessibility of the component.
 */

const Switch = ({
  isSelected,
  label,
  onChange,
  isDisabled = false,
  size = 'medium',
  ...props
}: SwitchProps) => {
  const selected = isSelected ? styles.selected : '';
  const disabled = isDisabled ? styles.disabled : '';
  const id = useId();

  return (
    <div className={styles.switch_container}>
      <button
        aria-labelledby={id + '_switch'}
        id={id + '_switch'}
        className={[styles.switch, styles[size], selected].join(' ')}
        onClick={() => {
          if (!isDisabled) onChange();
        }}
        disabled={isDisabled}
      >
        <div className={[styles.dial, selected].join(' ')} />
      </button>
      <label htmlFor={id + '_switch'} className={disabled}>
        {label}
      </label>
    </div>
  );
};

export default Switch;
