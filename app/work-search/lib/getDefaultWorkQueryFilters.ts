import {Filter, StringPropertyValueFilter} from "@paradicms/filters";
import {Property} from "@paradicms/models";

export const getDefaultWorkQueryFilters = (
  properties: readonly Property[]
): readonly Filter[] => {
  const filters: Filter[] = [];
  for (const property of properties) {
    if (!property.filterable) {
      continue;
    }
    if (
      filters.some(
        filter =>
          filter.type === "StringPropertyValue" &&
          (filter as StringPropertyValueFilter).propertyUri === property.uri
      )
    ) {
      // console.debug(
      //   "filterable property",
      //   propertyConfiguration.uri,
      //   "already has a search filter, skipping"
      // );
      continue;
    }
    // console.debug(
    //   "filterable property",
    //   propertyConfiguration.uri,
    //   "does not have search filter, adding"
    // );
    filters.push({
      label: property.label,
      propertyUri: property.uri,
      type: "StringPropertyValue",
    } as StringPropertyValueFilter);
  }

  return filters;
};
