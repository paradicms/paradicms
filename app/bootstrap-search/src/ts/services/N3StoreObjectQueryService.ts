import * as N3 from "n3";
import {
  GetObjectsResult,
  ObjectQueryService,
} from "~/services/ObjectQueryService";
import {Query} from "~/models/Query";
import {Configuration} from "~/models/Configuration";
import lunr, {Index} from "lunr";
import {FreetextFilter} from "~/models/FreetextFilter";
import {Object} from "~/models/Object";
import {ImageRdfReader, ObjectRdfReader} from "@paradicms/rdf";
import {indexImagesByDepictsUri, selectThumbnail} from "@paradicms/model-utils";
import {thumbnailTargetDimensions} from "~/thumbnailTargetDimensions";
import {encodeBase58String} from "~/utils/encodeBase58String";

function intersection<T>(a: Set<T>, b: Set<T>) {
  if (a.size === 0) {
    return a;
  } else if (b.size === 0) {
    return b;
  } else if (a.size <= b.size) {
    return new Set([...a].filter((value) => b.has(value)));
  } else {
    return new Set([...b].filter((value) => a.has(value)));
  }
}

/**
 * A browser-based, immutable implementation of the ObjectQueryService that derives data from an N3.js RDF quad store and uses Lunr.js for freetext search.
 *
 * This implementation is intended for small datasets in RDF.
 */
export class N3StoreObjectQueryService implements ObjectQueryService {
  // @ts-ignore
  private readonly lunrIndicesByFreetextFilterId: {[index: string]: Index};
  // Pre-deserialize valid objects from the RDF store and track their (subject) IRIs so that filters can be applied to properties that aren't in Object
  private readonly objectsByUri: {[index: string]: Object};

  constructor(configuration: Configuration, private readonly store: N3.Store) {
    const paradicmsImagesByDepictsUri = indexImagesByDepictsUri(
      ImageRdfReader.readAll(this.store)
    );
    this.objectsByUri = {};
    ObjectRdfReader.readEach(this.store, (paradicmsObject) => {
      let thumbnailUrl: string | undefined;
      const paradicmsObjectImages =
        paradicmsImagesByDepictsUri[paradicmsObject.uri];
      if (paradicmsObjectImages) {
        const paradicmsObjectThumbnail = selectThumbnail({
          images: paradicmsObjectImages,
          targetDimensions: thumbnailTargetDimensions,
        });
        if (paradicmsObjectThumbnail) {
          thumbnailUrl =
            paradicmsObjectThumbnail.src ?? paradicmsObjectThumbnail.uri;
        }
      }

      this.objectsByUri[paradicmsObject.uri] = {
        thumbnailUrl,
        title: paradicmsObject.title,
        url: paradicmsObject.page ?? paradicmsObject.uri,
      };
    });

    // Lunr requires you to populate the index at creation time, which means we have to read all of the objects before indexing any of them and
    // iterate over the objects once for every index.
    this.lunrIndicesByFreetextFilterId = {};
    for (const filter of configuration.filters) {
      if (filter.type !== "freetext") {
        continue;
      }
      this.lunrIndicesByFreetextFilterId[filter.id] =
        N3StoreObjectQueryService.createLunrIndex(
          this.objectsByUri,
          (filter as FreetextFilter).propertyIds,
          this.store
        );
    }
  }

  private static createLunrIndex(
    objectsByUri: {[index: string]: Object},
    propertyIds: readonly string[],
    store: N3.Store
  ): Index {
    return lunr(function () {
      // Lunr doesn't accept IRIs as index field names, so we need to encode property id's
      // Also construct a NamedNode so we can use it in a predicate lookup on the store
      const indexedProperties: {
        fieldName: string;
        id: string;
      }[] = [];
      for (const propertyId of propertyIds) {
        const fieldName = encodeBase58String(propertyId);
        this.field(fieldName);
        this.ref("id");
        indexedProperties.push({
          fieldName,
          id: propertyId,
        });
      }

      for (const objectUri in objectsByUri) {
        const doc: any = {id: objectUri};
        for (const indexedProperty of indexedProperties) {
          store.forObjects(
            (o) => {
              if (o.termType !== "Literal") {
                return;
              }
              doc[indexedProperty.fieldName] = o.value;
            },
            objectUri,
            indexedProperty.id,
            null
          );
        }
        if (Object.keys(doc).length > 0) {
          this.add(doc);
        }
      }
    });
  }

  async getObjects(query: Query): Promise<GetObjectsResult> {
    return new Promise((resolve, reject) => {
      let filteredObjectUris = new Set(Object.keys(this.objectsByUri));
      for (const filter of query.filters) {
        switch (filter.type) {
          case "freetext": {
            const value = (filter as FreetextFilter).value;
            if (value.length === 0) {
              continue;
            }

            const lunrIndex = this.lunrIndicesByFreetextFilterId[filter.id];
            if (!lunrIndex) {
              console.warn(`no Lunr index for filter ${filter.id}`);
              continue;
            }

            const resultObjectUris = new Set(
              lunrIndex.search(value).map((result) => result.ref)
            );
            // console.debug(
            //   "result object URIs: ",
            //   JSON.stringify([...resultObjectUris])
            // );
            filteredObjectUris = intersection(
              filteredObjectUris,
              resultObjectUris
            );
          }
        }
      }

      const filteredObjects = [...filteredObjectUris].map(
        (objectUri) => this.objectsByUri[objectUri]!
      );

      resolve({
        objects: filteredObjects.slice(
          query.offset,
          query.offset + query.limit
        ),
        totalObjectsCount: filteredObjects.length,
      });
    });
  }
}
