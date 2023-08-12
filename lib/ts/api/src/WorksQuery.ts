import {WorksFilter} from "./WorksFilter";
import {Array, Optional, Record, Static, String} from "runtypes";

export const WorksQuery = Record({
  filters: Optional(Array(WorksFilter).asReadonly()),
  text: Optional(String),
}).asReadonly();

export type WorksQuery = Static<typeof WorksQuery>;
