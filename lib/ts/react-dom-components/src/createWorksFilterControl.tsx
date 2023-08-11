import {
  WorksFacet,
  WorksFilter,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  visitFilter,
} from "@paradicms/api";
import React from "react";
import {ValueFilterSelect} from "./ValueFilterSelect";
import {requireDefined} from "@paradicms/utilities";

/**
 * Create a control React element for a filter. Delegates to the factory for UI-framework specific elements.
 */
export const createWorksFilterControl = (kwds: {
  facets: readonly WorksFacet[];
  filter: WorksFilter;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChangeFilter: (newFilter: WorksFilter) => void;
}): React.ReactElement | null => {
  const {facets, filter, getAbsoluteImageSrc, onChangeFilter} = kwds;

  return visitFilter(
    filter,
    {
      visitStringPropertyValueFilter(
        filter: StringPropertyValueFilter,
        facet?: StringPropertyValueFacet
      ): React.ReactElement | null {
        if (!facet) {
          return null;
        }
        if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
          // console.debug(
          //   "facet for property",
          //   concreteFilter.propertyIri,
          //   "has <= 1 values, eliding"
          // );
          return null;
        }
        return (
          <ValueFilterSelect
            facet={facet}
            filter={filter}
            filterLabel={requireDefined(filter.label)}
            getAbsoluteImageSrc={getAbsoluteImageSrc}
            onChange={onChangeFilter}
          />
        );
        // return (
        //   <ValueFilterControl
        //     facet={facet}
        //     filter={filter}
        //     getAbsoluteImageSrc={getAbsoluteImageSrc}
        //     onChange={onChangeFilter}
        //   />
        // );
      },
    },
    facets
  );
};
