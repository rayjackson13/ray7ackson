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
  const [albumIndex, setAlbumIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const selectedAlbum: Song[] =
    trackList.find((album) => album.id === albumIndex)?.songs || [];

  const changeAlbum = (index: number): void => {
    setAlbumIndex(index);
    setTrackIndex(0);
  };

  return (
    <div className={styles.player}>
      <div className={styles.grid}>
        <AlbumView
          albumList={trackList}
          selected={albumIndex}
          setSelected={changeAlbum}
        />
        <div className={styles.rewind}>
          <Controls />
          <TrackView
            onPlay={setTrackIndex}
            selected={trackIndex}
            trackList={selectedAlbum}
          />
        </div>
      </div>
    </div>
  );
};
