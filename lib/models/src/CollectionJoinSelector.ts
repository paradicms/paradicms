import {ThumbnailSelector} from "./ThumbnailSelector";
import {InstitutionJoinSelector} from "./InstitutionJoinSelector";
import {ObjectJoinSelector} from "./ObjectJoinSelector";

export interface CollectionJoinSelector {
  // Return the Institution referred to by the Collection's institutionUri.
  institution?: InstitutionJoinSelector;
  // Return all objects that have a collectionUri referring to this Collection.
  objects?: ObjectJoinSelector;
  // Return a single thumbnail Image for this Collection.
  thumbnail?: ThumbnailSelector;
}
