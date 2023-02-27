import {NextRouter} from "next/router";

export const getAbsoluteImageSrc = (
  relativeImageSrc: string,
  router: NextRouter
) => {
  if (
    relativeImageSrc.startsWith("http://") ||
    relativeImageSrc.startsWith("https://")
  ) {
    return relativeImageSrc;
  }
  return router.basePath + relativeImageSrc;
};
