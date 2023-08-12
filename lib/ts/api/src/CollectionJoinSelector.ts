import {ThumbnailSelector} from "@paradicms/models";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {TextJoinSelector} from "./TextJoinSelector";
import {Intersect, Optional, Record, Static} from "runtypes";

export const CollectionJoinSelector = Record({
  description: Optional(TextJoinSelector),
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
  works: Optional(WorkJoinSelector),
}).asReadonly();

export type CollectionJoinSelector = Static<typeof CollectionJoinSelector>;
