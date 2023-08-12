import {ValueFilter} from "./ValueFilter";
import {Array, Literal, Optional, Static, String} from "runtypes";

export const WorkCollectionValueFilter = ValueFilter.extend({
  excludeValues: Optional(Array(String).asReadonly()),
  includeValues: Optional(Array(String).asReadonly()),
  type: Literal("WorkCollectionValue"),
}).asReadonly();

export type WorkCollectionValueFilter = Static<
  typeof WorkCollectionValueFilter
>;
