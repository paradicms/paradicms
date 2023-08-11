import {AgentJoinSelector} from "./AgentJoinSelector";

export interface RightsJoinSelector {
  agents?: AgentJoinSelector;
  licenses?: boolean;
  rightsStatements?: boolean;
}
