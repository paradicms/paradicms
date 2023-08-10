import {
  defaultProperties,
  EventSortDate,
  JsonAppConfiguration,
  Model,
  ModelSet,
  ModelSetBuilder,
  Point,
  Work,
  WorkAgent,
  WorkEvent,
  WorkLocation,
} from "@paradicms/models";
import {
  Api,
  CollectionsQuery,
  defaultAgentsSort,
  defaultEventsSort,
  defaultWorksSort,
  EventsQuery,
  GetCollectionsOptions,
  GetEventKeysOptions,
  GetEventsOptions,
  GetModelKeysResult,
  GetModelsResult,
  GetPropertyGroupsOptions,
  GetWorkAgentsOptions,
  GetWorkEventsOptions,
  GetWorkKeysOptions,
  GetWorkLocationsOptions,
  GetWorkLocationsResult,
  GetWorksOptions,
  GetWorksResult,
  LocationsQuery,
  summarizeWorkLocation,
  WorksQuery,
} from "@paradicms/api";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";
import {requireNonNull} from "@paradicms/utilities";
import log from "loglevel";
import {facetizeWorks} from "./facetizeWorks";
import {sortWorks} from "./sortWorks";
import {sortAgents} from "./sortAgents";
import {filterWorks} from "./filterWorks";
import {filterEvents} from "./filterEvents";
import {sortEvents} from "./sortEvents";
import {filterCollections} from "./filterCollections";
import {filterLocations} from "./filterLocations";
import {filterPropertyGroups} from "./filterPropertyGroups";
import {sortPropertyGroups} from "./sortPropertyGroups";
import {PropertyGroupsQuery} from "@paradicms/api/dist/PropertyGroupsQuery";
import {getModels} from "./getModels";
import {getModelKeys} from "./getModelKeys";
import {GetPropertyGroupKeysOptions} from "@paradicms/api/dist/GetPropertyGroupKeysOptions";

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
    joinSelectorByKey: {[index: string]: JoinSelectorT} | null;
  }
): JoinSelectorT | undefined => {
  const {joinSelector, joinSelectorByKey} = kwds;
  if (joinSelectorByKey && joinSelectorByKey[model.key]) {
    return joinSelectorByKey[model.key];
  } else {
    return joinSelector ?? undefined;
  }
};

export class MemApi implements Api {
  private readonly index: Index;
  private readonly modelSet: ModelSet;
  // Index of work key -> keys of collections containing that work
  private readonly workCollectionKeys: {
    [index: string]: readonly string[];
  };

  constructor(kwds: {readonly modelSet: ModelSet}) {
    this.modelSet = kwds.modelSet;

    let searchablePropertyIris: string[];
    if (kwds.modelSet.properties.length > 0) {
      searchablePropertyIris = kwds.modelSet.properties
        .filter(property => property.searchable)
        .flatMap(property => property.iris);
    } else {
      searchablePropertyIris = defaultProperties
        .filter(property => property.searchable)
        .flatMap(property => property.iris);
    }

    this.index = lunr(function() {
      const propertyFieldNamesByIri: {[index: string]: string} = {};
      for (const propertyIri of searchablePropertyIris) {
        const fieldName = encodeLunrFieldName(propertyIri);
        propertyFieldNamesByIri[propertyIri] = fieldName;
        this.field(fieldName);
      }

      for (const work of kwds.modelSet.works) {
        const doc: any = {id: work.key};
        for (const propertyIri of searchablePropertyIris) {
          const fieldName = propertyFieldNamesByIri[propertyIri];
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

    const workCollectionKeys: {[index: string]: string[]} = {};
    for (const collection of kwds.modelSet.collections) {
      for (const work of collection.works) {
        if (!workCollectionKeys[work.key]) {
          workCollectionKeys[work.key] = [];
        }
        workCollectionKeys[work.key].push(collection.key);
      }
    }
    this.workCollectionKeys = workCollectionKeys;
  }

  getAppConfiguration(): Promise<JsonAppConfiguration | null> {
    return Promise.resolve(this.modelSet.appConfiguration?.toJson() ?? null);
  }

  getCollections(kwds?: GetCollectionsOptions): Promise<GetModelsResult> {
    const {
      joinSelector = null,
      joinSelectorByKey = null,
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
              joinSelectorByKey,
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

  getEventKeys(kwds?: GetEventKeysOptions): Promise<GetModelKeysResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as EventsQuery,
      sort = defaultEventsSort,
    } = kwds ?? {};

    return getModelKeys({
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
      joinSelectorByKey = null,
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
            getJoinSelector(event, {joinSelector, joinSelectorByKey})
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

  getPropertyGroupKeys(
    kwds?: GetPropertyGroupKeysOptions
  ): Promise<GetModelKeysResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as PropertyGroupsQuery,
    } = kwds ?? {};

    return getModelKeys({
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
      joinSelectorByKey = null,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as PropertyGroupsQuery,
    } = kwds ?? {};

    return getModels({
      addModelsToModelSet: (propertyGroups, modelSetBuilder) =>
        propertyGroups.forEach(propertyGroup =>
          modelSetBuilder.addPropertyGroup(
            propertyGroup,
            getJoinSelector(propertyGroup, {joinSelector, joinSelectorByKey})
          )
        ),
      allModels: this.modelSet.propertyGroups,
      filterModels: propertyGroups =>
        filterPropertyGroups({propertyGroups, filters: query.filters ?? []}),
      limit,
      offset,
      sortModels: sortPropertyGroups,
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
      const works = filterWorks({
        filters: worksQuery.filters ?? [],
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(worksQuery),
      });

      const workAgentsWithContext: {
        readonly label: string;
        readonly workAgent: WorkAgent;
        readonly workKey: string;
      }[] = works.flatMap(work =>
        work.agents.map(workAgent => ({
          label: workAgent.agent.label,
          workAgent,
          workKey: work.key,
        }))
      );

      const sortedWorkAgents = workAgentsWithContext;
      sortAgents(workAgentsWithContext, sort);

      const slicedWorkAgents = sortedWorkAgents.slice(offset, offset + limit);

      const slicedWorkAgentsModelSetBuilder = new ModelSetBuilder();
      for (const workKey of new Set(
        slicedWorkAgents.map(workAgent => workAgent.workKey)
      )) {
        // Add all of a work's agents
        slicedWorkAgentsModelSetBuilder.addWork(
          requireNonNull(this.modelSet.workByKey(workKey)),
          {agents: joinSelector ?? {}}
        );
      }

      resolve({
        modelKeys: slicedWorkAgents.map(
          workAgent => workAgent.workAgent.agent.key
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
      const works = filterWorks({
        filters: worksQuery.filters ?? [],
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(worksQuery),
      });

      type WorkEventWithContext = {
        readonly key: string;
        compareByDate(other: WorkEventWithContext): number;
        readonly label: string;
        readonly sortDate: EventSortDate | null;
        readonly workEvent: WorkEvent;
        readonly workKey: string;
      };
      const workEvents: WorkEventWithContext[] = works.flatMap(work =>
        work.events.map(workEvent => ({
          compareByDate(other: WorkEventWithContext): number {
            return workEvent.compareByDate(other.workEvent);
          },
          key: workEvent.key,
          label: workEvent.label,
          sortDate: workEvent.sortDate,
          workEvent,
          workKey: work.key,
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
      for (const workKey of new Set(
        slicedWorkEvents.map(workEvent => workEvent.workKey)
      )) {
        // Add all of a work's events
        slicedWorkEventsModelSetBuilder.addWork(
          requireNonNull(this.modelSet.workByKey(workKey)),
          {events: joinSelector ?? {}}
        );
      }

      resolve({
        modelKeys: slicedWorkEvents.map(workEvent => workEvent.key),
        modelSet: slicedWorkEventsModelSetBuilder.build(),
        totalModelsCount: workEvents.length,
      });
    });
  }

  getWorkKeys(kwds?: GetWorkKeysOptions): Promise<GetModelKeysResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as WorksQuery,
      sort = defaultWorksSort,
    } = kwds ?? {};

    return getModelKeys({
      allModels: this.searchWorks(query),
      filterModels: works =>
        filterWorks({
          workCollectionKeys: this.workCollectionKeys,
          works,
          filters: query.filters ?? [],
        }),
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
      const works = filterWorks({
        filters: worksQuery.filters ?? [],
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(worksQuery),
      });

      const workLocationSummaries = works.flatMap(work => {
        const workLocationsWithContext: {
          readonly centroid: Point | null;
          readonly key: string;
          readonly workLocation: WorkLocation;
        }[] = [];
        if (work.location) {
          workLocationsWithContext.push({
            centroid: work.location.location.centroid,
            key: work.location.location.key,
            workLocation: work.location,
          });
        }
        for (const event of work.events) {
          if (event.workLocation) {
            workLocationsWithContext.push({
              centroid: event.workLocation.location.centroid,
              key: event.workLocation.location.key,
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
      joinSelectorByKey = null,
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
      const searchedWorks: readonly Work[] = this.searchWorks(query);

      // Calculate facets on the universe before filtering it
      const facets = facetizeWorks({
        filters: query.filters ?? [],
        valueFacetValueThumbnailSelector,
        works: searchedWorks,
      });

      log.debug("Search facets:", JSON.stringify(facets));

      const filteredWorks = filterWorks({
        filters: query.filters ?? [],
        workCollectionKeys: this.workCollectionKeys,
        works: searchedWorks,
      });

      log.debug("Search filtered works count:", filteredWorks.length);

      // # 95: if search text specified, leave the works in the order they came out of Lunr (sorted by score/relevance).
      // If not, sort the works by title
      const sortedWorks = filteredWorks.concat();
      sortWorks(sort ?? defaultWorksSort, sortedWorks);

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      log.debug("Search sliced works count:", slicedWorks.length);

      const slicedWorksModelSetBuilder = new ModelSetBuilder();
      for (const work of slicedWorks) {
        slicedWorksModelSetBuilder.addWork(
          work,
          getJoinSelector(work, {joinSelector, joinSelectorByKey})
        );
      }
      const slicedWorksModelSet = slicedWorksModelSetBuilder.build();

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
        modelKeys: slicedWorks.map(work => work.key),
        modelSet: slicedWorksModelSet,
        facets,
        totalModelsCount: filteredWorks.length,
      });
    });
  }

  private searchWorks(query: WorksQuery): readonly Work[] {
    if (query?.text) {
      // Anything matching the fulltext search
      return this.index
        .search(query.text)
        .map(({ref}) => requireNonNull(this.modelSet.workByKey(ref)));
    } else {
      // All works
      return this.modelSet.works;
    }
  }
}
