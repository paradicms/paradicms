import {Model} from "./Model";
import {TIME} from "./vocabularies/TIME";
import {XSD} from "./vocabularies";
import {Literal, NamedNode} from "n3";

export class DateTimeDescription extends Model {
  get day(): number | null {
    const literal = this.propertyObjects(TIME.day).find(
      term =>
        term.termType === "Literal" && term.datatype.value === XSD.gDay.value
    ) as Literal | undefined;
    if (!literal) {
      return null;
    }
    // https://www.w3.org/TR/xmlschema11-2/#gDay
    const match = literal.value.match(
      /---(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
    );
    if (!match) {
      throw new RangeError("expected time:day to match xsd:gDay regex");
    }
    // "---09" -> ["---09", "09", undefined, undefined, undefined, undefined, 0, "---09", undefined]
    return parseInt(match[1]);
  }

  get hour(): number | null {
    return this.optionalInt(TIME.hour);
  }

  get minute(): number | null {
    return this.optionalInt(TIME.minute);
  }

  get month(): number | null {
    const literal = this.propertyObjects(TIME.month).find(
      term =>
        term.termType === "Literal" && term.datatype.value === XSD.gMonth.value
    ) as Literal | undefined;
    if (!literal) {
      return null;
    }
    // https://www.w3.org/TR/xmlschema11-2/#gMonth
    const match = literal.value.match(
      /--(0[1-9]|1[0-2])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
    );
    if (!match) {
      throw new RangeError("expected time:month to match xsd:gMonth regex");
    }
    // "--01" -> ["--01", "01", undefined, undefined, undefined, undefined, 0, "--01", undefined]
    return parseInt(match[1]);
  }

  private optionalInt(property: NamedNode): number | null {
    const literal = this.propertyObjects(property).find(
      term =>
        term.termType === "Literal" && term.datatype.value === XSD.integer.value
    ) as Literal | undefined;
    if (!literal) {
      return null;
    }
    return parseInt(literal.value);
  }

  get second(): number | null {
    const literal = this.propertyObjects(TIME.second).find(
      term =>
        term.termType === "Literal" &&
        (term.datatype.value === XSD.decimal.value ||
          term.datatype.value === XSD.integer.value)
    ) as Literal | undefined;
    if (!literal) {
      return null;
    }
    if (literal.datatype.value === XSD.decimal.value) {
      return parseFloat(literal.value);
    } else if (literal.datatype.value === XSD.integer.value) {
      return parseInt(literal.value);
    } else {
      throw new EvalError();
    }
  }

  get year(): number | null {
    const literal = this.propertyObjects(TIME.year).find(
      term =>
        term.termType === "Literal" && term.datatype.value === XSD.gYear.value
    ) as Literal | undefined;
    if (!literal) {
      return null;
    }
    // https://www.w3.org/TR/xmlschema11-2/#gYear
    const match = literal.value.match(
      /-?([1-9][0-9]{3,}|0[0-9]{3})(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?/
    );
    if (!match) {
      throw new RangeError("expected time:year to match xsd:gYear regex");
    }
    // "2022" -> ["2022", "2022", undefined, undefined, undefined, undefined, 0, "2022", undefined]
    return parseInt(match[1]);
  }
}
