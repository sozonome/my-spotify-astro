import { getOrigin } from './getOrigin';

export const get = async <T>(
  incomingReq: Request,
  endpoint: string,
  cb: (response: Response) => Promise<T>
) => {
  const response = await fetch(`${getOrigin(incomingReq)}${endpoint}`, {
    credentials: 'same-origin',
  });
  if (!response.ok) {
    // TODO make this better...
    return undefined;
  }
  return cb(response);
};
