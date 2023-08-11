import {DateTimeDescription} from "./DateTimeDescription";
import {Location} from "./Location";
import {Model} from "./Model";
import {ImagesMixin} from "./ImagesMixin";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {AgentUnion} from "./AgentUnion";
import {DescriptionMixin} from "./DescriptionMixin";
import {EventSortDate} from "./EventSortDate";

export interface Event
  extends DescriptionMixin,
    ImagesMixin,
    Model,
    ThumbnailMixin {
  readonly agents: readonly AgentUnion[];
  compareByDate(other: Event): number;
  readonly date: DateTimeDescription | null;
  readonly displayDate: string | null;
  readonly label: string;
  readonly endDate: DateTimeDescription | null;
  readonly location: Location | null;
  readonly sortDate: EventSortDate | null;
  readonly startDate: DateTimeDescription | null;
}
