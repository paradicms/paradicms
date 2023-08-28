import {Static, Union} from "runtypes";
import {StringPropertyValueFacet} from "./StringPropertyValueFacet";
import {WorkCreationDateRangeFacet} from "./WorkCreationDateRangeFacet";
import {WorkSubjectValueFacet} from "./WorkSubjectValueFacet";

export const WorksFacet = Union(
  StringPropertyValueFacet,
  WorkCreationDateRangeFacet,
  WorkSubjectValueFacet
);

export type WorksFacet = Static<typeof WorksFacet>;
