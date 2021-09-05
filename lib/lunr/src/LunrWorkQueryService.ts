import {
  CollectionValueFacet,
  CollectionValueFilter,
  Dataset,
  DataSubsetter,
  Facet,
  Filter,
  InstitutionValueFacet,
  InstitutionValueFilter,
  PrimitiveType,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  ValueFacetValue,
  ValueFilter,
  Work,
  WorkJoinSelector,
  WorkQuery,
  WorkQueryResults,
  WorkSearchConfiguration,
} from "@paradicms/models";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";
import {WorkQueryService} from "@paradicms/services";

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
);

const encodeFieldName = (value: string): string =>
  base58.encode(new TextEncoder().encode(value));

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

const testValueFilter = <T extends PrimitiveType>(
  filter: ValueFilter<T>,
  values: readonly T[]
): boolean => {
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
};

export class LunrWorkQueryService implements WorkQueryService {
  private readonly dataset: Dataset;
  private readonly index: Index;
  private readonly workJoinSelector?: WorkJoinSelector;

  constructor(kwds: {
    configuration: WorkSearchConfiguration;
    dataset: Dataset;
    workJoinSelector?: WorkJoinSelector;
  }) {
    this.dataset = kwds.dataset;
    this.workJoinSelector = kwds.workJoinSelector;

    this.index = lunr(function() {
      this.field("abstract");
      this.field("title");
      const propertyFieldNamesByUri: {[index: string]: string} = {};
      for (const propertyUri of kwds.configuration.searchablePropertyUris) {
        const fieldName = encodeFieldName(propertyUri);
        propertyFieldNamesByUri[propertyUri] = fieldName;
        this.field(fieldName);
      }
      this.ref("uri");

      for (const work of kwds.dataset.works) {
        const doc: any = {title: work.title, uri: work.uri};
        if (work.abstract) {
          doc.abstract = work.abstract;
        }
        if (work.properties && work.properties.length > 0) {
          for (const property of work.properties) {
            const fieldName = propertyFieldNamesByUri[property.uri];
            if (!fieldName) {
              continue;
            }
            doc[fieldName] = property.value.value.toString();
          }
        }
        this.add(doc);
      }
    });
  }

  private facetizeWorks(kwds: {
    filters: readonly Filter[];
    works: readonly Work[];
  }): readonly Facet[] {
    const incrementValueCount = (
      countsByValue: {[index: string]: number},
      value: string
    ) => {
      const count = countsByValue[value];
      if (!count) {
        countsByValue[value] = 1;
      } else {
        countsByValue[value] = count + 1;
      }
    };

    const valuesFromMap = (countsByValue: {
      [index: string]: number;
    }): ValueFacetValue<string>[] =>
      Object.keys(countsByValue).map(value => ({
        count: countsByValue[value],
        label: null,
        value,
      }));

    const {filters, works} = kwds;
    const facets: Facet[] = [];
    for (const filter of filters) {
      switch (filter.type) {
        case "CollectionValue": {
          const countsByValue: {[index: string]: number} = {};
          let unknownCount: number = 0;
          for (const work of works) {
            if (work.collectionUris) {
              for (const collectionUri of work.collectionUris) {
                incrementValueCount(countsByValue, collectionUri);
              }
            } else {
              unknownCount++;
            }
          }
          const facet: CollectionValueFacet = {
            type: "CollectionValue",
            unknownCount,
            values: valuesFromMap(countsByValue),
          };
          facets.push(facet);
          break;
        }
        case "InstitutionValue": {
          const countsByValue: {[index: string]: number} = {};
          for (const work of works) {
            incrementValueCount(countsByValue, work.institutionUri);
          }
          const facet: InstitutionValueFacet = {
            type: "InstitutionValue",
            unknownCount: 0,
            values: valuesFromMap(countsByValue),
          };
          facets.push(facet);
          break;
        }
        case "StringPropertyValue": {
          const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
          let unknownCount: number = 0;
          const countsByValue: {[index: string]: number} = {};
          for (const work of works) {
            let workHasProperty = false;
            for (const property of work.properties ?? []) {
              if (property.uri === concreteFilter.propertyUri) {
                incrementValueCount(
                  countsByValue,
                  property.value.value.toString()
                );
                workHasProperty = true;
              }
            }
            if (!workHasProperty) {
              unknownCount++;
            }
          }
          const facet: StringPropertyValueFacet = {
            propertyUri: concreteFilter.propertyUri,
            type: "StringPropertyValue",
            unknownCount,
            values: valuesFromMap(countsByValue),
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
            testValueFilter(
              filter as CollectionValueFilter,
              work.collectionUris
            )
          );
          break;
        case "InstitutionValue":
          filteredWorks = filteredWorks.filter(work =>
            testValueFilter(filter as InstitutionValueFilter, [
              work.institutionUri,
            ])
          );
          break;
        case "StringPropertyValue": {
          filteredWorks = filteredWorks.filter(work =>
            testValueFilter(
              filter as StringPropertyValueFilter,
              (work.properties ?? [])
                .filter(
                  property =>
                    property.uri ===
                    (filter as StringPropertyValueFilter).propertyUri
                )
                .map(property => property.value.value.toString())
            )
          );
        }
      }
    }
    return filteredWorks;
  }

  getWorks(kwds: {
    limit: number;
    offset: number;
    query: WorkQuery;
  }): Promise<WorkQueryResults> {
    const {limit, offset, query} = kwds;

    invariant(!!query, "query must be defined");
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise((resolve, reject) => {
      // Calculate the universe of works
      let allWorks: readonly Work[];
      if (query.text) {
        // Anything matching the fulltext search
        allWorks = this.index
          .search(query.text)
          .map(({ref}) => this.dataset.workByUri(ref));
      } else {
        // All works
        allWorks = this.dataset.works;
      }

      // Calculate facets on the universe before filtering it
      const facets = this.facetizeWorks({
        filters: query.filters,
        works: allWorks,
      });

      console.debug("Search facets:", JSON.stringify(facets));

      const filteredWorks = this.filterWorks({
        filters: query.filters,
        works: allWorks,
      });

      console.debug("Search filtered works count:", filteredWorks.length);

      const slicedWorks = filteredWorks.slice(offset, offset + limit);

      console.debug("Search sliced works count:", slicedWorks.length);

      const slicedWorksDataset = new DataSubsetter(this.dataset).worksDataset(
        slicedWorks.map(work => work.uri),
        this.workJoinSelector
      );

      console.debug(
        "Search results dataset:",
        Object.keys(slicedWorksDataset)
          .map(
            key =>
              `${key}: ${((slicedWorksDataset as any)[key] as any[]).length}`
          )
          .join(", ")
      );

      return resolve({
        dataset: slicedWorksDataset,
        facets,
        totalWorksCount: filteredWorks.length,
      });
    });
  }
}
