import {NamedModel} from "./NamedModel";
import {Institution} from "./Institution";
import {DCTERMS, PARADICMS} from "./vocabularies";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {selectThumbnail} from "./selectThumbnail";
import {Image} from "./Image";
import {Object} from "./Object";

export class Collection extends NamedModel {
  get institution(): Institution {
    return this.dataset.institutionByUri(this.institutionUri);
  }

  get institutionUri(): string {
    return this.requiredParentNamedNode(PARADICMS.institution).value;
  }

  get objects(): readonly Object[] {
    return this.dataset.collectionObjects(this.uri);
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    const collectionImages = this.dataset.imagesByDepictsUri(this.uri);
    if (collectionImages.length > 0) {
      const thumbnail = selectThumbnail(collectionImages, selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    for (const object of this.objects) {
      const thumbnail = object.thumbnail(selector);
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
