import {ThumbnailSelector} from "./ThumbnailSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {PropertyValueJoinSelector} from "./PropertyValueJoinSelector";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";
import {PropertyJoinSelector} from "./PropertyJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface WorkJoinSelector {
  agents?: AgentJoinSelector;
  // Return all Images that depict this Work.
  allImages?: boolean;
  // Return all collections referred to by this Work's collectionUris.
  collections?: CollectionJoinSelector;
  // Return all events that refer to this work.
  events?: WorkEventJoinSelector;
  // Return all locations referred to by this Work
  location?: boolean;
  // Return any Property's that apply to this Work.
  properties?: PropertyJoinSelector;
  // Return any Concepts referred to by this Work.
  propertyValues?: PropertyValueJoinSelector;
  // Return a single thumbnail Image for this Work.
  thumbnail?: ThumbnailSelector;
}
