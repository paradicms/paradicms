import {ValueFilter} from "./ValueFilter";
import {Literal, Static, String} from "runtypes";

export const WorkCollectionValueFilter = ValueFilter(String)
  .extend({
    type: Literal("WorkCollectionValue"),
  })
  .asReadonly();

export type WorkCollectionValueFilter = Static<
  typeof WorkCollectionValueFilter
>;
