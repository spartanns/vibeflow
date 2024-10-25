const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex flex-1 justify-start items-center">
    <div className={`${isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong.album.images[0].url} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.album.name ? activeSong?.album.name : "No active song"}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.album.artists[0].name ? activeSong?.album.artists[0].name : "No active song"}
      </p>
    </div>
  </div>
);

export default Track;
