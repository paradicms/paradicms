import {JsonPrimitiveType, ValueFilter} from "@paradicms/api";

export const testValueFilter = <ValueT extends JsonPrimitiveType>(
  filter: ValueFilter<ValueT>,
  values: readonly ValueT[]
): boolean => {
  if (values.length === 0) {
    if (filter.excludeUnknown) {
      return false;
    }
  } else {
    if (filter.excludeKnown) {
      return false;
    }
  }

  const excludeValues: readonly ValueT[] = filter.excludeValues ?? [];
  const includeValues: readonly ValueT[] = filter.includeValues ?? [];
  if (excludeValues.length === 0 && includeValues.length === 0) {
    return true;
  }
  if (excludeValues.length > 0) {
    // If an work has any value that is excluded, then exclude the work
    for (const value of values) {
      if (excludeValues.some(excludeValue => excludeValue === value)) {
        return false;
      }
    }
  }

  if (includeValues.length > 0) {
    // If the work has any value that is included, then include the work
    // Conversely, if any values are included and an work doesn't have one of them, exclude the work.
    let include = false;
    for (const value of values) {
      if (includeValues.some(includeValue => includeValue === value)) {
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
