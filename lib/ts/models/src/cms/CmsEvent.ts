import {dcterms, vra} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {DateTimeDescription} from "../DateTimeDescription";
import {Event} from "../Event";
import {Location} from "../Location";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {dateTimeDescriptionToString} from "../dateTimeDescriptionToString";
import {mapDateTimeDescriptionObject} from "../mapDateTimeDescriptionObject";
import {mapLocationObject} from "../mapLocationObject";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";

export class CmsEvent
  extends Mixin(ResourceBackedNamedModel, CmsDescriptionMixin)
  implements Event {
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
  get date(): DateTimeDescription | null {
    return this.findAndMapObject(dcterms.date, term =>
      mapDateTimeDescriptionObject(this, term)
    );
  }

  @Memoize()
  get endDate(): DateTimeDescription | null {
    return this.findAndMapObject(vra.endDate, term =>
      mapDateTimeDescriptionObject(this, term)
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
    console.debug("event", this.uri, "has no sort date");
    return null;
  }

  @Memoize()
  get startDate(): DateTimeDescription | null {
    return this.findAndMapObject(vra.startDate, term =>
      mapDateTimeDescriptionObject(this, term)
    );
  }

  get title(): string | null {
    return this.findAndMapObject(dcterms.title, this.mapStringObject);
  }
}
