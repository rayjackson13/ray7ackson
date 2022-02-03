import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

import * as styles from './Controls.module.scss';

type Props = {
  isLoading: boolean;
  isPlaying: boolean;
  play: (index?: number) => void;
};

export const Controls = (props: Props): JSX.Element => {
  const { isLoading, isPlaying, play } = props;
  const icon = isPlaying ? 'pause' : 'play';

  return (
    <div className={styles.controls}>
      <span className={styles.controlsWrap}>
        <button
          className={clsx(styles.controlsButton, styles.small)}
          id="audioPrev"
          type="button"
        >
          <i className="fas fa-step-backward" />
        </button>
        <button
          className={styles.controlsButton}
          onClick={(): void => play()}
          type="button"
        >
          {isLoading ? (
            <FontAwesomeIcon
              className={styles.loader}
              icon={['fas', 'spinner']}
            />
          ) : (
            <FontAwesomeIcon icon={['fas', icon]} />
          )}
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
          <span>Stream</span>
          <i className="fas fa-headphones" />
        </a>
      </span>
    </div>
  );
};
