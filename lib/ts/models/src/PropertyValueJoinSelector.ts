import {ThumbnailSelector} from "./ThumbnailSelector";
import {PropertyJoinSelector} from "./PropertyJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface PropertyValueJoinSelector {
  property?: PropertyJoinSelector;
  thumbnail?: ThumbnailSelector;
}
