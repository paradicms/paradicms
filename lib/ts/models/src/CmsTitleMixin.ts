import {dcterms} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {ModelMixin} from "./ModelMixin";

export abstract class CmsTitleMixin extends ModelMixin {
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, this.mapStringObject)
    );
  }
}
