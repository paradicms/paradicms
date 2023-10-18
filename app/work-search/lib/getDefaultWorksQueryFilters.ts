import {StringPropertyValueFilter, WorksFilter} from "@paradicms/api";
import {defaultProperties} from "@paradicms/models";
import {JsonProperty} from "./JsonProperty";

export const getDefaultWorksQueryFilters = (
  properties: readonly JsonProperty[]
): WorksFilter[] => {
  const filters: WorksFilter[] = [];

  filters.push({
    type: "WorkCreationDateRange",
  });

  filters.push({
    type: "WorkSubjectValue",
  });

  for (const property of properties.length > 0
    ? properties
    : defaultProperties) {
    if (!property.filterable) {
      continue;
    }
    if (
      filters.some(
        filter =>
          filter.type === "StringPropertyValue" &&
          (filter as StringPropertyValueFilter).propertyIri === property.iri
      )
    ) {
      // log.debug(
      //   "filterable property",
      //   propertyConfiguration.iri,
      //   "already has a search filter, skipping"
      // );
      continue;
    }
    // log.debug(
    //   "filterable property",
    //   propertyConfiguration.iri,
    //   "does not have search filter, adding"
    // );
    filters.push({
      label: property.label,
      propertyIri: property.iri,
      type: "StringPropertyValue",
    } as StringPropertyValueFilter);
  }

  return filters;
};
