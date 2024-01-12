import React, { useState } from 'react';
import styles from './accordion.module.css';
import { ChevronDown } from '../Svgs/chevron-down';
import { ChevronUp } from '../Svgs/chevron-up';
import Button from '../Button/Button';
import { Check } from '../Svgs/check';

interface AccordionProps {
  /**
   * Show icon in header*/
  titleIcon?: React.ReactNode;
  showIcon?: boolean;
  /** Label for title */
  title: string;
  /** Content */
  content: string;
  /** Label for the primary button */
  actionPrimaryLabel?: string;
  /** Primary action */
  actionPrimary?: () => any;
  /** Label for the secondary button */
  actionSecondaryLabel?: string;
  /** Secondary action */
  actionSecondary?: () => any;
}

const Accordion = ({
  title,
  showIcon,
  titleIcon = <Check />,
  content,
  actionPrimaryLabel = '',
  actionSecondaryLabel = '',
  actionSecondary,
  actionPrimary,

  ...props
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state when the accordion header is clicked
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.accordion_header} ${isExpanded ? 'expanded' : ''}`}
        onClick={handleToggle}
      >
        <div className={styles.accordion_title}>
          {showIcon && titleIcon} {title}
        </div>
        <button onClick={handleToggle} className={styles.accordion_icon}>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isExpanded && (
        <div className={styles.accordion_content}>
          {content}
          <div className={styles.accordion_button_group}>
            {actionSecondaryLabel && actionSecondary && (
              <Button
                label={actionSecondaryLabel}
                buttonType='secondary'
                onClick={actionSecondary}
              />
            )}
            {actionPrimaryLabel && actionPrimary && (
              <Button label={actionPrimaryLabel} buttonType='primary' onClick={actionPrimary} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
