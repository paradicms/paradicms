import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {NamedModelMixin} from "./NamedModelMixin";

export abstract class HasImages extends NamedModelMixin {
  get images(): readonly Image[] {
    return this.modelSet.imagesByDepictsUri(this.uri);
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.isOriginal);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }
}
