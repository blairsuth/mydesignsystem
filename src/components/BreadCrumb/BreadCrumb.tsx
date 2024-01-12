import React from 'react';
import styles from './breadcrumb.module.css';
import { ChevronRight, ForwardSlash } from '../Svgs';

export interface BreadCrumbProps {
  /**
   * Paths
   */
  crumbs: { name: string; route: string }[];
  /**
   * Separator style between breadcrumb items. Defaults to arrow.
   */
  separatorStyle?: 'arrow' | 'slash';
  /**
   * Optional onClick.
   */
  onClick?: (route: string) => any;
}
/**
 * The intended use of the breadcrumb component is to be placed in an app navigator component, that will keep track of the navigation state and handle the navigation between pages.
 */
const BreadCrumb = ({
  crumbs,
  separatorStyle = 'arrow',
  onClick = () => {},
  ...props
}: BreadCrumbProps) => {
  return (
    <div className={styles.breadcrumb_container}>
      {crumbs?.map((c, index) => {
        return (
          <span className={styles.breadcrumb} key={c.name + index}>
            <button onClick={() => onClick(c.route)}>{c.name}</button>
            {separatorStyle == 'arrow' ? <ChevronRight /> : <ForwardSlash />}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
