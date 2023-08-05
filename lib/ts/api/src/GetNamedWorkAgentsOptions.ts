import {AgentJoinSelector} from "@paradicms/models";
import {WorkAgentsSort} from "./WorkAgentsSort";

export interface GetNamedWorkAgentsOptions {
  readonly agentJoinSelector?: AgentJoinSelector;
  readonly limit: number;
  readonly offset: number;
  readonly sort?: WorkAgentsSort;
}
