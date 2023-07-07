import {WorkJoinSelector} from "@paradicms/models";
import {galleryThumbnailSelector} from "./galleryThumbnailSelector";
import {valueThumbnailSelector} from "./valueThumbnailSelector";
import {workSearchWorkEventJoinSelector} from "./workSearchWorkEventJoinSelector";

export const workSearchWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: galleryThumbnailSelector,
  },
  events: workSearchWorkEventJoinSelector,
  licenses: true,
  location: true,
  propertyValues: {
    property: {},
    thumbnail: valueThumbnailSelector,
  },
  rightsStatements: true,
  thumbnail: galleryThumbnailSelector,
};
