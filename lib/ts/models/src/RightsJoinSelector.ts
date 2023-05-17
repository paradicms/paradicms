import {AgentJoinSelector} from "AgentJoinSelector";

export interface RightsJoinSelector {
  agents?: AgentJoinSelector;
  license?: boolean;
  rightsStatement?: boolean;
}
