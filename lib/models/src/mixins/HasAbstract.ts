import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {DCTERMS} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasAbstract extends ModelMixin {
  @Memoize()
  get abstract(): string | Text | null {
    for (const term of this.propertyObjects(DCTERMS.abstract)) {
      switch (term.termType) {
        case "BlankNode":
          return new Text({
            dataset: this.dataset,
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
