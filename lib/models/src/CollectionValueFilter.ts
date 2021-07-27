import {ValueFilter} from "./ValueFilter";

export interface CollectionValueFilter extends ValueFilter<string> {
  readonly type: "CollectionValue";
}
