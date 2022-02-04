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
  getSelectedAlbum: () => Song[];
  isLoading: boolean;
  isPlaying: boolean;
  next: () => void;
  play: (index?: number | undefined) => Promise<void>;
  prev: () => void;
  trackIndex: number;
  trackList: Album[];
};

export const useAudioPlayer = (audioElement: HTMLAudioElement): AudioPlayer => {
  const [albumIndex, setAlbumIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getSelectedAlbum = (index?: number): Song[] => {
    const albumId = index !== undefined ? index : albumIndex;
    return trackList.find((album) => album.id === albumId)?.songs || [];
  };

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

  const play = async (index?: number, albumId?: number): Promise<void> => {
    const selectedIndex = index === undefined ? trackIndex : index;
    if (isPlaying && selectedIndex === trackIndex) {
      pause();
      return;
    }

    pause();
    if (selectedIndex !== trackIndex) {
      setTrackIndex(selectedIndex);
      const album = getSelectedAlbum(albumId);
      const track = album.find((song) => song.id === selectedIndex);
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
    const nextTrack = getSelectedAlbum().find(
      (val) => val.id === trackIndex + 1
    );
    if (nextTrack) {
      play(nextTrack.id);
      return;
    }

    const nextAlbum = trackList.find((val) => val.id === albumIndex + 1);
    if (nextAlbum) {
      setAlbumIndex(nextAlbum.id);
      const track = nextAlbum.songs[0];
      setTrackIndex(track.id);
      play(track.id, nextAlbum.id);
    }
  };

  const prev = (): void => {
    const prevTrack = getSelectedAlbum().find(
      (val) => val.id === trackIndex - 1
    );
    if (prevTrack) {
      play(prevTrack.id);
      return;
    }

    const prevAlbum = trackList.find((val) => val.id === albumIndex - 1);
    if (prevAlbum) {
      setAlbumIndex(prevAlbum.id);
      const songs = prevAlbum.songs;
      const track = songs[songs.length - 1];
      setTrackIndex(track.id);
      play(track.id, prevAlbum.id);
    }
  };

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
  };
};
