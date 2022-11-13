import {BlankNode, Dataset, DefaultGraph, NamedNode, Term} from "@rdfjs/types";
import {ModelSet} from "./ModelSet";
import {ModelParameters} from "./ModelParameters";

export class Model {
  readonly modelSet: ModelSet;
  readonly graphNode: DefaultGraph | NamedNode;
  protected readonly _node: BlankNode | NamedNode;

  constructor(kwds: ModelParameters) {
    this.modelSet = kwds.modelSet;
    this.graphNode = kwds.graphNode;
    this._node = kwds.node;
  }

  protected getObjects(property: NamedNode): readonly Term[] {
    return this.dataset.getObjects(this.node, property, this.graphNode);
  }

  get node(): BlankNode | NamedNode {
    return this._node;
  }

  protected get dataset(): Dataset {
    return this.modelSet.dataset;
  }
}
