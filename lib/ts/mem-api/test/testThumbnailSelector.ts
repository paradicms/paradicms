import {ImageJoinSelector} from "@paradicms/api";
import {ThumbnailSelector} from "@paradicms/models";

export const testThumbnailSelector: ImageJoinSelector & ThumbnailSelector = {
  licenses: true,
  rightsStatements: true,
  targetDimensions: {height: 200, width: 200},
};
