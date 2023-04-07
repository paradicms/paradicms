import {ImageDimensions, WorkJoinSelector} from "@paradicms/models";
import {galleryThumbnailTargetDimensions} from "./galleryThumbnailTargetDimensions";

export const workPageWorkJoinSelector = (
  thumbnailTargetDimensions: ImageDimensions
): WorkJoinSelector => ({
  agents: {
    thumbnail: {targetDimensions: galleryThumbnailTargetDimensions},
  },
  allImages: true,
  collections: {},
  location: true,
  events: {
    location: true,
  },
});
