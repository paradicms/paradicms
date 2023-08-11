import {EventJoinSelector} from "@paradicms/api";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";

export const workSearchWorkEventJoinSelector: EventJoinSelector = {
  agents: {},
  description: {
    licenses: true,
    rightsStatements: true,
  },
  location: true,
  thumbnail: galleryThumbnailSelector,
};
