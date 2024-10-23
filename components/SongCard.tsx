import Link from "next/link";

interface SongCardProps {
  song: any;
  activeSong: any;
  isPlaying: boolean;
  data: any;
  i: number;
}

const SongCard = ({ song, activeSong, isPlaying, data, i }: SongCardProps) => {

  return (
    <figure className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
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
