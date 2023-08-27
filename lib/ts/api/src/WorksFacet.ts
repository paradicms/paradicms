import {Static, Union} from "runtypes";
import {StringPropertyValueFacet} from "./StringPropertyValueFacet";
import {WorkSubjectValueFacet} from "./WorkSubjectValueFacet";

export const WorksFacet = Union(
  StringPropertyValueFacet,
  WorkSubjectValueFacet
);

export type WorksFacet = Static<typeof WorksFacet>;
