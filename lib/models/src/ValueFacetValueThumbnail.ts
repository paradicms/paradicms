import {ImageDimensions} from "./ImageDimensions";

export interface ValueFacetValueThumbnail {
  exactDimensions: ImageDimensions | null;
  maxDimensions: ImageDimensions | null;
  src: string;
}
