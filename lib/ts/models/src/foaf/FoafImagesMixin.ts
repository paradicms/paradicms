import {foaf} from "@paradicms/vocabularies";
import {Memoize} from "typescript-memoize";
import {Image} from "../Image";
import {ImagesMixin} from "../ImagesMixin";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";
import {mapTermToImage} from "../mapTermToImage";

export abstract class FoafImagesMixin extends ResourceBackedModelMixin
  implements ImagesMixin {
  @Memoize()
  get images(): readonly Image[] {
    return this.filterAndMapObjects(foaf.depiction, term =>
      mapTermToImage(this, term)
    );
  }
}
