import {AgentJoinSelector} from "@paradicms/models";

export interface GetWorkAgentsOptions {
  readonly agentJoinSelector?: AgentJoinSelector;
  readonly limit: number;
  readonly offset: number;
}
