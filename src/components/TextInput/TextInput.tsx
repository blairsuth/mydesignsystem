import React, { ChangeEventHandler } from 'react';
import styles from './text-input.module.css';
import { AlertCircle } from '../Svgs';

interface TextInputProps {
  /**
   * Optional Input type. Defaults to 'text'.
   */
  inputType?: 'password' | 'text' | 'number';
  /**
   * Optional Minimum length of input value.
   */
  minLength?: number;
  /**
   * Optional Maximum length of input value.
   */
  maxLength?: number;
  /**
   * Optional Min value of number input.
   */
  min?: number;
  /**
   * Optional Max value of number input.
   */
  max?: number;
  /**
   * Pass in value to pre-populate the input.
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
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
/**
 * This component currently supports input types of text, number, and password. This is a general use input field for forms and can later be extended to support date, currency, and more.
 */
const TextInput = ({
  isDisabled = false,
  isRequired = false,
  titleText,
  placeholderText,
  helperText,
  inputType = 'text',
  errors = [],
  onChange,
  value = '',
  min,
  max,
  minLength,
  maxLength,
  ...props
}: TextInputProps) => {
  return (
    <div className={styles.text_input}>
      <div className={styles.text_input_label}>
        <label htmlFor={titleText}>
          {titleText} {!isRequired && '(optional)'}
        </label>
      </div>
      <input
        className={Boolean(errors.length) ? styles.error : ''}
        name={titleText}
        type={inputType}
        placeholder={placeholderText}
        onChange={onChange}
        value={value}
        disabled={isDisabled}
        required={isRequired}
        min={min}
        max={max}
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

export default TextInput;
