import {ImageJoinSelector, ThumbnailSelector} from "@paradicms/models";

export const galleryThumbnailSelector: ImageJoinSelector & ThumbnailSelector = {
  agents: {},
  license: true,
  maxDimensions: {
    height: 400,
    width: 400,
  },
  rightsStatement: true,
  targetDimensions: {
    height: 400,
    width: 400,
  },
};
