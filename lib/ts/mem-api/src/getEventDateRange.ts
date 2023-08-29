import {DateRangeEndpoint} from "@paradicms/api";
import {
  Event,
  PartialDateTimeDescription,
  imputePartialDateTime,
} from "@paradicms/models";
import invariant from "ts-invariant";

export const getEventDateRange = (
  event: Event
): {end: DateRangeEndpoint; start: DateRangeEndpoint} | null => {
  type TempDateRangeEndpoint = {
    imputedDate: Date;
    partialDateTimeDescription: PartialDateTimeDescription;
  };
  let end: TempDateRangeEndpoint | null = null,
    start: TempDateRangeEndpoint | null = null;

  // Check the event's dates to expand the range
  const eventDates: {
    earliestImputedDate: Date | null;
    latestImputedDate: Date | null;
    partialDateTimeDescription: PartialDateTimeDescription;
  }[] = [];

  if (event.date) {
    // Consider a .date for the start or end of the range
    eventDates.push({
      earliestImputedDate: imputePartialDateTime(event.date),
      latestImputedDate: imputePartialDateTime(event.date, {ceil: true}),
      partialDateTimeDescription: event.date,
    });
  }

  if (event.startDate) {
    // Don't consider a start date for the end of the range
    eventDates.push({
      earliestImputedDate: imputePartialDateTime(event.startDate),
      latestImputedDate: null,
      partialDateTimeDescription: event.startDate,
    });
  }

  if (event.endDate) {
    // Don't consider an end date for the start of the range
    eventDates.push({
      earliestImputedDate: null,
      latestImputedDate: imputePartialDateTime(event.endDate, {ceil: true}),
      partialDateTimeDescription: event.endDate,
    });
  }

  for (const eventDate of eventDates) {
    if (
      eventDate.earliestImputedDate !== null &&
      (start === null ||
        eventDate.earliestImputedDate.getTime() < start.imputedDate.getTime())
    ) {
      start = {
        imputedDate: eventDate.earliestImputedDate,
        partialDateTimeDescription: eventDate.partialDateTimeDescription,
      };
    }

    if (
      eventDate.latestImputedDate !== null &&
      (end === null ||
        eventDate.latestImputedDate.getTime() > end.imputedDate.getTime())
    ) {
      end = {
        imputedDate: eventDate.latestImputedDate,
        partialDateTimeDescription: eventDate.partialDateTimeDescription,
      };
    }
  }

  if (start == null || end == null) {
    return null;
  }

  invariant(start.imputedDate.getTime() <= end.imputedDate.getTime());
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
