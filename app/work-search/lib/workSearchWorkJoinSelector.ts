import {WorkJoinSelector} from "@paradicms/api";
import {
  galleryThumbnailSelector,
  valueThumbnailSelector,
} from "@paradicms/react-dom-components";
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
    property: true,
    thumbnail: valueThumbnailSelector,
  },
  thumbnail: galleryThumbnailSelector,
};
