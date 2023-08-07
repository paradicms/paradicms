import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {CollectionValueFilter} from "./CollectionValueFilter";
import {KeyFilter} from "./KeyFilter";

// Discriminated union on "type"
export type FilterUnion =
  | CollectionValueFilter
  | KeyFilter
  | StringPropertyValueFilter;
