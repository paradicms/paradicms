import {Number, Optional, Record, Static} from "runtypes";

export const DateRangeEndpoint = Record({
  day: Optional(Number),
  month: Optional(Number),
  year: Number,
}).asReadonly();

export type DateRangeEndpoint = Static<typeof DateRangeEndpoint>;
