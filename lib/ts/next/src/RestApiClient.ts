import {
  Api,
  GetCollectionsOptions,
  GetEventIrisOptions,
  GetEventsOptions,
  GetModelKeysResult,
  GetModelsResult,
  GetPropertiesOptions,
  GetPropertyGroupIrisOptions,
  GetPropertyGroupsOptions,
  GetWorkAgentsOptions,
  GetWorkEventsOptions,
  GetWorkIrisOptions,
  GetWorkLocationsOptions,
  GetWorkLocationsResult,
  GetWorksOptions,
  GetWorksResult,
  WorksFacet,
} from "@paradicms/api";
import {JsonAppConfiguration, ModelSetFactory} from "@paradicms/models";
import {Array, Unknown} from "runtypes";

const GetModelsResult = GetModelKeysResult.extend({
  modelSet: Unknown,
});

const GetWorksResult = GetModelKeysResult.extend({
  facets: Array(WorksFacet).asReadonly(),
  modelSet: Unknown,
}).asReadonly();

export class RestApiClient implements Api {
  getAppConfiguration(): Promise<JsonAppConfiguration | null> {
    return Promise.reject(new EvalError("not implemented"));
  }

  getCollections(kwds?: GetCollectionsOptions): Promise<GetModelsResult> {
    return this.getModels("/collections", kwds);
  }

  getEventIris(kwds?: GetEventIrisOptions): Promise<GetModelKeysResult> {
    return this.getModelIris("/eventKeys", kwds);
  }

  getEvents(kwds?: GetEventsOptions): Promise<GetModelsResult> {
    return this.getModels("/events", kwds);
  }

  private async getJson(url: string, options?: any): Promise<any> {
    const response = await fetch("/api" + url, {
      body: options ? JSON.stringify(options) : undefined,
      headers: options
        ? {
            "Content-Type": "application/json",
          }
        : undefined,
      method: "POST",
    });
    return await response.json();
  }

  getProperties(kwds?: GetPropertiesOptions): Promise<GetModelsResult> {
    return this.getModels("/properties", kwds);
  }

  getPropertyGroupIris(
    kwds?: GetPropertyGroupIrisOptions
  ): Promise<GetModelKeysResult> {
    return this.getModelIris("/propertyGroupKeys", kwds);
  }

  getPropertyGroups(kwds?: GetPropertyGroupsOptions): Promise<GetModelsResult> {
    return this.getModels("/propertyGroups", kwds);
  }

  private async getModelIris(
    url: string,
    options?: any
  ): Promise<GetModelKeysResult> {
    const responseJson = await this.getJson(url, options);
    return GetModelKeysResult.check(responseJson);
  }

  private async getModels(
    url: string,
    options?: any
  ): Promise<GetModelsResult> {
    const responseJson = await this.getJson(url, options);
    const {modelSet: modelSetJsonLd, ...otherProps} = GetModelsResult.check(
      responseJson
    );
    return {
      modelSet: await ModelSetFactory.fromJsonLd(modelSetJsonLd as any),
      ...otherProps,
    };
  }

  getWorkAgents(kwds?: GetWorkAgentsOptions): Promise<GetModelsResult> {
    return this.getModels("/workAgents", kwds);
  }

  getWorkEvents(kwds?: GetWorkEventsOptions): Promise<GetModelsResult> {
    return this.getModels("/workEvents", kwds);
  }

  getWorkIris(kwds?: GetWorkIrisOptions): Promise<GetModelKeysResult> {
    return this.getModelIris("/workIris", kwds);
  }

  async getWorkLocations(
    kwds?: GetWorkLocationsOptions
  ): Promise<GetWorkLocationsResult> {
    const responseJson = await this.getJson("/workLocations", kwds);
    return GetWorkLocationsResult.check(responseJson);
  }

  async getWorks(kwds?: GetWorksOptions): Promise<GetWorksResult> {
    const responseJson = await this.getJson("/works", kwds);
    const {modelSet: modelSetJsonLd, ...otherProps} = GetWorksResult.check(
      responseJson
    );
    return {
      modelSet: await ModelSetFactory.fromJsonLd(modelSetJsonLd as any),
      ...otherProps,
    };
  }
}
