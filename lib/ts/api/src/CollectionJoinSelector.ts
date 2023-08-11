import {ThumbnailSelector} from "@paradicms/models";
import {WorkJoinSelector} from "./WorkJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {RightsJoinSelector} from "./RightsJoinSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface CollectionJoinSelector {
  description?: RightsJoinSelector;
  // Return a single thumbnail Image for this Collection.
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
  // Return all works that have a collectionIri referring to this Collection.
  works?: WorkJoinSelector;
}
