import {AppConfiguration} from "./AppConfiguration";
import {PropertyConfiguration} from "./PropertyConfiguration";
import {SearchConfiguration} from "./SearchConfiguration";
import {StringPropertyValueFilter} from "@paradicms/filters";

const imputeSearchConfiguration = (
  propertyConfigurations: readonly PropertyConfiguration[],
  searchConfiguration: SearchConfiguration | undefined
): SearchConfiguration | undefined => {
  const searchConfigurationFilters =
    searchConfiguration?.filters?.concat() ?? [];
  for (const propertyConfiguration of propertyConfigurations) {
    if (!propertyConfiguration.filterable) {
      continue;
    }
    if (
      searchConfigurationFilters.some(
        searchConfigurationFilter =>
          searchConfigurationFilter.type === "StringPropertyValue" &&
          (searchConfigurationFilter as StringPropertyValueFilter)
            .propertyUri === propertyConfiguration.uri
      )
    ) {
      console.debug(
        "filterable property",
        propertyConfiguration.uri,
        "already has a search filter, skipping"
      );
      continue;
    }
    console.debug(
      "filterable property",
      propertyConfiguration.uri,
      "does not have search filter, adding"
    );
    searchConfigurationFilters.push({
      label: propertyConfiguration.label,
      propertyUri: propertyConfiguration.uri,
      type: "StringPropertyValue",
    } as StringPropertyValueFilter);
  }
  if (!searchConfiguration && searchConfigurationFilters.length === 0) {
    return undefined;
  }
  return {
    ...searchConfiguration,
    filters: searchConfigurationFilters,
  };
};

export const imputeAppConfiguration = (
  inputAppConfiguration: AppConfiguration
): AppConfiguration => {
  if (!inputAppConfiguration.workProperties) {
    return inputAppConfiguration;
  }

  const searchConfiguration = imputeSearchConfiguration(
    inputAppConfiguration.workProperties,
    inputAppConfiguration.search
  );
  if (!searchConfiguration) {
    return inputAppConfiguration;
  }

  return {...inputAppConfiguration, search: searchConfiguration};
};
