import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import * as styles from './TrackView.module.scss';

import type { AudioPlayer, Song } from 'utils/useAudioPlayer';

type Props = {
  albumIndex: number;
  isLoading: boolean;
  isPlaying: boolean;
  play: AudioPlayer['play'];
  selectedAlbum: number;
  selectedTrack: number;
  trackList: Song[];
};

export const TrackView = (props: Props): JSX.Element => {
  const {
    albumIndex,
    trackList,
    selectedAlbum,
    selectedTrack,
    play,
    isPlaying,
    isLoading,
  } = props;
  return (
    <div className={styles.wrap}>
      <div>
        {trackList.map((track, idx) => {
          const isSelected =
            selectedAlbum === albumIndex && selectedTrack === track.id;
          const icon = isPlaying && isSelected ? 'pause' : 'play';
          return (
            <span
              className={styles.item}
              data-index={track.id}
              data-selected={isSelected}
              key={track.id}
            >
              <button
                className={styles.playButton}
                onClick={(): Promise<void> => play(track)}
                type="button"
              >
                {isLoading && selectedTrack === track.id ? (
                  <FontAwesomeIcon
                    className={styles.loader}
                    icon={['fas', 'spinner']}
                  />
                ) : (
                  <FontAwesomeIcon icon={['fas', icon]} />
                )}
              </button>
              <span className={styles.name}>{`${idx + 1}. ${
                track.title
              }`}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
