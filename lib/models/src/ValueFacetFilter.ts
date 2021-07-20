export interface ValueFacetFilter<T> {
  readonly excludeValues: readonly T[] | null;
  readonly includeValues: readonly T[] | null;
}
