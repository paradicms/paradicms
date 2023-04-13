import {rdfs} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {ResourceBackedModelMixin} from "./ResourceBackedModelMixin";

export abstract class CmsLabelMixin extends ResourceBackedModelMixin {
  get label(): string {
    return requireNonNull(
      this.findAndMapObject(rdfs.label, this.mapStringObject)
    );
  }
}
