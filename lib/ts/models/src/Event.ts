import {DateTimeDescription} from "./DateTimeDescription";
import {Location} from "./Location";
import {NamedModel} from "./NamedModel";
import {Text} from "./Text";

export interface Event extends NamedModel {
  compareByDate(other: Event): number;
  readonly date: DateTimeDescription | null;
  readonly description: Text | null;
  readonly displayDate: string | null;
  readonly label: string;
  readonly endDate: DateTimeDescription | null;
  readonly location: Location | null;

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
}
