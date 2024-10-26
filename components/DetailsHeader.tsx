import Link from "next/link";
import { Separator } from "./ui/separator";
import { BsFacebook, BsInstagram, BsTwitter, BsWikipedia } from "react-icons/bs";

const DetailsHeader = ({ artist, song }) => (
  <section className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
      {artist && <img src={artist.visuals.headerImage.sources[0].url} className="w-full h-48 object-cover opacity-50" />}
    </div>

    <div className="absolute inset-0 flex items-center">
      <img
        alt="art"
        src={artist ? artist.profile.pinnedItem.item.images.items[0].sources[0].url : song?.album?.images[0]?.url}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="w-full ml-5 mt-10">
        <div className="w-full flex justify-between">
          <p className="font-bold sm:text-3xl text-xl text-white">{artist ? artist?.profile?.name : song?.name}</p>
          <div className="flex gap-4 mr-2">
            <Link href={artist.profile.externalLinks.items[0].url} target="_blank">
              <BsFacebook className="w-8 h-8 cursor-pointer" />
            </Link>
            <Link href={artist.profile.externalLinks.items[1].url} target="_blank">
              <BsInstagram className="w-8 h-8 cursor-pointer" />
            </Link>
            <Link href={artist.profile.externalLinks.items[2].url} target="_blank">
              <BsTwitter className="w-8 h-8 cursor-pointer" />
            </Link>
            <Link href={artist.profile.externalLinks.items[3].url} target="_blank">
              <BsWikipedia className="w-8 h-8 cursor-pointer" />
            </Link>
          </div>
        </div>
        {!artist && (
          <p className="text-base text-gray-400 mt-2">{song?.album?.artists[0].name}</p>
        )}
        {artist && (
          <article className="w-full flex gap-4 justify-start items-center">
            <figure className="flex flex-col">
              <p className="text-base text-gray-400 mt-2">Followers</p>
              <p className="text-white font-semibold text-center text-3xl">{Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(artist.stats.followers)}</p>
            </figure>
            <Separator orientation="vertical" className="h-14 bg-gray-500 mt-2" />
            <figure className="flex flex-col">
              <p className="text-base text-gray-400 mt-2">Listeners</p>
              <p className="text-white font-semibold text-center text-3xl">{Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(artist.stats.monthlyListeners)}</p>
            </figure>
          </article>
        )}
      </div>
    </div>
    <div className="w-full sm:h-44 h-24" />
  </section>
);

export default DetailsHeader;
