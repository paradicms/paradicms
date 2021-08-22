import {
  Filter,
  JoinedFacet,
  JoinedStringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/models";
import * as React from "react";
import {ValueFilterControl} from "./ValueFilterControl";

export const createFilterControl: (kwds: {
  facets: readonly JoinedFacet[];
  filter: Filter;
  onChangeFilter: (newFilter: Filter) => void;
}) => React.ReactNode = ({facets, filter, onChangeFilter}) => {
  switch (filter.type) {
    case "StringPropertyValue": {
      const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
      const facet: JoinedStringPropertyValueFacet | undefined = facets.find(
        facet =>
          facet.type === "StringPropertyValue" &&
          (facet as JoinedStringPropertyValueFacet).propertyUri ===
            concreteFilter.propertyUri
      ) as JoinedStringPropertyValueFacet | undefined;
      if (!facet) {
        console.warn(
          "no matching facet for filter on property",
          concreteFilter.propertyUri
        );
        return null;
      }
      return (
        <ValueFilterControl
          facet={facet}
          filter={concreteFilter}
          onChange={onChangeFilter}
        />
      );
    }
  }
};
