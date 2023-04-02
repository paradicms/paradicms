import {AgentJoinSelector} from "@paradicms/models";
import {WorkAgentSortProperty} from "./WorkAgentSortProperty";

export interface GetWorkAgentsOptions {
  readonly agentJoinSelector?: AgentJoinSelector;
  readonly limit: number;
  readonly offset: number;
  readonly sort?: WorkAgentSortProperty;
}
