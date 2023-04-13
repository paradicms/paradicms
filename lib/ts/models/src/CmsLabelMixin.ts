import {rdfs} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {ModelMixin} from "./ModelMixin";

export abstract class CmsLabelMixin extends ModelMixin {
  get label(): string {
    return requireNonNull(
      this.findAndMapObject(rdfs.label, this.mapStringObject)
    );
  }
}
