import {ThumbnailSelector} from "./ThumbnailSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface CollectionJoinSelector {
  // Return a single thumbnail Image for this Collection.
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
  // Return all works that have a collectionIri referring to this Collection.
  works?: WorkJoinSelector;
}
