import {AgentJoinSelector} from "./AgentJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {ThumbnailSelector} from "./ThumbnailSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface WorkEventJoinSelector {
  agents?: AgentJoinSelector;
  location?: boolean;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
