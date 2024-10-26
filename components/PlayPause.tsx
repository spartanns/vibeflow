import { PauseCircleIcon, PlayCircleIcon } from "lucide-react";

interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: any;
  song: any;
  handlePlay: () => void;
  handlePause: () => void;
}

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }: PlayPauseProps) => (isPlaying && activeSong?.name === song.name ? (
  <PauseCircleIcon
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
) : (
  <PlayCircleIcon
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
));

export default PlayPause;
