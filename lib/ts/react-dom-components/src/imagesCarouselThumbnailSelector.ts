import {ImageJoinSelector, ThumbnailSelector} from "@paradicms/models";

export const imagesCarouselThumbnailSelector: ImageJoinSelector &
  ThumbnailSelector = {
  agents: {},
  license: true,
  rightsStatement: true,
  targetDimensions: {
    height: 800,
    width: 800,
  },
};
