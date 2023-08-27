import {Literal, Static, String} from "runtypes";
import {ValueFilter} from "./ValueFilter";

/**
 * A value filter on the keys of collections that contain a work.
 */
export const WorkCollectionValueFilter = ValueFilter(String)
  .extend({
    type: Literal("WorkCollectionValue"),
  })
  .asReadonly();

export type WorkCollectionValueFilter = Static<
  typeof WorkCollectionValueFilter
>;
