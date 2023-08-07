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
import {JsonAppConfiguration} from "@paradicms/models";
import {GetEventsOptions} from "./GetEventsOptions";
import {GetEventsResult} from "./GetEventsResult";
import {EventsQuery} from "./EventsQuery";
import {CollectionsQuery} from "./CollectionsQuery";
import {LocationsQuery} from "./LocationsQuery";

export interface Api {
  getAppConfiguration(): Promise<JsonAppConfiguration | null>;

  /**
   * Get available collections.
   */
  getCollections(
    kwds: GetCollectionsOptions & {query: CollectionsQuery}
  ): Promise<GetCollectionsResult>;

  /**
   * Get events matched by the query.
   */
  getEvents(
    kwds: GetEventsOptions & {query: EventsQuery}
  ): Promise<GetEventsResult>;

  /**
   * Get agents associated with any of the works matched by the query.
   */
  getWorkAgents(
    kwds: GetWorkAgentsOptions & {worksQuery: WorksQuery}
  ): Promise<GetWorkAgentsResult>;

  /**
   * Get events associated with any of the works matched by the query. Limit + offset is applied after the events are sorted by date ascending.
   */
  getWorkEvents(
    kwds: GetWorkEventsOptions & {
      workEventsQuery: EventsQuery;
      worksQuery: WorksQuery;
    }
  ): Promise<GetWorkEventsResult>;

  /**
   * Get the keys of works matched by the query.
   */
  getWorkKeys(
    kwds: GetWorksOptions & {
      query: WorksQuery;
    }
  ): Promise<GetWorkKeysResult>;

  /**
   * Get locations associated with any of the works matched by the query.
   */
  getWorkLocations(
    kwds: GetWorkLocationsOptions & {
      locationsQuery: LocationsQuery;
      worksQuery: WorksQuery;
    }
  ): Promise<GetWorkLocationsResult>;

  /**
   * Get works matched by the query.
   */
  getWorks(
    kwds: GetWorksOptions & {
      query: WorksQuery;
    }
  ): Promise<GetWorksResult>;
}
