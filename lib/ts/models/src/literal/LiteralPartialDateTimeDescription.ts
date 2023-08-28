import { xsd } from "@paradicms/vocabularies";
import { Literal } from "@rdfjs/types";
import anyDateParser from "any-date-parser";
import dayjs from "dayjs";
import log from "loglevel";
import { Mixin } from "ts-mixer";
import { PartialDateTimeDescription } from "../PartialDateTimeDescription";
import { PartialDateTimeDescriptionDisplayStringMixin } from "../PartialDateTimeDescriptionDisplayStringMixin";
import { LiteralModel } from "./LiteralModel";

const yearMonthDayFormat = require("any-date-parser/src/formats/yearMonthDay/yearMonthDay");
anyDateParser.removeFormat(yearMonthDayFormat);

export class LiteralPartialDateTimeDescription
  extends Mixin(LiteralModel, PartialDateTimeDescriptionDisplayStringMixin)
  implements PartialDateTimeDescription {
  readonly day: number | null;
  readonly _displayString: string | null;
  readonly hour: number | null;
  readonly minute: number | null;
  readonly month: number | null;
  readonly second: number | null;
  readonly year: number | null;

  private constructor(
    kwds: Omit<PartialDateTimeDescription, "displayString"> & {
      displayString: string | null;
      literal: Literal;
    }
  ) {
    super(kwds.literal);
    this.day = kwds.day;
    this._displayString = kwds.displayString;
    this.hour = kwds.hour;
    this.minute = kwds.minute;
    this.month = kwds.month;
    this.second = kwds.second;
    this.year = kwds.year;
  }

  override get displayString(): string {
      if (this._displayString) {
          return this._displayString;
      } else {
          return super.displayString;
      }
  }

  private static fromArbitraryLiteral(
    literal: Literal
  ): LiteralPartialDateTimeDescription | null {
    const parsed = anyDateParser.attempt(literal.value);
    log.debug("parsed", JSON.stringify(parsed), "from", "term.value");
    anyDateParser.removeFormat(yearMonthDayFormat); // Parses "1925" as "2019-2-5";
    if (!parsed.invalid) {
      const partialDateTime = {
        day: parsed.day ?? null,
        hour: parsed.hour ?? null,
        minute: parsed.minute ?? null,
        month: parsed.month ?? null,
        second: parsed.second ?? null,
        year: parsed.year ?? null,
      };
      if (
        (partialDateTime.day !== null ||
          partialDateTime.hour !== null ||
          partialDateTime.minute !== null ||
          partialDateTime.month !== null,
        partialDateTime.second !== null || partialDateTime.year !== null)
      ) {
        return new LiteralPartialDateTimeDescription({
          displayString: literal.value,
          literal,
          ...partialDateTime,
        });
      } else {
        log.debug(
          "literal date-time",
          literal.value,
          "missing one or more required components"
        );
      }
    } else {
      log.debug(
        "unable to parse literal date-time",
        literal.value,
        ":",
        parsed.invalid
      );
    }

    return new LiteralPartialDateTimeDescription({
      day: null,
      displayString: literal.value,
      hour: null,
      literal,
      minute: null,
      month: null,
      second: null,
      year: null,
    });
  }

  static fromLiteral(literal: Literal): LiteralPartialDateTimeDescription | null {
    if (literal.datatype.equals(xsd.date)) {
      return LiteralPartialDateTimeDescription.fromXsdDateLiteral(literal);
    } else if (literal.datatype.equals(xsd.dateTime)) {
      return LiteralPartialDateTimeDescription.fromXsdDateTimeLiteral(literal);
    } else {
      return LiteralPartialDateTimeDescription.fromArbitraryLiteral(literal);
    }
  }

  private static fromXsdDateLiteral(
    literal: Literal
  ): LiteralPartialDateTimeDescription | null {
    const parsed = dayjs(literal.value);
    return new LiteralPartialDateTimeDescription({
      day: parsed.day(),
      displayString: null,
      hour: null,
      literal,
      minute: null,
      month: parsed.month() + 1,
      second: null,
      year: parsed.year(),
    });
  }

  private static fromXsdDateTimeLiteral(
    literal: Literal
  ): LiteralPartialDateTimeDescription | null {
    const parsed = dayjs(literal.value);
    return new LiteralPartialDateTimeDescription({
      day: parsed.day(),
      displayString: null, // Construct with the mixin displayString
      hour: parsed.hour(),
      literal,
      minute: parsed.minute(),
      month: parsed.month() + 1,
      second: parsed.second(),
      year: parsed.year(),
    });
  }
}
