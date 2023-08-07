import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {CollectionValueFilter} from "./CollectionValueFilter";
import {KeyFilter} from "./KeyFilter";

// Discriminated union on "type"
export type WorksFilter =
  | CollectionValueFilter
  | KeyFilter
  | StringPropertyValueFilter;
