import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { Range } from 'react-range';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';

import * as styles from './Controls.module.scss';

import { AudioPlayer } from 'utils/useAudioPlayer';

type Props = {
  currentSong: AudioPlayer['currentSong'];
  isLoading: boolean;
  isPlaying: boolean;
  next: AudioPlayer['next'];
  play: AudioPlayer['play'];
  prev: AudioPlayer['prev'];
  setVolume: AudioPlayer['setVolume'];
  volume: AudioPlayer['volume'];
};

const RangeThumb = ({ props }: IRenderThumbParams): JSX.Element => (
  <div {...props} className={styles.volumeThumb} />
);

const RangeTrack = ({ props, children }: IRenderTrackParams): JSX.Element => (
  <div {...props} className={styles.volumeTrack}>
    {children}
  </div>
);

export const Controls = (props: Props): JSX.Element => {
  const {
    currentSong,
    isLoading,
    isPlaying,
    next,
    play,
    prev,
    setVolume,
    volume,
  } = props;
  const icon = isPlaying ? 'pause' : 'play';

  const onVolumeChange = (values: number[]): void => setVolume(values[0]);

  return (
    <div className={styles.controls}>
      <div className={styles.songControls}>
        <span className={styles.controlsWrap}>
          <button
            className={clsx(styles.controlsButton, styles.small)}
            onClick={(): void => prev()}
            type="button"
          >
            <i className="fas fa-step-backward" />
          </button>
          <button
            className={styles.controlsButton}
            onClick={(): Promise<void> => play()}
            type="button"
          >
            {isLoading ? (
              <FontAwesomeIcon
                className={styles.loader}
                icon={['fas', 'spinner']}
              />
            ) : (
              <FontAwesomeIcon icon={['fas', icon]} />
            )}
          </button>
          <button
            className={clsx(styles.controlsButton, styles.small)}
            onClick={(): void => next()}
            type="button"
          >
            <i className="fas fa-step-forward" />
          </button>
        </span>

        <span className={styles.songName}>{currentSong?.title || ''}</span>
      </div>

      <span className={`${styles.controlsWrap} ${styles.volume}`}>
        <i className={`fas fa-volume-down ${styles.volumeIcon}`} />
        <Range
          max={100}
          min={0}
          onChange={onVolumeChange}
          renderThumb={RangeThumb}
          renderTrack={RangeTrack}
          step={5}
          values={[volume]}
        />
      </span>
    </div>
  );
};
