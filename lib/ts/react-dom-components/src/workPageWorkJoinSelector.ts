import {ImageDimensions, WorkJoinSelector} from "@paradicms/models";
import {smallThumbnailTargetDimensions} from "./smallThumbnailTargetDimensions";

export const workPageWorkJoinSelector = (
  thumbnailTargetDimensions: ImageDimensions
): WorkJoinSelector => ({
  agents: {
    thumbnail: {targetDimensions: smallThumbnailTargetDimensions},
  },
  allImages: true,
  collections: {},
  location: true,
  events: {
    location: true,
  },
});
