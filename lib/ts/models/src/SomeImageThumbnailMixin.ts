import {ImagesMixin} from "./ImagesMixin";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";

export abstract class SomeImageThumbnailMixin
  implements ImagesMixin, ThumbnailMixin {
  abstract readonly images: readonly Image[];

  thumbnail(selector: ThumbnailSelector): Image | null {
    for (const image of this.images) {
      const thumbnail = image.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    return null;
  }
}
