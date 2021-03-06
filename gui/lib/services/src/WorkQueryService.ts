import {WorkQuery} from "./WorkQuery";
import {GetWorksResult} from "./GetWorksResult";
import {GetWorksOptions} from "./GetWorksOptions";
import {GetWorkAgentsOptions} from "./GetWorkAgentsOptions";
import {GetWorkAgentsResult} from "./GetWorkAgentsResult";
import {GetWorkEventsOptions} from "./GetWorkEventsOptions";
import {GetWorkEventsResult} from "./GetWorkEventsResult";
import {GetWorkLocationsOptions} from "./GetWorkLocationsOptions";
import {GetWorkLocationsResult} from "./GetWorkLocationsResult";

export interface WorkQueryService {
  /**
   * Get agents associated with any of the works matched by the query.
   */
  getWorkAgents(
    options: GetWorkAgentsOptions,
    query: WorkQuery
  ): Promise<GetWorkAgentsResult>;

  /**
   * Get events associated with any of the works matched by the query. Limit + offset is applied after the events are sorted by date ascending.
   */
  getWorkEvents(
    options: GetWorkEventsOptions,
    query: WorkQuery
  ): Promise<GetWorkEventsResult>;

  /**
   * Get locations associated with any of the works matched by the query.
   */
  getWorkLocations(
    options: GetWorkLocationsOptions,
    query: WorkQuery
  ): Promise<GetWorkLocationsResult>;

  /**
   * Get works matched by the query.
   */
  getWorks(options: GetWorksOptions, query: WorkQuery): Promise<GetWorksResult>;
}
