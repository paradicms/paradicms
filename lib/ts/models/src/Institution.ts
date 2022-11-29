import {NamedModel} from "./NamedModel";
import {Collection} from "./Collection";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {HasImages} from "./mixins/HasImages";
import {Mixin} from "ts-mixer";
import {HasName} from "./mixins/HasName";
import {HasRights} from "./mixins";

export class Institution extends Mixin(
  NamedModel,
  HasImages,
  HasName,
  HasRights
) {
  get collections(): readonly Collection[] {
    return this.modelSet.institutionCollections(this.uri);
  }

  override thumbnail(selector: ThumbnailSelector): Image | null {
    const institutionImages: readonly Image[] = this.modelSet.imagesByDepictsUri(
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
