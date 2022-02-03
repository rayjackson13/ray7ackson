import React, { MouseEventHandler } from 'react';

import { Album } from '../index';

import * as styles from './AlbumView.module.scss';

type Props = {
  albumList: Album[];
  selected: number;
  setSelected: (value: number) => void;
};

export const AlbumView = (props: Props): JSX.Element => {
  const { selected, setSelected, albumList } = props;
  const onAlbumClick: MouseEventHandler = ({ currentTarget }): void => {
    const album = currentTarget.getAttribute('data-album');
    if (album === null) return;

    setSelected(parseInt(album));
  };

  return (
    <div className={styles.albumWrap}>
      <h5 className={styles.albumTitle}>Albums</h5>
      <div className={styles.albumView}>
        {albumList.map((album) => (
          <span
            className={styles.album}
            data-album={album.id}
            data-selected={album.id === selected}
            key={album.id}
            onClick={onAlbumClick}
          >
            {album.title}
          </span>
        ))}
      </div>
    </div>
  );
};
