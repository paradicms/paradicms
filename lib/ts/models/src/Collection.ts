import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {Work} from "./Work";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {DescriptionMixin} from "./DescriptionMixin";

export interface Collection
  extends Model,
    DescriptionMixin,
    ImagesMixin,
    ThumbnailMixin {
  readonly label: string;
  readonly works: readonly Work[];
}
