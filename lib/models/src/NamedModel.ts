import {NamedNode} from "n3";
import {Model} from "./Model";
import {Rights} from "./Rights";
import {DCTERMS} from "./vocabularies";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  protected get _rights(): Rights | null {
    const rights = new Rights({
      dataset: this.dataset,
      node: this.node,
    });

    if (rights.creator || rights.holder || rights.license || rights.statement) {
      return rights;
    } else {
      return null;
    }
  }

  get uri(): string {
    return this.node.value;
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
}
