import {NamedModel} from "./NamedModel";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Work} from "./Work";
import {Mixin} from "ts-mixer";
import {HasAbstract, HasImages, HasTitle} from "./mixins";
import {Institution} from "./Institution";
import {requireNonNull} from "@paradicms/utilities";
import {cms} from "@paradicms/vocabularies";

export class Collection extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasTitle
) {
  get institution(): Institution {
    return this.modelSet.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return requireNonNull(
        this.findAndMapObject(cms.institution, term =>
            term.termType === "NamedNode" ? term.value : null
        )
    );
  }

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
