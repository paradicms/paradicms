const {Parser} = require("any-date-parser");
import log from "loglevel";

const yearMonthDayFormat = require("any-date-parser/src/formats/yearMonthDay/yearMonthDay");
const time12HoursFormat = require("any-date-parser/src/formats/time12Hours/time12Hours");
const time24HoursFormat = require("any-date-parser/src/formats/time24Hours/time24Hours");

const parser = new Parser();
parser.removeFormat(time12HoursFormat);
parser.removeFormat(time24HoursFormat);
parser.removeFormat(yearMonthDayFormat);

/**
 * Parse any date string into a partial date.
 *
 * The parsing is progressive: a year is required to return a month, a month is required to return a day, etc.
 */
export const parseAnyDate = (
  dateString: string
): {
  /**
   * Day of the month, 1..31 inclusive.
   */
  readonly day: number | null;

  /**
   * Month of the year, 1..12 inclusive
   */
  readonly month: number | null;

  /**
   * Gregorian year e.g., 1960
   */
  readonly year: number | null;
} | null => {
  const parsed = parser.attempt(dateString);
  log.debug("parsed", JSON.stringify(parsed), "from", dateString);
  if (parsed.invalid) {
    log.debug("unable to parse literal date", dateString, ":", parsed.invalid);
    return null;
  } else if (parsed.year === null) {
    log.debug("date-time", dateString, "missing year");
    return null;
  }

  let year: number = parsed.year,
    month: number | null = null,
    day: number | null = null;

  if (parsed.month !== null) {
    month = parsed.month;
    if (parsed.day !== null) {
      day = parsed.day;
    }
  }

  return {
    day,
    month,
    year,
  };
};
