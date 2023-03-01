import {ModelMixin} from "./ModelMixin";
import {foaf} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export abstract class HasName extends ModelMixin {
  get name(): string {
    return requireNonNull(
      this.findAndMapObject(foaf.name, this.mapStringObject)
    );
  }
}
