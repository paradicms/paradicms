import {Image} from "./Image";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {ResourceBackedNamedModelMixin} from "./ResourceBackedNamedModelMixin";
import {ImagesMixin} from "./ImagesMixin";

export abstract class CmsImagesMixin extends ResourceBackedNamedModelMixin
  implements ImagesMixin {
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
