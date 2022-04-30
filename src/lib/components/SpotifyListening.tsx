import { FaSpotify } from 'react-icons/fa';

import { useNowPlayingData } from 'lib/services/spotify/user/now-playing';

const SpotifyListening = () => {
  const { data, isLoading } = useNowPlayingData();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!data || !data?.isPlaying) {
    return null;
  }

  return (
    <a
      href={data.trackUrl}
      className="flex rounded-xl mx-auto items-center gap-2 h-20"
      target="_blank"
    >
      <FaSpotify className="text-green-400 text-size-2xl" />
      <img src={data.albumArtUrl} className="w-16 rounded-md" />
      <div>
        <p className="font-heading font-extrabold text-size-sm">
          {data.trackTitle}
        </p>
        <p className="font-sans text-size-xs text-gray-500">
          {data.artist}
        </p>
      </div>
    </a>
  );
};

export default SpotifyListening;
