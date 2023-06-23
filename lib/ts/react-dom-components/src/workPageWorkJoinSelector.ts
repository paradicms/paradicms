import {WorkJoinSelector} from "@paradicms/models";
import {imagesCarouselThumbnailSelector} from "./imagesCarouselThumbnailSelector";

export const workPageWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: imagesCarouselThumbnailSelector,
  },
  events: {
    location: true,
  },
  images: {
    agents: {},
    license: true,
    rightsStatement: true,
  },
  license: true,
  location: true,
  propertyValues: {
    property: {
      groups: {},
    },
  },
  rightsStatement: true,
};
