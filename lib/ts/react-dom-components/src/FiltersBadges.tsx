import * as React from "react";
import {ValueFilterBadges} from "./ValueFilterBadges";
import {CollectionValueFilter, Filter, InstitutionValueFilter, StringPropertyValueFilter,} from "@paradicms/filters";
import {CollectionValueFacet, Facet, InstitutionValueFacet, StringPropertyValueFacet,} from "@paradicms/facets";
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
            visitCollectionValueFilter(
              filter: CollectionValueFilter,
              facet?: CollectionValueFacet
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

            visitInstitutionValueFilter(
              filter: InstitutionValueFilter,
              facet?: InstitutionValueFacet
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
