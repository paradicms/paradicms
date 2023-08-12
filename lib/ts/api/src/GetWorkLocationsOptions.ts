import {Optional, Record, Static} from "runtypes";
import {LocationsQuery} from "./LocationsQuery";
import {WorksQuery} from "./WorksQuery";

export const GetWorkLocationsOptions = Record({
  locationsQuery: Optional(LocationsQuery),
  worksQuery: Optional(WorksQuery),
}).asReadonly();

export type GetWorkLocationsOptions = Static<typeof GetWorkLocationsOptions>;
