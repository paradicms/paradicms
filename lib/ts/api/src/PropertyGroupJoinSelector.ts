import {ThumbnailSelector} from "@paradicms/models";
import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {Dictionary, Intersect, Optional, Record, Static} from "runtypes";

export const PropertyGroupJoinSelector = Record({
  properties: Optional(PropertyJoinSelector),
  propertiesByKey: Optional(Dictionary(PropertyJoinSelector)),
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
}).asReadonly();

export type PropertyGroupJoinSelector = Static<
  typeof PropertyGroupJoinSelector
>;
