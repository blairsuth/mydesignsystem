import React, { useId } from 'react';
import css from './tooltip.module.css';

export enum PointerPosition {
  Left = 'left',
  Right = 'right',
  TopRight = 'top_right',
  TopCenter = 'top_center',
  TopLeft = 'top_left',
  BottomRight = 'bottom_right',
  BottomCenter = 'bottom_center',
  BottomLeft = 'bottom_left',
}

export interface TooltipProps {
  /**
   * What is the title?
   */
  label?: string;
  /**
   * What is the content?
   * */
  content?: string;
  /**
   * Show the pointer?
   * */
  pointer?: boolean;
  /**
   * Set pointer position
   * */
  pointerPosition?: PointerPosition;

  /** Is the Tooltip visible? */
  isOpen: boolean;
}

/** A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 *
 */
const Tooltip = ({
  label = '',
  content = '',
  pointer = true,
  pointerPosition = PointerPosition.BottomCenter,
  isOpen,
  ...props
}: TooltipProps) => {
  const tooltipLabelId = useId();
  const tooltipContentId = useId();

  if (isOpen)
    return (
      <div
        className={css.tooltip}
        aria-describedby={[tooltipContentId, tooltipLabelId].join(' ')}
        role='tooltip'
        aria-hidden={!isOpen}
      >
        <div className={css.tooltip_label} id={tooltipLabelId}>
          {label}
        </div>
        <div className={css.tooltip_content} id={tooltipContentId}>
          {content}
        </div>
        {pointer && <div className={[css.pointer, css[pointerPosition]].join(' ')}></div>}
      </div>
    );
};

export default Tooltip;
