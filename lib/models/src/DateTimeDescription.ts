import {Model} from "./Model";
import {Literal, NamedNode} from "n3";
import * as dayjs from "dayjs";
import {TIME, XSD} from "@paradicms/vocabularies";

export class DateTimeDescription extends Model {
  get day(): number | null {
    for (const term of this.propertyObjects(TIME.day)) {
      if (term.termType !== "Literal") {
        continue;
      }
      const literal: Literal = term;
      if (literal.datatype.value === XSD.gDay.value) {
        // https://www.w3.org/TR/xmlschema11-2/#gDay
        const match = literal.value.match(
          /---(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
        );
        if (!match) {
          throw new RangeError("expected time:day to match xsd:gDay regex");
        }
        // "---09" -> ["---09", "09", undefined, undefined, undefined, undefined, 0, "---09", undefined]
        return parseInt(match[1]);
      } else if (literal.datatype.value === XSD.integer.value) {
        return parseInt(literal.value);
      }
    }
    return null;
  }

  get hour(): number | null {
    return this.optionalInt(TIME.hour);
  }

  get minute(): number | null {
    return this.optionalInt(TIME.minute);
  }

  get month(): number | null {
    for (const term of this.propertyObjects(TIME.month)) {
      if (term.termType !== "Literal") {
        continue;
      }
      const literal: Literal = term;
      if (literal.datatype.value === XSD.gMonth.value) {
        // https://www.w3.org/TR/xmlschema11-2/#gMonth
        const match = literal.value.match(
          /--(0[1-9]|1[0-2])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
        );
        if (!match) {
          throw new RangeError("expected time:month to match xsd:gMonth regex");
        }
        // "--01" -> ["--01", "01", undefined, undefined, undefined, undefined, 0, "--01", undefined]
        return parseInt(match[1]);
      } else if (literal.datatype.value === XSD.integer.value) {
        return parseInt(literal.value);
      }
    }
    return null;
  }

  private optionalInt(property: NamedNode): number | null {
    for (const term of this.propertyObjects(property)) {
      if (term.termType !== "Literal") {
        continue;
      }
      const literal: Literal = term;
      if (literal.datatype.value === XSD.integer.value) {
        return parseInt(literal.value);
      }
    }
    return null;
  }

  get second(): number | null {
    for (const term of this.propertyObjects(TIME.second)) {
      if (term.termType !== "Literal") {
        continue;
      }
      const literal: Literal = term;
      if (literal.datatype.value === XSD.decimal.value) {
        return parseFloat(literal.value);
      } else if (literal.datatype.value === XSD.integer.value) {
        return parseInt(literal.value);
      }
    }
    return null;
  }

  toString() {
    const year = this.year;

    if (year === null) {
      return "(unknown)";
    }

    let dayjs_ = dayjs();

    // https://day.js.org/docs/en/display/format
    let dateFormat = "";
    const month = this.month;
    if (month !== null) {
      dateFormat += "MMM";
      dayjs_ = dayjs_.month(month - 1);

      const day = this.day;
      if (day !== null) {
        dateFormat += " D";
        dayjs_ = dayjs_.date(day);
      }
    }
    dateFormat += " YYYY";
    dayjs_ = dayjs_.year(year);

    let timeFormat: string = "";
    const hour = this.hour;
    if (hour !== null) {
      dayjs_ = dayjs_.hour(hour);
      timeFormat += "h";

      const minute = this.minute;
      if (minute !== null) {
        dayjs_ = dayjs_.minute(minute);
        timeFormat += ":m";

        const second = this.second;
        if (second !== null) {
          dayjs_ = dayjs_.second(second);
          timeFormat += ":s";
        }

        timeFormat += " A";
      }
    }

    return dayjs_.format(
      timeFormat.length > 0 ? timeFormat + " " + dateFormat : dateFormat
    );
  }

  get year(): number | null {
    for (const term of this.propertyObjects(TIME.year)) {
      if (term.termType !== "Literal") {
        continue;
      }
      const literal: Literal = term;
      if (literal.datatype.value === XSD.gYear.value) {
        // https://www.w3.org/TR/xmlschema11-2/#gYear
        const match = literal.value.match(
          /-?([1-9][0-9]{3,}|0[0-9]{3})(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
        );
        if (!match) {
          throw new RangeError("expected time:year to match xsd:gYear regex");
        }
        // "2022" -> ["2022", "2022", undefined, undefined, undefined, undefined, 0, "2022", undefined]
        return parseInt(match[1]);
      } else if (literal.datatype.value === XSD.integer.value) {
        return parseInt(literal.value);
      }
    }
    return null;
  }
}
