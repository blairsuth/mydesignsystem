import React, { ChangeEventHandler } from 'react';
import styles from './text-area.module.css';
import { AlertCircle } from '../Svgs';

interface TextAreaProps {
  /**
   * Minimum length of input value.
   */
  minLength?: number;
  /**
   * Maximum length of input value.
   */
  maxLength?: number;
  /**
   * Pass in value to pre-populate the input
   */
  value?: string;
  /**
   * Optional disabled flag. Defaults to false.
   */
  isDisabled?: boolean;
  /**
   * Optional required flag. Defaults to false.
   */
  isRequired?: boolean;
  /**
   * Optional placeholder text
   */
  placeholderText?: string;
  /**
   * Optional title text above input
   */
  titleText?: string;
  /**
   * Optional helper text. Appears below input
   */
  helperText?: string;
  /**
   * Optional errors array to handle multiple errors. Appears below input and helper text.
   */
  errors?: string[];
  /**
   * Set text value
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({
  isDisabled = false,
  isRequired = false,
  titleText,
  placeholderText,
  helperText,
  errors = [],
  onChange,
  value = '',
  minLength,
  maxLength,
  ...props
}: TextAreaProps) => {
  return (
    <div className={styles.text_area}>
      <div className={styles.text_area_label}>
        <label htmlFor={titleText}>
          {titleText} {!isRequired && '(optional)'}
        </label>
      </div>
      <textarea
        className={Boolean(errors.length) ? styles.error : ''}
        name={titleText}
        placeholder={placeholderText}
        onChange={onChange}
        value={value}
        disabled={isDisabled}
        required={isRequired}
        minLength={minLength}
        maxLength={maxLength}
        {...props}
      />
      {helperText && <h3>{helperText}</h3>}
      {errors?.map((error) => {
        return (
          <div className={styles.error_container} key={error}>
            <AlertCircle />
            <h3>{error}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TextArea;
