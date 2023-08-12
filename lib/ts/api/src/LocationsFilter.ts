import {Static, Union} from "runtypes";
import {KeyFilter} from "./KeyFilter";
import {LocationCentroidExistenceFilter} from "./LocationCentroidExistenceFilter";

export const LocationsFilter = Union(
  KeyFilter,
  LocationCentroidExistenceFilter
);

export type LocationsFilter = Static<typeof LocationsFilter>;
