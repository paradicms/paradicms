import {Dataset} from "../Dataset";
import {BlankNode, NamedNode, Term} from "n3";

export abstract class ModelMixin {
  abstract readonly dataset: Dataset;
  abstract readonly graphNode: NamedNode;
  protected abstract readonly _node: BlankNode | NamedNode;
  protected abstract getObjects(property: NamedNode): readonly Term[];
}
