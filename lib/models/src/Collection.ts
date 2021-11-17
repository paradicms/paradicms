import {NamedModel} from "./NamedModel";
import {Institution} from "./Institution";
import {DCTERMS, PARADICMS} from "./vocabularies";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Work} from "./Work";
import {Text} from "./Text";
import {Memoize} from "typescript-memoize";

export class Collection extends NamedModel {
  @Memoize()
  get abstract(): string | Text | null {
    return this.optionalStringOrText(DCTERMS.abstract);
  }

  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return this.requiredParentNamedNode(PARADICMS.institution).value;
  }

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

  get title(): string {
    return this.requiredString(DCTERMS.title);
  }
}
