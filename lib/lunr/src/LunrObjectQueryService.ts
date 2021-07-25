import {ObjectQueryService} from "@paradicms/services";
import {Configuration, Object, ObjectsQuery, ObjectsQueryResults} from "@paradicms/models";
import lunr, {Index} from "lunr";
import {facetizeObjects, filterObjects} from "@paradicms/model-utils";

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
);

const encodeFieldName = (value: string): string =>
  base58.encode(Buffer.from(value, "utf-8"));

export class LunrObjectQueryService implements ObjectQueryService {
  private readonly configuration: Configuration;
  private readonly index: Index;
  private readonly objects: readonly Object[];
  private readonly objectsByUri: {[index: string]: Object};

  constructor(kwds: {configuration: Configuration, objects: readonly Object[]}) {
    const {configuration, objects} = kwds;

    this.configuration = configuration;
    this.objects = objects;

    const objectsByUri: {[index: string]: Object} = {};
    this.objectsByUri = objectsByUri;

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

      for (const object of objects) {
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
        objectsByUri[object.uri] = object;
      }
    });
  }

  getObjects(query: ObjectsQuery): Promise<ObjectsQueryResults> {
    return new Promise((resolve, reject) => {
      // Calculate the universe of objects
      let allObjects: readonly Object[];
      if (query.text) {
        // Anything matching the fulltext search
        allObjects = this.index.search(query.text).map(({ref}) => this.objectsByUri[ref]);
      } else {
        // All objects
        allObjects = this.objects;
      }

      // Calculate facets on the universe before filtering it
      const facets = this.configuration.objectFacets.map(facet => facetizeObjects({facet, objects: allObjects}));

      const filteredObjects = filterObjects({filters: this.configuration.objectFilters, objects: allObjects});

      return resolve({
        facets,
        objects: filteredObjects.slice(
          query.offset,
          query.offset + query.limit
        ),
        totalCount: filteredObjects.length,
      })
    });
  }
}