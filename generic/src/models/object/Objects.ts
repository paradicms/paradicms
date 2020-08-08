import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {Object} from "~/models/object/Object";
import {ObjectSummary} from "~/models/object/ObjectSummary";
import {ObjectFilters} from "~/models/search/ObjectFilters";

export class Objects {
  static filter(kwds: {
    filters: ObjectFilters;
    objects: readonly Object[];
  }): readonly Object[] {
    const {objects} = kwds;
    return objects;
  }

  static summarize(kwds: {
    collectionsByUri: {[index: string]: Collection};
    institutionsByUri: {[index: string]: Institution};
    objects: readonly Object[];
  }): readonly ObjectSummary[] {
    const {collectionsByUri, institutionsByUri, objects} = kwds;
    return objects.map(object => {
      const collectionUri = object.collection_uris.find(
        collectionUri => !!collectionsByUri[collectionUri]
      );
      if (!collectionUri) {
        throw new EvalError("unable to resolve collection");
      }
      const collection = collectionsByUri[collectionUri];

      const institution = institutionsByUri[object.institution_uri];
      if (!institution) {
        throw new EvalError(
          "unable to resolve institution " + object.institution_uri
        );
      }

      return {
        collection,
        institution,
        ...object,
      };
    });
  }
}
