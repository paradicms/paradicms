import {Memoize} from "typescript-memoize";
import {dateTimeDescriptionToString} from "./dateTimeDescriptionToString";
import {DateTimeDescription} from "./DateTimeDescription";
import {Event} from "./Event";
import log from "loglevel";

export abstract class EventMixin {
  abstract readonly date: DateTimeDescription | null;
  abstract readonly key: string;
  abstract readonly endDate: DateTimeDescription | null;
  abstract readonly startDate: DateTimeDescription | null;

  compareByDate(other: Event): number {
    const thisSortDate = this.sortDate;
    const otherSortDate = other.sortDate;

    if (thisSortDate === null) {
      if (otherSortDate === null) {
        return this.key.localeCompare(other.key);
      } else {
        return -1; // Events without dates are < events with dates.
      }
    } else if (otherSortDate == null) {
      return 1; // Events with dates are > events without dates;
    }

    const yearDiff = thisSortDate.year - otherSortDate.year;
    if (yearDiff !== 0) {
      return yearDiff;
    }

    // Years are the same.
    // Fill in the month and/or day with 1 for the purposes of comparison.

    const monthDiff =
      (thisSortDate.month !== null ? thisSortDate.month : 1) -
      (otherSortDate.month !== null ? otherSortDate.month : 1);
    if (monthDiff !== 0) {
      return monthDiff;
    }
    return (
      (thisSortDate.day !== null ? thisSortDate.day : 1) -
      (otherSortDate.day !== null ? otherSortDate.day : 1)
    );
  }

  @Memoize()
  get displayDate(): string | null {
    const date = this.date;
    if (date !== null) {
      return dateTimeDescriptionToString(date);
    }

    const startDate = this.startDate;
    const endDate = this.endDate;

    if (startDate === null && endDate === null) {
      return null;
    }

    const result: string[] = [];
    if (startDate !== null) {
      result.push(dateTimeDescriptionToString(startDate) + " (start)");
    }
    if (endDate !== null) {
      result.push(dateTimeDescriptionToString(endDate) + " (end)");
    }

    return result.join(" - ");
  }

  /**
   * Synthesize a date that can be used for sorting this event.
   *
   * The returned properties have the same semantics as PartialDateTime.
   */
  @Memoize()
  get sortDate(): {
    day: number | null;
    month: number | null;
    year: number;
  } | null {
    for (const date of [this.date, this.startDate, this.endDate]) {
      if (date !== null && date.year !== null) {
        return {
          day: date.day,
          month: date.month,
          year: date.year!,
        };
      }
    }
    log.debug("event has no sort date");
    return null;
  }
}
