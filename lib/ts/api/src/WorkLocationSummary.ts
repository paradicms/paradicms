import {Point, WorkLocationRole} from "@paradicms/models";
import {Optional, Record, Static, String} from "runtypes";

const LocationSummary = Record({
  centroid: Optional(Point),
  label: Optional(String),
}).asReadonly();

const WorkSummary = Record({
  iri: String,
  label: String,
}).asReadonly();

export const WorkLocationSummary = Record({
  label: Optional(String),
  location: LocationSummary,
  role: WorkLocationRole,
  work: WorkSummary,
}).asReadonly();

export type WorkLocationSummary = Static<typeof WorkLocationSummary>;
