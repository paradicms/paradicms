import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {DCTERMS} from "../vocabularies";
import {Dataset} from "../Dataset";
import {NamedNode, Term} from "n3";

export abstract class HasAbstract {
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

  protected abstract readonly dataset: Dataset;
  protected abstract readonly graphNode: NamedNode;
  protected abstract propertyObjects(property: NamedNode): readonly Term[];
}
