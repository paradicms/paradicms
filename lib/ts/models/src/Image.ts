import {ImageDimensions} from "./ImageDimensions";
import {Model} from "./Model";
import {RightsMixin} from "./RightsMixin";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Image extends Model, RightsMixin, ThumbnailMixin {
  readonly exactDimensions: ImageDimensions | null;
  readonly label: string | null;
  readonly maxDimensions: ImageDimensions | null;
  readonly src: string | null;
  readonly thumbnails: readonly Image[];
}
