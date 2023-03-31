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
  properties: true,
  propertyValues: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
});
