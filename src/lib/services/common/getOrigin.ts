export const getOrigin = (request: Request): string => {
  return new URL(request.url).origin.replace('localhost', '127.0.0.1');
};
