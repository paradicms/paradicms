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
    location: true,
    work: {
      location: true,
    },
  },
  location: true,
  properties: true,
  propertyValues: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
});
