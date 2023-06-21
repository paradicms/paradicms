import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";

export interface ImagesMixin {
  readonly images: readonly Image[];
  thumbnail(selector: ThumbnailSelector): Image | null;
}
