import {ModelSet} from "../ModelSet";
import {BlankNode, NamedNode, Term} from "@rdfjs/types";

export abstract class ModelMixin {
  abstract readonly modelSet: ModelSet;
  abstract readonly graphNode: NamedNode;
  protected abstract readonly _node: BlankNode | NamedNode;
  protected abstract getObjects(property: NamedNode): readonly Term[];
}
