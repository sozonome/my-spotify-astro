import { get } from 'lib/services/common/get';
import { type GetNowPlayingTransformed } from 'lib/services/spotify/user/now-playing/types';

export const getNowPlaying = (incomingReq: Request) =>
  get<GetNowPlayingTransformed>(
    incomingReq,
    '/api/now-playing',
    async (res) => {
      const nowPlaying: GetNowPlayingTransformed = await res.json();
      return nowPlaying;
    }
  );
