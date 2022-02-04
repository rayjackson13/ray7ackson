/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

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
  next: () => void;
  play: (index?: number | undefined) => Promise<void>;
  prev: () => void;
  selectedAlbum: Song[];
  trackIndex: number;
  trackList: Album[];
};

export const useAudioPlayer = (audioElement: HTMLAudioElement): AudioPlayer => {
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

    audioElement.src = link;
    return true;
  };

  const pause = (): void => {
    audioElement.pause();
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
      await audioElement.play();
      setPlaying(true);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const next = (): void => {
    pause();
    const nextTrack = selectedAlbum.find((val) => val.id === trackIndex + 1);
    if (!nextTrack) return;

    play(nextTrack.id);
  };

  const prev = (): void => {
    pause();
    const prevTrack = selectedAlbum.find((val) => val.id === trackIndex - 1);
    if (!prevTrack) return;

    play(prevTrack.id);
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
    next,
    play,
    prev,
    selectedAlbum,
    trackIndex,
    trackList,
  };
};
