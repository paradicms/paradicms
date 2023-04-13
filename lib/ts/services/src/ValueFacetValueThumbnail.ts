interface ImageDimensions {
  readonly height: number;
  readonly width: number;
}

export interface ValueFacetValueThumbnail {
  readonly creators: readonly string[];
  // Can't use class Models since facets are not assumed to be part of the ModelSet.
  readonly exactDimensions: ImageDimensions | null;
  readonly license: string | null;
  readonly maxDimensions: ImageDimensions | null;
  readonly rightsHolders: readonly string[];
  readonly rightsStatement: string | null;
  src: string;
}
