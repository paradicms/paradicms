import {ThumbnailSelector} from "@paradicms/models";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {EventJoinSelector} from "./EventJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {Boolean, Intersect, Optional, Record, Static} from "runtypes";
import {TextJoinSelector} from "./TextJoinSelector";

export const WorkJoinSelector = Record({
  agents: Optional(AgentJoinSelector),
  description: Optional(TextJoinSelector),
  events: Optional(EventJoinSelector),
  images: Optional(ImageJoinSelector),
  location: Optional(Boolean),
  propertyValues: Optional(PropertyValueJoinSelector),
  thumbnail: Optional(Intersect(ImageJoinSelector, ThumbnailSelector)),
}).asReadonly();

export type WorkJoinSelector = Static<typeof WorkJoinSelector>;
