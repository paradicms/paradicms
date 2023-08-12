import {AgentsSort} from "./AgentsSort";
import {WorksQuery} from "./WorksQuery";
import {GetModelsOptions} from "./GetModelsOptions";
import {AgentJoinSelector} from "./AgentJoinSelector";
import {Optional, Record, Static} from "runtypes";

export const GetWorkAgentsOptions = GetModelsOptions(
  AgentJoinSelector,
  Record({}),
  AgentsSort
)
  .omit("query")
  .extend({
    worksQuery: Optional(WorksQuery),
  })
  .asReadonly();

export type GetWorkAgentsOptions = Static<typeof GetWorkAgentsOptions>;
