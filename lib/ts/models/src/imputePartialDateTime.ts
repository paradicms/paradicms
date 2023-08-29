import dayjs from "dayjs";
import * as log from "loglevel";
import invariant from "ts-invariant";
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";

/**
 * Impute a Date from a partial date-time.
 *
 * If the PartialDateTimeDescription doesn't have a "year" we can't impute the rest. In that case, return null.
 * If ceil is true, assume the missing parts should be the ceil valid values. Otherwise, use the earliest.
 */
export const imputePartialDateTime = (
  partialDateTime: Omit<PartialDateTimeDescription, "label">,
  kwds?: {ceil?: boolean}
): Date | null => {
  const {ceil = false} = kwds ?? {};

  if (partialDateTime.year == null) {
    return null;
  }

  const year = partialDateTime.year;

  let day = ceil ? null : 1,
    hour = ceil ? 23 : 0,
    minute = ceil ? 59 : 0,
    month = ceil ? 12 : 1,
    second = ceil ? 59 : 0;

  if (partialDateTime.month != null) {
    month = partialDateTime.month;

    if (partialDateTime.day != null) {
      day = partialDateTime.day;

      if (partialDateTime.hour != null) {
        hour = partialDateTime.hour;

        if (partialDateTime.minute != null) {
          minute = partialDateTime.minute;

          if (partialDateTime.second != null) {
            second = partialDateTime.second;
          }
        }
      }
    }
  }

  if (day == null) {
    invariant(ceil);
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
