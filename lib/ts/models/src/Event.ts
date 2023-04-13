import {NamedModel} from "./NamedModel";
import {Location} from "./Location";
import {DateTimeDescription} from "./DateTimeDescription";
import {Text} from "./Text";

export interface Event extends NamedModel {
  compareByDate(other: Event): number;
  readonly date: DateTimeDescription | null;
  readonly description: string | Text | null;
  readonly displayDate: string | null;
  readonly endDate: DateTimeDescription | null;
  readonly location: Location | string | null;

  /**
   * Synthesize a date that can be used for sorting this event.
   *
   * The returned properties have the same semantics as PartialDateTime.
   */
  readonly sortDate: {
    day: number | null;
    month: number | null;
    year: number;
  } | null;

  readonly startDate: DateTimeDescription | null;
  readonly title: string | null;
}
