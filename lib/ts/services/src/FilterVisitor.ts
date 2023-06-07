import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {StringPropertyValueFacet} from "./StringPropertyValueFacet";
import {FilterUnion} from "./FilterUnion";
import {FacetUnion} from "./FacetUnion";

/**
 * Filter visitor interface. Optionally includes the search results facet corresponding to the query filter.
 */
export interface FilterVisitor<T> {
  visitStringPropertyValueFilter(
    filter: StringPropertyValueFilter,
    facet?: StringPropertyValueFacet
  ): T;
}

export const visitFilter = <T>(
  filter: FilterUnion,
  visitor: FilterVisitor<T>,
  facets?: readonly FacetUnion[]
): T => {
  switch (filter.type) {
    case "StringPropertyValue": {
      const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;

      const facet: StringPropertyValueFacet | undefined = facets?.find(
        facet =>
          facet.type === "StringPropertyValue" &&
          (facet as StringPropertyValueFacet).propertyIri ===
            concreteFilter.propertyIri
      ) as StringPropertyValueFacet | undefined;
      if (!facet && facets) {
        console.warn(
          "no matching facet for filter on property",
          concreteFilter.propertyIri
        );
      }
      return visitor.visitStringPropertyValueFilter(concreteFilter, facet);
    }

    default:
      throw new EvalError("unsupported filter type: " + filter.type);
  }
};
