import {ThumbnailSelector} from "@paradicms/models";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {Intersect, Optional, Record, Static} from "runtypes";

export const AgentJoinSelector = Record({
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
  // works: Optional(WorkJoinSelector),
}).asReadonly();

export type AgentJoinSelector = Static<typeof AgentJoinSelector>;
