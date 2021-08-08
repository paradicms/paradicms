import {Filter} from "./Filter";
import {PrimitiveValue} from "./PrimitiveValue";

export interface ValueFilter<T extends PrimitiveValue> extends Filter {
  readonly excludeValues: readonly T[] | null;
  readonly includeValues: readonly T[] | null;
}
