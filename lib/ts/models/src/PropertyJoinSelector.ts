import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";

export interface PropertyJoinSelector {
  groups?: PropertyGroupJoinSelector;
  rangeValues?: PropertyValueJoinSelector;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
