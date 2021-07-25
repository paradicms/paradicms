export interface ValueFilter<T> {
  readonly excludeValues: readonly T[] | null;
  readonly includeValues: readonly T[] | null;
}
