import {DateTimeDescription} from "./DateTimeDescription";
import {Location} from "./Location";
import {Text} from "./Text";
import {Model} from "./Model";
import {ImagesMixin} from "./ImagesMixin";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {AgentUnion} from "./AgentUnion";

export interface Event extends ImagesMixin, Model, ThumbnailMixin {
  readonly agents: readonly AgentUnion[];
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
