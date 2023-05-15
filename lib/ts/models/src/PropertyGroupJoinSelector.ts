import {ThumbnailSelector} from "./ThumbnailSelector";
import {PropertyJoinSelector} from "./PropertyJoinSelector";

export interface PropertyGroupJoinSelector {
  properties?: PropertyJoinSelector;
  thumbnail?: ThumbnailSelector;
}
