import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {CollectionValueFilter} from "./CollectionValueFilter";

// Discriminated union on "type"
export type FilterUnion = CollectionValueFilter | StringPropertyValueFilter;
