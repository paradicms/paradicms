import {ModelMixin} from "./ModelMixin";
import {Memoize} from "typescript-memoize";
import {Rights} from "../Rights";
import {DCTERMS} from "../vocabularies";

export abstract class HasRights extends ModelMixin {
  @Memoize()
  get rights(): Rights | null {
    if (
      this.propertyObjects(DCTERMS.creator).length > 0 ||
      this.propertyObjects(DCTERMS.license).length > 0 ||
      this.propertyObjects(DCTERMS.rights).length > 0 ||
      this.propertyObjects(DCTERMS.rightsHolder).length > 0
    ) {
      return new Rights({
        dataset: this.dataset,
        graphNode: this.graphNode,
        node: this.node,
      });
    } else {
      return null;
    }
  }
}
