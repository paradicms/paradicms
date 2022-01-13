import {NamedNode} from "n3";
import {Model} from "./Model";
import {DCTERMS} from "./vocabularies";
import {Rights} from "./Rights";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  protected get _rights(): Rights | null {
    return Rights.optional({
      dataset: this.dataset,
      graphNode: this.graphNode,
      node: this.node,
    });
  }

  protected get _wikipediaUrl(): string | null {
    return (
      this.propertyObjects(DCTERMS.relation).find(term => {
        if (term.termType !== "NamedNode") {
          return false;
        }
        return term.value.match(/^https?:\/\/([a-z]+)\.wikipedia\.org\/wiki\//);
      })?.value ?? null
    );
  }

  protected get _wikidataConceptUri(): string | null {
    return (
      this.propertyObjects(DCTERMS.relation).find(term => {
        if (term.termType !== "NamedNode") {
          return false;
        }
        return term.value.match(/^https?:\/\/www\.wikidata\.org\/entity\//);
      })?.value ?? null
    );
  }

  get uri(): string {
    return this.node.value;
  }
}
