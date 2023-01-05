import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {dcterms} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasAbstract extends ModelMixin {
  @Memoize()
  get abstract(): string | Text | null {
    return this.findAndMapObject(dcterms.abstract, term => {
      switch (term.termType) {
        case "BlankNode":
          return new Text({
            modelSet: this.modelSet,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          return term.value;
        default:
          return null;
      }
    });
  }
}
