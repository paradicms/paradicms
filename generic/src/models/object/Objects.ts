import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";
import {JoinedObject} from "~/models/object/JoinedObject";
import {ObjectFilters} from "~/models/search/ObjectFilters";
import {Image} from "~/models/image/Image";

export class Objects {
  static filter(kwds: {
    filters: ObjectFilters;
    objects: readonly Object[];
  }): readonly Object[] {
    const {objects} = kwds;
    return objects;
  }

  static join(kwds: {
    collectionsByUri: {[index: string]: Collection};
    imagesByObjectUri: {[index: string]: readonly Image[]};
    institutionsByUri: {[index: string]: Institution};
    objects: readonly Object[];
  }): readonly JoinedObject[] {
    const {
      collectionsByUri,
      imagesByObjectUri,
      institutionsByUri,
      objects,
    } = kwds;
    return objects.map(object => {
      const collections: Collection[] = [];
      for (const collectionUri of object.collectionUris) {
        const collection = collectionsByUri[collectionUri];
        if (collection) {
          collections.push(collection);
        }
      }
      if (collections.length === 0) {
        throw new EvalError(
          "unable to resolve any collection URIs: " +
            object.collectionUris.join(" ")
        );
      }

      const images = imagesByObjectUri[object.uri];

      const institution = institutionsByUri[object.institutionUri];
      if (!institution) {
        throw new EvalError(
          "unable to resolve institution " + object.institutionUri
        );
      }

      return {
        collections,
        images: images ?? [],
        institution,
        ...object,
      };
    });
  }
}
