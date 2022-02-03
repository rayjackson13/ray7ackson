import clsx from 'clsx';
import React from 'react';

import * as styles from './Controls.module.scss';

export const Controls = (): JSX.Element => (
  <div className={styles.controls}>
    <span className={styles.controlsWrap}>
      <button className={styles.controlsButton} id="audioPlay" type="button">
        <i className="fas fa-play-circle" />
      </button>
      <button
        className={clsx(styles.controlsButton, styles.small)}
        id="audioPrev"
        type="button"
      >
        <i className="fas fa-step-backward" />
      </button>
      <button
        className={clsx(styles.controlsButton, styles.small)}
        id="audioNext"
        type="button"
      >
        <i className="fas fa-step-forward" />
      </button>
    </span>
    <span className={styles.buy}>
      <a className={styles.buyLink} href="temp" id="audioBuy" target="_blank">
        <i className="fas fa-headphones" />
        <span>Stream</span>
      </a>
    </span>
  </div>
);
