import {ThumbnailSelector} from "@paradicms/models";
import {ImageJoinSelector} from "@paradicms/api";

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
