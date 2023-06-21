import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {Work} from "../Work";
import {selectThumbnail} from "../selectThumbnail";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";
import {CmsNamedModel} from "./CmsNamedModel";
import {dcterms} from "@paradicms/vocabularies";

export class CmsCollection extends Mixin(
  CmsNamedModel,
  CmsDescriptionMixin,
  CmsImagesMixin,
  CmsTitleMixin
) implements Collection {
  get label(): string {
    return this.title;
  }

  override thumbnail(selector: ThumbnailSelector): Image | null {
    const collectionImages: readonly Image[] = this.images;
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
    return this.filterAndMapObjects(dcterms.hasPart, term => term.termType === "NamedNode" ? this.modelSet.workByIri(term.value) : null);
  }
}
