import {Agent} from "./Agent";
import {DateTimeDescription} from "./DateTimeDescription";
import {DescriptionMixin} from "./DescriptionMixin";
import {ImagesMixin} from "./ImagesMixin";
import {Location} from "./Location";
import {Model} from "./Model";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Event
  extends DescriptionMixin,
    ImagesMixin,
    Model,
    ThumbnailMixin {
  readonly agents: readonly Agent[];
  compareByDate(other: Event): number;
  readonly date: DateTimeDescription | null;
  readonly displayDate: string | null;
  readonly label: string;
  readonly endDate: DateTimeDescription | null;
  readonly location: Location | null;
  readonly sortDate: DateTimeDescription | null;
  readonly startDate: DateTimeDescription | null;
}
