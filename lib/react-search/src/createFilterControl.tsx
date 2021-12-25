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

  switch (filter.type) {
    case "CollectionValue": {
      const concreteFilter: CollectionValueFilter = filter as CollectionValueFilter;
      const facet: CollectionValueFacet | undefined = facets.find(
        facet => facet.type === "CollectionValue"
      ) as CollectionValueFacet | undefined;
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
      const facet: InstitutionValueFacet | undefined = facets.find(
        facet => facet.type === "InstitutionValue"
      ) as InstitutionValueFacet | undefined;
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

      const facet: StringPropertyValueFacet | undefined = facets.find(
        facet =>
          facet.type === "StringPropertyValue" &&
          (facet as StringPropertyValueFacet).propertyUri ===
            concreteFilter.propertyUri
      ) as StringPropertyValueFacet | undefined;
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
