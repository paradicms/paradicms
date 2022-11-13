import {requireDefined} from "../requireDefined";
import {ModelMixin} from "./ModelMixin";
import {foaf} from "@paradicms/vocabularies";

export abstract class HasName extends ModelMixin {
  get name(): string {
    return requireDefined(
      this.getObjects(foaf.name).find(term => term.termType === "Literal")
    ).value;
  }
}
