import {ThumbnailSelector} from "./ThumbnailSelector";
import {PropertyJoinSelector} from "./PropertyJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface PropertyValueJoinSelector {
  property?: PropertyJoinSelector;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
