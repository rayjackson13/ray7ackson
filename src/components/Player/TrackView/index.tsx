import React from 'react';

import { Song } from '../index';

import * as styles from './TrackView.module.scss';

type Props = {
  onPlay: (index: number) => void;
  selected: number;
  trackList: Song[];
};

export const TrackView = (props: Props): JSX.Element => {
  const { trackList, selected, onPlay } = props;
  return (
    <div className={styles.wrap}>
      {trackList.map((track, idx) => (
        <span
          className={styles.item}
          data-index={track.id}
          data-selected={selected === track.id}
          key={track.id}
        >
          <button
            className={styles.playButton}
            onClick={(): void => onPlay(track.id)}
            type="button"
          >
            <i className="fa fa-play" />
          </button>
          <span className={styles.name}>{`${idx + 1}. ${track.title}`}</span>
        </span>
      ))}
    </div>
  );
};
