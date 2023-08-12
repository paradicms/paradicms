import {Number, Record, Static} from "runtypes";

export const ImageDimensions = Record({
  height: Number,
  width: Number,
}).asReadonly();

export type ImageDimensions = Static<typeof ImageDimensions>;
