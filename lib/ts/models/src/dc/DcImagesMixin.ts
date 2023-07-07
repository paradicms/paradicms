import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";
import {dcterms} from "@paradicms/vocabularies";
import {mapTermToImage} from "../mapTermToImage";
import {ModelIdentifier} from "../ModelIdentifier";

export abstract class DcImagesMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
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
}
