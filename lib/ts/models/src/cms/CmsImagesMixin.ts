import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
import {ResourceBackedNamedModelMixin} from "../ResourceBackedNamedModelMixin";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";

export abstract class CmsImagesMixin extends ResourceBackedNamedModelMixin
  implements ImagesMixin {
  get images(): readonly Image[] {
    return this.modelSet.imagesByDepictsIri(this.iri);
  }

  get originalImages(): readonly Image[] {
    return this.images.filter(image => image.isOriginal);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }
}
