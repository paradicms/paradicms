import {ThumbnailSelector} from "./ThumbnailSelector";
import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";

export interface PropertyGroupJoinSelector {
  properties?: PropertyJoinSelector;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
