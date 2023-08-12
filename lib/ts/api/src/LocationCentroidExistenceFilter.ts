import {Literal, Static} from "runtypes";
import {ExistenceFilter} from "./ExistenceFilter";

export const LocationCentroidExistenceFilter = ExistenceFilter.extend({
  type: Literal("LocationCentroidExistence"),
}).asReadonly();

export type LocationCentroidExistenceFilter = Static<
  typeof LocationCentroidExistenceFilter
>;
