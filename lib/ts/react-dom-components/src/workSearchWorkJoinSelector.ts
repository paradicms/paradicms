import {ImageDimensions, WorkJoinSelector} from "@paradicms/models";

export const workSearchWorkJoinSelector = (
  thumbnailTargetDimensions: ImageDimensions
): WorkJoinSelector => ({
  agents: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  collections: {},
  events: {
    agents: {},
    work: {},
  },
  propertyNamedValues: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
});
