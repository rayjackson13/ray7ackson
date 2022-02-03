import React from 'react';

import * as styles from './Music.module.scss';

import { Player } from 'components/Player';

export const Music = (): JSX.Element => (
  <section className={styles.music}>
    <div className={styles.container}>
      <h1 className={styles.title}>#PLAYMYMUSIC</h1>
      <div className={styles.playerWrap}>
        <Player />
      </div>
    </div>
  </section>
);
