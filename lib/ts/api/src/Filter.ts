import {Optional, Record, Static, String} from "runtypes";

export const Filter = Record({
  label: Optional(String),
  type: String,
}).asReadonly();

export type Filter = Static<typeof Filter>;
