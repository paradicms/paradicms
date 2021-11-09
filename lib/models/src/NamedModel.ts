import {NamedNode} from "n3";
import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {Rights} from "./Rights";
import {Text} from "./Text";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  protected optionalStringOrText(property: NamedNode): string | Text | null {
    for (const object of this.store.getObjects(this.node, property, null)) {
      switch (object.termType) {
        case "Literal":
          return object.value;
        case "BlankNode":
        case "NamedNode":
          return new Text({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: object,
          });
      }
    }
    return null;
  }

  protected get _rights(): Rights | null {
    return Rights.optional({
      dataset: this.dataset,
      graphNode: this.graphNode,
      node: this.node,
    });
  }

  protected get _wikidataConceptUri(): string | null {
    for (const relationObject of this.store.getObjects(
      this.node,
      DCTERMS.relation,
      null
    )) {
      if (relationObject.termType !== "NamedNode") {
        continue;
      }
      if (relationObject.value.startsWith("http://www.wikidata.org/entity/")) {
        return relationObject.value;
      }
    }
    return null;
  }

  get uri(): string {
    return this.node.value;
  }
}
