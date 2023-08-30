const {Parser} = require("any-date-parser");
import log from "loglevel";

const yearMonthDayFormat = require("any-date-parser/src/formats/yearMonthDay/yearMonthDay");

const parser = new Parser();
parser.removeFormat(yearMonthDayFormat);

/**
 * Parse any date-time string into a partial date-time.
 *
 * The parsing is progressive: a year is required to return a month, a month is required to return a day, etc.
 */
export const parseAnyDateTime = (
  dateTimeString: string
): {
  /**
   * Day of the month, 1..31 inclusive.
   */
  readonly day: number | null;

  /**
   * Hour of the day, 0..23 inclusive
   */
  readonly hour: number | null;

  /**
   * Minute of the day, 0..59 inclusive
   */
  readonly minute: number | null;

  /**
   * Month of the year, 1..12 inclusive
   */
  readonly month: number | null;

  /**
   * Second of the minute, 0..59 inclusive
   */
  readonly second: number | null;

  /**
   * Gregorian year e.g., 1960
   */
  readonly year: number;
} | null => {
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
  } else if (parsed.year == null) {
    log.debug("date-time", dateTimeString, "missing year");
    return null;
  }

  let year: number = parsed.year,
    month: number | null = null,
    day: number | null = null,
    hour: number | null = null,
    minute: number | null = null,
    second: number | null = null;

  if (parsed.month != null) {
    month = parsed.month;
    if (parsed.day != null) {
      day = parsed.day;
      if (parsed.hour != null) {
        hour = parsed.hour;
        if (parsed.minute != null) {
          minute = parsed.minute;
          if (parsed.second != null) {
            second = parsed.second;
          }
        }
      }
    }
  }

  return {
    day,
    hour,
    minute,
    month,
    second,
    year,
  };
};
