export const getOrigin = (request: Request): string => {
  return new URL(request.url).origin;
};
