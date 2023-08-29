import {
  DateRangeEndpoint,
  DateRangeFacet,
  WorksFacet,
  WorksFilter,
} from "@paradicms/api";
import {Image, ThumbnailSelector, Work, WorkEvent} from "@paradicms/models";
import {deleteUndefined} from "@paradicms/utilities";
import invariant from "ts-invariant";
import {MutableValueFacetValue} from "./MutableValueFacetValue";
import {getEventDateRange} from "./getEventDateRange";
import {imageToValueFacetValueThumbnail} from "./imageToValueFacetThumbnail";
import {imputeDateRangeEndpoint} from "./imputeDateRangeEndpoint";

const facetizeWorksByEventDateRange = (kwds: {
  getWorkEvent: (work: Work) => WorkEvent | null;
  works: readonly Work[];
}): DateRangeFacet | null => {
  const {getWorkEvent, works} = kwds;

  let end: {
      dateRangeEndpoint: DateRangeEndpoint;
      imputedDate: Date;
    } | null = null,
    start: {
      dateRangeEndpoint: DateRangeEndpoint;
      imputedDate: Date;
    } | null = null;

  for (const work of works) {
    const workEvent = getWorkEvent(work);
    if (workEvent === null) {
      continue;
    }

    const workEventDateRange = getEventDateRange(workEvent);
    if (workEventDateRange === null) {
      continue;
    }

    const imputedWorkEventDateRangeEnd = imputeDateRangeEndpoint(
      workEventDateRange.end,
      {ceil: true}
    );
    const imputedWorkEventDateRangeStart = imputeDateRangeEndpoint(
      workEventDateRange.start
    );
    if (
      imputedWorkEventDateRangeEnd === null ||
      imputedWorkEventDateRangeStart === null
    ) {
      continue;
    }
    invariant(
      imputedWorkEventDateRangeStart.getTime() <=
        imputedWorkEventDateRangeEnd.getTime()
    );

    // If the event's date range end is later than the current end, set the latter
    if (
      end === null ||
      imputedWorkEventDateRangeEnd.getTime() > end.imputedDate.getTime()
    ) {
      end = {
        dateRangeEndpoint: workEventDateRange.end,
        imputedDate: imputedWorkEventDateRangeEnd,
      };
    }

    // If the event's date range start is earlier than the current start, set the latter
    if (
      start === null ||
      imputedWorkEventDateRangeStart.getTime() < start.imputedDate.getTime()
    ) {
      start = {
        dateRangeEndpoint: workEventDateRange.start,
        imputedDate: imputedWorkEventDateRangeStart,
      };
    }
  }

  if (start == null || end == null) {
    return null;
  }

  return {start: start.dateRangeEndpoint, end: end.dateRangeEndpoint};
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
