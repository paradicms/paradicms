import {Static, Union} from "runtypes";
import {IriFilter} from "./IriFilter";
import {LocationCentroidExistenceFilter} from "./LocationCentroidExistenceFilter";

export const LocationsFilter = Union(
  IriFilter,
  LocationCentroidExistenceFilter
);

export type LocationsFilter = Static<typeof LocationsFilter>;
