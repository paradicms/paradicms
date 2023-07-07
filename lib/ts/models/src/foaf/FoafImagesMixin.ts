import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
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
}
