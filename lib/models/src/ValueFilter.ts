import {Filter} from "./Filter";
import {PrimitiveType} from "./PrimitiveType";

export interface ValueFilter<T extends PrimitiveType> extends Filter {
  readonly excludeUnknown?: boolean; // undefined = false / include unknown
  readonly excludeValues?: readonly T[];
  readonly includeValues?: readonly T[];
}
