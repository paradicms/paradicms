import dayjs from "dayjs";
import * as log from "loglevel";
import invariant from "ts-invariant";
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";

/**
 * Impute a Date from a PartialDateTimeDescription.
 *
 * If the PartialDateTimeDescription doesn't have a "year" we can't impute the rest. In that case, return null.
 * If latest is true, assume the missing parts should be the latest valid values. Otherwise, use the earliest.
 */
export const imputePartialDateTimeDescription = (kwds: {
  latest?: boolean;
  partialDateTimeDescription: PartialDateTimeDescription;
}): Date | null => {
  const {partialDateTimeDescription, latest} = kwds;

  if (partialDateTimeDescription.year === null) {
    return null;
  }

  const year = partialDateTimeDescription.year;

  let day = latest ? null : 1,
    hour = latest ? 23 : 0,
    minute = latest ? 59 : 0,
    month = latest ? 12 : 1,
    second = latest ? 59 : 0;

  if (partialDateTimeDescription.month !== null) {
    month = partialDateTimeDescription.month;

    if (partialDateTimeDescription.day !== null) {
      day = partialDateTimeDescription.day;

      if (partialDateTimeDescription.hour !== null) {
        hour = partialDateTimeDescription.hour;

        if (partialDateTimeDescription.minute !== null) {
          minute = partialDateTimeDescription.minute;

          if (partialDateTimeDescription.second !== null) {
            second = partialDateTimeDescription.second;
          }
        }
      }
    }
  }

  if (day == null) {
    invariant(latest);
    day = dayjs()
      .year(year)
      .month(month - 1)
      .daysInMonth();
  }

  const dayjs_ = dayjs()
    .year(year)
    .month(month - 1)
    .date(day)
    .hour(hour)
    .minute(minute)
    .second(second);
  if (!dayjs_.isValid()) {
    log.warn("invalid date-time: ", dayjs_.toISOString());
    return null;
  }

  return new Date(year, month - 1, day, hour, minute, second);
};
