import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {Work} from "../Work";
import {selectThumbnail} from "../selectThumbnail";
import {SchemaNamedModel} from "./SchemaNamedModel";
import {requireNonNull} from "@paradicms/utilities";
import {SchemaCreativeWorkMixin} from "./SchemaCreativeWorkMixin";

export class SchemaCollection extends Mixin(
  SchemaNamedModel,
    SchemaCreativeWorkMixin
) implements Collection {
  get label(): string {
    return this.name;
  }

  override get name(): string {
    return requireNonNull(super.name);
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
