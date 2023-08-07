import {ValueFilter} from "./ValueFilter";

export interface WorkCollectionValueFilter extends ValueFilter<string> {
  readonly type: "WorkCollectionValue";
}
