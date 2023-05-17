import {WorkJoinSelector} from "@paradicms/models";
import {imagesCarouselThumbnailSelector} from "./imagesCarouselThumbnailSelector";

export const workPageWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: {
      agents: {},
      license: true,
      rightsStatement: true,
      ...imagesCarouselThumbnailSelector,
    },
  },
  images: {
    agents: {},
    license: true,
    rightsStatement: true,
  },
  collections: {},
  location: true,
  events: {
    location: true,
  },
  propertyValues: {
    property: {
      groups: {},
    },
  },
};
