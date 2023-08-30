const {Parser} = require("any-date-parser");
import log from "loglevel";
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";

const yearMonthDayFormat = require("any-date-parser/src/formats/yearMonthDay/yearMonthDay");

const parser = new Parser();
parser.removeFormat(yearMonthDayFormat);

/**
 * Parse any date-time string into a PartialDateTimeDescription.
 */
export const parseAnyDateTime = (
  dateTimeString: string
): PartialDateTimeDescription | null => {
  const parsed = parser.attempt(dateTimeString);
  log.debug("parsed", JSON.stringify(parsed), "from", dateTimeString);
  if (parsed.invalid) {
    log.debug(
      "unable to parse literal date-time",
      dateTimeString,
      ":",
      parsed.invalid
    );
    return null;
  }

  let year: number | null = null,
    month: number | null = null,
    day: number | null = null,
    hour: number | null = null,
    minute: number | null = null,
    second: number | null = null;

  if (parsed.year !== null) {
    year = parsed.year;
    if (parsed.month !== null) {
      month = parsed.month;
      if (parsed.day !== null) {
        day = parsed.day;
        if (parsed.hour !== null) {
          hour = parsed.hour;
          if (parsed.minute !== null) {
            minute = parsed.minute;
            if (parsed.second !== null) {
              second = parsed.second;
            }
          }
        }
      }
    }
  }

  if (year == null) {
    log.debug("date-time", dateTimeString, "missing year");
    return null;
  }

  return {
    day,
    hour,
    label: dateTimeString,
    minute,
    month,
    second,
    year,
  };
};
