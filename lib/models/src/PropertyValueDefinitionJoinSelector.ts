import {ThumbnailSelector} from "./ThumbnailSelector";

/**
 * See note in DataSubsetter re: the use of this interface.
 */
export interface PropertyValueDefinitionJoinSelector {
  allImages?: boolean;
  thumbnail?: ThumbnailSelector;
}
