import {FilterUnion, StringPropertyValueFilter} from "@paradicms/services";
import {defaultProperties} from "@paradicms/models";

export const getDefaultWorksQueryFilters = (
  properties: readonly {
    readonly filterable: boolean;
    readonly label: string;
    readonly iri: string;
  }[]
): readonly FilterUnion[] => {
  if (properties.length === 0) {
    properties = defaultProperties;
  }

  const filters: FilterUnion[] = [];
  for (const property of properties) {
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
      // console.debug(
      //   "filterable property",
      //   propertyConfiguration.iri,
      //   "already has a search filter, skipping"
      // );
      continue;
    }
    // console.debug(
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
