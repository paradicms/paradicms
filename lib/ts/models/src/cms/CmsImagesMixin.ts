import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
import {ResourceBackedNamedModelMixin} from "../ResourceBackedNamedModelMixin";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {selectThumbnail} from "../selectThumbnail";
import {foaf} from "@paradicms/vocabularies";
import {mapImageObject} from "../mapImageObject";

export abstract class CmsImagesMixin extends ResourceBackedNamedModelMixin
  implements ImagesMixin {
  get images(): readonly Image[] {
    return this.filterAndMapObjects(foaf.depiction, term =>
      mapImageObject(this, term)
    );
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return selectThumbnail(this.images, selector);
  }
}
