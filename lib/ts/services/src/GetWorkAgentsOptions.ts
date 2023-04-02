import {AgentJoinSelector} from "@paradicms/models";
import {WorkAgentsSortProperty} from "./WorkAgentsSortProperty";

export interface GetWorkAgentsOptions {
  readonly agentJoinSelector?: AgentJoinSelector;
  readonly limit: number;
  readonly offset: number;
  readonly sort?: WorkAgentsSortProperty;
}
