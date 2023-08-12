import {Number, Record, Static} from "runtypes";

export const Point = Record({
  latitude: Number,
  longitude: Number,
}).asReadonly();

export type Point = Static<typeof Point>;
