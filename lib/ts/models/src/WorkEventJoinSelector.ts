import {AgentJoinSelector} from "./AgentJoinSelector";
import {WorkJoinSelector} from "./WorkJoinSelector";

/**
 * See note in ModelSubsetter re: the use of this interface.
 */
export interface WorkEventJoinSelector {
  agents?: AgentJoinSelector;
  work?: WorkJoinSelector;
}
