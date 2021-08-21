import {
  Facet,
  Filter,
  StringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/models";
import * as React from "react";
import {ValueFilterTable} from "@paradicms/react-data-table";

export const createFilterControl: (kwds: {
  facets: readonly Facet[];
  filter: Filter;
  onChangeFilter: (newFilter: Filter) => void;
}) => React.ReactNode = ({facets, filter, onChangeFilter}) => {
  switch (filter.type) {
    case "StringPropertyValue": {
      const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
      const facet: StringPropertyValueFacet | undefined = facets.find(
        facet =>
          facet.type === "StringPropertyValue" &&
          (facet as StringPropertyValueFacet).propertyUri ===
            concreteFilter.propertyUri
      ) as StringPropertyValueFacet | undefined;
      if (!facet) {
        console.warn(
          "no matching facet for filter on property",
          concreteFilter.propertyUri
        );
        return null;
      }
      return (
        <ValueFilterTable
          facet={facet}
          filter={concreteFilter}
          onChange={onChangeFilter}
        />
      );
    }
  }
};
