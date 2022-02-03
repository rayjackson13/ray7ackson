import React from 'react';

import * as styles from './Music.module.scss';

import { Player } from 'components/Player';

export const Music = (): JSX.Element => (
  <section className={styles.music}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        <svg>
          <filter id="shadow">
            <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
          </filter>
          <text style={{ filter: 'url(#shadow)' }} x="3%" y="76%">
            #PLAYMYMUSIC
          </text>
        </svg>
      </h1>
      <div className={styles.playerWrap}>
        <Player />
      </div>
    </div>
  </section>
);
