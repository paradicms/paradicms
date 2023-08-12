import {ThumbnailSelector} from "@paradicms/models";
import {ImageJoinSelector} from "@paradicms/api";

export const galleryThumbnailSelector: ImageJoinSelector & ThumbnailSelector = {
  agents: true,
  licenses: true,
  maxDimensions: {
    height: 400,
    width: 400,
  },
  rightsStatements: true,
  targetDimensions: {
    height: 400,
    width: 400,
  },
};
