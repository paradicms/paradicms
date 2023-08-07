import {
  defaultProperties,
  JsonAppConfiguration,
  ModelSet,
  ModelSetBuilder,
  Work,
} from "@paradicms/models";
import {
  Api,
  CollectionsQuery,
  defaultEventsSort,
  defaultWorkAgentsSort,
  defaultWorksSort,
  GetCollectionsOptions,
  GetCollectionsResult,
  GetEventsOptions,
  GetEventsResult,
  GetWorkAgentsOptions,
  GetWorkAgentsResult,
  GetWorkEventsOptions,
  GetWorkEventsResult,
  GetWorkKeysOptions,
  GetWorkKeysResult,
  GetWorkLocationsOptions,
  GetWorkLocationsResult,
  GetWorksOptions,
  GetWorksResult,
  summarizeWorkLocation,
  WorkLocationSummary,
  WorksQuery,
} from "@paradicms/api";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";
import {requireNonNull} from "@paradicms/utilities";
import log from "loglevel";
import {facetizeWorks} from "facetizeWorks";
import {sortWorks} from "./sortWorks";
import {WorkEventWithWorkKey} from "./WorkEventWithWorkKey";
import {sortWorkAgents} from "./sortWorkAgents";
import {WorkAgentWithWorkKey} from "./WorkAgentWithWorkKey";
import {filterWorks} from "./filterWorks";
import {EventsQuery} from "@paradicms/api/dist/EventsQuery";
import {filterEvents} from "./filterEvents";
import {sortEvents} from "./sortEvents";
import {filterCollections} from "./filterCollections";

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);
const encodeLunrFieldName = (value: string) => {
  return base58.encode(new TextEncoder().encode(value));
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

  getCollections(
    kwds: GetCollectionsOptions & {query: CollectionsQuery}
  ): Promise<GetCollectionsResult> {
    const {collectionJoinSelector, limit, offset, query} = kwds;

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const filteredCollections = filterCollections({
        collections: this.modelSet.collections,
        filters: query.filters,
      });

      const slicedCollections = filteredCollections.slice(
        offset,
        offset + limit
      );

      const slicedCollectionsModelSetBuilder = new ModelSetBuilder();
      for (const collection of slicedCollections) {
        slicedCollectionsModelSetBuilder.addCollection(
          collection,
          collectionJoinSelector
        );
      }

      resolve({
        modelSet: slicedCollectionsModelSetBuilder.build(),
        totalCollectionsCount: filteredCollections.length,
      });
    });
  }

  getEvents(
    kwds: GetEventsOptions & {
      query: EventsQuery;
    }
  ): Promise<GetEventsResult> {
    const {eventJoinSelector, limit, offset, query, sort} = kwds;

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const filteredEvents = filterEvents({
        events: this.modelSet.events,
        filters: query.filters,
      });

      const sortedEvents = filteredEvents.concat();
      sortEvents(sortedEvents, sort ?? defaultEventsSort);

      const slicedEvents = sortedEvents.slice(offset, offset + limit);

      resolve({
        modelSet: new ModelSetBuilder()
          .addEvents(slicedEvents, eventJoinSelector)
          .build(),
        totalEventsCount: filteredEvents.length,
      });
    });
  }

  getWorkAgents(
    kwds: GetWorkAgentsOptions & {
      worksQuery: WorksQuery;
    }
  ): Promise<GetWorkAgentsResult> {
    const {agentJoinSelector, limit, offset, sort, worksQuery} = kwds;

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const works = filterWorks({
        filters: worksQuery.filters,
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(worksQuery),
      });

      // @ts-ignore
      const workAgents: WorkAgentWithWorkKey[] = works.flatMap(work =>
        work.agents.map(workAgent => {
          // @ts-ignore
          workAgent["workKey"] = work.key;
          return workAgent;
        })
      );

      const sortedWorkAgents = workAgents;
      sortWorkAgents(sort ?? defaultWorkAgentsSort, workAgents);

      const slicedWorkAgents = sortedWorkAgents.slice(offset, offset + limit);

      const slicedWorkAgentsModelSetBuilder = new ModelSetBuilder();
      for (const workKey of new Set(
        slicedWorkAgents.map(workAgent => workAgent.workKey)
      )) {
        // Add all of a work's agents
        slicedWorkAgentsModelSetBuilder.addWork(
          requireNonNull(this.modelSet.workByKey(workKey)),
          {agents: agentJoinSelector ?? {}}
        );
      }

      resolve({
        modelSet: slicedWorkAgentsModelSetBuilder.build(),
        totalWorkAgentsCount: workAgents.length,
        workAgentKeys: slicedWorkAgents.map(workAgent => workAgent.agent.key),
      });
    });
  }

  getWorkEvents(
    kwds: GetWorkEventsOptions & {
      workEventsQuery: EventsQuery;
      worksQuery: WorksQuery;
    }
  ): Promise<GetWorkEventsResult> {
    const {
      limit,
      offset,
      eventJoinSelector,
      sort,
      workEventsQuery,
      worksQuery,
    } = kwds;

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const works = filterWorks({
        filters: worksQuery.filters,
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(worksQuery),
      });

      const workEvents: WorkEventWithWorkKey[] = [];
      for (const work of works) {
        for (const workEvent of work.events) {
          // @ts-ignore
          workEvent["workKey"] = work.key;
          // @ts-ignore
          workEvents.push(workEvent);
        }
      }

      const filteredWorkEvents = filterEvents({
        events: workEvents,
        filters: workEventsQuery.filters,
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
          {events: eventJoinSelector ?? {}}
        );
      }

      resolve({
        modelSet: slicedWorkEventsModelSetBuilder.build(),
        totalWorkEventsCount: workEvents.length,
        workEventKeys: slicedWorkEvents.map(workEvent => workEvent.key),
      });
    });
  }

  getWorkKeys(
    kwds: GetWorkKeysOptions & {
      query: WorksQuery;
    }
  ): Promise<GetWorkKeysResult> {
    const {limit, offset, query, sort} = kwds;
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const filteredWorks = filterWorks({
        filters: query.filters,
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(query),
      });

      const sortedWorks = filteredWorks.concat();
      sortWorks(sort ?? defaultWorksSort, sortedWorks);

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      resolve({
        totalWorksCount: filteredWorks.length,
        workKeys: slicedWorks.map(work => work.key),
      });
    });
  }

  getWorkLocations(
    kwds: GetWorkLocationsOptions & {worksQuery: WorksQuery}
  ): Promise<GetWorkLocationsResult> {
    const {requireCentroids} = options;

    return new Promise(resolve => {
      const works = filterWorks({
        filters: query.filters,
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(query),
      });

      const workLocations = works.flatMap(work => {
        const workWorkLocations: WorkLocationSummary[] = [];
        if (work.location) {
          if (!requireCentroids || work.location.location.centroid) {
            workWorkLocations.push(summarizeWorkLocation(work, work.location));
          }
        }
        for (const event of work.events) {
          if (event.workLocation) {
            if (!requireCentroids || event.workLocation.location.centroid) {
              workWorkLocations.push(
                summarizeWorkLocation(work, event.workLocation)
              );
            }
          }
        }
        return workWorkLocations;
      });

      resolve({
        workLocations,
      });
    });
  }

  getWorks(
    options: GetWorksOptions,
    query: WorksQuery
  ): Promise<GetWorksResult> {
    const {
      limit,
      offset,
      valueFacetValueThumbnailSelector,
      workJoinSelector,
    } = options;
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      // Calculate the universe of works
      const searchedWorks: readonly Work[] = this.searchWorks(query);

      // Calculate facets on the universe before filtering it
      const facets = facetizeWorks({
        filters: query.filters,
        valueFacetValueThumbnailSelector,
        works: searchedWorks,
      });

      log.debug("Search facets:", JSON.stringify(facets));

      const filteredWorks = filterWorks({
        filters: query.filters,
        workCollectionKeys: this.workCollectionKeys,
        works: searchedWorks,
      });

      log.debug("Search filtered works count:", filteredWorks.length);

      // # 95: if search text specified, leave the works in the order they came out of Lunr (sorted by score/relevance).
      // If not, sort the works by title
      const sortedWorks = filteredWorks.concat();
      sortWorks(options.sort ?? defaultWorksSort, sortedWorks);

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      log.debug("Search sliced works count:", slicedWorks.length);

      const slicedWorksModelSet = new ModelSetBuilder()
        .addWorks(slicedWorks, workJoinSelector)
        .build();

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
        modelSet: slicedWorksModelSet,
        facets,
        totalWorksCount: filteredWorks.length,
      });
    });
  }

  private searchWorks(query: WorksQuery): readonly Work[] {
    if (query.text) {
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
