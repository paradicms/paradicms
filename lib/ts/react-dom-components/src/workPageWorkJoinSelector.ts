import {WorkJoinSelector} from "@paradicms/models";
import {imagesCarouselThumbnailTargetDimensions} from "./imagesCarouselThumbnailTargetDimensions";

export const workPageWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: {targetDimensions: imagesCarouselThumbnailTargetDimensions},
  },
  allImages: true,
  collections: {},
  location: true,
  events: {
    location: true,
  },
};
