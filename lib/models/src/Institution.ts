import {Rights} from "./Rights";
import {NamedModel} from "./NamedModel";
import {Collection} from "./Collection";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Memoize} from "typescript-memoize";
import {HasImages} from "./mixins/HasImages";
import {Mixin} from "ts-mixer";
import {HasName} from "./mixins/HasName";

export class Institution extends Mixin(NamedModel, HasImages, HasName) {
  get collections(): readonly Collection[] {
    return this.dataset.institutionCollections(this.uri);
  }

  @Memoize()
  get rights(): Rights | null {
    return this._rights;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    const institutionImages: readonly Image[] = this.dataset.imagesByDepictsUri(
      this.uri
    );
    if (institutionImages.length > 0) {
      const thumbnail = selectThumbnail(institutionImages, selector);
      if (thumbnail) {
        return thumbnail;
      }
    }

    for (const collection of this.collections) {
      const thumbnail = collection.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }

    return null;
  }
}
