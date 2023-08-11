import {ThumbnailSelector} from "@paradicms/models";
import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";

export interface PropertyGroupJoinSelector {
  properties?: PropertyJoinSelector;
  propertiesByKey?: {[index: string]: PropertyJoinSelector};
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
