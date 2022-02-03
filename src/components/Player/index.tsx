/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';

import { AlbumView } from './AlbumView';
import { Controls } from './Controls';
import * as styles from './Player.module.scss';
import { TrackView } from './TrackView';
import trackList from './trackList.json';

import { getFileLink } from 'utils/firebase';

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
  const audioElement = useRef(new Audio());
  const [albumIndex, setAlbumIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const selectedAlbum: Song[] =
    trackList.find((album) => album.id === albumIndex)?.songs || [];

  const changeAlbum = (index: number): void => {
    setAlbumIndex(index);
    if (!isPlaying) setTrackIndex(0);
  };

  const load = async (track?: Song): Promise<boolean> => {
    if (!track) return false;

    const link = await getFileLink(track.link);
    if (!link) {
      setLoading(false);
      return false;
    }

    audioElement.current.src = link;
    return true;
  };

  const pause = (): void => {
    audioElement.current.pause();
    setPlaying(false);
  };

  const play = async (index?: number): Promise<void> => {
    const selectedIndex = index === undefined ? trackIndex : index;
    if (isPlaying && selectedIndex === trackIndex) {
      pause();
      return;
    }

    pause();
    if (selectedIndex !== trackIndex) {
      setTrackIndex(selectedIndex);
      const track = selectedAlbum.find((song) => song.id === selectedIndex);
      setLoading(true);
      const loaded = await load(track);
      if (!loaded) {
        // If there was an error during load.
        console.warn('Unable to load the track. Please try again.');
        setTrackIndex(trackIndex);
        return;
      }
    }

    try {
      await audioElement.current.play();
      setPlaying(true);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const track = selectedAlbum.find((song) => song.id === trackIndex);
    load(track);
  }, []);

  return (
    <div className={styles.player}>
      <div className={styles.grid}>
        <AlbumView
          albumList={trackList}
          selected={albumIndex}
          setSelected={changeAlbum}
        />
        <div className={styles.rewind}>
          <Controls isLoading={isLoading} isPlaying={isPlaying} play={play} />
          <TrackView
            isLoading={isLoading}
            isPlaying={isPlaying}
            play={play}
            selected={trackIndex}
            trackList={selectedAlbum}
          />
        </div>
      </div>
    </div>
  );
};
