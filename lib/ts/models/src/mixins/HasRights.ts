import {ModelMixin} from "./ModelMixin";
import {Memoize} from "typescript-memoize";
import {Rights} from "../Rights";
import {dcterms} from "@paradicms/vocabularies";

export abstract class HasRights extends ModelMixin {
  @Memoize()
  get rights(): Rights | null {
    if (
      this.getObjects(dcterms.creator).length > 0 ||
      this.getObjects(dcterms.license).length > 0 ||
      this.getObjects(dcterms.rights).length > 0 ||
      this.getObjects(dcterms.rightsHolder).length > 0
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
