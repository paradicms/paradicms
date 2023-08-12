import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {ThumbnailSelector} from "@paradicms/models";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {Boolean, Intersect, Optional, Record, Static} from "runtypes";

export const PropertyJoinSelector = Record({
  groups: Optional(Boolean),
  rangeValues: Optional(PropertyValueJoinSelector),
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
}).asReadonly();

export type PropertyJoinSelector = Static<typeof PropertyJoinSelector>;
