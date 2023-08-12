import {Array, Optional, Record, Static} from "runtypes";
import {LocationsFilter} from "./LocationsFilter";

export const LocationsQuery = Record({
  filters: Optional(Array(LocationsFilter).asReadonly()),
}).asReadonly();

export type LocationsQuery = Static<typeof LocationsQuery>;
