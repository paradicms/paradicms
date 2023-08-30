import {DateRangeFilter} from "@paradicms/api";
import {PartialDateTimeDescription} from "@paradicms/models";
import {requireNonNull} from "@paradicms/utilities";
import invariant from "ts-invariant";
import {getEventDateRange} from "./getEventDateRange";
import {imputeDateRangeEndpoint} from "./imputeDateRangeEndpoint";
import {maxDate} from "./maxDate";
import {minDate} from "./minDate";

/**
 * Test whether the given event's date(s) are within the given filter's date range.
 */
export const testEventDateRangeFilter = (kwds: {
  event: {
    readonly date: PartialDateTimeDescription | null;
    readonly endDate: PartialDateTimeDescription | null;
    readonly startDate: PartialDateTimeDescription | null;
  };
  filter: DateRangeFilter;
}): boolean => {
  const {event, filter} = kwds;

  const eventDateRange = getEventDateRange(event);
  if (eventDateRange === null) {
    // Event has no valid date range.
    return false;
  }

  const imputedEventDateRangeEnd = requireNonNull(
    imputeDateRangeEndpoint(eventDateRange.end, {
      ceil: true,
    })
  );
  const imputedEventDateRangeStart = requireNonNull(
    imputeDateRangeEndpoint(eventDateRange.start)
  );
  invariant(
    imputedEventDateRangeStart.getTime() <= imputedEventDateRangeEnd.getTime()
  );

  // Is there overlap between the event's date range and the range covered by the filter?
  const imputedFilterEnd: Date =
    (filter.end ? imputeDateRangeEndpoint(filter.end) : null) ?? maxDate;
  const imputedFilterStart: Date =
    (filter.start ? imputeDateRangeEndpoint(filter.start) : null) ?? minDate;
  invariant(imputedFilterStart.getTime() <= imputedFilterEnd.getTime());

  // console.info("Imputed filter:", imputedFilterStart, imputedFilterEnd);
  // console.info(
  //   "Imputed event date range:",
  //   imputedEventDateRangeStart,
  //   imputedEventDateRangeEnd
  // );

  const inRange = (date: Date) =>
    date.getTime() >= imputedFilterStart.getTime() &&
    date.getTime() <= imputedFilterEnd.getTime();

  // console.info(
  //   "inRange",
  //   inRange(imputedEventDateRangeEnd),
  //   inRange(imputedEventDateRangeStart)
  // );

  // If either endpoint of the event date range is within the filter date range,
  // then consider the event date range within the filter date range
  return (
    inRange(imputedEventDateRangeEnd) || inRange(imputedEventDateRangeStart)
  );
};
