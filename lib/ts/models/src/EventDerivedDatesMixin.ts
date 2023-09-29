import log from "loglevel";
import {Memoize} from "typescript-memoize";
import {Event} from "./Event";
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";
import {imputePartialDateTime} from "./imputePartialDateTime";

export abstract class EventDerivedDatesMixin {
  abstract readonly date: PartialDateTimeDescription | null;
  abstract readonly key: string;
  abstract readonly endDate: PartialDateTimeDescription | null;
  abstract readonly startDate: PartialDateTimeDescription | null;

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

    return thisSortDate.getTime() - otherSortDate.getTime();
  }

  @Memoize()
  get displayDate(): string | null {
    const date = this.date;
    if (date !== null) {
      return date.label;
    }

    const startDate = this.startDate;
    const endDate = this.endDate;

    if (startDate === null && endDate === null) {
      return null;
    }

    const result: string[] = [];
    if (startDate !== null) {
      result.push(startDate.label + " (start)");
    }
    if (endDate !== null) {
      result.push(endDate.label + " (end)");
    }

    return result.join(" - ");
  }

  protected preMemoizeEventDerivedDates() {
    this.displayDate;
    this.sortDate;
  }

  /**
   * Synthesize a date that can be used for sorting this event.
   *
   * The returned properties have the same semantics as PartialDateTime.
   */
  @Memoize()
  get sortDate(): Date | null {
    for (const {partialDateTimeDescription, ceil} of [
      {partialDateTimeDescription: this.date},
      {partialDateTimeDescription: this.startDate},
      {partialDateTimeDescription: this.endDate, ceil: true},
    ]) {
      if (!partialDateTimeDescription) {
        continue;
      }
      const date = imputePartialDateTime(partialDateTimeDescription, {
        ceil,
      });
      if (date !== null) {
        return date;
      }
    }
    log.debug("event has no sort date");
    return null;
  }
}
