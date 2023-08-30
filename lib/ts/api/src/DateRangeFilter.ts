import {Static} from "runtypes";
import {DateRangeEndpoint} from "./DateRangeEndpoint";
import {RangeFilter} from "./RangeFilter";

export const DateRangeFilter = RangeFilter(DateRangeEndpoint);

export type DateRangeFilter = Static<typeof DateRangeFilter>;
