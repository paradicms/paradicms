import {
  Api,
  CollectionsQuery,
  defaultAgentsSort,
  defaultEventsSort,
  defaultWorksSort,
  EventsQuery,
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
  LocationsQuery,
  PropertiesQuery,
  PropertyGroupsQuery,
  summarizeWorkLocation,
  WorksQuery,
} from "@paradicms/api";
import {
  defaultProperties,
  JsonAppConfiguration,
  Model,
  ModelSet,
  Point,
  Work,
  WorkAgent,
  WorkEvent,
  WorkLocation,
} from "@paradicms/models";
import {DataFactory} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {NamedNode} from "@rdfjs/types";
import log from "loglevel";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";
import {facetizeWorks} from "./facetizeWorks";
import {filterCollections} from "./filterCollections";
import {filterEvents} from "./filterEvents";
import {filterLocations} from "./filterLocations";
import {filterProperties} from "./filterProperties";
import {filterPropertyGroups} from "./filterPropertyGroups";
import {filterWorks} from "./filterWorks";
import {getModelIris} from "./getModelIris";
import {getModels} from "./getModels";
import {ModelSetBuilder} from "./ModelSetBuilder";
import {sortAgents} from "./sortAgents";
import {sortEvents} from "./sortEvents";
import {sortProperties} from "./sortProperties";
import {sortPropertyGroups} from "./sortPropertyGroups";
import {sortWorks} from "./sortWorks";

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);
const encodeLunrFieldName = (value: string) => {
  return base58.encode(new TextEncoder().encode(value));
};

const LIMIT_DEFAULT = Number.MAX_SAFE_INTEGER;
const OFFSET_DEFAULT = 0;

const getJoinSelector = <JoinSelectorT, ModelT extends Model>(
  model: ModelT,
  kwds: {
    joinSelector: JoinSelectorT | null;
    joinSelectorByIri: {[index: string]: JoinSelectorT} | null;
  }
): JoinSelectorT | undefined => {
  const {joinSelector, joinSelectorByIri} = kwds;
  if (joinSelectorByIri && joinSelectorByIri[model.iri.value]) {
    return joinSelectorByIri[model.iri.value];
  } else {
    return joinSelector ?? undefined;
  }
};

export class MemApi implements Api {
  private readonly index: Index;
  private readonly modelSet: ModelSet;
  // Index of work key -> keys of collections containing that work
  private readonly workCollectionIris: {
    [index: string]: readonly string[];
  };

  constructor(kwds: {readonly modelSet: ModelSet}) {
    this.modelSet = kwds.modelSet;

    let searchablePropertyIris: NamedNode[];
    if (kwds.modelSet.properties.length > 0) {
      searchablePropertyIris = kwds.modelSet.properties
        .filter(property => property.searchable)
        .map(property => property.iri);
    } else {
      searchablePropertyIris = defaultProperties
        .filter(property => property.searchable)
        .map(property => property.iri);
    }

    this.index = lunr(function() {
      const propertyFieldNamesByIri: {[index: string]: string} = {};
      for (const propertyIri of searchablePropertyIris) {
        const fieldName = encodeLunrFieldName(propertyIri.value);
        propertyFieldNamesByIri[propertyIri.value] = fieldName;
        this.field(fieldName);
      }

      for (const work of kwds.modelSet.works) {
        const doc: any = {id: work.iri.value};
        for (const propertyIri of searchablePropertyIris) {
          const fieldName = propertyFieldNamesByIri[propertyIri.value];
          if (!fieldName) {
            continue;
          }
          for (const propertyValue of work.propertyValuesByPropertyIri(
            propertyIri
          )) {
            doc[fieldName] = propertyValue.value;
          }
        }
        this.add(doc);
      }
    });

    const workCollectionIris: {[index: string]: string[]} = {};
    for (const collection of kwds.modelSet.collections) {
      for (const work of collection.works) {
        if (!workCollectionIris[work.iri.value]) {
          workCollectionIris[work.iri.value] = [];
        }
        workCollectionIris[work.iri.value].push(collection.iri.value);
      }
    }
    this.workCollectionIris = workCollectionIris;
  }

  getAppConfiguration(): Promise<JsonAppConfiguration | null> {
    return Promise.resolve(this.modelSet.appConfiguration?.toJson() ?? null);
  }

  getCollections(kwds?: GetCollectionsOptions): Promise<GetModelsResult> {
    const {
      joinSelector = null,
      joinSelectorByIri = null,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as CollectionsQuery,
    } = kwds ?? {};

    return getModels({
      addModelsToModelSet: (collections, modelSetBuilder) =>
        collections.forEach(collection =>
          modelSetBuilder.addCollection(
            collection,
            getJoinSelector(collection, {
              joinSelector,
              joinSelectorByIri,
            })
          )
        ),
      allModels: this.modelSet.collections,
      filterModels: collections =>
        filterCollections({collections, filters: query.filters ?? []}),
      limit,
      offset,
      sortModels: () => {},
    });
  }

  getEventIris(kwds?: GetEventIrisOptions): Promise<GetModelKeysResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as EventsQuery,
      sort = defaultEventsSort,
    } = kwds ?? {};

    return getModelIris({
      allModels: this.modelSet.events,
      filterModels: events =>
        filterEvents({events, filters: query.filters ?? []}),
      sortModels: events => sortEvents(events, sort),
      limit,
      offset,
    });
  }

  getEvents(kwds?: GetEventsOptions): Promise<GetModelsResult> {
    const {
      joinSelector = null,
      joinSelectorByIri = null,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as EventsQuery,
      sort = defaultEventsSort,
    } = kwds ?? {};

    return getModels({
      addModelsToModelSet: (events, modelSetBuilder) =>
        events.forEach(event =>
          modelSetBuilder.addEvent(
            event,
            getJoinSelector(event, {joinSelector, joinSelectorByIri})
          )
        ),
      allModels: this.modelSet.events,
      filterModels: events =>
        filterEvents({events, filters: query.filters ?? []}),
      limit,
      offset,
      sortModels: events => sortEvents(events, sort),
    });
  }

  getPropertyGroupIris(
    kwds?: GetPropertyGroupIrisOptions
  ): Promise<GetModelKeysResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as PropertyGroupsQuery,
    } = kwds ?? {};

    return getModelIris({
      allModels: this.modelSet.propertyGroups,
      filterModels: propertyGroups =>
        filterPropertyGroups({propertyGroups, filters: query.filters ?? []}),
      limit,
      offset,
      sortModels: sortPropertyGroups,
    });
  }

  getPropertyGroups(
    kwds?: GetPropertyGroupsOptions | undefined
  ): Promise<GetModelsResult> {
    const {
      joinSelector = null,
      joinSelectorByIri = null,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as PropertyGroupsQuery,
    } = kwds ?? {};

    return getModels({
      addModelsToModelSet: (propertyGroups, modelSetBuilder) =>
        propertyGroups.forEach(propertyGroup =>
          modelSetBuilder.addPropertyGroup(
            propertyGroup,
            getJoinSelector(propertyGroup, {joinSelector, joinSelectorByIri})
          )
        ),
      allModels: this.modelSet.propertyGroups,
      filterModels: propertyGroups =>
        filterPropertyGroups({propertyGroups, filters: query.filters ?? []}),
      limit,
      offset,
      sortModels: sortProperties,
    });
  }

  getProperties(
    kwds?: GetPropertiesOptions | undefined
  ): Promise<GetModelsResult> {
    const {
      joinSelector = null,
      joinSelectorByIri = null,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as PropertiesQuery,
    } = kwds ?? {};

    return getModels({
      addModelsToModelSet: (properties, modelSetBuilder) =>
        properties.forEach(property =>
          modelSetBuilder.addProperty(
            property,
            getJoinSelector(property, {joinSelector, joinSelectorByIri})
          )
        ),
      allModels: this.modelSet.properties,
      filterModels: properties =>
        filterProperties({properties, filters: query.filters ?? []}),
      limit,
      offset,
      sortModels: () => {},
    });
  }

  getWorkAgents(kwds?: GetWorkAgentsOptions): Promise<GetModelsResult> {
    const {
      joinSelector,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      sort = defaultAgentsSort,
      worksQuery = {} as WorksQuery,
    } = kwds ?? {};

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const works = this.queryWorks(worksQuery);

      const workAgentsWithContext: {
        readonly label: string;
        readonly workAgent: WorkAgent;
        readonly workIri: NamedNode;
      }[] = works.flatMap(work =>
        work.agents.map(workAgent => ({
          label: workAgent.agent.label,
          workAgent,
          workIri: work.iri,
        }))
      );

      const sortedWorkAgents = workAgentsWithContext;
      sortAgents(workAgentsWithContext, sort);

      const slicedWorkAgents = sortedWorkAgents.slice(offset, offset + limit);

      const slicedWorkAgentsModelSetBuilder = new ModelSetBuilder();
      for (const workIri of new Set(
        slicedWorkAgents.map(workAgent => workAgent.workIri)
      )) {
        // Add all of a work's agents
        slicedWorkAgentsModelSetBuilder.addWork(
          requireNonNull(this.modelSet.workByIri(workIri)),
          {agents: joinSelector ?? {}}
        );
      }

      resolve({
        modelIris: slicedWorkAgents.map(
          workAgent => workAgent.workAgent.agent.iri.value
        ),
        modelSet: slicedWorkAgentsModelSetBuilder.build(),
        totalModelsCount: workAgentsWithContext.length,
      });
    });
  }

  getWorkEvents(kwds?: GetWorkEventsOptions): Promise<GetModelsResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      joinSelector,
      sort = defaultEventsSort,
      eventsQuery = {} as EventsQuery,
      worksQuery = {} as WorksQuery,
    } = kwds ?? {};

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const works = this.queryWorks(worksQuery);

      type WorkEventWithContext = {
        compareByDate(other: WorkEventWithContext): number;
        readonly iri: NamedNode;
        readonly label: string;
        readonly sortDate: Date | null;
        readonly workEvent: WorkEvent;
        readonly workIri: NamedNode;
      };
      const workEvents: WorkEventWithContext[] = works.flatMap(work =>
        work.events.map(workEvent => ({
          compareByDate(other: WorkEventWithContext): number {
            return workEvent.compareByDate(other.workEvent);
          },
          iri: workEvent.iri,
          label: workEvent.label,
          sortDate: workEvent.sortDate,
          workEvent,
          workIri: work.iri,
        }))
      );

      const filteredWorkEvents = filterEvents({
        events: workEvents,
        filters: eventsQuery.filters ?? [],
      });

      const sortedWorkEvents = filteredWorkEvents.concat();
      sortEvents(sortedWorkEvents, sort ?? defaultEventsSort);

      const slicedWorkEvents = sortedWorkEvents.slice(offset, offset + limit);

      const slicedWorkEventsModelSetBuilder = new ModelSetBuilder();
      for (const workIri of new Set(
        slicedWorkEvents.map(workEvent => workEvent.workIri)
      )) {
        // Add all of a work's events
        slicedWorkEventsModelSetBuilder.addWork(
          requireNonNull(this.modelSet.workByIri(workIri)),
          {events: joinSelector ?? {}}
        );
      }

      resolve({
        modelIris: slicedWorkEvents.map(workEvent => workEvent.iri.value),
        modelSet: slicedWorkEventsModelSetBuilder.build(),
        totalModelsCount: workEvents.length,
      });
    });
  }

  getWorkIris(kwds?: GetWorkIrisOptions): Promise<GetModelKeysResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as WorksQuery,
      sort = defaultWorksSort,
    } = kwds ?? {};

    return getModelIris({
      allModels: this.searchWorks(query),
      filterModels: works => this.filterWorks(query, works),
      limit,
      offset,
      sortModels: works => sortWorks(sort, works),
    });
  }

  getWorkLocations(
    kwds?: GetWorkLocationsOptions
  ): Promise<GetWorkLocationsResult> {
    const {
      locationsQuery = {} as LocationsQuery,
      worksQuery = {} as WorksQuery,
    } = kwds ?? {};

    return new Promise(resolve => {
      const works = this.queryWorks(worksQuery);

      const workLocationSummaries = works.flatMap(work => {
        const workLocationsWithContext: {
          readonly centroid: Point | null;
          readonly iri: NamedNode;
          readonly workLocation: WorkLocation;
        }[] = [];
        if (work.location) {
          workLocationsWithContext.push({
            centroid: work.location.location.centroid,
            iri: work.location.location.iri,
            workLocation: work.location,
          });
        }
        for (const event of work.events) {
          if (event.workLocation) {
            workLocationsWithContext.push({
              centroid: event.workLocation.location.centroid,
              iri: event.workLocation.location.iri,
              workLocation: event.workLocation,
            });
          }
        }
        return filterLocations({
          filters: locationsQuery.filters ?? [],
          locations: workLocationsWithContext,
        }).map(location => summarizeWorkLocation(work, location.workLocation));
      });

      resolve({
        workLocations: workLocationSummaries,
      });
    });
  }

  getWorks(kwds?: GetWorksOptions): Promise<GetWorksResult> {
    const {
      joinSelector = null,
      joinSelectorByIri = null,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as WorksQuery,
      sort = defaultWorksSort,
      valueFacetValueThumbnailSelector,
    } = kwds ?? {};
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      // Calculate the universe of works
      console.time("searchWorks");
      const searchedWorks: readonly Work[] = this.searchWorks(query);
      console.timeEnd("searchWorks");

      // Calculate facets on the universe before filtering it
      console.time("facetizeWorks");
      const facets = facetizeWorks({
        filters: query.filters ?? [],
        valueFacetValueThumbnailSelector,
        works: searchedWorks,
      });
      console.timeEnd("facetizeWorks");

      log.debug("Search facets:", JSON.stringify(facets));

      console.time("filterWorks");
      const filteredWorks = this.filterWorks(query, searchedWorks);
      console.timeEnd("filterWorks");

      log.debug("Search filtered works count:", filteredWorks.length);

      // # 95: if search text specified, leave the works in the order they came out of Lunr (sorted by score/relevance).
      // If not, sort the works by title
      console.time("sortWorks");
      const sortedWorks = filteredWorks.concat();
      sortWorks(sort ?? defaultWorksSort, sortedWorks);
      console.timeEnd("sortWorks");

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      log.debug("Search sliced works count:", slicedWorks.length);

      console.time("Build slicedWorks ModelSet");
      const slicedWorksModelSetBuilder = new ModelSetBuilder();
      for (const work of slicedWorks) {
        slicedWorksModelSetBuilder.addWork(
          work,
          getJoinSelector(work, {joinSelector, joinSelectorByIri})
        );
      }
      const slicedWorksModelSet = slicedWorksModelSetBuilder.build();
      console.timeEnd("Build slicedWorks ModelSet");

      // log.debug(
      //   "Search results modelSet:",
      //   Object.keys(slicedWorksModelSet)
      //     .map(
      //       key =>
      //         `${key}: ${((slicedWorksModelSet as any)[key] as any[]).length}`
      //     )
      //     .join(", ")
      // );

      resolve({
        modelIris: slicedWorks.map(work => work.iri.value),
        modelSet: slicedWorksModelSet,
        facets,
        totalModelsCount: filteredWorks.length,
      });
    });
  }

  private filterWorks(
    query: WorksQuery,
    works: readonly Work[]
  ): readonly Work[] {
    const filters = query.filters ?? [];

    // Optimization: handle the special case of getting a single key from all works
    if (works.length === this.modelSet.works.length) {
      if (filters.length === 1 && filters[0].type === "Iri") {
        const keyFilter = filters[0];
        if (
          !keyFilter.excludeIris &&
          keyFilter.includeIris &&
          keyFilter.includeIris.length === 1
        ) {
          const work = this.modelSet.workByIri(
            DataFactory.namedNode(keyFilter.includeIris[0])
          );
          return work !== null ? [work] : [];
        }
      }
    }

    return filterWorks({
      filters,
      workCollectionIris: this.workCollectionIris,
      works,
    });
  }

  private queryWorks(query: WorksQuery): readonly Work[] {
    return this.filterWorks(query, this.searchWorks(query));
  }

  private searchWorks(query: WorksQuery): readonly Work[] {
    if (query?.text) {
      // Anything matching the fulltext search
      return this.index
        .search(query.text)
        .map(({ref}) =>
          requireNonNull(this.modelSet.workByIri(DataFactory.namedNode(ref)))
        );
    } else {
      // All works
      return this.modelSet.works;
    }
  }
}
