import React, { Dispatch, SetStateAction } from 'react';
import { Xmark } from '../Svgs/xmark';
import Button from '../Button/Button';
import styles from './modal.module.css';

interface ModalProps {
  /**
   * What is the width of the modal?
   */
  width: 'small_modal' | 'medium_modal' | 'large_modal' | 'modal_fit_content';

  /**
   * An optional icon that is positioned left of the title.
   */
  icon?: React.JSX.Element;

  /**
   * The Modal's h2 header title.
   */
  title: string;

  /**
   * The Modal's textual content.
   */
  body?: string;

  /**
   * The label for the secondary button.
   */
  secondaryLabel: string;

  /**
   * The label for the primary button.
   */
  primaryLabel: string;

  /**
   * A boolean determining if the Modal will have cancel / submit buttons.
   */
  includeFooter?: boolean;

  /**
   * An array of JSX Elements for the support of custom Modal content, such as images.
   */
  customElements?: React.JSX.Element[];

  /**
   * Is the primary button disabled?
   */
  submitIsDisabled: boolean;

  /**
   * Is the modal centered in the screen?
   */
  isCentered: boolean;

  /**
   * Is the modal visible?
   */
  isOpen: boolean;

  /**
   * the useState Dispatch that sets the isOpen state.
   */
  setIsOpen?: Dispatch<SetStateAction<boolean>>;

  /**
   * a function to be invoked onClick of primary button.
   */
  submit?: () => any;
}

const Modal = ({
  icon,
  title,
  width = styles.medium_modal,
  isOpen = false,
  setIsOpen,
  body,
  includeFooter = true,
  customElements,
  submitIsDisabled = false,
  isCentered = true,
  submit = () => console.log('submit'),
  secondaryLabel = 'Cancel',
  primaryLabel = 'Submit',
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={[
            styles.modal,
            styles[width],
            isOpen ? styles.modal_open : '',
            isCentered ? styles.modal_centered : '',
          ].join(' ')}
        >
          <div className={styles.modal_header}>
            <div className={styles.modal_left}>
              {icon && icon}
              {title && <h2 id={styles.modal_header_title}>{title}</h2>}
            </div>

            <button
              id={styles.modal_close_button}
              className={styles.button}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              <Xmark />
            </button>
          </div>

          {body && (
            <div className={styles.modal_body}>
              <p>{body}</p>
            </div>
          )}

          {Boolean(customElements?.length) && (
            <div className={styles.modal_body}>
              {customElements?.map((element: JSX.Element) => {
                return <>{element}</>;
              })}
            </div>
          )}

          {includeFooter && (
            <div className={styles.modal_footer}>
              <Button
                label={secondaryLabel}
                buttonType='outline'
                onClick={() => setIsOpen && setIsOpen(false)}
              />
              <Button
                label={primaryLabel}
                buttonType='primary'
                isDisabled={submitIsDisabled}
                onClick={submit}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
