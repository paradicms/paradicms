import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {WorkCollectionValueFilter} from "./WorkCollectionValueFilter";
import {KeyFilter} from "./KeyFilter";

// Discriminated union on "type"
export type WorksFilter =
  | KeyFilter
  | StringPropertyValueFilter
  | WorkCollectionValueFilter;
