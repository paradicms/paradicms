import {ThumbnailSelector} from "@paradicms/models";
import {Dictionary, Intersect, Optional, Record, Static} from "runtypes";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {PropertyJoinSelector} from "./PropertyJoinSelector";

export const PropertyGroupJoinSelector = Record({
  properties: Optional(PropertyJoinSelector),
  propertiesByIri: Optional(Dictionary(PropertyJoinSelector)),
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
}).asReadonly();

export type PropertyGroupJoinSelector = Static<
  typeof PropertyGroupJoinSelector
>;
