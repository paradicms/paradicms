import {
  Agent,
  Dataset,
  DataSubsetter,
  Image,
  ThumbnailSelector,
  Work,
  WorkEvent,
  WorkEventDateTime,
} from "@paradicms/models";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";
import {
  GetWorkAgentsOptions,
  GetWorkAgentsResult,
  GetWorksOptions,
  GetWorksResult,
  WorkQuery,
  WorkQueryService,
} from "@paradicms/services";
import {
  CollectionValueFilter,
  Filter,
  InstitutionValueFilter,
  PrimitiveType,
  StringPropertyValueFilter,
  ValueFilter,
} from "@paradicms/filters";
import {
  CollectionValueFacet,
  Facet,
  InstitutionValueFacet,
  StringPropertyValueFacet,
  ValueFacetValue,
  ValueFacetValueThumbnail,
} from "@paradicms/facets";
import {PropertyConfiguration} from "@paradicms/configuration";
import {GetWorkEventsOptions} from "@paradicms/services/dist/GetWorkEventsOptions";
import {GetWorkEventsResult} from "@paradicms/services/dist/GetWorkEventsResult";

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

interface LunrWorkQueryServiceConfiguration {
  readonly workProperties?: readonly PropertyConfiguration[];
}

interface MutableValueFacetValue<ValueT extends PrimitiveType>
  extends Omit<ValueFacetValue<ValueT>, "count"> {
  count: number;
}

export class LunrWorkQueryService implements WorkQueryService {
  private readonly configuration: LunrWorkQueryServiceConfiguration;
  private readonly dataset: Dataset;
  private readonly index: Index;

  constructor(kwds: {
    configuration: LunrWorkQueryServiceConfiguration;
    dataset: Dataset;
  }) {
    this.configuration = kwds.configuration;
    this.dataset = kwds.dataset;

    this.index = lunr(function() {
      this.field("abstract");
      this.field("title");
      const propertyFieldNamesByUri: {[index: string]: string} = {};
      const workPropertyConfigurations =
        kwds.configuration.workProperties ?? [];
      for (const propertyConfiguration of workPropertyConfigurations) {
        if (!propertyConfiguration.searchable) {
          continue;
        }
        const propertyUri = propertyConfiguration.uri;
        const fieldName = LunrWorkQueryService.encodeFieldName(propertyUri);
        propertyFieldNamesByUri[propertyUri] = fieldName;
        this.field(fieldName);
      }
      this.ref("uri");

      for (const work of kwds.dataset.works) {
        const doc: any = {title: work.title, uri: work.uri};
        if (work.abstract) {
          doc.abstract = work.abstract.toString();
        }
        for (const propertyConfiguration of workPropertyConfigurations) {
          const fieldName = propertyFieldNamesByUri[propertyConfiguration.uri];
          if (!fieldName) {
            continue;
          }
          for (const propertyValue of work.propertyValues(
            propertyConfiguration.uri
          )) {
            doc[fieldName] = propertyValue.value;
          }
        }
        this.add(doc);
      }
    });
  }

  private static compareWorkEventDateTimes(
    left: WorkEventDateTime,
    right: WorkEventDateTime
  ): number {
    const yearDiff = left.year - right.year;
    if (yearDiff !== 0) {
      return yearDiff;
    }
    const monthDiff =
      (left.month !== null ? left.month : 1) -
      (right.month !== null ? right.month : 1);
    if (monthDiff !== 0) {
      return monthDiff;
    }
    return (
      (left.day !== null ? left.day : 1) - (right.day !== null ? right.day : 1)
    );
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
                const collection = this.dataset.collectionByUri(collectionUri);
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
        case "InstitutionValue": {
          const values: {
            [index: string]: MutableValueFacetValue<string>;
          } = {};
          for (const work of works) {
            const value = values[work.institutionUri];
            if (value) {
              value.count++;
            } else {
              const institution = this.dataset.institutionByUri(
                work.institutionUri
              );
              values[work.institutionUri] = {
                count: 1,
                label: institution.name,
                thumbnail: valueFacetValueThumbnailSelector
                  ? LunrWorkQueryService.toValueFacetValueThumbnail(
                      institution.thumbnail(valueFacetValueThumbnailSelector)
                    )
                  : null,
                value: work.institutionUri,
              };
            }
          }
          const facet: InstitutionValueFacet = {
            type: "InstitutionValue",
            unknownCount: 0,
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
        case "InstitutionValue":
          filteredWorks = filteredWorks.filter(work =>
            LunrWorkQueryService.testValueFilter(
              filter as InstitutionValueFilter,
              [work.institutionUri]
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
      const agents = Object.keys(agentsByUri).map(
        agentUri => agentsByUri[agentUri]
      );
      const slicedAgents = agents.slice(offset, offset + limit);

      const slicedAgentsDataset = new DataSubsetter({
        completeDataset: this.dataset,
        configuration: this.configuration,
      }).agentsDataset(slicedAgents, agentJoinSelector);

      resolve({
        dataset: slicedAgentsDataset,
        totalWorkAgentsCount: agents.length,
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

      console.debug("Search filtered works count:", filteredWorks.length);

      const slicedWorks = filteredWorks.slice(offset, offset + limit);

      console.debug("Search sliced works count:", slicedWorks.length);

      const slicedWorksDataset = new DataSubsetter({
        completeDataset: this.dataset,
        configuration: this.configuration,
      }).worksDataset(slicedWorks, workJoinSelector);

      console.debug(
        "Search results dataset:",
        Object.keys(slicedWorksDataset)
          .map(
            key =>
              `${key}: ${((slicedWorksDataset as any)[key] as any[]).length}`
          )
          .join(", ")
      );

      resolve({
        dataset: slicedWorksDataset,
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
        .map(({ref}) => this.dataset.workByUri(ref));
    } else {
      // All works
      return this.dataset.works;
    }
  }

  private static testValueFilter<T extends PrimitiveType>(
    filter: ValueFilter<T>,
    values: readonly T[]
  ): boolean {
    if (values.length === 0 && filter.excludeUnknown) {
      return false;
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
    const {limit, offset} = options;

    invariant(!!query, "query must be defined");
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise(resolve => {
      const works = this.filterWorks({
        filters: query.filters,
        works: this.searchWorks(query),
      });

      const workEvents: (WorkEvent & {
        workUri: string;
      })[] = works
        .flatMap(work =>
          work.events.map(workEvent => ({...workEvent, workUri: work.uri}))
        )
        .sort((left, right) =>
          LunrWorkQueryService.compareWorkEventDateTimes(
            left.dateTime,
            right.dateTime
          )
        );

      const slicedWorkEvents = workEvents.slice(offset, offset + limit);

      const slicedWorkEventsDataset = new DataSubsetter({
        completeDataset: this.dataset,
        configuration: this.configuration,
      }).worksDataset(
        [
          ...new Set<string>(
            slicedWorkEvents.map(workEvent => workEvent.workUri)
          ),
        ].map(workUri => this.dataset.workByUri(workUri))
      );

      resolve({
        dataset: slicedWorkEventsDataset,
        workEvents: slicedWorkEvents,
        totalWorkEventsCount: workEvents.length,
      });
    });
  }
}
