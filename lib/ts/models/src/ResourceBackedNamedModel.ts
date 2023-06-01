import {NamedNode} from "@rdfjs/types";
import {ResourceBackedModel} from "./ResourceBackedModel";

export abstract class ResourceBackedNamedModel extends ResourceBackedModel {
  override get identifier(): NamedNode {
    return this._identifier as NamedNode;
  }

  override get identifiers(): readonly NamedNode[] {
    return [this.identifier];
  }

  override get iri(): string {
    return this.identifier.value;
  }
}
