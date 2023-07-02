import {ImageJoinSelector, ThumbnailSelector} from "@paradicms/models";

export const galleryThumbnailSelector: ImageJoinSelector & ThumbnailSelector = {
  agents: {},
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
