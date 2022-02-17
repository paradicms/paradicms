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
import {CreateFilterControlFactory} from "./CreateFilterControlFactory";

/**
 * Create a control React element for a filter. Delegates to the factory for UI-framework specific elements.
 */
export const createFilterControl = (kwds: {
  facets: readonly Facet[];
  factory: CreateFilterControlFactory;
  filter: Filter;
  onChangeFilter: (newFilter: Filter) => void;
}): React.ReactElement | null => {
  const {facets, factory, filter, onChangeFilter} = kwds;

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
        return factory.createCollectionValueFilterControl(
          facet,
          filter,
          onChangeFilter
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
        return factory.createInstitutionValueFilterControl(
          facet,
          filter,
          onChangeFilter
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
        return factory.createStringPropertyValueFilterControl(
          facet,
          filter,
          onChangeFilter
        );
      },
    },
    facets
  );
};
