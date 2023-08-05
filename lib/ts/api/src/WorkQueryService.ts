import {WorksQuery} from "./WorksQuery";
import {GetWorksResult} from "./GetWorksResult";
import {GetWorksOptions} from "./GetWorksOptions";
import {GetNamedWorkAgentsOptions} from "./GetNamedWorkAgentsOptions";
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
    options: GetNamedWorkAgentsOptions,
    query: WorksQuery
  ): Promise<GetWorkAgentsResult>;

  /**
   * Get events associated with any of the works matched by the query. Limit + offset is applied after the events are sorted by date ascending.
   */
  getWorkEvents(
    options: GetWorkEventsOptions,
    query: WorksQuery
  ): Promise<GetWorkEventsResult>;

  /**
   * Get locations associated with any of the works matched by the query.
   */
  getWorkLocations(
    options: GetWorkLocationsOptions,
    query: WorksQuery
  ): Promise<GetWorkLocationsResult>;

  /**
   * Get works matched by the query.
   */
  getWorks(
    options: GetWorksOptions,
    query: WorksQuery
  ): Promise<GetWorksResult>;
}
