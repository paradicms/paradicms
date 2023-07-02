import {ImageJoinSelector, ThumbnailSelector} from "@paradicms/models";

export const valueThumbnailSelector: ImageJoinSelector & ThumbnailSelector = {
  agents: {},
  licenses: true,
  maxDimensions: {
    height: 200,
    width: 200,
  },
  rightsStatements: true,
  targetDimensions: {
    height: 200,
    width: 200,
  },
};
