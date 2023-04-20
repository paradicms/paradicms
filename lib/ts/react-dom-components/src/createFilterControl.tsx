import {
  FacetUnion,
  FilterUnion,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
  visitFilter,
} from "@paradicms/services";
import React from "react";
import {ValueFilterSelect} from "./ValueFilterSelect";

/**
 * Create a control React element for a filter. Delegates to the factory for UI-framework specific elements.
 */
export const createFilterControl = (kwds: {
  facets: readonly FacetUnion[];
  filter: FilterUnion;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChangeFilter: (newFilter: FilterUnion) => void;
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
          //   concreteFilter.propertyUri,
          //   "has <= 1 values, eliding"
          // );
          return null;
        }
        return (
          <ValueFilterSelect
            facet={facet}
            filter={filter}
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
