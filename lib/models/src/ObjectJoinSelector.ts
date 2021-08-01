import {ThumbnailSelector} from "./ThumbnailSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";


/**
 * See note in DataSubsetter re: the use of this interface.
 */
export interface ObjectJoinSelector {
  // Return all Images that depict this Object.
  allImages?: boolean;
  // Return all collections referred to by this Object's collectionUris.
  collections?: CollectionJoinSelector;
  // Return the Institution referred to by this Object's institutionUri.
  institution?: CollectionJoinSelector;
  // Return a single thumbnail Image for this Object.
  thumbnail?: ThumbnailSelector;
}
