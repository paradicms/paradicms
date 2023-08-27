import {Literal, Static, String} from "runtypes";
import {ValueFilter} from "./ValueFilter";

export const WorkSubjectValueFilter = ValueFilter(String)
  .extend({
    type: Literal("WorkSubjectValue"),
  })
  .asReadonly();

export type WorkSubjectValueFilter = Static<typeof WorkSubjectValueFilter>;
