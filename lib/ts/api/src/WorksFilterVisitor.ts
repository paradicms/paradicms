import {StringPropertyValueFilter} from "./StringPropertyValueFilter";
import {StringPropertyValueFacet} from "./StringPropertyValueFacet";
import {WorksFilter} from "./WorksFilter";
import {WorksFacet} from "./WorksFacet";
import log from "loglevel";

/**
 * Filter visitor interface. Optionally includes the search results facet corresponding to the query filter.
 */
export interface WorksFilterVisitor<T> {
  visitStringPropertyValueFilter(
    filter: StringPropertyValueFilter,
    facet?: StringPropertyValueFacet
  ): T;
}

export const visitFilter = <T>(
  filter: WorksFilter,
  visitor: WorksFilterVisitor<T>,
  facets?: readonly WorksFacet[]
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
        log.warn(
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
