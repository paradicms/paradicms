import {WorkJoinSelector} from "@paradicms/models";
import {galleryThumbnailTargetDimensions} from "./galleryThumbnailTargetDimensions";
import {valueThumbnailTargetDimensions} from "./valueThumbnailTargetDimensions";

export const workSearchWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: {targetDimensions: galleryThumbnailTargetDimensions},
  },
  collections: {},
  events: {
    agents: {},
    location: true,
    work: {
      location: true,
    },
  },
  location: true,
  properties: true,
  propertyValues: {
    thumbnail: {targetDimensions: valueThumbnailTargetDimensions},
  },
  thumbnail: {targetDimensions: galleryThumbnailTargetDimensions},
};
