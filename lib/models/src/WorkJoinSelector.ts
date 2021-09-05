import {ThumbnailSelector} from "./ThumbnailSelector";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {InstitutionJoinSelector} from "./InstitutionJoinSelector";
import {PropertyDefinitionJoinSelector} from "./PropertyDefinitionJoinSelector";

/**
 * See note in DataSubsetter re: the use of this interface.
 */
export interface WorkJoinSelector {
  // Return all Images that depict this Work.
  allImages?: boolean;
  // Return all collections referred to by this Work's collectionUris.
  collections?: CollectionJoinSelector;
  // Return the Institution referred to by this Work's institutionUri.
  institution?: InstitutionJoinSelector;
  // Return definitions for the Work's properties
  propertyDefinitions?: PropertyDefinitionJoinSelector;
  // Return a single thumbnail Image for this Work.
  thumbnail?: ThumbnailSelector;
}
