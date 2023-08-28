import {DateRangeFacet, WorksFacet, WorksFilter} from "@paradicms/api";
import {
  Image,
  PartialDateTimeDescription,
  ThumbnailSelector,
  Work,
  WorkEvent,
  imputePartialDateTimeDescription,
} from "@paradicms/models";
import {deleteUndefined} from "@paradicms/utilities";
import invariant from "ts-invariant";
import {MutableValueFacetValue} from "./MutableValueFacetValue";
import {imageToValueFacetValueThumbnail} from "./imageToValueFacetThumbnail";

const facetizeWorksByEventDateRange = (kwds: {
  getWorkEvent: (work: Work) => WorkEvent | null;
  works: readonly Work[];
}): DateRangeFacet | null => {
  const {getWorkEvent, works} = kwds;

  type TempDateRangeEndpoint = {
    imputedDate: Date;
    partialDateTimeDescription: PartialDateTimeDescription;
  };
  let end: TempDateRangeEndpoint | null = null,
    start: TempDateRangeEndpoint | null = null;

  for (const work of works) {
    const workEvent = getWorkEvent(work);
    if (workEvent === null) {
      return null;
    }

    // Check the event's dates to expand the range
    const workEventDates: {
      earliestImputedDate: Date | null;
      latestImputedDate: Date | null;
      partialDateTimeDescription: PartialDateTimeDescription;
    }[] = [];

    if (workEvent.date) {
      // Consider a .date for the start or end of the range
      workEventDates.push({
        earliestImputedDate: imputePartialDateTimeDescription({
          partialDateTimeDescription: workEvent.date,
        }),
        latestImputedDate: imputePartialDateTimeDescription({
          partialDateTimeDescription: workEvent.date,
          latest: true,
        }),
        partialDateTimeDescription: workEvent.date,
      });
    }

    if (workEvent.startDate) {
      // Don't consider a start date for the end of the range
      workEventDates.push({
        earliestImputedDate: imputePartialDateTimeDescription({
          partialDateTimeDescription: workEvent.startDate,
        }),
        latestImputedDate: null,
        partialDateTimeDescription: workEvent.startDate,
      });
    }

    if (workEvent.endDate) {
      // Don't consider an end date for the start of the range
      workEventDates.push({
        earliestImputedDate: null,
        latestImputedDate: imputePartialDateTimeDescription({
          partialDateTimeDescription: workEvent.endDate,
        }),
        partialDateTimeDescription: workEvent.endDate,
      });
    }

    for (const workEventDate of workEventDates) {
      if (
        workEventDate.earliestImputedDate !== null &&
        (start === null ||
          workEventDate.earliestImputedDate.getTime() <
            start.imputedDate.getTime())
      ) {
        start = {
          imputedDate: workEventDate.earliestImputedDate,
          partialDateTimeDescription: workEventDate.partialDateTimeDescription,
        };
      }

      if (
        workEventDate.latestImputedDate !== null &&
        (end === null ||
          workEventDate.latestImputedDate.getTime() > end.imputedDate.getTime())
      ) {
        end = {
          imputedDate: workEventDate.latestImputedDate,
          partialDateTimeDescription: workEventDate.partialDateTimeDescription,
        };
      }
    }
  }

  if (start == null || end == null) {
    return null;
  }

  invariant(end.partialDateTimeDescription.year !== null);
  invariant(start.partialDateTimeDescription.year !== null);

  return {
    end: {
      year: end.partialDateTimeDescription.year!,
      month: end.partialDateTimeDescription.month ?? undefined,
      day: end.partialDateTimeDescription.day ?? undefined,
    },
    start: {
      year: start.partialDateTimeDescription.year!,
      month: start.partialDateTimeDescription.month ?? undefined,
      day: start.partialDateTimeDescription.day ?? undefined,
    },
  };
};

const facetizeWorksByValue = <
  ValueT extends number | string,
  WorkValueT extends {
    label: string;
    thumbnail: (selector: ThumbnailSelector) => Image | null;
    value: ValueT;
  }
>(kwds: {
  getWorkValues: (work: Work) => readonly WorkValueT[];
  valueFacetValueThumbnailSelector?: ThumbnailSelector;
  works: readonly Work[];
}): {
  unknownCount: number;
  values: MutableValueFacetValue<ValueT>[];
} => {
  const {getWorkValues, valueFacetValueThumbnailSelector, works} = kwds;

  let unknownCount: number = 0;
  const facetValues: MutableValueFacetValue<ValueT>[] = [];
  for (const work of works) {
    const workValues = getWorkValues(work);
    if (workValues.length === 0) {
      unknownCount++;
      continue;
    }

    for (const value of workValues) {
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
            getWorkValues: work =>
              work.propertyValuesByPropertyIri(filter.propertyIri),
          }),
          propertyIri: filter.propertyIri,
          type: "StringPropertyValue",
        });
        break;
      case "WorkCreationDateRange": {
        const facet = facetizeWorksByEventDateRange({
          getWorkEvent: work =>
            work.events.find(event => event.type === "WorkCreation") ?? null,
          works,
        });
        if (facet) {
          facets.push({
            ...facet,
            type: "WorkCreationDateRange",
          });
        }
        break;
      }
      case "WorkSubjectValue":
        facets.push({
          ...facetizeWorksByValue({
            ...kwds,
            getWorkValues: work => work.subjects,
          }),
          type: "WorkSubjectValue",
        });
        break;
    }
  }
  return facets;
};
