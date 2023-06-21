import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {Work} from "../Work";
import {selectThumbnail} from "../selectThumbnail";
import {SchemaNamedModel} from "./SchemaNamedModel";
import {requireNonNull} from "@paradicms/utilities";
import {SchemaCreativeWorkMixin} from "./SchemaCreativeWorkMixin";
import {schema} from "@paradicms/vocabularies";

export class SchemaCollection extends Mixin(
  SchemaNamedModel,
    SchemaCreativeWorkMixin
) implements Collection {
  override get label(): string {
    return this.name;
  }

  override get name(): string {
    return requireNonNull(super.name);
  }

  override thumbnail(selector: ThumbnailSelector): Image | null {
    if (this.images.length > 0) {
      const thumbnail = selectThumbnail(this.images, selector);
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
    return this.filterAndMapObjects(schema.hasPart, term => term.termType === "NamedNode" ? this.modelSet.workByIri(term.value) : null);
  }
}
