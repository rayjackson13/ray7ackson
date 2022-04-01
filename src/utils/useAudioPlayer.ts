/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import trackList from 'assets/music/trackList.json';
import { getFileLink } from 'utils/firebase';

export type Song = {
  albumId: number;
  id: number;
  link: string;
  title: string;
};

export type Album = {
  art: string;
  date: string;
  id: number;
  link: string;
  songs: Song[];
  title: string;
};

export type AudioPlayer = {
  albumIndex: number;
  changeAlbum: (index: number) => void;
  getSelectedAlbum: () => Song[];
  isLoading: boolean;
  isPlaying: boolean;
  next: () => void;
  play: (song?: Song) => Promise<void>;
  prev: () => void;
  setVolume: (volume: number) => void;
  trackIndex: number;
  trackList: Album[];
  volume: number;
};

export const useAudioPlayer = (audioElement: HTMLAudioElement): AudioPlayer => {
  const [albumIndex, setAlbumIndex] = useState(
    trackList.sort((a, b) => b.id - a.id)[0].id
  );
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [volume, updateVolume] = useState(60);

  const getSelectedAlbum = (index?: number): Song[] => {
    const albumId = index !== undefined ? index : albumIndex;
    return trackList.find((album) => album.id === albumId)?.songs || [];
  };

  const getSelectedTrack = (): Song | undefined => {
    const album = getSelectedAlbum();
    return album.find((track) => track.id === trackIndex);
  };

  const changeAlbum = (index: number): void => {
    setAlbumIndex(index);
    if (!isPlaying) setTrackIndex(0);
    setLoaded(false);
  };

  const load = async (track?: Song): Promise<boolean> => {
    if (!track) return false;

    const link = await getFileLink(track.link);
    if (!link) {
      setLoading(false);
      setLoaded(false);
      return false;
    }

    audioElement.src = link;
    setLoaded(true);
    return true;
  };

  const pause = (): void => {
    audioElement.pause();
    setPlaying(false);
  };

  const play = async (song?: Song): Promise<void> => {
    const track = song ? song : getSelectedTrack();
    if (!track) return;

    const isSelectedSong =
      track.id === trackIndex && track.albumId === albumIndex;
    if (isPlaying && isSelectedSong) {
      pause();
      return;
    }

    pause();
    if (!isSelectedSong || !isLoaded) {
      setTrackIndex(track.id);
      setAlbumIndex(track.albumId);
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

  const resetTracks = (): void => {
    setAlbumIndex(trackList[0].id);
    setTrackIndex(0);
    setLoaded(false);
  };

  const next = (): void => {
    const nextTrack = getSelectedAlbum().find(
      (val) => val.id === trackIndex + 1
    );
    if (nextTrack) {
      play(nextTrack);
      return;
    }

    const nextAlbum = trackList.find((val) => val.id === albumIndex - 1);
    if (nextAlbum) {
      const track = nextAlbum.songs[0];
      play(track);
      return;
    }

    // No next track available.
    pause();
    resetTracks();
  };

  const prev = (): void => {
    const prevTrack = getSelectedAlbum().find(
      (val) => val.id === trackIndex - 1
    );
    if (prevTrack) {
      play(prevTrack);
      return;
    }

    const prevAlbum = trackList.find((val) => val.id === albumIndex + 1);
    if (prevAlbum) {
      const track = prevAlbum.songs[prevAlbum.songs.length - 1];
      play(track);
      return;
    }

    // No previous track available.
    pause();
    resetTracks();
  };

  const setVolume = (nextVolume: number): void => {
    if (nextVolume < 0 || nextVolume > 100) return;
    audioElement.volume = nextVolume / 100;
    updateVolume(nextVolume);
  };

  audioElement.onended = (): void => next();

  useEffect(() => {
    audioElement.preload = 'none';
    const track = getSelectedAlbum().find((song) => song.id === trackIndex);
    load(track);
  }, []);

  return {
    albumIndex,
    changeAlbum,
    getSelectedAlbum,
    isLoading,
    isPlaying,
    next,
    play,
    prev,
    trackIndex,
    trackList,
    setVolume,
    volume,
  };
};
