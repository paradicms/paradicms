import {Collection, Object} from "@paradicms/models";

export const selectCollectionImages = <ImageT>(kwds: {
  collection: Collection;
  imagesByDepictsUri: {[index: string]: readonly ImageT[]};
  objectsByCollectionUri: {[index: string]: readonly Object[]};
}): readonly ImageT[] => {
  const {collection, imagesByDepictsUri, objectsByCollectionUri} = kwds;
  let collectionImages = imagesByDepictsUri[collection.uri];
  if (collectionImages) {
    return collectionImages;
  }

  const collectionObjects = objectsByCollectionUri[collection.uri];
  if (!collectionObjects) {
    return [];
  }

  for (const object of collectionObjects) {
    const objectImages = imagesByDepictsUri[object.uri];
    if (objectImages) {
      // Use the images of the first object with images as the collection's images
      return objectImages;
    }
  }

  return [];
};
