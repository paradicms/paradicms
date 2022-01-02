import {WorkQuery} from "./WorkQuery";
import {GetWorksResult} from "./GetWorksResult";
import {GetWorksOptions} from "./GetWorksOptions";
import {GetWorkAgentsOptions} from "./GetWorkAgentsOptions";
import {GetWorkAgentsResult} from "./GetWorkAgentsResult";

export interface WorkQueryService {
  getWorkAgents(
    options: GetWorkAgentsOptions,
    query: WorkQuery
  ): Promise<GetWorkAgentsResult>;

  getWorks(options: GetWorksOptions, query: WorkQuery): Promise<GetWorksResult>;
}
