import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {DCTERMS} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasAbstract extends ModelMixin {
  @Memoize()
  get abstract(): string | Text | null {
    for (const term of this.getObjects(DCTERMS.abstract)) {
      switch (term.termType) {
        case "BlankNode":
          return new Text({
            modelSet: this.modelSet,
            graphNode: this.graphNode,
            node: term,
          });
        case "Literal":
          return term.value;
      }
    }
    return null;
  }
}
