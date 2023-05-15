import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";

export interface PropertyJoinSelector {
  groups?: PropertyGroupJoinSelector;
  rangeValues?: PropertyValueJoinSelector;
}
