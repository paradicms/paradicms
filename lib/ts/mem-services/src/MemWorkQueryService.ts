import {
  defaultProperties,
  Image,
  ModelSet,
  ModelSetBuilder,
  ThumbnailSelector,
  Work,
  WorkAgent,
  WorkEvent,
} from "@paradicms/models";
import {
  defaultWorkAgentsSort,
  defaultWorkEventsSort,
  defaultWorksSort,
  FacetUnion,
  FilterUnion,
  GetNamedWorkAgentsOptions,
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
import {requireNonNull} from "@paradicms/utilities";

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

type WorkAgentWithWorkKey = {workAgent: WorkAgent; workKey: string};
type WorkEventWithWorkKey = {workEvent: WorkEvent; workKey: string};

export class MemWorkQueryService implements WorkQueryService {
  private readonly index: Index;
  private readonly modelSet: ModelSet;

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
        const fieldName = MemWorkQueryService.encodeFieldName(propertyIri);
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
  }

  private static encodeFieldName(value: string) {
    return base58.encode(new TextEncoder().encode(value));
  }

  private facetizeWorks(kwds: {
    filters: readonly FilterUnion[];
    valueFacetValueThumbnailSelector?: ThumbnailSelector;
    works: readonly Work[];
  }): readonly FacetUnion[] {
    const {filters, valueFacetValueThumbnailSelector, works} = kwds;
    const facets: FacetUnion[] = [];
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
            for (const propertyValue of work.propertyValuesByPropertyIri(
              concreteFilter.propertyIri
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
            propertyIri: concreteFilter.propertyIri,
            type: "StringPropertyValue",
            unknownCount,
            values: Object.values(facetValues),
          };
          facets.push(facet);
          break;
        }
      }
    }
    return facets;
  }

  private filterWorks(kwds: {
    filters: readonly FilterUnion[];
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
                .propertyValuesByPropertyIri(
                  (filter as StringPropertyValueFilter).propertyIri
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
    options: GetNamedWorkAgentsOptions,
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

      const workAgents: WorkAgentWithWorkKey[] = works.flatMap(work =>
        work.agents.map(workAgent => ({workAgent, workKey: work.key}))
      );

      const sortedWorkAgents = workAgents;
      MemWorkQueryService.sortWorkAgentsInPlace(
        options.sort ?? defaultWorkAgentsSort,
        workAgents
      );

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
        workAgentKeys: slicedWorkAgents.map(
          workAgent => workAgent.workAgent.agent.key
        ),
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

      // log.debug("Search facets:", JSON.stringify(facets));

      const filteredWorks = this.filterWorks({
        filters: query.filters,
        works: searchedWorks,
      });

      // log.debug("Search filtered works count:", filteredWorks.length);

      // # 95: if search text specified, leave the works in the order they came out of Lunr (sorted by score/relevance).
      // If not, sort the works by title
      const sortedWorks = filteredWorks.concat();
      MemWorkQueryService.sortWorksInPlace(
        options.sort ?? defaultWorksSort,
        sortedWorks
      );

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      // log.debug("Search sliced works count:", slicedWorks.length);

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

  private static sortWorkAgentsInPlace(
    sort: WorkAgentsSort,
    workAgents: WorkAgentWithWorkKey[]
  ): void {
    const compareMultiplier = sort.ascending ? 1 : -1;
    switch (sort.property) {
      case WorkAgentsSortProperty.NAME:
        workAgents.sort(
          (left, right) =>
            compareMultiplier *
            left.workAgent.agent.label.localeCompare(
              right.workAgent.agent.label
            )
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
    workEvents: WorkEventWithWorkKey[]
  ): void {
    const compareMultiplier = sort.ascending ? 1 : -1;
    switch (sort.property) {
      case WorkEventsSortProperty.DATE:
        workEvents.sort(
          (left, right) =>
            compareMultiplier * left.workEvent.compareByDate(right.workEvent)
        );
        return;
      case WorkEventsSortProperty.LABEL:
        workEvents.sort(
          (left, right) =>
            compareMultiplier *
            left.workEvent.label.localeCompare(right.workEvent.label)
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
      creators: image.creators.map(creator => creator.label),
      licenses: image.licenses.map(license => license.label),
      exactDimensions: image.exactDimensions,
      maxDimensions: image.maxDimensions,
      rightsHolders: image.rightsHolders.map(holder => holder.label),
      rightsStatements: image.rightsStatements.map(
        rightsStatement => rightsStatement.label
      ),
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

      const workEvents: WorkEventWithWorkKey[] = [];
      for (const work of works) {
        for (const workEvent of work.events) {
          if (requireDate && workEvent.sortDate === null) {
            continue;
          }
          workEvents.push({workEvent, workKey: work.key});
        }
      }

      const sortedWorkEvents = workEvents;
      MemWorkQueryService.sortWorkEventsInPlace(
        options.sort ?? defaultWorkEventsSort,
        sortedWorkEvents
      );

      const slicedWorkEvents = sortedWorkEvents.slice(offset, offset + limit);

      const slicedWorkEventsModelSetBuilder = new ModelSetBuilder();
      for (const workKey of new Set(
        slicedWorkEvents.map(workEvent => workEvent.workKey)
      )) {
        // Add all of a work's events
        slicedWorkEventsModelSetBuilder.addWork(
          requireNonNull(this.modelSet.workByKey(workKey)),
          {events: workEventJoinSelector ?? {}}
        );
      }

      resolve({
        modelSet: slicedWorkEventsModelSetBuilder.build(),
        totalWorkEventsCount: workEvents.length,
        workEventKeys: slicedWorkEvents.map(
          workEvent => workEvent.workEvent.key
        ),
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
