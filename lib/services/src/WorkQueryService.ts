import {WorkQuery} from "./WorkQuery";
import {WorkQueryResults} from "./WorkQueryResults";

export interface WorkQueryService {
  getWorks(kwds: {
    limit: number;
    offset: number;
    query: WorkQuery;
  }): Promise<WorkQueryResults>;
}
