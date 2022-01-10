import {Rights} from "./Rights";
import {NamedModel} from "./NamedModel";
import {FOAF} from "./vocabularies";
import {Collection} from "./Collection";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";

export class Institution extends NamedModel {
  get collections(): readonly Collection[] {
    return this.dataset.institutionCollections(this.uri);
  }

  get name(): string {
    return requireDefined(
      this.propertyObjects(FOAF.name_).find(term => term.termType === "Literal")
    ).value;
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
