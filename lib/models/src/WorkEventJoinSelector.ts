import {AgentJoinSelector} from "./AgentJoinSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";

/**
 * See note in DataSubsetter re: the use of this interface.
 */
export interface WorkEventJoinSelector {
  agents?: AgentJoinSelector;
  work?: WorkJoinSelector;
}
