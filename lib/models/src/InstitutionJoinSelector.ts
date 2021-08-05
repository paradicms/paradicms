import {ThumbnailSelector} from "./ThumbnailSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {ObjectJoinSelector} from "./ObjectJoinSelector";

/**
 * See note in DataSubsetter re: the use of this interface.
 */
export interface InstitutionJoinSelector {
  // Return all Collections whose institutionUri refers to this Institution.
  collections?: CollectionJoinSelector;
  // Return all Objects whose institutionUri refers to this Institution.
  objects?: ObjectJoinSelector;
  // Return licenses, rights statements, etc. that the institution's Rights refer to.
  rights?: boolean;
  // Return a single thumbnail Image for this Institution.
  thumbnail?: ThumbnailSelector;
}
