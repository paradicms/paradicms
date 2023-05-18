import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";

export interface PropertyJoinSelector {
  rangeValues?: PropertyValueJoinSelector;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
