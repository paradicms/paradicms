import {NamedNode} from "n3";
import {Model} from "./Model";
import {Rights} from "./Rights";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  protected get _rights(): Rights | null {
    const rights = new Rights({
      dataset: this.dataset,
      node: this.node,
      store: this.store,
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
}
