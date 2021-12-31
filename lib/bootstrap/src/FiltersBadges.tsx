import * as React from "react";
import {ValueFilterBadges} from "./ValueFilterBadges";
import {
  CollectionValueFilter,
  Filter,
  InstitutionValueFilter,
  StringPropertyValueFilter,
} from "@paradicms/filters";
import {
  CollectionValueFacet,
  Facet,
  InstitutionValueFacet,
  StringPropertyValueFacet,
} from "@paradicms/facets";
import {visitFilter} from "@paradicms/react-search";

export const FiltersBadges: React.FunctionComponent<{
  facets: readonly Facet[];
  filters: readonly Filter[];
}> = ({facets, filters}) => {
  return (
    <>
      {filters.map((filter, filterI) =>
        visitFilter(
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
                />
              );
            },
          },
          facets
        )
      )}
    </>
  );
};
