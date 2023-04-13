import {dcterms} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {ResourceBackedModelMixin} from "./ResourceBackedModelMixin";

export abstract class CmsTitleMixin extends ResourceBackedModelMixin {
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, this.mapStringObject)
    );
  }
}
