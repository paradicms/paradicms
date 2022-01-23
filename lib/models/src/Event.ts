import {NamedModel} from "./NamedModel";
import {DateTimeDescription} from "./DateTimeDescription";
import {DCTERMS, VRA, XSD} from "./vocabularies";
import {NamedNode} from "n3";
import {Location} from "./Location";
import {HasAbstract} from "./mixins";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";

export class Event extends Mixin(NamedModel, HasAbstract) {
  @Memoize()
  get displayDate(): string | null {
    const date = this.date;
    if (date !== null) {
      return date.toString();
    }

    const earliestDate = this.earliestDate;
    const latestDate = this.latestDate;

    if (earliestDate === null && latestDate === null) {
      return null;
    }

    const result: string[] = [];
    if (earliestDate !== null) {
      result.push(earliestDate.toString() + " (earliest)");
    }
    if (latestDate !== null) {
      result.push(latestDate.toString() + " (latest)");
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
  get date(): DateTimeDescription | number | string | null {
    return this.datePropertyValue(DCTERMS.date);
  }

  private datePropertyValue(
    property: NamedNode
  ): DateTimeDescription | number | string | null {
    for (const term of this.propertyObjects(property)) {
      switch (term.termType) {
        case "BlankNode":
          return new DateTimeDescription({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          if (term.datatype.value === XSD.integer.value) {
            return parseInt(term.value);
          } else {
            return term.value;
          }
      }
    }
    return null;
  }

  @Memoize()
  get earliestDate(): DateTimeDescription | number | string | null {
    return this.datePropertyValue(VRA.earliestDate);
  }

  @Memoize()
  get latestDate(): DateTimeDescription | number | string | null {
    return this.datePropertyValue(VRA.latestDate);
  }

  @Memoize()
  get location(): Location | string | null {
    for (const term of this.propertyObjects(DCTERMS.spatial)) {
      switch (term.termType) {
        case "BlankNode":
          return new Location({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          return term.value;
      }
    }
    return null;
  }

  /**
   * Synthesize a date that can be used for sorting this event.
   */
  @Memoize()
  get sortDate(): {
    day: number | null;
    month: number | null;
    year: number;
  } | null {
    for (const dateTimeDescription of [
      this.date,
      this.earliestDate,
      this.latestDate,
    ]) {
      if (!(dateTimeDescription instanceof DateTimeDescription)) {
        continue;
      }
      if (dateTimeDescription.year === null) {
        return null;
      }
      return {
        day: dateTimeDescription.day,
        month: dateTimeDescription.month,
        year: dateTimeDescription.year!,
      };
    }
    return null;
  }

  get title(): string | null {
    return (
      this.propertyObjects(DCTERMS.title).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }
}
