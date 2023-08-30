import {Literal, Static} from "runtypes";
import {DateRangeFacet} from "./DateRangeFacet";

export const WorkCreationDateRangeFacet = DateRangeFacet.extend({
  type: Literal("WorkCreationDateRange"),
});

export type WorkCreationDateRangeFacet = Static<
  typeof WorkCreationDateRangeFacet
>;
