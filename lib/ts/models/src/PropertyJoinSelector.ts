import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {ThumbnailSelector} from "./ThumbnailSelector";

export interface PropertyJoinSelector {
  groups?: PropertyGroupJoinSelector;
  rangeValues?: PropertyValueJoinSelector;
  thumbnail?: ThumbnailSelector;
}
