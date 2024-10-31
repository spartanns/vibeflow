"use client";

import DetailsHeader from "@/components/DetailsHeader";
import { fetchLyrics } from "@/redux/slices/lyricsSlice";
import { fetchSong } from "@/redux/slices/songSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SongDetails = () => {
  const dispatch = useDispatch();
  const songID = useParams();
  const { song } = useSelector((state) => state.song);
  const { lyrics } = useSelector((state) => state.lyrics);

  useEffect(() => {
    dispatch(fetchSong(songID.id));
    dispatch(fetchLyrics(songID.id));
  }, [songID]);

  return (
    <section className="flex flex-col">
      <DetailsHeader artist="" song={song} />
      <article className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <figure className="mt-5">
          {lyrics?.lines?.map((line, i) => (
            <p key={i} className="text-gray-400 text-base my-1">{line.words}</p>
          ))}
        </figure>
      </article>
    </section>
  );
};

export default SongDetails;
