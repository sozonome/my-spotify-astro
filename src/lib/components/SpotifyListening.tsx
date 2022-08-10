// import { FaSpotify } from 'react-icons/fa';

import { useNowPlayingData } from 'lib/services/spotify/user/now-playing';
import { GetNowPlayingTransformed } from 'lib/services/spotify/user/now-playing/types';

type SpotifyListeningProps = {
  fallbackData?: GetNowPlayingTransformed;
};

/**
 * @TODO
 * - revert back to arrow function when this issue (https://github.com/withastro/astro/issues/4220) is resolved
 */
export default function SpotifyListening({
  fallbackData,
}: SpotifyListeningProps) {
  const { data, isLoading } = useNowPlayingData(fallbackData);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!data || !data?.isPlaying) {
    return <p className="text-center text-gray-500">Not Listening</p>;
  }

  return (
    <a
      href={data.trackUrl}
      className="flex rounded-xl mx-auto items-center gap-2 h-20"
      target="_blank"
    >
      {/* <FaSpotify className="text-green-400 text-size-2xl" /> */}
      <img src={data.albumArtUrl} className="w-16 rounded-md" />
      <div>
        <p className="font-heading font-extrabold text-size-sm">
          {data.trackTitle}
        </p>
        <p className="font-sans text-size-xs text-gray-500">{data.artist}</p>
      </div>
    </a>
  );
}
