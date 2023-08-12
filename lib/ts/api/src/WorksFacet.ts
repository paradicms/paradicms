import {Static, Union} from "runtypes";
import {StringPropertyValueFacet} from "./StringPropertyValueFacet";

export const WorksFacet = Union(StringPropertyValueFacet);

export type WorksFacet = Static<typeof WorksFacet>;
