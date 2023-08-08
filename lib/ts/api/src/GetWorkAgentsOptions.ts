import {AgentJoinSelector} from "@paradicms/models";
import {AgentsSort} from "./AgentsSort";
import {WorksQuery} from "./WorksQuery";

export interface GetWorkAgentsOptions {
  readonly agentJoinSelector?: AgentJoinSelector;
  readonly limit?: number;
  readonly offset?: number;
  readonly sort?: AgentsSort;
  readonly worksQuery?: WorksQuery;
}
