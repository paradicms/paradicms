import {ThumbnailSelector} from "./ThumbnailSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {EventJoinSelector} from "./EventJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {RightsJoinSelector} from "./RightsJoinSelector";
import {AgentJoinSelector} from "./AgentJoinSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface WorkJoinSelector {
  agents?: AgentJoinSelector;
  description?: RightsJoinSelector;
  // Return all events that refer to this work.
  events?: EventJoinSelector;
  // Return all Images that depict this Work.
  images?: ImageJoinSelector;
  // Return all locations referred to by this Work
  location?: boolean;
  // Return any Concepts referred to by this Work.
  propertyValues?: PropertyValueJoinSelector;
  // Return a single thumbnail Image for this Work.
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
