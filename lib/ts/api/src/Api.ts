import {GetWorksResult} from "./GetWorksResult";
import {GetWorksOptions} from "./GetWorksOptions";
import {GetWorkAgentsOptions} from "./GetWorkAgentsOptions";
import {GetWorkEventsOptions} from "./GetWorkEventsOptions";
import {GetWorkLocationsOptions} from "./GetWorkLocationsOptions";
import {GetWorkLocationsResult} from "./GetWorkLocationsResult";
import {GetCollectionsOptions} from "./GetCollectionsOptions";
import {GetModelsResult} from "./GetModelsResult";
import {JsonAppConfiguration} from "@paradicms/models";
import {GetEventsOptions} from "./GetEventsOptions";
import {GetWorkKeysOptions} from "./GetWorkKeysOptions";
import {GetEventKeysOptions} from "./GetEventKeysOptions";
import {GetModelKeysResult} from "./GetModelKeysResult";
import {GetPropertyGroupsOptions} from "./GetPropertyGroupsOptions";
import {GetPropertyGroupKeysOptions} from "./GetPropertyGroupKeysOptions";

export interface Api {
  getAppConfiguration(): Promise<JsonAppConfiguration | null>;

  /**
   * Get collections matched by the query.
   */
  getCollections(kwds?: GetCollectionsOptions): Promise<GetModelsResult>;

  /**
   * Get event keys matched by the query.
   */
  getEventKeys(kwds?: GetEventKeysOptions): Promise<GetModelKeysResult>;

  /**
   * Get events matched by the query.
   */
  getEvents(kwds?: GetEventsOptions): Promise<GetModelsResult>;

  /**
   * Get property group keys matched by the query.
   */
  getPropertyGroupKeys(
    kwds?: GetPropertyGroupKeysOptions
  ): Promise<GetModelKeysResult>;

  /**
   * Get property groups matched by the query.
   */
  getPropertyGroups(kwds?: GetPropertyGroupsOptions): Promise<GetModelsResult>;

  /**
   * Get agents associated with any of the works matched by the query.
   */
  getWorkAgents(kwds?: GetWorkAgentsOptions): Promise<GetModelsResult>;

  /**
   * Get events associated with any of the works matched by the query. Limit + offset is applied after the events are sorted by date ascending.
   */
  getWorkEvents(kwds?: GetWorkEventsOptions): Promise<GetModelsResult>;

  /**
   * Get the keys of works matched by the query.
   */
  getWorkKeys(kwds?: GetWorkKeysOptions): Promise<GetModelKeysResult>;

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
