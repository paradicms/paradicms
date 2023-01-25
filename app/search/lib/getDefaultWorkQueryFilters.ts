import {PropertyConfiguration} from "@paradicms/configuration";
import {Filter, StringPropertyValueFilter} from "@paradicms/filters";

export const getDefaultWorkQueryFilters = (
  propertyConfigurations: readonly PropertyConfiguration[]
): readonly Filter[] => {
  const filters: Filter[] = [];
  for (const propertyConfiguration of propertyConfigurations) {
    if (!propertyConfiguration.filterable) {
      continue;
    }
    if (
      filters.some(
        filter =>
          filter.type === "StringPropertyValue" &&
          (filter as StringPropertyValueFilter).propertyUri ===
            propertyConfiguration.uri
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
      label: propertyConfiguration.label,
      propertyUri: propertyConfiguration.uri,
      type: "StringPropertyValue",
    } as StringPropertyValueFilter);
  }

  return filters;
};
