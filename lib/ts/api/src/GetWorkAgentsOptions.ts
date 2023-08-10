import {AgentJoinSelector} from "@paradicms/models";
import {AgentsSort} from "./AgentsSort";
import {WorksQuery} from "./WorksQuery";
import {GetModelsOptions} from "./GetModelsOptions";

export interface GetWorkAgentsOptions
  extends Omit<GetModelsOptions<AgentJoinSelector, {}, AgentsSort>, "query"> {
  readonly worksQuery?: WorksQuery;
}
