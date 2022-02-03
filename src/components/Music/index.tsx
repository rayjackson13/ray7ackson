import clsx from 'clsx';
import React from 'react';

import * as styles from './Music.module.scss';

export const Music = (): JSX.Element => (
  <section className={styles.music}>
    <div className="container">
      <h1 className={styles.title}>Play my music</h1>
      <div className="row">
        <div className="offset-0 offset-lg-2 col-12 col-lg-8 no_padding-xs">
          <div className={styles.player}>
            <audio id="audioPlayer" />
            <div className="row height-full">
              <div className="col-12 col-sm-4 px-0">
                <div className={styles.albumWrap}>
                  <h5 className={styles.albumTitle}>Albums</h5>
                  <span className={styles.album} data-album="0">
                    Something Special
                  </span>
                  <span className={styles.album} data-album="1">
                    Home - Single
                  </span>
                </div>
              </div>
              {/* col-12 col-sm-8 px-0 music-player-rewind */}
              <div className={styles.rewind}>
                <div className={styles.controls}>
                  <span className={styles.controlsWrap}>
                    <button
                      className={styles.controlsButton}
                      id="audioPlay"
                      type="button"
                    >
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
                    <a
                      className={styles.buyLink}
                      href="temp"
                      id="audioBuy"
                      target="_blank"
                    >
                      <i className="fas fa-shopping-cart" />
                      <span>Buy</span>
                    </a>
                  </span>
                </div>
                <div className="music-player-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
