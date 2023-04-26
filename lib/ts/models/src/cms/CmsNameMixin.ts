import {requireNonNull} from "@paradicms/utilities";
import {foaf} from "@paradicms/vocabularies";
import {ResourceBackedModelMixin} from "../ResourceBackedModelMixin";

export abstract class CmsNameMixin extends ResourceBackedModelMixin {
  get name(): string {
    return requireNonNull(
      this.findAndMapObject(foaf.name, this.mapStringObject)
    );
  }
}