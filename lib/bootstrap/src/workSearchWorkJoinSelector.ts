import {WorkJoinSelector} from "@paradicms/models";
import {thumbnailTargetDimensions} from "./thumbnailTargetDimensions";

export const workSearchWorkJoinSelector: WorkJoinSelector = {
  agents: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  collections: {},
  institution: {},
  propertyNamedValues: {
    thumbnail: {targetDimensions: thumbnailTargetDimensions},
  },
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};
