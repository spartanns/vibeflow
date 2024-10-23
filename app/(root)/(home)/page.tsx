import SongCard from "@/components/SongCard";
import { tracks } from "@/constants/discover";

const Home: React.FC = () => {
  const activeSong = {};
  const isPlaying = false;

  return (
    <section className="flex flex-col">
      <article className="w-full flex justify-between items-center flex-col mt-4 mb-10">
        <h2 className="w-full font-bold text-3xl text-white text-left">Discover</h2>

        <section className="flex flex-wrap sm:justify-start justify-center gap-8 mt-4">
          {tracks.map((track, i) => (
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
