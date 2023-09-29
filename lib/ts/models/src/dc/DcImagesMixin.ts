import {dcterms} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
import {ModelIdentifier} from "../ModelIdentifier";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {mapTermToImage} from "../mapTermToImage";

export abstract class DcImagesMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
  @Memoize()
  get images(): readonly Image[] {
    // (image, dcterms:source, this).
    // Dublin Core doesn't have an inverse of dcterms:source like FOAF has foaf:depiction and foaf:depicts.
    const images: Image[] = [];
    for (const quad of this.dataset.match(
      null,
      dcterms.source,
      this._identifier
    )) {
      const image = mapTermToImage(this, quad.subject as ModelIdentifier);
      if (image) {
        images.push(image);
      }
    }
    return images;
  }

  protected preMemoizeImages() {
    this.images;
  }
}
