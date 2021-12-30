import * as React from "react";
import {ValueFilterBadges} from "./ValueFilterBadges";
import {Filter, StringPropertyValueFilter} from "@paradicms/filters";
import {Facet, StringPropertyValueFacet} from "@paradicms/facets";

export const FiltersBadges: React.FunctionComponent<{
  facets: readonly Facet[];
  filters: readonly Filter[];
}> = ({facets, filters}) => {
  return (
    <>
      {filters.map((filter, filterI) => {
        switch (filter.type) {
          case "StringPropertyValue": {
            return (
              <ValueFilterBadges
                facet={
                  facets.find(
                    facet =>
                      facet.type === "StringPropertyValue" &&
                      (facet as StringPropertyValueFacet).propertyUri ===
                        (filter as StringPropertyValueFilter).propertyUri
                  ) as StringPropertyValueFacet | undefined
                }
                filter={filter as StringPropertyValueFilter}
                key={filterI}
              />
            );
          }
        }
      })}
    </>
  );
};
