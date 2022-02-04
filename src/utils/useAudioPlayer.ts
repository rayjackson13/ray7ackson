/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useEffect, useState } from 'react';

import trackList from 'assets/music/trackList.json';
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

export type AudioPlayer = {
  albumIndex: number;
  changeAlbum: (index: number) => void;
  isLoading: boolean;
  isPlaying: boolean;
  play: (index?: number | undefined) => Promise<void>;
  selectedAlbum: Song[];
  trackIndex: number;
  trackList: Album[];
};

export const useAudioPlayer = (
  audioElement: MutableRefObject<HTMLAudioElement>
): AudioPlayer => {
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

  return {
    albumIndex,
    changeAlbum,
    isLoading,
    isPlaying,
    play,
    selectedAlbum,
    trackIndex,
    trackList,
  };
};
