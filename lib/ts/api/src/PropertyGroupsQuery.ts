import {Array, Optional, Record, Static} from "runtypes";
import {PropertyGroupsFilter} from "./PropertyGroupsFilter";

export const PropertyGroupsQuery = Record({
  filters: Optional(Array(PropertyGroupsFilter).asReadonly()),
}).asReadonly();

export type PropertyGroupsQuery = Static<typeof PropertyGroupsQuery>;
