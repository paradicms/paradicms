import {parseAnyDateTime} from "@paradicms/utilities";
import {xsd} from "@paradicms/vocabularies";
import {Literal} from "@rdfjs/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {Mixin} from "ts-mixer";
import {PartialDateTimeDescription} from "../PartialDateTimeDescription";
import {PartialDateTimeDescriptionLabelMixin} from "../PartialDateTimeDescriptionLabelMixin";
import {LiteralModel} from "./LiteralModel";
dayjs.extend(utc);

export class LiteralPartialDateTimeDescription
  extends Mixin(LiteralModel, PartialDateTimeDescriptionLabelMixin)
  implements PartialDateTimeDescription {
  readonly day: number | null;
  readonly hour: number | null;
  readonly minute: number | null;
  readonly month: number | null;
  readonly second: number | null;
  readonly year: number | null;

  private constructor(
    kwds: Omit<PartialDateTimeDescription, "label"> & {
      label: string | null;
      literal: Literal;
    }
  ) {
    super(kwds);
    this.day = kwds.day;
    this.hour = kwds.hour;
    this.minute = kwds.minute;
    this.month = kwds.month;
    this.second = kwds.second;
    this.year = kwds.year;
  }

  private static fromArbitraryLiteral(
    literal: Literal
  ): LiteralPartialDateTimeDescription | null {
    const parsed = parseAnyDateTime(literal.value);
    if (parsed == null) {
      return null;
    }
    return new LiteralPartialDateTimeDescription({
      ...parsed,
      label: literal.value,
      literal,
    });
  }

  static fromLiteral(
    literal: Literal
  ): LiteralPartialDateTimeDescription | null {
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
    const parsed = dayjs.utc(literal.value);
    return new LiteralPartialDateTimeDescription({
      day: parsed.date(),
      label: null,
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
    const parsed = dayjs.utc(literal.value);
    return new LiteralPartialDateTimeDescription({
      day: parsed.date(),
      label: null, // Construct with the mixin label
      hour: parsed.hour(),
      literal,
      minute: parsed.minute(),
      month: parsed.month() + 1,
      second: parsed.second(),
      year: parsed.year(),
    });
  }
}
