import {ThumbnailSelector} from "./ThumbnailSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface CollectionJoinSelector {
  // Return a single thumbnail Image for this Collection.
  thumbnail?: ThumbnailSelector;
  // Return all works that have a collectionUri referring to this Collection.
  works?: WorkJoinSelector;
}
