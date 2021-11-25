import {Agent, Image, ImageDimensions} from "@paradicms/models";

export interface WorkAgentProfile {
  readonly agent: Agent;
  readonly role: string;
  readonly thumbnail: Image;
  readonly thumbnailTargetDimensions: ImageDimensions;
}
