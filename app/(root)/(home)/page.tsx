"use client";

import SongCard from "@/components/SongCard";
import { tracks } from "@/constants/discover";
import { fetchSongs } from "@/redux/slices/songsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: React.FC = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songs } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs());
  }, []);

  return (
    <section className="flex flex-col">
      <article className="w-full flex justify-between items-center flex-col mt-4 mb-10">
        <h2 className="w-full font-bold text-3xl text-white text-left">Discover</h2>

        <section className="flex flex-wrap sm:justify-start justify-center gap-8 mt-4">
          {songs?.map((track, i) => (
            <SongCard
              key={track.id}
              song={track}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={tracks}
              i={i}
            />
          ))}
        </section>
      </article>
    </section>
  );
};

export default Home;
