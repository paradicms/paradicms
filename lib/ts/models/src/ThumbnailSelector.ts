import {ImageDimensions} from "./ImageDimensions";

export interface ThumbnailSelector {
  minDimensions?: ImageDimensions;
  maxDimensions?: ImageDimensions;
  targetDimensions: ImageDimensions;
}
