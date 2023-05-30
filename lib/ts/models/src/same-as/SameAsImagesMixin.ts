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

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.originalImageUri === null);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }
}
