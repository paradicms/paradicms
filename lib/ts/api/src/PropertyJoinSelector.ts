import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {ThumbnailSelector} from "@paradicms/models";
import {ImageJoinSelector} from "./ImageJoinSelector";

export interface PropertyJoinSelector {
  groups?: PropertyGroupJoinSelector;
  rangeValues?: PropertyValueJoinSelector;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
