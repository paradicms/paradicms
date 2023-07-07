import {ImageDimensions} from "./ImageDimensions";
import {NamedModel} from "./NamedModel";
import {RightsMixin} from "./RightsMixin";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Image extends NamedModel, RightsMixin, ThumbnailMixin {
  readonly exactDimensions: ImageDimensions | null;
  readonly label: string | null;
  readonly maxDimensions: ImageDimensions | null;
  readonly src: string | null;
  readonly thumbnails: readonly Image[];
}
