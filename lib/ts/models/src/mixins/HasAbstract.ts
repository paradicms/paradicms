import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {dcterms} from "@paradicms/vocabularies";
import {NamedModelMixin} from "./NamedModelMixin";
import {Term} from "@rdfjs/types";

export abstract class HasAbstract extends NamedModelMixin {
  @Memoize()
  get abstract(): string | Text | null {
    return this.findAndMapObject(dcterms.abstract, this.mapTextObject);
  }

  protected mapTextObject(term: Term): Text | string | null {
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
  }
}
