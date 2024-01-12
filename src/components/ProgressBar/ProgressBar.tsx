import React from 'react';
import styles from './progress-bar.module.css';

interface ProgressBarProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;

  /** Text that specifies the purpose of the progress bar for accessibility reasons. */
  aria: string;

  /** Should the bar fill the screen? */
  fill?: boolean;
}

const ProgressBar = ({
  value = 0,
  min = 0,
  max = 100,
  label,
  fill = false,
  aria,
}: ProgressBarProps) => {
  const handleWidth = () => {
    if (value > max) {
      console.log('Error: Progress bar received a value greater than the maximum.');

      return 100;
    }

    if (value < min) {
      console.log('Error: Progress bar received a value less than the minimum.');

      return 0;
    }

    return (value / max) * 100;
  };

  return (
    <div className={styles.progress_bar_container}>
      <label>
        {label && label}

        <div
          className={[styles.progress_bar, `${fill ? styles.progress_bar_fill : ''}`].join(' ')}
          aria-label={aria}
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        >
          <div className={styles.progress_bar__value} style={{ width: `${handleWidth()}%` }}></div>
          <div
            className={styles.accessible_progress_bar__value}
          >{`Progress: ${handleWidth()}%`}</div>
        </div>
      </label>
    </div>
  );
};

export default ProgressBar;
