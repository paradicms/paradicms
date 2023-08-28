import {Static} from "runtypes";
import {DateRangeEndpoint} from "./DateRangeEndpoint";
import {RangeFacet} from "./RangeFacet";

export const DateRangeFacet = RangeFacet(DateRangeEndpoint);

export type DateRangeFacet = Static<typeof DateRangeFacet>;
