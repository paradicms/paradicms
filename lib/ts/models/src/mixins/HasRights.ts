import {ModelMixin} from "./ModelMixin";
import {Memoize} from "typescript-memoize";
import {Rights} from "../Rights";
import {DCTERMS} from "@paradicms/vocabularies";

export abstract class HasRights extends ModelMixin {
  @Memoize()
  get rights(): Rights | null {
    if (
      this.getObjects(DCTERMS.creator).length > 0 ||
      this.getObjects(DCTERMS.license).length > 0 ||
      this.getObjects(DCTERMS.rights).length > 0 ||
      this.getObjects(DCTERMS.rightsHolder).length > 0
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
