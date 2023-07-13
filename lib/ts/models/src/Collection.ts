import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {Text} from "./Text";
import {Work} from "./Work";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Collection extends Model, ImagesMixin, ThumbnailMixin {
  readonly description: Text | null;
  readonly label: string;
  readonly works: readonly Work[];
}
