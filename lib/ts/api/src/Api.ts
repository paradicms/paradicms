import {JsonAppConfiguration} from "@paradicms/models";
import {GetCollectionsOptions} from "./GetCollectionsOptions";
import {GetEventIrisOptions} from "./GetEventIrisOptions";
import {GetEventsOptions} from "./GetEventsOptions";
import {GetModelKeysResult} from "./GetModelIrisResult";
import {GetModelsResult} from "./GetModelsResult";
import {GetPropertiesOptions} from "./GetPropertiesOptions";
import {GetPropertyGroupIrisOptions} from "./GetPropertyGroupIrisOptions";
import {GetPropertyGroupsOptions} from "./GetPropertyGroupsOptions";
import {GetWorkAgentsOptions} from "./GetWorkAgentsOptions";
import {GetWorkEventsOptions} from "./GetWorkEventsOptions";
import {GetWorkIrisOptions} from "./GetWorkIrisOptions";
import {GetWorkLocationsOptions} from "./GetWorkLocationsOptions";
import {GetWorkLocationsResult} from "./GetWorkLocationsResult";
import {GetWorksOptions} from "./GetWorksOptions";
import {GetWorksResult} from "./GetWorksResult";

export interface Api {
  getAppConfiguration(): Promise<JsonAppConfiguration | null>;

  /**
   * Get collections matched by the query.
   */
  getCollections(kwds?: GetCollectionsOptions): Promise<GetModelsResult>;

  /**
   * Get event keys matched by the query.
   */
  getEventIris(kwds?: GetEventIrisOptions): Promise<GetModelKeysResult>;

  /**
   * Get events matched by the query.
   */
  getEvents(kwds?: GetEventsOptions): Promise<GetModelsResult>;

  /**
   * Get property group keys matched by the query.
   */
  getPropertyGroupIris(
    kwds?: GetPropertyGroupIrisOptions
  ): Promise<GetModelKeysResult>;

  /**
   * Get property groups matched by the query.
   */
  getPropertyGroups(kwds?: GetPropertyGroupsOptions): Promise<GetModelsResult>;

  /**
   * Get properties matched by the query.
   */
  getProperties(kwds?: GetPropertiesOptions): Promise<GetModelsResult>;

  /**
   * Get agents associated with any of the works matched by the query.
   */
  getWorkAgents(kwds?: GetWorkAgentsOptions): Promise<GetModelsResult>;

  /**
   * Get events associated with any of the works matched by the query. Limit + offset is applied after the events are sorted by date ascending.
   */
  getWorkEvents(kwds?: GetWorkEventsOptions): Promise<GetModelsResult>;

  /**
   * Get the IRIs of works matched by the query.
   */
  getWorkIris(kwds?: GetWorkIrisOptions): Promise<GetModelKeysResult>;

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
