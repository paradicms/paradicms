interface ImageDimensions {
  readonly height: number;
  readonly width: number;
}

export interface ValueFacetValueThumbnail {
  // Can't use class Models since facets are not assumed to be part of the ModelSet.
  readonly exactDimensions: ImageDimensions | null;
  readonly maxDimensions: ImageDimensions | null;
  rights: {
    readonly creators: readonly string[];
    readonly holders: readonly string[];
    readonly license: string | null;
    statement: string | null;
  } | null;
  src: string;
}
