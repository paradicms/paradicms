import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {foaf} from "@paradicms/vocabularies";
import {mapTermToImage} from "../mapTermToImage";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";

export abstract class FoafImagesMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
  get images(): readonly Image[] {
    return this.filterAndMapObjects(foaf.depiction, term =>
      mapTermToImage(this, term)
    );
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    for (const image of this.images) {
      const thumbnail = image.thumbnail(selector);
      if (thumbnail) {
        return thumbnail;
      }
    }
    return null;
  }
}
