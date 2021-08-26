import {ObjectQueryService} from "@paradicms/services";
import {
  CollectionValueFacet,
  CollectionValueFilter,
  DataSubsetter,
  Facet,
  Filter,
  IndexedDataset,
  InstitutionValueFacet,
  InstitutionValueFilter,
  Object,
  ObjectJoinSelector,
  ObjectQuery,
  ObjectQueryResults,
  ObjectSearchConfiguration,
  PrimitiveType,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  ValueFacetValue,
  ValueFilter,
} from "@paradicms/models";
import lunr, {Index} from "lunr";
import invariant from "ts-invariant";

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
    // If an object has any value that is excluded, then exclude the object
    for (const value of values) {
      if (excludeValues.some(excludeValue => excludeValue === value)) {
        return false;
      }
    }
  }

  if (includeValues.length > 0) {
    // If the object has any value that is included, then include the object
    // Conversely, if any values are included and an object doesn't have one of them, exclude the object.
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

export class LunrObjectQueryService implements ObjectQueryService {
  private readonly dataset: IndexedDataset;
  private readonly index: Index;
  private readonly objectJoinSelector?: ObjectJoinSelector;

  constructor(kwds: {
    configuration: ObjectSearchConfiguration;
    dataset: IndexedDataset;
    objectJoinSelector?: ObjectJoinSelector;
  }) {
    this.dataset = kwds.dataset;
    this.objectJoinSelector = kwds.objectJoinSelector;

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

      for (const object of kwds.dataset.objects) {
        const doc: any = {title: object.title, uri: object.uri};
        if (object.abstract) {
          doc.abstract = object.abstract;
        }
        if (object.properties && object.properties.length > 0) {
          for (const property of object.properties) {
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

  private facetizeObjects(kwds: {
    filters: readonly Filter[];
    objects: readonly Object[];
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

    const {filters, objects} = kwds;
    const facets: Facet[] = [];
    for (const filter of filters) {
      switch (filter.type) {
        case "CollectionValue": {
          const countsByValue: {[index: string]: number} = {};
          let unknownCount: number = 0;
          for (const object of objects) {
            if (object.collectionUris) {
              for (const collectionUri of object.collectionUris) {
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
          for (const object of objects) {
            incrementValueCount(countsByValue, object.institutionUri);
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
          for (const object of objects) {
            let objectHasProperty = false;
            for (const property of object.properties ?? []) {
              if (property.uri === concreteFilter.propertyUri) {
                incrementValueCount(
                  countsByValue,
                  property.value.value.toString()
                );
                objectHasProperty = true;
              }
            }
            if (!objectHasProperty) {
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

  private filterObjects(kwds: {
    filters: readonly Filter[];
    objects: readonly Object[];
  }): readonly Object[] {
    const {filters, objects} = kwds;
    let filteredObjects = objects;
    for (const filter of filters) {
      switch (filter.type) {
        case "CollectionValue":
          filteredObjects = filteredObjects.filter(object =>
            testValueFilter(
              filter as CollectionValueFilter,
              object.collectionUris
            )
          );
          break;
        case "InstitutionValue":
          filteredObjects = filteredObjects.filter(object =>
            testValueFilter(filter as InstitutionValueFilter, [
              object.institutionUri,
            ])
          );
          break;
        case "StringPropertyValue": {
          filteredObjects = filteredObjects.filter(object =>
            testValueFilter(
              filter as StringPropertyValueFilter,
              (object.properties ?? [])
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
    return filteredObjects;
  }

  getObjects(kwds: {
    limit: number;
    offset: number;
    query: ObjectQuery;
  }): Promise<ObjectQueryResults> {
    const {limit, offset, query} = kwds;

    invariant(!!query, "query must be defined");
    invariant(limit > 0, "limit must be > 0");
    invariant(offset >= 0, "offset must be >= 0");

    return new Promise((resolve, reject) => {
      // Calculate the universe of objects
      let allObjects: readonly Object[];
      if (query.text) {
        // Anything matching the fulltext search
        allObjects = this.index
          .search(query.text)
          .map(({ref}) => this.dataset.objectByUri(ref));
      } else {
        // All objects
        allObjects = this.dataset.objects;
      }

      // Calculate facets on the universe before filtering it
      const facets = this.facetizeObjects({
        filters: query.filters,
        objects: allObjects,
      });

      console.debug("Search facets:", JSON.stringify(facets));

      const filteredObjects = this.filterObjects({
        filters: query.filters,
        objects: allObjects,
      });

      console.debug("Search filtered objects count:", filteredObjects.length);

      const slicedObjects = filteredObjects.slice(offset, offset + limit);

      console.debug("Search sliced objects count:", slicedObjects.length);

      const slicedObjectsDataset = new DataSubsetter(
        this.dataset
      ).objectsDataset(
        slicedObjects.map(object => object.uri),
        this.objectJoinSelector
      );

      console.debug(
        "Search results dataset:",
        Object.keys(slicedObjectsDataset)
          .map(
            key =>
              `${key}: ${((slicedObjectsDataset as any)[key] as any[]).length}`
          )
          .join(", ")
      );

      return resolve({
        dataset: slicedObjectsDataset,
        facets,
        totalObjectsCount: filteredObjects.length,
      });
    });
  }
}
