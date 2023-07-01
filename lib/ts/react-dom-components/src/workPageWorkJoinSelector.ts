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
    licenses: true,
    rightsStatements: true,
  },
  licenses: true,
  location: true,
  propertyValues: {
    property: {
      groups: {},
    },
  },
  rightsStatements: true,
};
