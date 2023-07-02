import {ImageJoinSelector, ThumbnailSelector} from "@paradicms/models";

export const imagesCarouselThumbnailSelector: ImageJoinSelector &
  ThumbnailSelector = {
  agents: {},
  licenses: true,
  rightsStatements: true,
  targetDimensions: {
    height: 800,
    width: 800,
  },
};
