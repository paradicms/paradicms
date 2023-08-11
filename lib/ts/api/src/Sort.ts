import {Boolean, Record, Static, String} from "runtypes";

export const Sort = Record({
  ascending: Boolean,
  property: String,
});

export type Sort = Static<typeof Sort>;
