import React, { useId, useState } from 'react';
import styles from './tabs.module.css';

export interface TabsProps {
  /**
   * Tab content
   */
  tabContent: { label: string; content: React.ReactNode }[];

  /**
   * Text for screen readers to inform the user about the tablist.
   */
  ariaLabel?: string;
}

const Tabs = ({ tabContent, ariaLabel, ...props }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  let id = useId();

  const handleTabClick = (index: number) => {
    setCurrentTabIndex(index);
  };

  const handleStyling = (index: number) =>
    currentTabIndex == index ? styles.active : styles.inactive;

  return (
    <div className={styles.tab_container} role='tablist' aria-label={ariaLabel}>
      <div className={styles.tab_row}>
        {tabContent?.map((tc, index) => {
          return (
            <button
              aria-controls={`${tc.label}_${index}`}
              id={`${index}_${id}`}
              key={`${index}_${id}`}
              role='tab'
              aria-selected={currentTabIndex === index}
              className={[styles.tab, handleStyling(index)].join(' ')}
              onClick={() => handleTabClick(index)}
            >
              {tc.label}
            </button>
          );
        })}
      </div>

      <div
        className={styles.tab_content}
        role='tabpanel'
        aria-labelledby={`${currentTabIndex}_${id}`}
        id={`${tabContent[currentTabIndex]?.label}_${currentTabIndex}`}
      >
        {tabContent[currentTabIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;
