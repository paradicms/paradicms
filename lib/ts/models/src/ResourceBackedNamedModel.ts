import {NamedNode} from "@rdfjs/types";
import {NamedModel} from "./NamedModel";
import {ResourceBackedModel} from "./ResourceBackedModel";

export abstract class ResourceBackedNamedModel extends ResourceBackedModel implements NamedModel {
  override get identifier(): NamedNode {
    return this._identifier as NamedNode;
  }

  override get uri(): string {
    return this.identifier.value;
  }
}
