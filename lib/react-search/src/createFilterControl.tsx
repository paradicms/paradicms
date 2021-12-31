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

/**
 * Create a control React element for a filter. Delegates to the factory for UI-framework specific elements.
 */
export const createFilterControl = (kwds: {
  facets: readonly Facet[];
  factory: {
    createCollectionValueFilterControl(
      facet: CollectionValueFacet,
      filter: CollectionValueFilter
    ): React.ReactNode;

    createInstitutionValueFilterControl(
      facet: InstitutionValueFacet,
      filter: InstitutionValueFilter
    ): React.ReactNode;

    createStringPropertyValueFilterControl(
      facet: StringPropertyValueFacet,
      filter: StringPropertyValueFilter
    ): React.ReactNode;
  };
  filter: Filter;
}): React.ReactNode => {
  const {facets, factory, filter} = kwds;

  return visitFilter(
    filter,
    {
      visitCollectionValueFilter(
        filter: CollectionValueFilter,
        facet?: CollectionValueFacet
      ): React.ReactNode {
        if (!facet) {
          return null;
        }
        if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
          // console.info("collection values facet has <= 1 values, eliding");
          return null;
        }
        return factory.createCollectionValueFilterControl(facet, filter);
      },

      visitInstitutionValueFilter(
        filter: InstitutionValueFilter,
        facet?: InstitutionValueFacet
      ): React.ReactNode {
        if (!facet) {
          return null;
        }
        if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
          return null;
        }
        return factory.createInstitutionValueFilterControl(facet, filter);
      },

      visitStringPropertyValueFilter(
        filter: StringPropertyValueFilter,
        facet?: StringPropertyValueFacet
      ): React.ReactNode {
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
        return factory.createStringPropertyValueFilterControl(facet, filter);
      },
    },
    facets
  );
};
