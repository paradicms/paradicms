import {Optional, Record, Static} from "runtypes";
import {ImageDimensions} from "./ImageDimensions";

export const ThumbnailSelector = Record({
  minDimensions: Optional(ImageDimensions),
  maxDimensions: Optional(ImageDimensions),
  targetDimensions: ImageDimensions,
}).asReadonly();

export type ThumbnailSelector = Static<typeof ThumbnailSelector>;
