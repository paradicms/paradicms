import {ModelSet} from "./ModelSet";
import {Collection} from "./Collection";
import {Work} from "./Work";

/**
 * Function to select Works for an exhibition.
 *
 * If the given ModelSet contains a collection that has associated Works, return the Collection and its works.
 *
 * Otherwise return null for the Collection and all the Works in the ModelSet.
 */
export const selectExhibitionWorks = (
  modelSet: ModelSet
): {collection: Collection | null; works: readonly Work[]} => {
  for (const collection of modelSet.collections) {
    if (collection.works.length > 0) {
      return {collection, works: collection.works};
    }
  }
  return {
    collection: null,
    works: modelSet.works,
  };
};
