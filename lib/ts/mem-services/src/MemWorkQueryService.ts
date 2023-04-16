import {
  Agent,
  defaultProperties,
  Image,
  ModelSet,
  ModelSubsetter,
  ThumbnailSelector,
  Work,
  WorkEvent,
} from "@paradicms/models";
import {
  defaultWorkAgentsSort,
  defaultWorkEventsSort,
  defaultWorksSort,
  Facet,
  Filter,
  GetWorkAgentsOptions,
  GetWorkAgentsResult,
  GetWorkEventsOptions,
  GetWorkEventsResult,
  GetWorkLocationsOptions,
  GetWorkLocationsResult,
  GetWorksOptions,
  GetWorksResult,
  JsonPrimitiveType,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  summarizeWorkLocation,
  ValueFacetValue,
  ValueFacetValueThumbnail,
  ValueFilter,
  WorkAgentsSort,
  WorkAgentsSortProperty,
  WorkEventsSort,
  WorkEventsSortProperty,
  WorkLocationSummary,
  WorkQueryService,
  WorksQuery,
  WorksSort,
  WorksSortProperty,
} from "@paradicms/services";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);

// function intersection<T>(a: Set<T>, b: Set<T>) {
//   if (a.size === 0) {
//     return a;
//   } else if (b.size === 0) {
//     return b;
//   } else if (a.size <= b.size) {
//     return new Set([...a].filter((value) => b.has(value)));
//   } else {
//     return new Set([...b].filter((value) => a.has(value)));
//   }
// }

interface MutableValueFacetValue<ValueT extends JsonPrimitiveType>
  extends Omit<ValueFacetValue<ValueT>, "count"> {
  count: number;
}

export class MemWorkQueryService implements WorkQueryService {
  private readonly index: Index;
  private readonly modelSet: ModelSet;

  constructor(kwds: {readonly modelSet: ModelSet}) {
    this.modelSet = kwds.modelSet;

    let searchablePropertyUris: string[];
    if (kwds.modelSet.properties.length > 0) {
      searchablePropertyUris = kwds.modelSet.properties
        .filter(property => property.searchable)
        .map(property => property.uri);
    } else {
      searchablePropertyUris = defaultProperties
        .filter(property => property.searchable)
        .map(property => property.uri);
    }

    this.index = lunr(function() {
      const propertyFieldNamesByUri: {[index: string]: string} = {};
      for (const propertyUri of searchablePropertyUris) {
        const fieldName = MemWorkQueryService.encodeFieldName(propertyUri);
        propertyFieldNamesByUri[propertyUri] = fieldName;
        this.field(fieldName);
      }
      this.ref("uri");

      for (const work of kwds.modelSet.works) {
        const doc: any = {uri: work.uri};
        for (const propertyUri of searchablePropertyUris) {
          const fieldName = propertyFieldNamesByUri[propertyUri];
          if (!fieldName) {
            continue;
          }
          for (const propertyValue of work.propertyValues(propertyUri)) {
            doc[fieldName] = propertyValue.value;
          }
        }
        this.add(doc);
      }
    });
  }

  private static encodeFieldName(value: string) {
    return base58.encode(new TextEncoder().encode(value));
  }

  private facetizeWorks(kwds: {
    filters: readonly Filter[];
    valueFacetValueThumbnailSelector?: ThumbnailSelector;
    works: readonly Work[];
  }): readonly Facet[] {
    const {filters, valueFacetValueThumbnailSelector, works} = kwds;
    const facets: Facet[] = [];
    for (const filter of filters) {
      switch (filter.type) {
        case "StringPropertyValue": {
          const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
          let unknownCount: number = 0;
          const facetValues: {
            [index: string]: MutableValueFacetValue<string>;
          } = {};
          for (const work of works) {
            let workHasProperty = false;
            for (const propertyValue of work.propertyValues(
              concreteFilter.propertyUri
            )) {
              const propertyValueString: string = propertyValue.value;
              const facetValue = facetValues[propertyValueString];
              if (facetValue) {
                facetValue.count++;
              } else {
                facetValues[propertyValueString] = {
                  count: 1,
                  label: propertyValue.label,
                  value: propertyValueString,
                  thumbnail: valueFacetValueThumbnailSelector
                    ? MemWorkQueryService.toValueFacetValueThumbnail(
                        propertyValue.thumbnail(
                          valueFacetValueThumbnailSelector
                        )
                      )
                    : null,
                };
              }
              workHasProperty = true;
            }
            if (!workHasProperty) {
              unknownCount++;
            }
          }
          const facet: StringPropertyValueFacet = {
            propertyUri: concreteFilter.propertyUri,
            type: "StringPropertyValue",
            unknownCount,
            values: Object.keys(facetValues).map(value => facetValues[value]),
          };
          facets.push(facet);
          break;
        }
      }
    }
    return facets;
  }

  private filterWorks(kwds: {
    filters: readonly Filter[];
    works: readonly Work[];
  }): readonly Work[] {
    const {filters, works} = kwds;
    let filteredWorks = works;
    for (const filter of filters) {
      switch (filter.type) {
        case "StringPropertyValue": {
          filteredWorks = filteredWorks.filter(work =>
            MemWorkQueryService.testValueFilter(
              filter as StringPropertyValueFilter,
              work
                .propertyValues(
                  (filter as StringPropertyValueFilter).propertyUri
                )
                .map(propertyValue => propertyValue.value)
            )
          );
        }
      }
    }
    return filteredWorks;
  }

  getWorkAgents(
    options: GetWorkAgentsOptions,
    query: WorksQuery
  ): Promise<GetWorkAgentsResult> {
    const {agentJoinSelector, limit, offset} = options;

    invariant(!!query, "query must be defined");
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const works = this.filterWorks({
        filters: query.filters,
        works: this.searchWorks(query),
      });

      const agentsByUri: {[index: string]: Agent} = {};
      for (const work of works) {
        for (const agent of work.agents) {
          if (agentsByUri[agent.agent.uri]) {
            continue;
          }
          agentsByUri[agent.agent.uri] = agent.agent;
        }
      }
      const agents = Object.keys(agentsByUri).map(
        agentUri => agentsByUri[agentUri]
      );

      const sortedAgents = agents;
      MemWorkQueryService.sortWorkAgentsInPlace(
        options.sort ?? defaultWorkAgentsSort,
        sortedAgents
      );

      const slicedAgents = sortedAgents.slice(offset, offset + limit);

      const slicedAgentsModelSet = new ModelSubsetter({
        completeModelSet: this.modelSet,
      })
        .agentsModelSet(slicedAgents, agentJoinSelector)
        .build();

      resolve({
        modelSet: slicedAgentsModelSet,
        totalWorkAgentsCount: agents.length,
        workAgentUris: slicedAgents.map(agent => agent.uri),
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
    invariant(!!query, "query must be defined");
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      // Calculate the universe of works
      const searchedWorks: readonly Work[] = this.searchWorks(query);

      // Calculate facets on the universe before filtering it
      const facets = this.facetizeWorks({
        filters: query.filters,
        valueFacetValueThumbnailSelector,
        works: searchedWorks,
      });

      // console.debug("Search facets:", JSON.stringify(facets));

      const filteredWorks = this.filterWorks({
        filters: query.filters,
        works: searchedWorks,
      });

      // console.debug("Search filtered works count:", filteredWorks.length);

      // # 95: if search text specified, leave the works in the order they came out of Lunr (sorted by score/relevance).
      // If not, sort the works by title
      const sortedWorks = filteredWorks.concat();
      MemWorkQueryService.sortWorksInPlace(
        options.sort ?? defaultWorksSort,
        sortedWorks
      );

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      // console.debug("Search sliced works count:", slicedWorks.length);

      const slicedWorksModelSet = new ModelSubsetter({
        completeModelSet: this.modelSet,
      })
        .worksModelSet(slicedWorks, workJoinSelector)
        .build();

      // console.debug(
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
        .map(({ref}) => this.modelSet.workByUri(ref));
    } else {
      // All works
      return this.modelSet.works;
    }
  }

  private static sortWorkAgentsInPlace(
    sort: WorkAgentsSort,
    workAgents: Agent[]
  ): void {
    const compareMultiplier = sort.ascending ? 1 : -1;
    switch (sort.property) {
      case WorkAgentsSortProperty.NAME:
        workAgents.sort(
          (left, right) =>
            compareMultiplier * left.label.localeCompare(right.label)
        );
        return;
      default:
        MemWorkQueryService.sortWorkAgentsInPlace(
          defaultWorkAgentsSort,
          workAgents
        );
        return;
    }
  }

  private static sortWorkEventsInPlace(
    sort: WorkEventsSort,
    workEvents: WorkEvent[]
  ): void {
    const compareMultiplier = sort.ascending ? 1 : -1;
    switch (sort.property) {
      case WorkEventsSortProperty.DATE:
        workEvents.sort(
          (left, right) => compareMultiplier * left.compareByDate(right)
        );
        return;
      case WorkEventsSortProperty.LABEL:
        workEvents.sort(
          (left, right) =>
            compareMultiplier * left.label.localeCompare(right.label)
        );
        return;
      default:
        MemWorkQueryService.sortWorkEventsInPlace(
          defaultWorkEventsSort,
          workEvents
        );
        return;
    }
  }

  private static sortWorksInPlace(sort: WorksSort, works: Work[]): void {
    const compareMultiplier = sort.ascending ? 1 : -1;
    switch (sort.property) {
      case WorksSortProperty.LABEL:
        works.sort(
          (left, right) =>
            compareMultiplier * left.label.localeCompare(right.label)
        );
        return;
      case WorksSortProperty.RELEVANCE:
        // Works are already sorted by relevance
        return;
      default:
        MemWorkQueryService.sortWorksInPlace(defaultWorksSort, works);
        return;
    }
  }

  private static testValueFilter<T extends JsonPrimitiveType>(
    filter: ValueFilter<T>,
    values: readonly T[]
  ): boolean {
    if (values.length === 0) {
      if (filter.excludeUnknown) {
        return false;
      }
    } else {
      if (filter.excludeKnown) {
        return false;
      }
    }

    const excludeValues: readonly T[] = filter.excludeValues ?? [];
    const includeValues: readonly T[] = filter.includeValues ?? [];
    if (excludeValues.length === 0 && includeValues.length === 0) {
      return true;
    }
    if (excludeValues.length > 0) {
      // If an work has any value that is excluded, then exclude the work
      for (const value of values) {
        if (excludeValues.some(excludeValue => excludeValue === value)) {
          return false;
        }
      }
    }

    if (includeValues.length > 0) {
      // If the work has any value that is included, then include the work
      // Conversely, if any values are included and an work doesn't have one of them, exclude the work.
      let include = false;
      for (const value of values) {
        if (includeValues.some(includeValue => includeValue === value)) {
          include = true;
          break;
        }
      }
      if (!include) {
        return false;
      }
    }

    return true;
  }

  private static toValueFacetValueThumbnail(
    image: Image | null
  ): ValueFacetValueThumbnail | null {
    if (!image) {
      return null;
    }
    const imageSrc = image.src;
    if (!imageSrc) {
      return null;
    }
    return {
      creators: image.creators.map(creator => creator.toString()),
      license: image.license?.toString() ?? null,
      exactDimensions: image.exactDimensions,
      maxDimensions: image.maxDimensions,
      rightsHolders: image.rightsHolders.map(holder => holder.toString()),
      rightsStatement: image.rightsStatement?.toString() ?? null,
      src: imageSrc,
    };
  }

  getWorkEvents(
    options: GetWorkEventsOptions,
    query: WorksQuery
  ): Promise<GetWorkEventsResult> {
    const {limit, offset, requireDate, workEventJoinSelector} = options;

    invariant(!!query, "query must be defined");
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const works = this.filterWorks({
        filters: query.filters,
        works: this.searchWorks(query),
      });

      const workEvents = works.flatMap(work =>
        work.events.filter(workEvent => {
          if (requireDate && workEvent.sortDate === null) {
            return false;
          }
          // if (requireLocation && !(workEvent.location instanceof Location)) {
          //   return false;
          // }
          return true;
        })
      );

      const sortedWorkEvents = workEvents;
      MemWorkQueryService.sortWorkEventsInPlace(
        options.sort ?? defaultWorkEventsSort,
        sortedWorkEvents
      );

      const slicedWorkEvents = sortedWorkEvents.slice(offset, offset + limit);

      const slicedWorkEventsModelSet = new ModelSubsetter({
        completeModelSet: this.modelSet,
      })
        .workEventsModelSet(slicedWorkEvents, workEventJoinSelector)
        .build();

      resolve({
        modelSet: slicedWorkEventsModelSet,
        totalWorkEventsCount: workEvents.length,
        workEventUris: slicedWorkEvents.map(workEvent => workEvent.uri),
      });
    });
  }

  getWorkLocations(
    options: GetWorkLocationsOptions,
    query: WorksQuery
  ): Promise<GetWorkLocationsResult> {
    invariant(!!query, "query must be defined");

    return new Promise(resolve => {
      const works = this.filterWorks({
        filters: query.filters,
        works: this.searchWorks(query),
      });

      const workLocations = works.flatMap(work => {
        const workWorkLocations: WorkLocationSummary[] = [];
        if (work.location) {
          workWorkLocations.push(summarizeWorkLocation(work, work.location));
        }
        for (const event of work.events) {
          if (event.workLocation) {
            workWorkLocations.push(
              summarizeWorkLocation(work, event.workLocation)
            );
          }
        }
        return workWorkLocations;
      });

      resolve({
        workLocations,
      });
    });
  }
}
