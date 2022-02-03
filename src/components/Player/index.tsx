import React, { useState } from 'react';

import { AlbumView } from './AlbumView';
import { Controls } from './Controls';
import * as styles from './Player.module.scss';
import { TrackView } from './TrackView';
import trackList from './trackList.json';

export type Song = {
  id: number;
  link: string;
  title: string;
};

export type Album = {
  date: string;
  id: number;
  link: string;
  songs: Song[];
  title: string;
};

export const Player = (): JSX.Element => {
  const [selectedAlbum, setSelectedAlbum] = useState(0);

  return (
    <div className={styles.player}>
      <div className={styles.grid}>
        <AlbumView
          albumList={trackList}
          selected={selectedAlbum}
          setSelected={setSelectedAlbum}
        />
        <div className={styles.rewind}>
          <Controls />
          <TrackView />
        </div>
      </div>
    </div>
  );
};
