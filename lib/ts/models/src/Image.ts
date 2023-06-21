import {ImageDimensions} from "./ImageDimensions";
import {NamedModel} from "./NamedModel";
import {RightsMixin} from "./RightsMixin";
import {ThumbnailSelector} from "./ThumbnailSelector";

export interface Image extends NamedModel, RightsMixin {
  readonly exactDimensions: ImageDimensions | null;
  readonly label: string | null;
  readonly maxDimensions: ImageDimensions | null;
  readonly src: string | null;
  thumbnail(selector: ThumbnailSelector): Image | null;
  readonly thumbnails: readonly Image[];
}
