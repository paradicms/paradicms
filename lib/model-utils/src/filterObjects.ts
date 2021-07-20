import {ObjectFilters, Property, ValueFacetFilter} from "@paradicms/models";

export const filterObjects = <
  ObjectT extends {
    readonly collectionUris: readonly string[];
    readonly institutionUri: string;
    readonly properties: readonly Property[] | null;
  }
>(kwds: {
  filters: ObjectFilters;
  objects: readonly ObjectT[];
}): readonly ObjectT[] => {
  let {filters, objects} = kwds;

  const filterValues = <T>(kwds: {
    filter: ValueFacetFilter<T> | null;
    getObjectValues: (object: ObjectT) => readonly T[] | null;
    objects: readonly ObjectT[];
  }): readonly ObjectT[] => {
    const {filter, getObjectValues, objects} = kwds;
    if (!filter) {
      return objects;
    }
    const excludeValues: readonly T[] = filter.excludeValues ?? [];
    const includeValues: readonly T[] = filter.includeValues ?? [];
    if (excludeValues.length === 0 && includeValues.length === 0) {
      return objects;
    }
    return objects.filter(object => {
      let objectValues = getObjectValues(object);
      if (!objectValues) {
        objectValues = [];
      }

      if (excludeValues.length > 0) {
        // If an object has any value that is excluded, then exclude the object
        for (const objectValue of objectValues) {
          if (
            excludeValues.some(excludeValue => excludeValue === objectValue)
          ) {
            return false;
          }
        }
      }

      if (includeValues.length > 0) {
        // If the object has any value that is included, then include the object
        // Conversely, if any values are included and an object doesn't have one of them, exclude the object.
        let include = false;
        for (const objectValue of objectValues) {
          if (
            includeValues.some(includeValue => includeValue === objectValue)
          ) {
            include = true;
            break;
          }
        }
        if (!include) {
          return false;
        }
      }

      return true;
    });
  };

  objects = filterValues({
    filter: filters.collectionUris,
    getObjectValues: object => object.collectionUris,
    objects,
  });

  objects = filterValues({
    filter: filters.institutionUris,
    getObjectValues: object => [object.institutionUri],
    objects,
  });

  if (filters.properties) {
    for (const propertyFilter of filters.properties) {
      objects = filterValues<string>({
        filter: propertyFilter,
        getObjectValues: object =>
          (object.properties ?? [])
            .filter(
              property => property.uri === propertyFilter.propertyDefinitionUri,
            )
            .map(property => property.value.toString()),
        objects,
      });
    }
  }

  return objects;
};
