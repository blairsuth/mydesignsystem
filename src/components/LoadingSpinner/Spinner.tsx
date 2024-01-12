import React from 'react';
import styles from './spinner.module.css';

interface SpinnerProps {
  /** Is the content loading and the spinner active? */
  loading: boolean;

  /** What is the size of the spinner? */
  size: 'small' | 'medium' | 'large';
}

/** Primary UI Component for the display of a loading state. */
const Spinner = ({ loading = true, size = 'medium' }: SpinnerProps) => {
  if (loading) {
    return (
      <div className={styles.spinner_container}>
        <div className={[styles.spinner, styles[size]].join(' ')}></div>
      </div>
    );
  }
};

export default Spinner;
