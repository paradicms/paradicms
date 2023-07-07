import {WorkJoinSelector} from "@paradicms/models";
import {imagesCarouselThumbnailSelector} from "./imagesCarouselThumbnailSelector";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const workPageWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: imagesCarouselThumbnailSelector,
  },
  events: {
    location: true,
    thumbnail: galleryThumbnailSelector,
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
