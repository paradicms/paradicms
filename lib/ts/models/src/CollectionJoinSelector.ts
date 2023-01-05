import {ThumbnailSelector} from "./ThumbnailSelector";
import {InstitutionJoinSelector} from "./InstitutionJoinSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface CollectionJoinSelector {
  // Return the Institution referred to by the Collection's institutionUri.
  institution?: InstitutionJoinSelector;
  // Return a single thumbnail Image for this Collection.
  thumbnail?: ThumbnailSelector;
  // Return all works that have a collectionUri referring to this Collection.
  works?: WorkJoinSelector;
}
