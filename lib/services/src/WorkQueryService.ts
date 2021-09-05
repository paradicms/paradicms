import {WorkQuery, WorkQueryResults} from "@paradicms/models";

export interface WorkQueryService {
  getWorks(kwds: {
    limit: number;
    offset: number;
    query: WorkQuery;
  }): Promise<WorkQueryResults>;
}
