import {StringPropertyValueFilter, WorksFilter} from "@paradicms/api";
import {defaultProperties} from "@paradicms/models";
import {JsonProperty} from "./JsonProperty";

export const getDefaultWorksQueryFilters = (
  properties: readonly JsonProperty[]
): WorksFilter[] => {
  if (properties.length === 0) {
    properties = defaultProperties;
  }

  const filters: WorksFilter[] = [];
  for (const property of properties) {
    if (!property.filterable) {
      continue;
    }
    if (property.iris.length !== 1) {
      throw new EvalError("not implemented: properties with 0 or 2+ IRIs");
    }
    const propertyIri = property.iris[0];
    if (
      filters.some(
        filter =>
          filter.type === "StringPropertyValue" &&
          (filter as StringPropertyValueFilter).propertyIri === propertyIri
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
      propertyIri,
      type: "StringPropertyValue",
    } as StringPropertyValueFilter);
  }

  return filters;
};
