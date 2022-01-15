import {NamedNode} from "n3";
import {Model} from "./Model";
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

  get uri(): string {
    return this.node.value;
  }
}
