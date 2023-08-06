import {WorksQuery} from "./WorksQuery";
import {GetWorksResult} from "./GetWorksResult";
import {GetWorksOptions} from "./GetWorksOptions";
import {GetWorkAgentsOptions} from "./GetWorkAgentsOptions";
import {GetWorkAgentsResult} from "./GetWorkAgentsResult";
import {GetWorkEventsOptions} from "./GetWorkEventsOptions";
import {GetWorkEventsResult} from "./GetWorkEventsResult";
import {GetWorkLocationsOptions} from "./GetWorkLocationsOptions";
import {GetWorkLocationsResult} from "./GetWorkLocationsResult";
import {GetCollectionsOptions} from "./GetCollectionsOptions";
import {GetCollectionsResult} from "./GetCollectionsResult";
import {GetWorkKeysResult} from "./GetWorkKeysResult";

export interface Api {
  /**
   * Get available collections.
   */
  getCollections(options: GetCollectionsOptions): Promise<GetCollectionsResult>;

  /**
   * Get agents associated with any of the works matched by the query.
   */
  getWorkAgents(
    options: GetWorkAgentsOptions,
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
   * Get the keys of works matched by the query.
   */
  getWorkKeys(
    options: GetWorksOptions,
    query: WorksQuery
  ): Promise<GetWorkKeysResult>;

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
