import {AgentJoinSelector} from "./AgentJoinSelector";

/**
 * See note in ModelSetBuilder re: the use of this interface.
 */
export interface WorkEventJoinSelector {
  agents?: AgentJoinSelector;
  location?: boolean;
}
