import {ImageJoinSelector, ThumbnailSelector} from "@paradicms/models";

export const valueThumbnailSelector: ImageJoinSelector & ThumbnailSelector = {
  agents: {},
  license: true,
  maxDimensions: {
    height: 200,
    width: 200,
  },
  rightsStatement: true,
  targetDimensions: {
    height: 200,
    width: 200,
  },
};
