import {ThumbnailSelector} from "@paradicms/models";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {Boolean, Intersect, Optional, Record, Static} from "runtypes";

export const PropertyValueJoinSelector = Record({
  property: Optional(Boolean),
  propertyGroup: Optional(Boolean),
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
}).asReadonly();

export type PropertyValueJoinSelector = Static<
  typeof PropertyValueJoinSelector
>;
