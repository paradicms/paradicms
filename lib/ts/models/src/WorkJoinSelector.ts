import {ThumbnailSelector} from "./ThumbnailSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {ConceptJoinSelector} from "./ConceptJoinSelector";
import {WorkEventJoinSelector} from "./WorkEventJoinSelector";

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
  // Return any Property's that apply to this Work.
  properties?: boolean;
  // Return any Concepts referred to by this Work.
  propertyValues?: ConceptJoinSelector;
  // Return a single thumbnail Image for this Work.
  thumbnail?: ThumbnailSelector;
}
