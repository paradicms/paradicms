import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";

export interface ThumbnailMixin {
  thumbnail(selector: ThumbnailSelector): Image | null;
}
