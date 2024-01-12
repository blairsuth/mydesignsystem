import React, { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Button, { ButtonProps } from '../Button/Button';
import css from './contact-form.module.css';

export interface ContactFormProps {
  onFormSubmit: FormEventHandler<HTMLFormElement>;

  /** Do the fields display "(optional)" in their label? */
  nameIsRequired?: boolean;
  emailIsRequired?: boolean;
  messageIsRequired?: boolean;

  /** Are the fields editable? */
  nameIsDisabled?: boolean;
  emailIsDisabled?: boolean;
  messageIsDisabled?: boolean;

  nameState: [string, React.Dispatch<React.SetStateAction<string>>];
  emailState: [string, React.Dispatch<React.SetStateAction<string>>];
  messageState: [string, React.Dispatch<React.SetStateAction<string>>];

  /** The text above the first input. */
  nameTitleText?: string;

  /** The text inside the first input. */
  namePlaceholderText?: string;

  /** The text below the first input. */
  nameHelperText?: string;

  /** The text above the second input. */
  emailTitleText?: string;

  /** The text inside the second input. */
  emailPlaceholderText?: string;

  /** The text below the second input. */
  emailHelperText?: string;

  /** The text above the third input. */
  messageTitleText?: string;

  /** The text inside the second input. */
  messagePlaceholderText?: string;

  /** The text below the second input. */
  messageHelperText?: string;

  /** The text inside the submit button. */
  submitButtonLabel?: string;

  /** The style of the button that comes from ButtonProps. */
  submitButtonAppearance?: ButtonProps['buttonType'];

  /** Is the button clickable? */
  isButtonDisabled?: boolean;
}

const ContactForm = ({
  onFormSubmit,
  nameIsRequired = false,
  emailIsRequired = false,
  messageIsRequired = false,

  nameIsDisabled = false,
  emailIsDisabled = false,
  messageIsDisabled = false,

  nameTitleText = 'Name',
  namePlaceholderText = 'Enter your name',
  nameHelperText,

  emailTitleText = 'Email',
  emailPlaceholderText = 'Enter your email',
  emailHelperText,

  messageTitleText = 'Message',
  messagePlaceholderText = 'Enter your message',
  messageHelperText,

  submitButtonLabel = 'Send',
  submitButtonAppearance = 'primary',
  isButtonDisabled = false,

  nameState,
  emailState,
  messageState,
}: ContactFormProps) => {
  const [name, setName] = nameState;
  const [email, setEmail] = emailState;
  const [message, setMessage] = messageState;

  enum Input {
    Name = 'name',
    Email = 'email',
    Message = 'message',
  }

  function handleSetValue(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    input: Input,
  ) {
    const value = event.target.value;

    switch (input) {
      case Input.Name:
        setName(value);
        break;

      case Input.Email:
        setEmail(value);
        break;

      case Input.Message:
        setMessage(value);
        break;

      default:
        throw Error(`${input} Input failed to set value: ${value}\n Full Event: ${event}`);
    }
  }

  return (
    <div className={css.contact_form_container}>
      <form className={css.contact_form} onSubmitCapture={onFormSubmit}>
        <div className={css.contact_form_name}>
          <TextInput
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetValue(e, Input.Name)}
            isRequired={nameIsRequired}
            isDisabled={nameIsDisabled}
            titleText={nameTitleText}
            placeholderText={namePlaceholderText}
            helperText={nameHelperText}
          />
        </div>

        <div className={css.contact_form_email}>
          <TextInput
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetValue(e, Input.Email)}
            isRequired={emailIsRequired}
            isDisabled={emailIsDisabled}
            titleText={emailTitleText}
            placeholderText={emailPlaceholderText}
            helperText={emailHelperText}
          />
        </div>

        <div className={css.contact_form_message}>
          <TextArea
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleSetValue(e, Input.Message)}
            isRequired={messageIsRequired}
            isDisabled={messageIsDisabled}
            titleText={messageTitleText}
            placeholderText={messagePlaceholderText}
            helperText={messageHelperText}
          />
        </div>

        <div className={css.contact_form_button}>
          <Button
            buttonType={submitButtonAppearance}
            label={submitButtonLabel}
            size='large'
            type='submit'
            isDisabled={isButtonDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
