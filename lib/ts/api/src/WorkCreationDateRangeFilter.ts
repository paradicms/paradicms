import {Literal, Static} from "runtypes";
import {DateRangeFilter} from "./DateRangeFilter";

export const WorkCreationDateRangeFilter = DateRangeFilter.extend({
  type: Literal("WorkCreationDateRange"),
});

export type WorkCreationDateRangeFilter = Static<
  typeof WorkCreationDateRangeFilter
>;
