import {AgentJoinSelector} from "./AgentJoinSelector";
import {ImageJoinSelector} from "./ImageJoinSelector";
import {ThumbnailSelector} from "@paradicms/models";
import {RightsJoinSelector} from "./RightsJoinSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface EventJoinSelector {
  agents?: AgentJoinSelector;
  description?: RightsJoinSelector;
  location?: boolean;
  thumbnail?: ImageJoinSelector & ThumbnailSelector;
}
