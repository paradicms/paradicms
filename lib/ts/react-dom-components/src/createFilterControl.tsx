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
import {visitFilter} from "./FilterVisitor";
import React from "react";
import {ValueFilterControl} from "./ValueFilterControl";

/**
 * Create a control React element for a filter. Delegates to the factory for UI-framework specific elements.
 */
export const createFilterControl = (kwds: {
  facets: readonly Facet[];
  filter: Filter;
  onChangeFilter: (newFilter: Filter) => void;
}): React.ReactElement | null => {
  const {facets, filter, onChangeFilter} = kwds;

  return visitFilter(
    filter,
    {
      visitCollectionValueFilter(
        filter: CollectionValueFilter,
        facet?: CollectionValueFacet
      ): React.ReactElement | null {
        if (!facet) {
          return null;
        }
        if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
          // console.info("collection values facet has <= 1 values, eliding");
          return null;
        }
        return (
          <ValueFilterControl
            facet={facet}
            filter={filter}
            onChange={onChangeFilter}
          />
        );
      },

      visitInstitutionValueFilter(
        filter: InstitutionValueFilter,
        facet?: InstitutionValueFacet
      ): React.ReactElement | null {
        if (!facet) {
          return null;
        }
        if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
          return null;
        }
        return (
          <ValueFilterControl
            facet={facet}
            filter={filter}
            onChange={onChangeFilter}
          />
        );
      },

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
          <ValueFilterControl
            facet={facet}
            filter={filter}
            onChange={onChangeFilter}
          />
        );
      },
    },
    facets
  );
};
