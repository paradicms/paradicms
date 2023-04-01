import {
  CollectionValueFacet,
  Facet,
  StringPropertyValueFacet,
} from "@paradicms/facets";
import {
  CollectionValueFilter,
  Filter,
  StringPropertyValueFilter,
  ValueFilter,
} from "@paradicms/filters";

/**
 * Filter visitor interface. Optionally includes the search results facet corresponding to the query filter.
 */
export interface FilterVisitor<T> {
  visitValueFilter(filter: ValueFilter, facet?: CollectionValueFacet): T;
}

export const visitFilter = <T>(
  filter: Filter,
  visitor: FilterVisitor<T>,
  facets?: readonly Facet[]
): T => {
  switch (filter.type) {
    case "CollectionValue": {
      const concreteFilter: CollectionValueFilter = filter as CollectionValueFilter;
      const facet: CollectionValueFacet | undefined = facets?.find(
        facet => facet.type === "CollectionValue"
      ) as CollectionValueFacet | undefined;
      if (!facet && facets) {
        console.warn("no matching facet for filter on collections");
      }
      return visitor.visitCollectionValueFilter(concreteFilter, facet);
    }

    case "StringPropertyValue": {
      const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;

      const facet: StringPropertyValueFacet | undefined = facets?.find(
        facet =>
          facet.type === "StringPropertyValue" &&
          (facet as StringPropertyValueFacet).propertyUri ===
            concreteFilter.propertyUri
      ) as StringPropertyValueFacet | undefined;
      if (!facet && facets) {
        console.warn(
          "no matching facet for filter on property",
          concreteFilter.propertyUri
        );
      }
      return visitor.visitStringPropertyValueFilter(concreteFilter, facet);
    }

    default:
      throw new EvalError("unsupported filter type: " + filter.type);
  }
};
