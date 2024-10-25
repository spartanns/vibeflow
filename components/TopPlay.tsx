"use client";

import { tracks } from "@/constants/discover";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import PlayPause from "./PlayPause";

const TopChartCard = ({ song, activeSong, isPlaying, handlePauseClick, handlePlayClick, i }) => {

  return (
    <section className="w-full flex flex-row items-center hover:bg-[#4C426E] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex flex-row flex-1 justify-between items-center">
        <img className="w-20 h-20 rounded-lg" src={song.album.images[0].url} alt={song?.album.name} />
        <div className="flex flex-col flex-1 justify-center mx-3">
          <Link href={`/songs/${song.album.id}`}>
            <p className="text-xl font-bold text-white">{song?.album.name}</p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </section>
  );
};

const TopPlay = () => {
  const divRef = useRef(null);
  const isPlaying = false;

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = tracks.slice(0, 5);

  const handlePlayClick = () => { };

  const handlePauseClick = () => { };

  return (
    <section ref={divRef} className="xl:ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link href="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See More</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              song={song}
              key={i}
              i={i}
              isPlaying={isPlaying}
              activeSong={song}
              handlePlayClick={() => handlePlayClick()}
              handlePauseClick={handlePauseClick}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link href="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See More</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {tracks?.map((track, i) => (
            <SwiperSlide
              key={i}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-sliderright"
            >
              <Link href={`/artists/${track?.album.artists[0].id}`}>
                <img src={track.album.images[0].url} alt="name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopPlay;
