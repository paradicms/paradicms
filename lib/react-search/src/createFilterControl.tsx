import {
  CollectionValueFilter,
  Filter,
  InstitutionValueFilter,
  JoinedCollectionValueFacet,
  JoinedFacet,
  JoinedInstitutionValueFacet,
  JoinedStringPropertyValueFacet,
  StringPropertyValueFilter,
} from "@paradicms/models";

export const createFilterControl = (kwds: {
  facets: readonly JoinedFacet[];
  factory: {
    createCollectionValueFilterControl(
      facet: JoinedCollectionValueFacet,
      filter: CollectionValueFilter
    ): React.ReactNode;

    createInstitutionValueFilterControl(
      facet: JoinedInstitutionValueFacet,
      filter: InstitutionValueFilter
    ): React.ReactNode;

    createStringPropertyValueFilterControl(
      facet: JoinedStringPropertyValueFacet,
      filter: StringPropertyValueFilter
    ): React.ReactNode;
  };
  filter: Filter;
}): React.ReactNode => {
  const {facets, factory, filter} = kwds;

  switch (filter.type) {
    case "CollectionValue": {
      const concreteFilter: CollectionValueFilter = filter as CollectionValueFilter;
      const facet: JoinedCollectionValueFacet | undefined = facets.find(
        facet => facet.type === "CollectionValue"
      ) as JoinedCollectionValueFacet | undefined;
      if (!facet) {
        console.warn("no matching facet for filter on collections");
        return null;
      }
      if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
        console.info("collection values facet has <= 1 values, eliding");
        return null;
      }
      return factory.createCollectionValueFilterControl(facet, concreteFilter);
    }

    case "InstitutionValue": {
      const concreteFilter: InstitutionValueFilter = filter as InstitutionValueFilter;
      const facet: JoinedInstitutionValueFacet | undefined = facets.find(
        facet => facet.type === "InstitutionValue"
      ) as JoinedInstitutionValueFacet | undefined;
      if (!facet) {
        console.warn("no matching facet for filter on institutions");
        return null;
      }
      if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
        console.debug("institution values facet has <= 1 values, eliding");
        return null;
      }
      return factory.createInstitutionValueFilterControl(facet, concreteFilter);
    }

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
      if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
        console.debug(
          "facet for property",
          concreteFilter.propertyUri,
          "has <= 1 values, eliding"
        );
        return null;
      }

      return factory.createStringPropertyValueFilterControl(
        facet,
        concreteFilter
      );
    }
    default:
      console.warn("unsupported filter type:", filter.type);
      return null;
  }
};
