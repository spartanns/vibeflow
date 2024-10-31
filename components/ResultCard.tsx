import Link from "next/link";

const ResultCard: React.FC = ({ name, artist, imgUrl, id }) => (
  <figure className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <img alt="song img" src={imgUrl} className="w-full h-full rounded-lg" />
    </div>

    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">
        <Link href={`/songs/${id}`}>{name}</Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        {artist}
      </p>
    </div>
  </figure>
);

export default ResultCard;
