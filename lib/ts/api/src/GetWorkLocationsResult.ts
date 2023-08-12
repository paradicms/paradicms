import {Array, Record, Static} from "runtypes";
import {WorkLocationSummary} from "./WorkLocationSummary";

export const GetWorkLocationsResult = Record({
  workLocations: Array(WorkLocationSummary).asReadonly(),
}).asReadonly();

export type GetWorkLocationsResult = Static<typeof GetWorkLocationsResult>;
