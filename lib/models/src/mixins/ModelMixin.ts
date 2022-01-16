import {Dataset} from "../Dataset";
import {BlankNode, NamedNode, Term} from "n3";

export abstract class ModelMixin {
  protected abstract readonly dataset: Dataset;
  protected abstract readonly graphNode: NamedNode;
  protected abstract readonly node: BlankNode | NamedNode;
  protected abstract propertyObjects(property: NamedNode): readonly Term[];
}
