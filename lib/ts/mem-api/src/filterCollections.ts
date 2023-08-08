import {CollectionsFilter} from "@paradicms/api";
import {filterModelsByKey} from "./filterModelsByKey";
import {Collection} from "@paradicms/models";

export const filterCollections = (kwds: {
  collections: readonly Collection[];
  filters: readonly CollectionsFilter[];
}): readonly Collection[] => {
  const {collections, filters} = kwds;
  let filteredCollections = collections;
  for (const filter of filters) {
    switch (filter.type) {
      case "CollectionWorksExistence": {
        if (typeof filter.exists !== "undefined") {
          if (filter.exists) {
            filteredCollections = filteredCollections.filter(
              collection => collection.works.length > 0
            );
          } else {
            filteredCollections = filteredCollections.filter(
              collection => collection.works.length === 0
            );
          }
        }
        break;
      }
      case "Key": {
        filteredCollections = filterModelsByKey({
          filter,
          models: filteredCollections,
        });
        break;
      }
    }
  }
  return filteredCollections;
};
