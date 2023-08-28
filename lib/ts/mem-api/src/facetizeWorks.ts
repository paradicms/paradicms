import { DateRangeEndpoint, WorksFacet, WorksFilter } from "@paradicms/api";
import {
  DateTimeDescription,
  Image,
  ThumbnailSelector,
  Work,
  WorkEvent,
} from "@paradicms/models";
import { deleteUndefined } from "@paradicms/utilities";
import { MutableValueFacetValue } from "./MutableValueFacetValue";
import { imageToValueFacetValueThumbnail } from "./imageToValueFacetThumbnail";

const compareDateRangeEndpoints = (left: DateRangeEndpoint, right: DateRangeEndpoint): number {
  const yearDiff = thisSortDate.year - otherSortDate.year;
  if (yearDiff !== 0) {
    return yearDiff;
  }

  // Years are the same.
  // Fill in the month and/or day with 1 for the purposes of comparison.

  const monthDiff =
    (thisSortDate.month !== null ? thisSortDate.month : 1) -
    (otherSortDate.month !== null ? otherSortDate.month : 1);
  if (monthDiff !== 0) {
    return monthDiff;
  }
  return (
    (thisSortDate.day !== null ? thisSortDate.day : 1) -
    (otherSortDate.day !== null ? otherSortDate.day : 1)
  );
}

const facetizeWorksByDateRange = (kwds: {
  workDate: (work: Work) => DateTimeDescription | null;
  works: readonly Work[];
}): DateRangeFacet | null => {
  for (const work of works) {
    
  }
};

const facetizeWorksByValue = <
  ValueT extends number | string,
  WorkValueT extends {
    label: string;
    thumbnail: (selector: ThumbnailSelector) => Image | null;
    value: ValueT;
  }
>(kwds: {
  valueFacetValueThumbnailSelector?: ThumbnailSelector;
  works: readonly Work[];
  workValues: (work: Work) => readonly WorkValueT[];
}): {
  unknownCount: number;
  values: MutableValueFacetValue<ValueT>[];
} => {
  const {valueFacetValueThumbnailSelector, works, workValues} = kwds;

  let unknownCount: number = 0;
  const facetValues: MutableValueFacetValue<ValueT>[] = [];
  for (const work of works) {
    const values = workValues(work);
    if (values.length === 0) {
      unknownCount++;
      continue;
    }

    for (const value of values) {
      let facetValue = facetValues.find(
        facetValue => facetValue.value === value.value
      );
      if (facetValue) {
        facetValue.count++;
      } else {
        facetValue = {
          count: 1,
          label: value.label,
          value: value.value,
          thumbnail: valueFacetValueThumbnailSelector
            ? imageToValueFacetValueThumbnail(
                value.thumbnail(valueFacetValueThumbnailSelector)
              )
            : undefined,
        };
        facetValues.push(deleteUndefined(facetValue));
      }
    }
  }
  return {
    unknownCount,
    values: facetValues,
  };
};

const getWorkEventDate = (workEvent: WorkEvent): DateTimeDescription | null {
  if (workEvent.date) {
    return workEvent.date;
  } else if (workEvent.startDate) {
    return workEvent.startDate;
  } else if (workEvent.endDate) {
    return workEvent.endDate;
  } else {
    return null;
  }
}

export const facetizeWorks = (kwds: {
  filters: readonly WorksFilter[];
  valueFacetValueThumbnailSelector?: ThumbnailSelector;
  works: readonly Work[];
}): readonly WorksFacet[] => {
  const {filters, valueFacetValueThumbnailSelector, works} = kwds;
  const facets: WorksFacet[] = [];
  for (const filter of filters) {
    switch (filter.type) {
      case "StringPropertyValue":
        facets.push({
          ...facetizeWorksByValue({
            valueFacetValueThumbnailSelector,
            works,
            workValues: work =>
              work.propertyValuesByPropertyIri(filter.propertyIri),
          }),
          propertyIri: filter.propertyIri,
          type: "StringPropertyValue",
        });
        break;
      case "WorkCreationDateRange": {
        const facet = facetizeWorksByDateRange({
          workDate: (work) => {
            for (const workEvent of work.events) {
              if (workEvent.type === "WorkCreation") {
                return getWorkEventDate(workEvent);
              }
            }
            return null;
          },
          works
        });
        if (facet) {
          facets.push({
            ...facet,
            type: "WorkCreationDateRange"
          });
        }
        break;
      }
      case "WorkSubjectValue":
        facets.push({
          ...facetizeWorksByValue({
            ...kwds,
            workValues: work => work.subjects,
          }),
          type: "WorkSubjectValue",
        });
        break;
    }
  }
  return facets;
};
