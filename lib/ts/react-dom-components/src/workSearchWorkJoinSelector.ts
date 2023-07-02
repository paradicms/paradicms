import {WorkJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {valueThumbnailSelector} from "./valueThumbnailSelector";

export const workSearchWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: galleryThumbnailSelector,
  },
  events: {
    agents: {},
    location: true,
  },
  licenses: true,
  location: true,
  propertyValues: {
    property: {},
    thumbnail: valueThumbnailSelector,
  },
  rightsStatements: true,
  thumbnail: galleryThumbnailSelector,
};
