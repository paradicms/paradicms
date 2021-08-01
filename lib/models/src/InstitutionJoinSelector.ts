import {ThumbnailSelector} from "./ThumbnailSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {ObjectJoinSelector} from "./ObjectJoinSelector";

export interface InstitutionJoinSelector {
  // Return all Collections whose institutionUri refers to this Institution.
  collections?: CollectionJoinSelector;
  // Return all Objects whose institutionUri refers to this Institution.
  objects?: ObjectJoinSelector;
  // Return a single thumbnail Image for this Institution.
  thumbnail?: ThumbnailSelector;
}
