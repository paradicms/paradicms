import {
  StringPropertyValueFacet,
  WorkCreationDateRangeFacet,
  WorkSubjectValueFacet,
  WorksFacet,
  WorksFilter,
} from "@paradicms/api";
import {requireDefined} from "@paradicms/utilities";
import * as log from "loglevel";
import React from "react";
import {DateRangeFilterControl} from "./DateRangeFilterControl";
import {ValueFilterSelect} from "./ValueFilterSelect";

/**
 * Create a control React element for a filter. Delegates to the factory for UI-framework specific elements.
 */
export const createWorksFilterControl = (kwds: {
  facets: readonly WorksFacet[];
  filter: WorksFilter;
  getAbsoluteImageSrc: (relativeImageSrc: string) => string;
  onChangeFilter: (newFilter: WorksFilter) => void;
}): React.ReactElement | null => {
  const {facets, filter, getAbsoluteImageSrc, onChangeFilter} = kwds;

  switch (filter.type) {
    case "StringPropertyValue": {
      const facet: StringPropertyValueFacet | undefined = facets?.find(
        facet =>
          facet.type === "StringPropertyValue" &&
          (facet as StringPropertyValueFacet).propertyIri === filter.propertyIri
      ) as StringPropertyValueFacet | undefined;
      if (!facet) {
        log.warn(
          "no matching facet for filter on property",
          filter.propertyIri
        );
        return null;
      }
      if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
        // console.debug(
        //   "facet for property",
        //   concreteFilter.propertyIri,
        //   "has <= 1 values, eliding"
        // );
        return null;
      }

      return (
        <ValueFilterSelect
          facet={facet}
          filter={filter}
          filterLabel={requireDefined(filter.label)}
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          onChange={onChangeFilter}
        />
      );
    }

    case "WorkCreationDateRange": {
      const facet: WorkCreationDateRangeFacet | undefined = facets?.find(
        facet => facet.type === "WorkCreationDateRange"
      ) as WorkCreationDateRangeFacet | undefined;
      if (!facet) {
        log.warn("no matching facet for filter on work creation date");
        return null;
      }

      return (
        <DateRangeFilterControl
          facet={facet}
          filter={filter}
          filterLabel="Creation date"
          onChange={onChangeFilter}
        />
      );
    }

    case "WorkSubjectValue": {
      const facet: WorkSubjectValueFacet | undefined = facets?.find(
        facet => facet.type === "WorkSubjectValue"
      ) as WorkSubjectValueFacet | undefined;
      if (!facet) {
        log.warn("no matching facet for filter on work subject");
        return null;
      }
      if (facet.values.length + (facet.unknownCount ? 1 : 0) <= 1) {
        // console.debug(
        //   "facet for property",
        //   concreteFilter.propertyIri,
        //   "has <= 1 values, eliding"
        // );
        return null;
      }

      return (
        <ValueFilterSelect
          facet={facet}
          filter={filter}
          filterLabel="Subject"
          getAbsoluteImageSrc={getAbsoluteImageSrc}
          onChange={onChangeFilter}
        />
      );
    }

    default:
      throw new EvalError("unsupported filter type: " + filter.type);
  }
};
