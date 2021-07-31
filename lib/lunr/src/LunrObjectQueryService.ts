import {ObjectQueryService} from "@paradicms/services";
import {Configuration, IndexedDataset, Object, ObjectsQuery, ObjectsQueryResults} from "@paradicms/models";
import lunr, {Index} from "lunr";
import {facetizeObjects} from "./facetizeObjects";
import {filterObjects} from "./filterObjects";

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
);

const encodeFieldName = (value: string): string =>
  base58.encode(Buffer.from(value, "utf-8"));

export class LunrObjectQueryService implements ObjectQueryService {
  private readonly configuration: Configuration;
  private readonly dataset: IndexedDataset;
  private readonly index: Index;

  constructor(kwds: {configuration: Configuration, dataset: IndexedDataset}) {
    const {configuration, dataset} = kwds;

    this.configuration = configuration;
    this.dataset = dataset;

    this.index = lunr(function() {
      this.field("abstract");
      this.field("title");
      const propertyFieldNamesByUri: {[index: string]: string} = {};
      for (const propertyUri of configuration.objectFullTextSearchablePropertyUris) {
        const fieldName = encodeFieldName(propertyUri);
        propertyFieldNamesByUri[propertyUri] = fieldName;
        this.field(fieldName);
      }
      this.ref("uri");

      for (const object of dataset.objects) {
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

  getObjects(kwds: {limit: number, offset: number, query: ObjectsQuery}): Promise<ObjectsQueryResults> {
    const {limit, offset, query} = kwds;
    return new Promise((resolve, reject) => {
      // Calculate the universe of objects
      let allObjects: readonly Object[];
      if (query.text) {
        // Anything matching the fulltext search
        allObjects = this.index.search(query.text).map(({ref}) => this.dataset.objectByUri(ref));
      } else {
        // All objects
        allObjects = this.dataset.objects;
      }

      // Calculate facets on the universe before filtering it
      const facets = this.configuration.objectFacets.map(facet => facetizeObjects({facet, objects: allObjects}));

      const filteredObjects = filterObjects({filters: this.configuration.objectFilters, objects: allObjects});

      const slicedObjects = filteredObjects.slice(
        offset,
        offset + limit,
      );

      return resolve({
        dataset: this.dataset.objectsDataset(slicedObjects.map(object => object.uri)),
        facets,
        totalObjectsCount: filteredObjects.length,
      });
    });
  }
}