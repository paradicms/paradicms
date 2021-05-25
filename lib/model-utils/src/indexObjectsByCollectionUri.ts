import {Object} from "@paradicms/models";

export const indexObjectsByCollectionUri = (
  objects: readonly Object[]
): {[index: string]: readonly Object[]} => {
  const result: {[index: string]: Object[]} = {};
  for (const object of objects) {
    for (const collectionUri of object.collectionUris) {
      let collectionObjects = result[collectionUri];
      if (!collectionObjects) {
        result[collectionUri] = collectionObjects = [];
      }
      collectionObjects.push(object);
    }
  }
  return result;
};
