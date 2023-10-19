import {
  DateRangeEndpoint,
  DateRangeFacet,
  WorksFacet,
  WorksFilter,
  imputeDateRangeEndpoint,
} from "@paradicms/api";
import {Image, ThumbnailSelector, Work, WorkEvent} from "@paradicms/models";
import {DataFactory} from "@paradicms/rdf";
import {deleteUndefined} from "@paradicms/utilities";
import invariant from "ts-invariant";
import {MutableValueFacetValue} from "./MutableValueFacetValue";
import {getEventDateRange} from "./getEventDateRange";
import {imageToValueFacetValueThumbnail} from "./imageToValueFacetThumbnail";

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
    // console.info(
    //   "Work event date range",
    //   imputedWorkEventDateRangeStart,
    //   imputedWorkEventDateRangeEnd
    // );

    // If the event's date range end is later than the current end, set the latter
    if (
      end === null ||
      imputedWorkEventDateRangeEnd.getTime() > end.imputedDate.getTime()
    ) {
      end = {
        dateRangeEndpoint: workEventDateRange.end,
        imputedDate: imputedWorkEventDateRangeEnd,
      };
      // console.info(
      //   "Reset end to",
      //   imputedWorkEventDateRangeEnd,
      //   JSON.stringify(workEventDateRange.end)
      // );
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
      // console.info(
      //   "Reset start to",
      //   imputedWorkEventDateRangeStart,
      //   JSON.stringify(workEventDateRange.start)
      // );
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
    // console.time(`facetize on filter ${filter.type}`);
    switch (filter.type) {
      case "StringPropertyValue":
        // console.time(
        //   `facetize on filter ${filter.type} with label ${filter.label}`
        // );
        facets.push({
          ...facetizeWorksByValue({
            valueFacetValueThumbnailSelector,
            works,
            getWorkValues: work =>
              work.propertyValuesByPropertyIri(
                DataFactory.namedNode(filter.propertyIri)
              ),
          }),
          propertyIri: filter.propertyIri,
          type: "StringPropertyValue",
        });
        // console.timeEnd(
        //   `facetize on filter ${filter.type} with label ${filter.label}`
        // );
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
    // console.timeEnd(`facetize on filter ${filter.type}`);
  }
  return facets;
};
