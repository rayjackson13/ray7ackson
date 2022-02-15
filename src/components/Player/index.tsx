/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';

import { Controls } from './Controls';
import * as styles from './Player.module.scss';
import { TrackView } from './TrackView';

import { useAudioPlayer } from 'utils/useAudioPlayer';

export const Player = (): JSX.Element => {
  const audioElement = useRef(new Audio());
  const player = useAudioPlayer(audioElement.current);
  const trackList = player.trackList.sort((a, b) => b.id - a.id);

  return (
    <div className={styles.player}>
      <Controls
        isLoading={player.isLoading}
        isPlaying={player.isPlaying}
        next={player.next}
        play={player.play}
        prev={player.prev}
      />
      <div className={styles.scroll}>
        {trackList.map((val, idx) => (
          <div className={styles.album} key={idx}>
            <img src={val.art} />
            <div>
              <h3 className={styles.title}>{val.title}</h3>
              <TrackView
                albumIndex={val.id}
                isLoading={player.isLoading}
                isPlaying={player.isPlaying}
                play={player.play}
                selectedAlbum={player.albumIndex}
                selectedTrack={player.trackIndex}
                trackList={val.songs}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
