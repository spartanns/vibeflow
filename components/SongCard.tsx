"use client";

import Link from "next/link";
import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "@/redux/slices/playerSlice";

interface SongCardProps {
  song: any;
  activeSong: any;
  isPlaying: boolean;
  data: any;
  i: number;
}

const SongCard = ({ song, activeSong, isPlaying, data, i }: SongCardProps) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <figure className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.name === song.name ? "flex bg-black bg-opacity-70" : "hidden"}`}>
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song img" src={song.album.images[0].url} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link href={`/songs/${song?.id}`}>{song.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link href={`/artists/${song.album.artists[0].id}`}>
            {song.album.artists[0].name}
          </Link>
        </p>
      </div>
    </figure>
  );
};

export default SongCard;
