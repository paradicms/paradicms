import {Model} from "../Model";
import {SameAsModelMixin} from "./SameAsModelMixin";
import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";

export abstract class SameAsImagesMixin<ModelT extends Model & ImagesMixin>
  extends SameAsModelMixin<ModelT>
  implements ImagesMixin {
  get images(): readonly Image[] {
    return this.getUniqueLinkedModels(model => model.images);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    for (const image of this.images) {
      const thumbnail = selectThumbnail(image.thumbnails, selector);
      if (thumbnail !== null) {
        return thumbnail;
      }
    }
    return null;
  }
}
