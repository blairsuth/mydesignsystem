import React, { Dispatch, useId } from 'react';
import styles from './checkbox.module.css';
import { Check, Minus } from '../Svgs';

export interface CheckboxProps {
  /**
   * Determines the checkbox state. If undefined, then checkbox is in an indetermined state. Parent can define custom logic to switch between selected, unselected or indeterminate.
   */
  isSelected?: boolean;

  /**
   * Optional setStateAction. Parent passes this in so that the checkbox can support spacebar selection. 
   */
  setIsSelected?: Dispatch<React.SetStateAction<boolean>>;


  /**
   * Determines the checkbox state
   */
  size?: 'small' | 'medium';
  /**
   * If true, the checkbox becomes unclickable. Defaults to false
   */
  isDisabled?: boolean;
  /**
   * Required primary text of the component
   */
  label?: string;
  /**
   * Required primary text of the component
   */
  onChange: (item: any) => void;
}

const Checkbox = ({
  isSelected,
  label,
  onChange = () => {},
  isDisabled = false,
  size = 'small',
  setIsSelected,
  ...props
}: CheckboxProps) => {
  const disabled = isDisabled ? 'disabled' : '';
  const id = useId();

  const selected = () => {
    switch (isSelected) {
      case true:
        return 'selected';
      case false:
        return 'unselected';
      case undefined:
        return 'mixed';
    }
  };

  const handleSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();

      if (!setIsSelected) return;
      setIsSelected(!isSelected);
    }
  };

  return (
    <div className={styles.checkbox_container}>
      <div
        className={[styles.checkbox, styles[size], styles[disabled], styles[selected()]].join(' ')}
        onClick={(e) => {
          if (!isDisabled) onChange(e);
        }}
        role='checkbox'
        aria-checked={isSelected === undefined ? 'mixed' : isSelected}
        aria-labelledby={id}
        tabIndex={0}
        onKeyDown={handleSpace}
      >
        {selected() === 'selected' && <Check />}
        {selected() === 'mixed' && <Minus />}
      </div>
      <label className={styles[disabled]} id={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
