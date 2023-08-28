import {mapTermToNumber} from "@paradicms/rdf";
import {time, xsd} from "@paradicms/vocabularies";
import {Literal} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {PartialDateTimeDescriptionLabelMixin} from "../PartialDateTimeDescriptionLabelMixin";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class OwlTimePartialDateTimeDescription
  extends Mixin(ResourceBackedModel, PartialDateTimeDescriptionLabelMixin)
  implements PartialDateTimeDescription {
  /**
   * Day of the month, 1..31 inclusive.
   */
  get day(): number | null {
    return this.findAndMapObject(time.day, term => {
      if (term.termType !== "Literal") {
        return null;
      }
      const literal: Literal = term;
      if (literal.datatype.value === xsd.gDay.value) {
        // https://www.w3.org/TR/xmlschema11-2/#gDay
        const match = literal.value.match(
          /---(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
        );
        if (!match) {
          throw new RangeError("expected time:day to match xsd:gDay regex");
        }
        // "---09" -> ["---09", "09", undefined, undefined, undefined, undefined, 0, "---09", undefined]
        return parseInt(match[1]);
      } else if (literal.datatype.value === xsd.integer.value) {
        return parseInt(literal.value);
      } else {
        return null;
      }
    });
  }

  /**
   * Hour of the day, 0..23 inclusive
   */
  get hour(): number | null {
    return this.findAndMapObject(time.hour, mapTermToNumber);
  }

  /**
   * Minute of the day, 0..59 inclusive
   */
  get minute(): number | null {
    return this.findAndMapObject(time.minute, mapTermToNumber);
  }

  /**
   * Month of the year, 1..12 inclusive
   */
  get month(): number | null {
    return this.findAndMapObject(time.month, term => {
      if (term.termType !== "Literal") {
        return null;
      }
      const literal: Literal = term;
      if (literal.datatype.value === xsd.gMonth.value) {
        // https://www.w3.org/TR/xmlschema11-2/#gMonth
        const match = literal.value.match(
          /--(0[1-9]|1[0-2])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
        );
        if (!match) {
          throw new RangeError("expected time:month to match xsd:gMonth regex");
        }
        // "--01" -> ["--01", "01", undefined, undefined, undefined, undefined, 0, "--01", undefined]
        return parseInt(match[1]);
      } else if (literal.datatype.value === xsd.integer.value) {
        return parseInt(literal.value);
      } else {
        return null;
      }
    });
  }

  /**
   * Second of the minute, 0..59 inclusive
   */
  get second(): number | null {
    return this.findAndMapObject(time.second, term => {
      if (term.termType !== "Literal") {
        return null;
      }
      const literal: Literal = term;
      if (literal.datatype.value === xsd.decimal.value) {
        return parseFloat(literal.value);
      } else if (literal.datatype.value === xsd.integer.value) {
        return parseInt(literal.value);
      } else {
        return null;
      }
    });
  }

  /**
   * Gregorian year e.g., 1960
   */
  get year(): number | null {
    return this.findAndMapObject(time.year, term => {
      if (term.termType !== "Literal") {
        return null;
      }
      const literal: Literal = term;
      if (literal.datatype.value === xsd.gYear.value) {
        // https://www.w3.org/TR/xmlschema11-2/#gYear
        const match = literal.value.match(
          /-?([1-9][0-9]{3,}|0[0-9]{3})(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
        );
        if (!match) {
          throw new RangeError("expected time:year to match xsd:gYear regex");
        }
        // "2022" -> ["2022", "2022", undefined, undefined, undefined, undefined, 0, "2022", undefined]
        return parseInt(match[1]);
      } else if (literal.datatype.value === xsd.integer.value) {
        return parseInt(literal.value);
      } else {
        return null;
      }
    });
  }
}
