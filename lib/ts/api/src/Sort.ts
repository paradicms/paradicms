import {Boolean, Record, Static, String} from "runtypes";

export const Sort = Record({
  ascending: Boolean,
  property: String,
}).asReadonly();

export type Sort = Static<typeof Sort>;
