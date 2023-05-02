import {WorkJoinSelector} from "@paradicms/models";
import {imagesCarouselThumbnailSelector} from "./imagesCarouselThumbnailSelector";

export const workPageWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: imagesCarouselThumbnailSelector,
  },
  allImages: true,
  collections: {},
  location: true,
  events: {
    location: true,
  },
  properties: {
    groups: true,
  },
  propertyValues: {},
};
