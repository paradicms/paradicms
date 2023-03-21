import {NamedModel} from "./NamedModel";
import {DateTimeDescription} from "./DateTimeDescription";
import {Location} from "./Location";
import {HasDescription} from "./mixins";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {dcterms, vra} from "@paradicms/vocabularies";
import {PartialDateTime} from "./PartialDateTime";
import {mapPartialDateTimeObject} from "./mapPartialDateTimeObject";
import {mapLocationObject} from "./mapLocationObject";
import {partialDateTimeToString} from "./partialDateTimeToString";

export class Event extends Mixin(NamedModel, HasDescription) {
  @Memoize()
  get displayDate(): string | null {
    const date = this.date;
    if (date !== null) {
      return partialDateTimeToString(date);
    }

    const startDate = this.startDate;
    const endDate = this.endDate;

    if (startDate === null && endDate === null) {
      return null;
    }

    const result: string[] = [];
    if (startDate !== null) {
      result.push(partialDateTimeToString(startDate) + " (start)");
    }
    if (endDate !== null) {
      result.push(partialDateTimeToString(endDate) + " (end)");
    }

    return result.join(" - ");
  }

  compareByDate(other: Event): number {
    const thisSortDate = this.sortDate;
    const otherSortDate = other.sortDate;

    if (thisSortDate === null) {
      if (otherSortDate === null) {
        return this.uri.localeCompare(other.uri);
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
  get date(): PartialDateTime | null {
    return this.findAndMapObject(dcterms.date, term =>
      mapPartialDateTimeObject(this, term)
    );
  }

  @Memoize()
  get endDate(): PartialDateTime | null {
    return this.findAndMapObject(vra.endDate, term =>
      mapPartialDateTimeObject(this, term)
    );
  }

  @Memoize()
  get location(): Location | string | null {
    return this.findAndMapObject(dcterms.spatial, term =>
      mapLocationObject(this, term)
    );
  }

  /**
   * Synthesize a date that can be used for sorting this event.
   *
   * The returned properties have the same semantics as DateTimeDescription.
   */
  @Memoize()
  get sortDate(): {
    day: number | null;
    month: number | null;
    year: number;
  } | null {
    for (const date of [this.date, this.startDate, this.endDate]) {
      if (date === null) {
        continue;
      } else if (date instanceof Date) {
        return {
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
        };
      } else if (date instanceof DateTimeDescription) {
        if (date.year === null) {
          return null;
        }
        return {
          day: date.day,
          month: date.month,
          year: date.year!,
        };
      } else {
        console.debug(
          `event ${
            this.uri
          }: has a non-null date (${date}) of type (${typeof date}) that isn't handled in sortDate`
        );
      }
    }
    console.debug("event", this.uri, "has no sort date");
    return null;
  }

  @Memoize()
  get startDate(): PartialDateTime | null {
    return this.findAndMapObject(vra.startDate, term =>
      mapPartialDateTimeObject(this, term)
    );
  }

  get title(): string | null {
    return this.findAndMapObject(dcterms.title, this.mapStringObject);
  }
}
