import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {valueThumbnailSelector} from "./valueThumbnailSelector";
import {workSearchWorkEventJoinSelector} from "./workSearchWorkEventJoinSelector";
import {WorkJoinSelector} from "@paradicms/api";

export const workSearchWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: galleryThumbnailSelector,
  },
  description: {
    licenses: true,
    rightsStatements: true,
  },
  events: workSearchWorkEventJoinSelector,
  location: true,
  propertyValues: {
    property: true,
    thumbnail: valueThumbnailSelector,
  },
  thumbnail: galleryThumbnailSelector,
};
