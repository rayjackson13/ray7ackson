import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import * as styles from './TrackView.module.scss';

import type { Song } from 'utils/useAudioPlayer';

type Props = {
  isLoading: boolean;
  isPlaying: boolean;
  play: (index?: number) => void;
  selected: number;
  trackList: Song[];
};

export const TrackView = (props: Props): JSX.Element => {
  const { trackList, selected, play, isPlaying, isLoading } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.scroll}>
        {trackList.map((track, idx) => {
          const icon = isPlaying && selected === track.id ? 'pause' : 'play';
          return (
            <span
              className={styles.item}
              data-index={track.id}
              data-selected={selected === track.id}
              key={track.id}
            >
              <button
                className={styles.playButton}
                onClick={(): void => play(track.id)}
                type="button"
              >
                {isLoading && selected === track.id ? (
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
