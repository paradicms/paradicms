import {NamedModel} from "./NamedModel";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Work} from "./Work";
import {HasAbstract} from "./mixins/HasAbstract";
import {Mixin} from "ts-mixer";
import {HasImages} from "./mixins/HasImages";
import {HasInstitution} from "./mixins/HasInstitution";
import {HasTitle} from "./mixins/HasTitle";

export class Collection extends Mixin(
  NamedModel,
  HasAbstract,
  HasInstitution,
  HasImages,
  HasTitle
) {
  get works(): readonly Work[] {
    return this.dataset.collectionWorks(this.uri);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    const collectionImages: readonly Image[] = this.dataset.imagesByDepictsUri(
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
}
