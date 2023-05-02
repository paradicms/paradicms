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
    work: {
      location: true,
    },
  },
  location: true,
  properties: {},
  propertyValues: {
    thumbnail: valueThumbnailSelector,
  },
  thumbnail: galleryThumbnailSelector,
};
