import {WorkJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {valueThumbnailSelector} from "./valueThumbnailSelector";

export const workSearchWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: {
      agents: {},
      license: true,
      rightsStatement: true,
      ...galleryThumbnailSelector,
    },
  },
  collections: {},
  events: {
    agents: {},
    location: true,
    work: {
      location: true,
    },
  },
  license: true,
  location: true,
  propertyValues: {
    property: {},
    thumbnail: valueThumbnailSelector,
  },
  rightsStatement: true,
  thumbnail: {
    agents: {},
    license: true,
    rightsStatement: true,
    ...galleryThumbnailSelector,
  },
};
