import {Filter} from "./Filter";
import {PrimitiveType} from "./PrimitiveType";

export interface ValueFilter<T extends PrimitiveType> extends Filter {
  readonly excludeValues: readonly T[] | null;
  readonly includeValues: readonly T[] | null;
}
