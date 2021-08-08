import {Filter} from "./Filter";
import {PrimitiveType} from "./PrimitiveType";

export interface ValueFilter<T extends PrimitiveType> extends Filter {
  readonly excludeUnknown?: boolean;
  readonly excludeValues?: readonly T[];
  readonly includeUnknown?: boolean;
  readonly includeValues?: readonly T[];
}
