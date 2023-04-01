import * as React from "react";
import {ValueFilterBadges} from "./ValueFilterBadges";
import {Filter, StringPropertyValueFilter} from "@paradicms/filters";
import {Facet, StringPropertyValueFacet} from "@paradicms/facets";
import {visitFilter} from "./FilterVisitor";

export const FiltersBadges: React.FunctionComponent<{
  facets: readonly Facet[];
  filters: readonly Filter[];
  onChangeFilters: (filters: readonly Filter[]) => void;
}> = ({facets, filters, onChangeFilters}) => {
  return (
    <>
      {filters.map((filter, filterI) => {
        const onChangeFilter = (newFilter: Filter) => {
          const filtersCopy = filters.concat();
          filtersCopy[filterI] = newFilter;
          onChangeFilters(filtersCopy);
        };

        return visitFilter(
          filter,
          {
            visitStringPropertyValueFilter(
              filter: StringPropertyValueFilter,
              facet?: StringPropertyValueFacet
            ): React.ReactNode {
              return (
                <ValueFilterBadges
                  facet={facet}
                  filter={filter}
                  key={filterI}
                  onChange={onChangeFilter}
                />
              );
            },
          },
          facets
        );
      })}
    </>
  );
};
