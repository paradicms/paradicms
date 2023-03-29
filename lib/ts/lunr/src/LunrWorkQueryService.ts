import {
  Agent,
  defaultProperties,
  Image,
  ModelSet,
  ModelSubsetter,
  ThumbnailSelector,
  Work,
} from "@paradicms/models";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";
import {
  GetWorkAgentsOptions,
  GetWorkAgentsResult,
  GetWorkEventsOptions,
  GetWorkEventsResult,
  GetWorkLocationsOptions,
  GetWorkLocationsResult,
  GetWorksOptions,
  GetWorksResult,
  WorkQuery,
  WorkQueryService,
} from "@paradicms/services";
import {
  CollectionValueFilter,
  Filter,
  JsonPrimitiveType,
  StringPropertyValueFilter,
  ValueFilter,
} from "@paradicms/filters";
import {
  CollectionValueFacet,
  Facet,
  StringPropertyValueFacet,
  ValueFacetValue,
  ValueFacetValueThumbnail,
} from "@paradicms/facets";

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

export class LunrWorkQueryService implements WorkQueryService {
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
        const fieldName = LunrWorkQueryService.encodeFieldName(propertyUri);
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
        case "CollectionValue": {
          const values: {
            [index: string]: MutableValueFacetValue<string>;
          } = {};
          let unknownCount: number = 0;
          for (const work of works) {
            if (!work.collectionUris || work.collectionUris.length === 0) {
              unknownCount++;
            }
            for (const collectionUri of work.collectionUris) {
              const value = values[collectionUri];
              if (value) {
                value.count++;
              } else {
                const collection = this.modelSet.collectionByUri(collectionUri);
                values[collectionUri] = {
                  count: 1,
                  label: collection.title,
                  thumbnail: valueFacetValueThumbnailSelector
                    ? LunrWorkQueryService.toValueFacetValueThumbnail(
                        collection.thumbnail(valueFacetValueThumbnailSelector)
                      )
                    : null,
                  value: collectionUri,
                };
              }
            }
          }
          const facet: CollectionValueFacet = {
            type: "CollectionValue",
            unknownCount,
            values: Object.keys(values).map(value => values[value]),
          };
          facets.push(facet);
          break;
        }
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
                    ? LunrWorkQueryService.toValueFacetValueThumbnail(
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
        case "CollectionValue":
          filteredWorks = filteredWorks.filter(work =>
            LunrWorkQueryService.testValueFilter(
              filter as CollectionValueFilter,
              work.collectionUris
            )
          );
          break;
        case "StringPropertyValue": {
          filteredWorks = filteredWorks.filter(work =>
            LunrWorkQueryService.testValueFilter(
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
    query: WorkQuery
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
      const agents = Object.keys(agentsByUri)
        .map(agentUri => agentsByUri[agentUri])
        .sort((left, right) => left.name.localeCompare(right.name));
      const slicedAgents = agents.slice(offset, offset + limit);

      const slicedAgentsModelSet = new ModelSubsetter({
        completeModelSet: this.modelSet,
      }).agentsModelSet(slicedAgents, agentJoinSelector);

      resolve({
        modelSet: slicedAgentsModelSet,
        totalWorkAgentsCount: agents.length,
        workAgentUris: slicedAgents.map(agent => agent.uri),
      });
    });
  }

  getWorks(
    options: GetWorksOptions,
    query: WorkQuery
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
      const sortedWorks = query.text
        ? filteredWorks
        : filteredWorks
            .concat()
            .sort((left, right) => left.title.localeCompare(right.title));

      const slicedWorks = sortedWorks.slice(offset, offset + limit);

      // console.debug("Search sliced works count:", slicedWorks.length);

      const slicedWorksModelSet = new ModelSubsetter({
        completeModelSet: this.modelSet,
      }).worksModelSet(slicedWorks, workJoinSelector);

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

  private searchWorks(query: WorkQuery): readonly Work[] {
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
    const rights = image.rights;
    return {
      exactDimensions: image.exactDimensions,
      maxDimensions: image.maxDimensions,
      rights: rights
        ? {
            creators: rights.creators.map(creator => creator.toString()),
            holders: rights.holders.map(holder => holder.toString()),
            license: rights.license?.toString() ?? null,
            statement: rights.statement?.toString() ?? null,
          }
        : null,
      src: imageSrc,
    };
  }

  getWorkEvents(
    options: GetWorkEventsOptions,
    query: WorkQuery
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

      const workEvents = works
        .flatMap(work =>
          work.events.filter(workEvent => {
            if (requireDate && workEvent.sortDate === null) {
              return false;
            }
            // if (requireLocation && !(workEvent.location instanceof Location)) {
            //   return false;
            // }
            return true;
          })
        )
        .sort((left, right) => left.compareByDate(right));

      const slicedWorkEvents = workEvents.slice(offset, offset + limit);

      const slicedWorkEventsModelSet = new ModelSubsetter({
        completeModelSet: this.modelSet,
      }).workEventsModelSet(workEvents, workEventJoinSelector);

      resolve({
        modelSet: slicedWorkEventsModelSet,
        totalWorkEventsCount: workEvents.length,
        workEventUris: slicedWorkEvents.map(workEvent => workEvent.uri),
      });
    });
  }

  getWorkLocations(
    options: GetWorkLocationsOptions,
    query: WorkQuery
  ): Promise<GetWorkLocationsResult> {
    invariant(!!query, "query must be defined");

    return new Promise(resolve => {
      const works = this.filterWorks({
        filters: query.filters,
        works: this.searchWorks(query),
      });

      const workLocations = works.flatMap(work =>
        work.locations.map(workLocation => ({
          location: {
            lat: workLocation.location.lat,
            long: workLocation.location.long,
          },
          role: workLocation.role,
          title: workLocation.title,
          work: {
            title: work.title,
            uri: work.uri,
          },
        }))
      );

      resolve({
        workLocations,
      });
    });
  }
}
