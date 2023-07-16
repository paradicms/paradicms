import {WorkJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {valueThumbnailSelector} from "./valueThumbnailSelector";
import {workSearchWorkEventJoinSelector} from "./workSearchWorkEventJoinSelector";

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
    property: {},
    thumbnail: valueThumbnailSelector,
  },
  thumbnail: galleryThumbnailSelector,
};
