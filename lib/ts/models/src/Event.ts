import {Agent} from "./Agent";
import {DescriptionMixin} from "./DescriptionMixin";
import {ImagesMixin} from "./ImagesMixin";
import {Location} from "./Location";
import {Model} from "./Model";
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Event
  extends DescriptionMixin,
    ImagesMixin,
    Model,
    ThumbnailMixin {
  readonly agents: readonly Agent[];
  compareByDate(other: Event): number;
  readonly date: PartialDateTimeDescription | null;
  readonly displayDate: string | null;
  readonly label: string;
  readonly endDate: PartialDateTimeDescription | null;
  readonly location: Location | null;
  readonly sortDate: Date | null;
  readonly startDate: PartialDateTimeDescription | null;
}
