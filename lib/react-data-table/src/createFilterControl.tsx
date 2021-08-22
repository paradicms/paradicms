import {
  Filter,
  JoinedFacet,
  JoinedStringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/models";

export const createFilterControl = (kwds: {
  facets: readonly JoinedFacet[];
  factory: {
    createStringPropertyValueFilterControl(
      facet: JoinedStringPropertyValueFacet,
      filter: StringPropertyValueFilter
    ): React.ReactNode;
  };
  filter: Filter;
}): React.ReactNode => {
  const {facets, factory, filter} = kwds;

  switch (filter.type) {
    case "StringPropertyValue": {
      const concreteFilter: StringPropertyValueFilter = filter as StringPropertyValueFilter;
      const facet: JoinedStringPropertyValueFacet | undefined = facets.find(
        facet =>
          facet.type === "StringPropertyValue" &&
          (facet as JoinedStringPropertyValueFacet).propertyUri ===
            concreteFilter.propertyUri
      ) as JoinedStringPropertyValueFacet | undefined;
      if (!facet) {
        console.warn(
          "no matching facet for filter on property",
          concreteFilter.propertyUri
        );
        return null;
      }
      return factory.createStringPropertyValueFilterControl(
        facet,
        concreteFilter
      );
    }
    default:
      return null;
  }
};
