import {NamedModel} from "./NamedModel";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Work} from "./Work";
import {Mixin} from "ts-mixer";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";

export class Collection extends Mixin(
  NamedModel,
  CmsDescriptionMixin,
  CmsImagesMixin,
  CmsTitleMixin
) {
  override thumbnail(selector: ThumbnailSelector): Image | null {
    const collectionImages: readonly Image[] = this.modelSet.imagesByDepictsUri(
      this.uri
    );
    if (collectionImages.length > 0) {
      const thumbnail = selectThumbnail(collectionImages, selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    for (const work of this.works) {
      const thumbnail = work.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }

    return null;
  }

  get works(): readonly Work[] {
    return this.modelSet.collectionWorks(this.uri);
  }
}
