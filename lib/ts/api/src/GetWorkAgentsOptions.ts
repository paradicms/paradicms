import {AgentJoinSelector} from "@paradicms/models";
import {AgentsSort} from "./AgentsSort";

export interface GetWorkAgentsOptions {
  readonly agentJoinSelector?: AgentJoinSelector;
  readonly limit?: number;
  readonly offset?: number;
  readonly sort?: AgentsSort;
}
