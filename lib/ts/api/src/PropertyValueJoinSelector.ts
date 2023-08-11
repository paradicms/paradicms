import {ThumbnailSelector} from "@paradicms/models";
import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface PropertyValueJoinSelector {
  property?: PropertyJoinSelector;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
