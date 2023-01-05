import {ThumbnailSelector} from "./ThumbnailSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface AgentJoinSelector {
  // Return a single thumbnail Image for this Agent.
  thumbnail?: ThumbnailSelector;
  works?: WorkJoinSelector;
}
