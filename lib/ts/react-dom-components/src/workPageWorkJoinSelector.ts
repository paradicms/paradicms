import {WorkJoinSelector} from "@paradicms/api";
import {imagesCarouselThumbnailSelector} from "./imagesCarouselThumbnailSelector";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const workPageWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: imagesCarouselThumbnailSelector,
  },
  description: {
    licenses: true,
    rightsStatements: true,
  },
  events: {
    description: {
      licenses: true,
      rightsStatements: true,
    },
    location: true,
    thumbnail: galleryThumbnailSelector,
  },
  images: {
    agents: true,
    licenses: true,
    rightsStatements: true,
  },
  location: true,
  propertyValues: {
    property: true,
    propertyGroup: true,
  },
};
