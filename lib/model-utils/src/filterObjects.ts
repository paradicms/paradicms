import {
  CollectionValueFilter,
  Filter,
  InstitutionValueFilter,
  Property,
  StringPropertyValueFilter,
  ValueFilter,
} from "@paradicms/models";

interface FilterableObject {
  readonly collectionUris: readonly string[];
  readonly institutionUri: string;
  readonly properties: readonly Property[] | null;
}

const testValueFilter = <T>(
  filter: ValueFilter<T>,
  values: readonly T[],
): boolean => {
  const excludeValues: readonly T[] = filter.excludeValues ?? [];
  const includeValues: readonly T[] = filter.includeValues ?? [];
  if (excludeValues.length === 0 && includeValues.length === 0) {
    return true;
  }
  if (excludeValues.length > 0) {
    // If an object has any value that is excluded, then exclude the object
    for (const value of values) {
      if (
        excludeValues.some(excludeValue => excludeValue === value)
      ) {
        return false;
      }
    }
  }

  if (includeValues.length > 0) {
    // If the object has any value that is included, then include the object
    // Conversely, if any values are included and an object doesn't have one of them, exclude the object.
    let include = false;
    for (const value of values) {
      if (
        includeValues.some(includeValue => includeValue === value)
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
};

const testFilter = <ObjectT extends FilterableObject>(filter: Filter, object: ObjectT): boolean => {
  switch (filter.type) {
    case "CollectionValue":
      return testValueFilter(filter as CollectionValueFilter, object.collectionUris);
    case "InstitutionValue":
      return testValueFilter(filter as InstitutionValueFilter, [object.institutionUri]);
    case "StringPropertyValue":
      return testValueFilter(
        filter as StringPropertyValueFilter,
        (object.properties ?? []).filter(property => property.uri === (filter as StringPropertyValueFilter).propertyUri).map(property => property.value.toString()),
      );
  }
};

export const filterObjects = <ObjectT extends FilterableObject>(kwds: {
  // Apply multiple filters at once to amortize passes over the objects
  filters: readonly Filter[],
  objects: readonly ObjectT[];
}): readonly ObjectT[] => {
  let {filters, objects} = kwds;
  return objects.filter(
    object => filters.every(filter => testFilter(filter, object)),
  );
};
