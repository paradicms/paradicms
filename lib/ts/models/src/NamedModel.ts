import {NamedNode} from "@rdfjs/types";
import {Model} from "./Model";

export class NamedModel extends Model {
  override get node(): NamedNode {
    return this._node as NamedNode;
  }

  get uri(): string {
    return this.node.value;
  }
}
