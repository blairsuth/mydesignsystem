import React from 'react';
import styles from './card.module.css';
import Button from '../Button';
import Tag from '../Tag';
import { TagProps } from '../Tag/Tag';

interface CardProps {
  /* Card type is horizontal or vertical */
  cardType?: 'horizontal' | 'vertical';
  /** What is the title? */
  title?: string;
  /** What is the content? */
  content?: string;
  /** Show tags */
  tags?: TagProps[];
  /** Image Url */
  imageUrl?: string;
  /** Image style */
  imageStyle?: 'filled' | 'regular';
  /** Label for the primary button */
  actionPrimaryLabel?: string;
  /** Primary action */
  actionPrimary?: () => any;
  /** Label for the secondary button */
  actionSecondaryLabel?: string;
  /** Secondary action */
  actionSecondary?: () => any;
}

const Card = ({
  cardType = 'vertical',
  title,
  content,
  tags = [],
  imageUrl,
  imageStyle = 'regular',
  actionPrimaryLabel,
  actionPrimary,
  actionSecondaryLabel,
  actionSecondary,
  ...props
}: CardProps) => {
  const buttonWidth = cardType == 'horizontal' ? 'regular' : 'grow';

  return (
    <div className={[styles.card, styles[cardType]].join(' ')}>
      <div
        className={[styles.image_container, styles[imageStyle]].join(' ')}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className={styles.body}>
        <div className={styles.tag_container}>
          {tags.map((t, index) => {
            return (
              <div className={styles.tag_item} key={'card-tag-' + index}>
                <Tag label={t.label} size='small' />
              </div>
            );
          })}
        </div>

        <h6>{title}</h6>

        <p>{content}</p>

        <div className={styles.button_container}>
          {actionSecondaryLabel && actionSecondary ? (
            <Button
              buttonType='outline'
              onClick={actionSecondary}
              label={actionSecondaryLabel}
              width={buttonWidth}
            />
          ) : null}

          {actionPrimaryLabel && actionPrimary ? (
            <Button onClick={actionPrimary} label={actionPrimaryLabel} width={buttonWidth} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Card;
