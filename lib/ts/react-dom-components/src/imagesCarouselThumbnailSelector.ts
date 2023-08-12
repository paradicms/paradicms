import {ThumbnailSelector} from "@paradicms/models";
import {ImageJoinSelector} from "@paradicms/api";

export const imagesCarouselThumbnailSelector: ImageJoinSelector &
  ThumbnailSelector = {
  agents: true,
  licenses: true,
  rightsStatements: true,
  targetDimensions: {
    height: 800,
    width: 800,
  },
};
