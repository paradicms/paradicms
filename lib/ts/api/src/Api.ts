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
import {GetWorkKeysOptions} from "./GetWorkKeysOptions";
import {GetEventKeysOptions} from "./GetEventKeysOptions";
import {GetEventKeysResult} from "./GetEventKeysResult";

export interface Api {
  getAppConfiguration(): Promise<JsonAppConfiguration | null>;

  /**
   * Get collections matched by the query.
   */
  getCollections(kwds?: GetCollectionsOptions): Promise<GetCollectionsResult>;

  /**
   * Get event keys matched by the query.
   */
  getEventKeys(kwds?: GetEventKeysOptions): Promise<GetEventKeysResult>;

  /**
   * Get events matched by the query.
   */
  getEvents(kwds?: GetEventsOptions): Promise<GetEventsResult>;

  /**
   * Get agents associated with any of the works matched by the query.
   */
  getWorkAgents(kwds?: GetWorkAgentsOptions): Promise<GetWorkAgentsResult>;

  /**
   * Get events associated with any of the works matched by the query. Limit + offset is applied after the events are sorted by date ascending.
   */
  getWorkEvents(kwds?: GetWorkEventsOptions): Promise<GetWorkEventsResult>;

  /**
   * Get the keys of works matched by the query.
   */
  getWorkKeys(kwds?: GetWorkKeysOptions): Promise<GetWorkKeysResult>;

  /**
   * Get locations associated with any of the works matched by the query.
   */
  getWorkLocations(
    kwds?: GetWorkLocationsOptions
  ): Promise<GetWorkLocationsResult>;

  /**
   * Get works matched by the query.
   */
  getWorks(kwds?: GetWorksOptions): Promise<GetWorksResult>;
}
