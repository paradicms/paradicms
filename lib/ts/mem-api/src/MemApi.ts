import {
  defaultProperties,
  EventSortDate,
  JsonAppConfiguration,
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

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);
const encodeLunrFieldName = (value: string) => {
  return base58.encode(new TextEncoder().encode(value));
};

const LIMIT_DEFAULT = Number.MAX_SAFE_INTEGER;
const OFFSET_DEFAULT = 0;

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

  getCollections(kwds?: GetCollectionsOptions): Promise<GetCollectionsResult> {
    const {
      collectionJoinSelector,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as CollectionsQuery,
    } = kwds ?? {};

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const filteredCollections = filterCollections({
        collections: this.modelSet.collections,
        filters: query.filters ?? [],
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

  getEvents(kwds?: GetEventsOptions): Promise<GetEventsResult> {
    const {
      eventJoinSelector,
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as EventsQuery,
      sort = defaultEventsSort,
    } = kwds ?? {};

    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const filteredEvents = filterEvents({
        events: this.modelSet.events,
        filters: query.filters ?? [],
      });

      const sortedEvents = filteredEvents.concat();
      sortEvents(sortedEvents, sort);

      const slicedEvents = sortedEvents.slice(offset, offset + limit);

      resolve({
        modelSet: new ModelSetBuilder()
          .addEvents(slicedEvents, eventJoinSelector)
          .build(),
        totalEventsCount: filteredEvents.length,
      });
    });
  }

  getWorkAgents(kwds?: GetWorkAgentsOptions): Promise<GetWorkAgentsResult> {
    const {
      agentJoinSelector,
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
          {agents: agentJoinSelector ?? {}}
        );
      }

      resolve({
        modelSet: slicedWorkAgentsModelSetBuilder.build(),
        totalWorkAgentsCount: workAgentsWithContext.length,
        workAgentKeys: slicedWorkAgents.map(
          workAgent => workAgent.workAgent.agent.key
        ),
      });
    });
  }

  getWorkEvents(kwds?: GetWorkEventsOptions): Promise<GetWorkEventsResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      eventJoinSelector,
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

  getWorkKeys(kwds?: GetWorkKeysOptions): Promise<GetWorkKeysResult> {
    const {
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as WorksQuery,
      sort = defaultWorksSort,
    } = kwds ?? {};
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const filteredWorks = filterWorks({
        filters: query.filters ?? [],
        workCollectionKeys: this.workCollectionKeys,
        works: this.searchWorks(query),
      });

      const sortedWorks = filteredWorks.concat();
      sortWorks(sort, sortedWorks);

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      resolve({
        totalWorksCount: filteredWorks.length,
        workKeys: slicedWorks.map(work => work.key),
      });
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
      limit = LIMIT_DEFAULT,
      offset = OFFSET_DEFAULT,
      query = {} as WorksQuery,
      sort = defaultWorksSort,
      valueFacetValueThumbnailSelector,
      workJoinSelector,
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
