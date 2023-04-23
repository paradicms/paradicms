import {NamedNode} from "@rdfjs/types";
import {NamedModel} from "./NamedModel";
import {ResourceBackedModel} from "./ResourceBackedModel";

export abstract class ResourceBackedNamedModel extends ResourceBackedModel implements NamedModel{
  override get node(): NamedNode {
    return this._node as NamedNode;
  }

  override get uri(): string {
    return this.node.value;
  }
}
