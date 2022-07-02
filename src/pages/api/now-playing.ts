import { getSpotifyNowPlaying } from 'lib/services/spotify/user/now-playing';
import type { GetNowPlayingTransformed } from 'lib/services/spotify/user/now-playing/types';

export const get = async ({ _, request }) => {
  if (request.method !== 'GET') {
    return new Response(undefined, { status: 400 });
  }

  try {
    const response = await getSpotifyNowPlaying();

    if (!response || !response.item) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
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
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
