import {ImageDimensions} from "./ImageDimensions";

export interface ValueFacetValueThumbnail {
  // Can't use class Models since facets are not assumed to be part of the Dataset.
  exactDimensions: ImageDimensions | null;
  maxDimensions: ImageDimensions | null;
  rights: {
    creator: string | null;
    holder: string | null;
    license: string | null;
    statement: string | null;
  } | null;
  src: string;
}
