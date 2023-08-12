import {AgentJoinSelector} from "./AgentJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {ThumbnailSelector} from "@paradicms/models";
import {Boolean, Intersect, Optional, Record, Static} from "runtypes";
import {TextJoinSelector} from "./TextJoinSelector";

export const EventJoinSelector = Record({
  agents: Optional(AgentJoinSelector),
  description: Optional(TextJoinSelector),
  location: Optional(Boolean),
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
}).asReadonly();

export type EventJoinSelector = Static<typeof EventJoinSelector>;
