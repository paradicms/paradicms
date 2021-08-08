import {ObjectQueryService} from "@paradicms/services";
import {
  DataSubsetter,
  IndexedDataset,
  Object,
  ObjectJoinSelector,
  ObjectQuery,
  ObjectQueryResults,
  ObjectSearchConfiguration,
} from "@paradicms/models";
import lunr, {Index} from "lunr";
import {facetizeObjects} from "./facetizeObjects";
import {filterObjects} from "./filterObjects";
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

export class LunrObjectQueryService implements ObjectQueryService {
  private readonly configuration: ObjectSearchConfiguration;
  private readonly dataset: IndexedDataset;
  private readonly index: Index;
  private readonly objectJoinSelector?: ObjectJoinSelector;

  constructor(kwds: {
    configuration: ObjectSearchConfiguration;
    dataset: IndexedDataset;
    objectJoinSelector?: ObjectJoinSelector;
  }) {
    this.configuration = kwds.configuration;
    this.dataset = kwds.dataset;
    this.objectJoinSelector = kwds.objectJoinSelector;

    this.index = lunr(function() {
      this.field("abstract");
      this.field("title");
      const propertyFieldNamesByUri: {[index: string]: string} = {};
      for (const propertyUri of kwds.configuration
        .fullTextSearchablePropertyUris) {
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
            doc[fieldName] = property.value;
          }
        }
        this.add(doc);
      }
    });
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
      const facets = this.configuration.facets.map(facet =>
        facetizeObjects({facet, objects: allObjects})
      );

      console.debug("Search facets:", JSON.stringify(facets));

      const filteredObjects = filterObjects({
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
