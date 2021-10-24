import {ThumbnailSelector} from "./ThumbnailSelector";

/**
 * See note in DataSubsetter re: the use of this interface.
 */
export interface AgentJoinSelector {
  // Return a single thumbnail Image for this Agent.
  thumbnail?: ThumbnailSelector;
}
