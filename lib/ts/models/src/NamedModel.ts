import {NamedNode} from "@rdfjs/types";
import {Model} from "./Model";

export class NamedModel extends Model {
  get node(): NamedNode {
    return this._node as NamedNode;
  }

  get uri(): string {
    return this.node.value;
  }
}
