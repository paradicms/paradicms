import {AgentsSort} from "./AgentsSort";
import {WorksQuery} from "./WorksQuery";
import {GetModelsOptions} from "./GetModelsOptions";
import {AgentJoinSelector} from "./AgentJoinSelector";

export interface GetWorkAgentsOptions
  extends Omit<GetModelsOptions<AgentJoinSelector, {}, AgentsSort>, "query"> {
  readonly worksQuery?: WorksQuery;
}
