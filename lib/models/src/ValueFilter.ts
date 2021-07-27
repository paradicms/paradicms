import {Filter} from "./Filter";

export interface ValueFilter<T> extends Filter {
  readonly excludeValues: readonly T[] | null;
  readonly includeValues: readonly T[] | null;
}
