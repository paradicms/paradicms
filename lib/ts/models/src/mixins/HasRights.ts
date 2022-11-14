import {ModelMixin} from "./ModelMixin";
import {Memoize} from "typescript-memoize";
import {Rights} from "../Rights";
import {dcterms} from "@paradicms/vocabularies";

export abstract class HasRights extends ModelMixin {
  @Memoize()
  get rights(): Rights | null {
    if (
      this.hasObject(dcterms.creator) ||
      this.hasObject(dcterms.license) ||
      this.hasObject(dcterms.rights) ||
      this.hasObject(dcterms.rightsHolder)
    ) {
      return new Rights({
        modelSet: this.modelSet,
        graphNode: this.graphNode,
        node: this._node,
      });
    } else {
      return null;
    }
  }
}
