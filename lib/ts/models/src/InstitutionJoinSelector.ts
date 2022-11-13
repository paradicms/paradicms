import {ThumbnailSelector} from "./ThumbnailSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface InstitutionJoinSelector {
  // Return all Collections whose institutionUri refers to this Institution.
  collections?: CollectionJoinSelector;
  // Return a single thumbnail Image for this Institution.
  thumbnail?: ThumbnailSelector;
  // Return all Works whose institutionUri refers to this Institution.
  works?: WorkJoinSelector;
}
