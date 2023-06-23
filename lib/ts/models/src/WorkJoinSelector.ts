import {ThumbnailSelector} from "./ThumbnailSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {RightsJoinSelector} from "./RightsJoinSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface WorkJoinSelector extends RightsJoinSelector {
  // Return all events that refer to this work.
  events?: WorkEventJoinSelector;
  // Return all Images that depict this Work.
  images?: ImageJoinSelector;
  // Return all locations referred to by this Work
  location?: boolean;
  // Return any Concepts referred to by this Work.
  propertyValues?: PropertyValueJoinSelector;
  // Return a single thumbnail Image for this Work.
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
