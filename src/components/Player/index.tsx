/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';

import { AlbumView } from './AlbumView';
import { Controls } from './Controls';
import * as styles from './Player.module.scss';
import { TrackView } from './TrackView';

import { useAudioPlayer } from 'utils/useAudioPlayer';

export const Player = (): JSX.Element => {
  const audioElement = useRef(new Audio());
  const player = useAudioPlayer(audioElement.current);

  return (
    <div className={styles.player}>
      <div className={styles.grid}>
        <AlbumView
          albumList={player.trackList}
          selected={player.albumIndex}
          setSelected={player.changeAlbum}
        />
        <div className={styles.rewind}>
          <Controls
            isLoading={player.isLoading}
            isPlaying={player.isPlaying}
            next={player.next}
            play={player.play}
            prev={player.prev}
          />
          <TrackView
            isLoading={player.isLoading}
            isPlaying={player.isPlaying}
            play={player.play}
            selected={player.trackIndex}
            trackList={player.selectedAlbum}
          />
        </div>
      </div>
    </div>
  );
};
