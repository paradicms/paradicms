import {WorkJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {valueThumbnailSelector} from "./valueThumbnailSelector";

export const workSearchWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: galleryThumbnailSelector,
  },
  collections: {},
  events: {
    agents: {},
    location: true,
  },
  license: true,
  location: true,
  propertyValues: {
    property: {},
    thumbnail: valueThumbnailSelector,
  },
  rightsStatement: true,
  thumbnail: galleryThumbnailSelector,
};
