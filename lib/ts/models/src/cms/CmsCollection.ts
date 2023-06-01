import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Image} from "../Image";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {Work} from "../Work";
import {selectThumbnail} from "../selectThumbnail";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";

export class CmsCollection extends Mixin(
  ResourceBackedNamedModel,
  CmsDescriptionMixin,
  CmsImagesMixin,
  CmsTitleMixin
) implements Collection {
  get label(): string {
    return this.title;
  }

  override thumbnail(selector: ThumbnailSelector): Image | null {
    const collectionImages: readonly Image[] = this.modelSet.imagesByDepictsIri(
      this.iri
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
    return this.modelSet.worksByCollectionKey(this.key);
  }
}
