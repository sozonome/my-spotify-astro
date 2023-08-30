import { getSpotifyNowPlaying } from 'lib/services/spotify/user/now-playing';
import type { GetNowPlayingTransformed } from 'lib/services/spotify/user/now-playing/types';

const defaultHeader: HeadersInit = {
  'Content-Type': 'application/json',
  'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
};

export const GET = async ({ _, request }: any) => {
  if (request.method !== 'GET') {
    return new Response(undefined, { status: 400 });
  }

  try {
    const response = await getSpotifyNowPlaying();

    if (!response || !response.item) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: defaultHeader,
      });
    }

    const data: GetNowPlayingTransformed = {
      isPlaying: response.is_playing,
      trackTitle: response.item.name,
      artist: response.item.album.artists.map(({ name }) => name).join(', '),
      album: response.item.album.name,
      albumArtUrl: response.item.album.images[0].url,
      trackUrl: response.item.external_urls.spotify,
    };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: defaultHeader,
    });
  } catch {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: defaultHeader,
    });
  }
};
